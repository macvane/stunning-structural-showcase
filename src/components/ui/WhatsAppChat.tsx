
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const openWhatsApp = () => {
    const phone = '254772041005';
    const message = 'Hello, I would like to inquire about your services.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 w-80 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-fe-blue">WhatsApp Chat</h3>
            <button 
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Chat with us directly on WhatsApp for quick assistance.
          </p>
          <button 
            onClick={openWhatsApp}
            className="w-full bg-green-500 text-white px-4 py-3 rounded-lg flex items-center justify-center font-medium hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Start Chat
          </button>
        </div>
      )}
      
      <button 
        onClick={toggleChat}
        className={`bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 ${
          isOpen ? 'rotate-90' : 'whatsapp-button-pulse'
        }`}
        aria-label="WhatsApp Chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default WhatsAppChat;
