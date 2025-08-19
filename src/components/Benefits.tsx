import React from 'react';
import { Shield, Zap, HeadphonesIcon, Download, Clock, CheckCircle } from 'lucide-react';

const Benefits = () => {
  const handlePurchase = () => {
    window.open('https://pay.kirvano.com/2f021f96-e953-47b8-964f-1b8dc14629cd', '_blank');
  };

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Seguro",
      description: "Todos os programas são testados e livres de vírus"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ativação Automática",
      description: "Instale e use imediatamente, sem complicação"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Suporte Vitalício",
      description: "Ajuda via WhatsApp e Email sempre que precisar"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Download Imediato",
      description: "Acesso instantâneo após a compra"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Atualizações Gratuitas",
      description: "Sempre as versões mais recentes disponíveis"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Garantia Total",
      description: "30 dias de garantia ou seu dinheiro de volta"
    }
  ];

  return (
    <section className="bg-gray-900 py-20">
      {/* Estilo do efeito glow */}
      <style jsx>{`
        @keyframes glowPulse {
          0%, 100% {
            text-shadow: 0 0 0px rgba(255, 215, 0, 0.0);
            color: #facc15;
          }
          50% {
            text-shadow: 0 0 12px rgba(255, 215, 0, 0.9);
            color: #fde047;
          }
        }
        .glow-text {
          animation: glowPulse 1.8s ease-in-out infinite;
          font-weight: 800;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* TEXTO DE VENDA ACIMA DO TÍTULO */}
        <p className="text-2xl md:text-3xl glow-text mb-8">
          💰 Faça de R$ 1.500 a R$ 2.000 mensal nas suas horas vagas
        </p>

        {/* TÍTULOS PRINCIPAIS */}
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          PAGUE UMA ÚNICA VEZ.
        </h2>
        <h3 className="text-3xl md:text-4xl font-black text-green-400 mb-8">
          ESQUEÇA MENSALIDADES.
        </h3>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
          Tenha acesso vitalício a mais de 1.000 programas premium por apenas{" "}
          <span className="glow-text">R$14,90</span>.  
          Sem pegadinhas, sem mensalidades, sem renovações.
        </p>

        {/* LISTA DE BENEFÍCIOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10"
            >
              <div className="text-green-400 mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* BANNER FINAL */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            MAIS DE 50.000 CLIENTES JÁ ECONOMIZARAM MILHARES!
          </h3>
          <p className="text-xl text-orange-100 mb-8">
            Enquanto outros pagam R$200+ por mês em assinaturas, você paga{" "}
            <span className="glow-text">R$14,90 uma única vez</span>.
          </p>
          
          <button
            onClick={handlePurchase}
            className="bg-white hover:bg-gray-100 text-orange-600 font-black text-xl md:text-2xl py-6 px-12 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            SIM, EU QUERO ECONOMIZAR! - R$14,90
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
