import React from 'react';
import { Check, Phone } from 'lucide-react';
import { services, businessInfo } from '../mock/mockData';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Services = () => {
  const handleCallNow = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive automotive care solutions tailored to your vehicle's needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-detail-section">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service, index) => (
              <Card key={service.id} className="service-detail-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-detail-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-detail-image" />
                  <div className="service-detail-overlay"></div>
                </div>
                <div className="service-detail-content">
                  <h2 className="service-detail-title">{service.title}</h2>
                  <p className="service-detail-description">{service.description}</p>
                  <div className="service-detail-features">
                    <h3 className="features-heading">What's Included:</h3>
                    <ul className="features-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <Check size={18} className="check-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button onClick={handleCallNow} className="btn-service-cta">
                    <Phone size={18} />
                    Get Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta-content">
            <h2 className="services-cta-title">Not Sure Which Service You Need?</h2>
            <p className="services-cta-text">Our experts will help you choose the perfect solution for your vehicle</p>
            <Button onClick={handleCallNow} className="btn-primary">
              <Phone size={20} />
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
