import React, { useState } from 'react';
import PresentBox from './components/PresentBox';
import FireworksCanvas from './components/FireworksCanvas';
import MessageModal from './components/MessageModal';

function App() {
  const [isBoxOpened, setIsBoxOpened] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleBoxClick = () => {
    if (!isBoxOpened) {
      setIsBoxOpened(true);
      setTimeout(() => setShowFireworks(true), 1000);
      setTimeout(() => setShowModal(true), 4000);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-red-900 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-red-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-pink-200 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-20 right-1/2 w-4 h-4 bg-red-200 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-100 mb-8 animate-fade-in">
            Happy Monthsary
          </h1>
          <p className="text-lg md:text-xl text-pink-200 mb-12 animate-fade-in-delay">
            Click the present to open your surprise 💕
          </p>
          
          <PresentBox 
            isOpened={isBoxOpened}
            onClick={handleBoxClick}
          />
        </div>
      </div>

      {/* Fireworks Canvas */}
      {showFireworks && (
        <FireworksCanvas />
      )}

      {/* Message Modal */}
      {showModal && (
        <MessageModal onClose={closeModal} />
      )}
    </div>
  );
}

export default App;