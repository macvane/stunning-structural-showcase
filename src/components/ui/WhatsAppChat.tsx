
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+254772041005'; // Updated phone number
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hello%2C%20I%20have%20a%20question%20about%20your%20services.`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50"> {/* Changed from left-4 to right-4 */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-3 w-72 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-fe-blue">Chat with us</h3>
            <button 
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Have questions? Chat with our team directly on WhatsApp for quick assistance.
          </p>
          <button
            onClick={openWhatsApp}
            className="w-full bg-[#013F74] hover:bg-[#175F7D] text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
          >
            <MessageCircle className="mr-2" size={18} />
            Start Chat
          </button>
        </div>
      )}
      
      <button
        onClick={toggleChat}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default WhatsAppChat;
