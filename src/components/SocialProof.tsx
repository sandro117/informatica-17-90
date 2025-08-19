import React, { useState, useEffect } from 'react';
import { User, ShoppingCart, CheckCircle } from 'lucide-react';

const SocialProof = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  const notifications = [
    { name: "Claudio Silva", location: "São Paulo, SP", time: "agora mesmo" },
    { name: "Maria Santos", location: "Rio de Janeiro, RJ", time: "2 min atrás" },
    { name: "João Oliveira", location: "Belo Horizonte, MG", time: "5 min atrás" },
    { name: "Ana Costa", location: "Porto Alegre, RS", time: "8 min atrás" },
    { name: "Carlos Pereira", location: "Salvador, BA", time: "12 min atrás" },
    { name: "Fernanda Lima", location: "Fortaleza, CE", time: "15 min atrás" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentNotification(prev => 
          prev === notifications.length - 1 ? 0 : prev + 1
        );
        setShowNotification(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [notifications.length]);

  return (
    <>
      {/* Purchase Notification Popup */}
      <div className="fixed bottom-6 left-6 z-50">
        <div
          className={`bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-2xl shadow-2xl max-w-sm transform transition-all duration-300 ${
            showNotification ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-2">
              <User className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4" />
                <span className="font-bold text-sm">Compra Confirmada!</span>
              </div>
              <p className="text-sm">
                <strong>{notifications[currentNotification].name}</strong> de{' '}
                {notifications[currentNotification].location}
              </p>
              <p className="text-xs text-green-100">
                {notifications[currentNotification].time}
              </p>
            </div>
            <ShoppingCart className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              MAIS DE 50.000 CLIENTES SATISFEITOS
            </h2>
            <p className="text-xl text-gray-300">
              Veja o que nossos clientes estão dizendo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 rounded-full p-2 mr-3">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">Pedro M.</p>
                  <p className="text-blue-200 text-sm">Empresário - SP</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                "Economizei mais de R$5.000 em licenças. Todos os programas funcionam perfeitamente!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 rounded-full p-2 mr-3">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">Carla S.</p>
                  <p className="text-green-200 text-sm">Designer - RJ</p>
                </div>
              </div>
              <p className="text-green-100 mb-4">
                "Melhor compra que já fiz! Tenho todos os programas que preciso por R$14."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 rounded-full p-2 mr-3">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">Roberto L.</p>
                  <p className="text-purple-200 text-sm">Engenheiro - MG</p>
                </div>
              </div>
              <p className="text-purple-100 mb-4">
                "Suporte excelente! Sempre que preciso, eles me ajudam no WhatsApp."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              🏆 GARANTIA DE 30 DIAS OU SEU DINHEIRO DE VOLTA!
            </h3>
            <p className="text-lg text-yellow-100">
              Compre sem risco. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialProof;
