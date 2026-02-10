import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, MessageSquare } from 'lucide-react';
import { businessInfo, submitContactForm } from '../mock/mockData';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        toast.success(result.message);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${businessInfo.whatsapp}`, '_blank');
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Ready to transform your vehicle? Reach out to us today
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <Card className="contact-info-card">
                <h2 className="contact-info-title">Contact Information</h2>
                <p className="contact-info-subtitle">Get in touch with us through any of these channels</p>

                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <Phone size={24} />
                    </div>
                    <div className="contact-detail-content">
                      <h3 className="contact-detail-label">Phone</h3>
                      <a href={`tel:${businessInfo.phone}`} className="contact-detail-value">
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <MessageSquare size={24} />
                    </div>
                    <div className="contact-detail-content">
                      <h3 className="contact-detail-label">WhatsApp</h3>
                      <button onClick={handleWhatsApp} className="contact-detail-value contact-link">
                        Chat with us on WhatsApp
                      </button>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <MapPin size={24} />
                    </div>
                    <div className="contact-detail-content">
                      <h3 className="contact-detail-label">Address</h3>
                      <p className="contact-detail-value">{businessInfo.address}</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <Clock size={24} />
                    </div>
                    <div className="contact-detail-content">
                      <h3 className="contact-detail-label">Hours</h3>
                      <p className="contact-detail-value">
                        Weekdays: {businessInfo.hours.weekday}<br />
                        Weekends: {businessInfo.hours.weekend}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Map */}
              <Card className="map-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4769845779844!2d78.0372!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzU5LjQiTiA3OMKwMDInMTMuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bumblebee Customs Location"
                ></iframe>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="contact-form-card">
              <h2 className="contact-form-title">Send Us A Message</h2>
              <p className="contact-form-subtitle">Fill out the form and we'll get back to you within 24 hours</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Required *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a service</option>
                    <option value="restoration">Auto Restoration</option>
                    <option value="detailing">Car Wash & Detailing</option>
                    <option value="ppf">Paint Protection Film (PPF)</option>
                    <option value="wraps">Vinyl Wraps</option>
                    <option value="interior">Interior Detailing</option>
                    <option value="custom">Custom Modifications</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-field"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary btn-submit"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
