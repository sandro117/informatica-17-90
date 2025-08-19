import React from 'react';
import { MessageCircle, Mail, Shield, FileText, Phone } from 'lucide-react';

const Footer = () => {
  const handlePurchase = () => {
    window.open('https://pay.kirvano.com/2f021f96-e953-47b8-964f-1b8dc14629cd', '_blank');
  };

  return (
    <footer className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Final CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            ÚLTIMA CHANCE!
          </h2>

          {/* 👇 A CLASSE FOI ADICIONADA AQUI 👇 */}
          <p className="text-lg md:text-xl font-semibold text-yellow-300 mb-4 animate-pulse-text">
            💰 Faça de R$ 1.500 a R$ 2.000 mensal nas suas horas vagas
          </p>

          <p className="text-xl text-red-100 mb-8">
            Não perca esta oportunidade única de ter +1.000 programas premium por apenas R$14,90 vitalício
          </p>
          
          <button
            onClick={handlePurchase}
            className="bg-white hover:bg-gray-100 text-red-600 font-black text-xl md:text-2xl py-6 px-12 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl mb-4"
          >
            GARANTIR AGORA - R$14,90 VITALÍCIO
          </button>
          
          <p className="text-red-100 text-sm">
            ✅ Acesso instantâneo • ✅ Suporte vitalício • ✅ Garantia de 30 dias
          </p>
        </div>

        {/* Footer Content (código restante sem alterações) */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-black text-white mb-4">santec</h3>
            <p className="text-gray-400 mb-4">
              Sua loja de softwares premium com os melhores preços do mercado.
            </p>
            <div className="flex gap-2">
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                +50k Clientes
              </div>
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                4.9★ Avaliação
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Suporte</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-green-400 transition-colors">
                <MessageCircle className="w-5 h-5 mr-3" />
                <span>WhatsApp: (87) 98867-4661</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                <span>Email: suporte@santec.com</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                <span>Atendimento 24/7</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Garantias</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Shield className="w-5 h-5 mr-3" />
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Shield className="w-5 h-5 mr-3" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Shield className="w-5 h-5 mr-3" />
                <span>Suporte Vitalício</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <FileText className="w-5 h-5 mr-3" />
                <span>Termos de Uso</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <FileText className="w-5 h-5 mr-3" />
                <span>Política de Privacidade</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <FileText className="w-5 h-5 mr-3" />
                <span>Política de Reembolso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="md:flex justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ZanTec. Todos os direitos reservados. CNPJ: 36.880.804/0001-64
            </p>
            <p className="text-gray-400 text-sm">
              Desenvolvido para conversão máxima 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
