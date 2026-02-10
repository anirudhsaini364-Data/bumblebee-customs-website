import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../mock/mockData';
import { Card } from '../components/ui/card';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'restoration', label: 'Restoration' },
    { id: 'detailing', label: 'Detailing' },
    { id: 'paint', label: 'Custom Paint' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Work Gallery</h1>
          <p className="page-subtitle">
            Witness the transformation - Before & After showcase of our premium automotive work
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="gallery-filters">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-tab ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="gallery-card"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(image)}
              >
                <div className="gallery-image-wrapper">
                  <img src={image.image} alt={image.title} className="gallery-image" />
                  <div className="gallery-overlay">
                    <span className="gallery-badge">{image.type}</span>
                    <p className="gallery-title">{image.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-image" />
            <div className="lightbox-info">
              <span className="lightbox-badge">{selectedImage.type}</span>
              <h3 className="lightbox-title">{selectedImage.title}</h3>
              <p className="lightbox-category">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
