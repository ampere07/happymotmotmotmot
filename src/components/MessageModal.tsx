import React from 'react';
import { Heart, X } from 'lucide-react';

interface MessageModalProps {
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4">
      <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl shadow-2xl max-w-lg w-full mx-4 animate-fade-in-scale">
        {/* Header */}
        <div className="relative p-6 border-b border-pink-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Heart className="text-red-500 animate-pulse" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-red-700 mb-2">
              Happy Monthsary Baby! 💕
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center space-y-4">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              "Happy monthsary baby mahal na mahal kita kahit galing nanaman tayo sa semi pag tatalo 
              pero mahal paden kita mag patagal pa tayo ng sobra na halos edad nalang hahadlang saten 
              iloveyouu baby"
            </p>
            
            <div className="flex justify-center space-x-2 text-2xl">
              <span className="animate-bounce delay-100">❤️</span>
              <span className="animate-bounce delay-200">💕</span>
              <span className="animate-bounce delay-300">💖</span>
              <span className="animate-bounce delay-400">💝</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0 text-center">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Mahal din kita! 💕
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;