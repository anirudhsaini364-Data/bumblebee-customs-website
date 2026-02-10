import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessInfo } from '../mock/mockData';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${businessInfo.whatsapp}`, '_blank');
  };

  return (
    <button 
      className="whatsapp-float-button"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
