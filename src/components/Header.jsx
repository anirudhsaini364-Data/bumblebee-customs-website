import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { businessInfo } from '../mock/mockData';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="header-contact-info">
              <a href={`tel:${businessInfo.phone}`} className="header-contact-item">
                <Phone size={16} />
                <span>{businessInfo.phone}</span>
              </a>
              <a href={businessInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="header-contact-item">
                <MapPin size={16} />
                <span>Kargi, Dehradun</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
             <img
  src="/2025-09-25.webp"
  alt="Bumblebee Customs Logo"
  className="logo-icon"
/>

              <div className="logo-text">
                <span className="logo-title">Bumblebee Customs</span>
                <span className="logo-subtitle">Auto Restoration & Customization</span>
              </div>
            </Link>

            <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default Header;
