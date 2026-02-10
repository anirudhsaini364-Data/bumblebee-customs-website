import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram, Facebook, Star } from 'lucide-react';
import { businessInfo } from '../mock/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="footer-logo-icon">🐝</div>
              <div className="footer-logo-text">
                <span className="footer-logo-title">Bumblebee Customs</span>
                <span className="footer-logo-subtitle">Premium Auto Care</span>
              </div>
            </div>
            <p className="footer-description">
              Dehradun's most trusted name in auto restoration, customization, and detailing. Delivering excellence since day one.
            </p>
            <div className="footer-rating">
              <div className="footer-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="footer-rating-text">
                {businessInfo.rating} • {businessInfo.totalReviews.toLocaleString()} Reviews
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li><span className="footer-link">Auto Restoration</span></li>
              <li><span className="footer-link">Car Detailing</span></li>
              <li><span className="footer-link">PPF Installation</span></li>
              <li><span className="footer-link">Vinyl Wraps</span></li>
              <li><span className="footer-link">Custom Modifications</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3 className="footer-heading">Get In Touch</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Phone size={18} />
                <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>
              </li>
              <li className="footer-contact-item">
                <MapPin size={18} />
                <span>{businessInfo.address}</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} />
                <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
              </li>
            </ul>
            <div className="footer-social">
              <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Instagram size={20} />
              </a>
              <a href={businessInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Bumblebee Customs. All rights reserved.
          </p>
          <p className="footer-credits">
            Crafted with precision in Dehradun, Uttarakhand
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
