import React from 'react';
import { Download, Star } from 'lucide-react';

const Hero = () => {
  const handlePurchase = () => {
    window.open('https://pay.kirvano.com/1c0f2b8f-65ea-4417-b30d-b7a7f0417fc8', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          {/* 🔥 Frase de impacto adicionada aqui */}
          <p className="text-lg md:text-2xl font-bold text-yellow-400 mb-6">
            💰 Faça de R$ 1.500 a R$ 2.000 mensal nas suas horas vagas
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
            +1.000 PROGRAMAS
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              {' '}PREMIUM
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-8">
            PARA WINDOWS
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
            TOTALMENTE ATIVADOS E ATUALIZADOS
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-gray-300 ml-2">+50.000 clientes satisfeitos</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <p className="text-sm text-red-100 mb-2">PREÇO ESPECIAL</p>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                APENAS R$17,90
              </p>
              <p className="text-red-100 font-medium">VITALÍCIO - PAGUE UMA VEZ SÓ!</p>
            </div>

            <button
              onClick={handlePurchase}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-xl md:text-2xl py-6 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
            >
              <Download className="w-8 h-8 mr-3 inline" />
              COMPRAR AGORA - R$17,90
            </button>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-2xl font-bold text-green-400">+1000</p>
                <p className="text-gray-300 text-sm">Programas</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-2xl font-bold text-blue-400">100%</p>
                <p className="text-gray-300 text-sm">Ativados</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-2xl font-bold text-yellow-400">24/7</p>
                <p className="text-gray-300 text-sm">Suporte</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <Download className="w-16 h-16 text-white mx-auto mb-4" />
                  <p className="text-white font-medium">Vídeo Demonstrativo</p>
                  <p className="text-gray-300 text-sm">Veja como é fácil instalar</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-sm">Instalação offline sem internet</span>
                </div>
                <div className="flex items-center text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-sm">Ativação automática permanente</span>
                </div>
                <div className="flex items-center text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-sm">Suporte vitalício incluso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
