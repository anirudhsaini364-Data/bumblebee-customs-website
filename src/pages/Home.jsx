import React, { useState } from 'react';
import { Phone, MapPin, Star, ArrowRight, Users, Award, Eye, Sparkles } from 'lucide-react';
import { businessInfo, services, testimonials, whyChooseUs } from '../mock/mockData';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Home = () => {
  const handleCallNow = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  const handleGetDirections = () => {
    window.open(businessInfo.mapUrl, '_blank');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${businessInfo.whatsapp}`, '_blank');
  };

  const iconMap = {
    users: Users,
    award: Award,
    eye: Eye,
    star: Sparkles
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-badge">
              <Star className="star-icon" size={20} />
              <span>5.0 Rating • 5,037 Google Reviews</span>
            </div>
            <h1 className="hero-title">
              Premium Auto Restoration & Customization in Dehradun
            </h1>
            <p className="hero-subtitle">
              Experience world-class auto restoration, detailing, PPF installation, and custom modifications. Where precision meets passion.
            </p>
            <div className="hero-cta">
              <Button onClick={handleCallNow} className="btn-primary">
                <Phone size={20} />
                Call Now
              </Button>
              <Button onClick={handleGetDirections} className="btn-secondary">
                <MapPin size={20} />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Bumblebee Customs?</h2>
            <p className="section-subtitle">Excellence in every detail, trust in every service</p>
          </div>
          <div className="features-grid">
            {whyChooseUs.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Card key={feature.id} className="feature-card">
                  <div className="feature-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-subtitle">Comprehensive automotive care for every need</p>
          </div>
          <div className="services-grid">
            {services.slice(0, 6).map((service) => (
              <Card key={service.id} className="service-card">
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">5,037+ five-star reviews from satisfied customers</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="testimonial-service">{testimonial.service}</span>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div className="author-info">
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-date">{testimonial.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Vehicle?</h2>
            <p className="cta-subtitle">Get in touch with Dehradun's most trusted auto customization experts</p>
            <div className="cta-buttons">
              <Button onClick={handleCallNow} className="btn-primary">
                <Phone size={20} />
                Call: {businessInfo.phone}
              </Button>
              <Button onClick={handleWhatsApp} className="btn-secondary">
                <ArrowRight size={20} />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
