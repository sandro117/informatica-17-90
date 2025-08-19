import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Data final: agora + 15 minutos
  const targetDate = new Date(Date.now() + 15 * 60 * 1000).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg md:text-xl font-bold mb-2">
          ⏰ OFERTA EXPIRA EM:
        </p>
        <div className="flex justify-center gap-4">
          <div className="bg-red-700 rounded-lg px-3 py-2">
            <span className="text-2xl md:text-3xl font-black">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <p className="text-xs">HORAS</p>
          </div>
          <div className="bg-red-700 rounded-lg px-3 py-2">
            <span className="text-2xl md:text-3xl font-black">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <p className="text-xs">MIN</p>
          </div>
          <div className="bg-red-700 rounded-lg px-3 py-2">
            <span className="text-2xl md:text-3xl font-black">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <p className="text-xs">SEG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
