import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    };

    setCurrentDate(formatDate(tomorrow));
  }, []);

  if (!showBanner) return null;

  return (
    <div className="bg-red-600 text-white py-2 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm md:text-base font-medium">
          🔥 <strong>OFERTA LIMITADA!</strong> Esta promoção expira em {currentDate} às 23:59h - 
          <span className="ml-2 animate-pulse">NÃO PERCA!</span>
        </p>
      </div>
      <button
        onClick={() => setShowBanner(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-red-700 rounded-full p-1"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default Header;