import React from 'react';
import { Star, Download } from 'lucide-react';

const Programs = () => {
  const handlePurchase = () => {
    window.open('https://pay.kirvano.com/2f021f96-e953-47b8-964f-1b8dc14629cd', '_blank');
  };

  const featuredPrograms = [
    { name: "Microsoft Office 2025", category: "Produtividade", color: "from-blue-500 to-blue-600" },
    { name: "Adobe Photoshop 2025", category: "Design", color: "from-purple-500 to-purple-600" },
    { name: "AutoCAD 2025", category: "Engenharia", color: "from-red-500 to-red-600" },
    { name: "CorelDRAW 2025", category: "Design", color: "from-green-500 to-green-600" },
    { name: "SketchUp Pro 2025", category: "3D/Arquitetura", color: "from-yellow-500 to-yellow-600" },
    { name: "Adobe Premiere Pro 2025", category: "Vídeo", color: "from-pink-500 to-pink-600" },
    { name: "SolidWorks 2025", category: "Engenharia", color: "from-indigo-500 to-indigo-600" },
    { name: "Windows 11 Pro", category: "Sistema", color: "from-cyan-500 to-cyan-600" }
  ];

  const categories = [
    "📊 Planilhas e Documentos",
    "🎨 Design e Edição",
    "🏗️ Engenharia e CAD", 
    "🎬 Vídeo e Áudio",
    "🖥️ Sistemas e Ferramentas",
    "🔧 Utilitários e Antivírus",
    "🎮 Games e Entretenimento",
    "📚 Educação e Negócios"
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            PROGRAMAS INCLUSOS
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Versões 2024/2025 dos softwares mais utilizados no mundo
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-gray-300 ml-2">Avaliação 4.9/5 - Mais de 10.000 reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4`}>
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {program.name}
              </h3>
              <p className="text-green-400 text-sm font-medium">
                {program.category}
              </p>
              <p className="text-gray-400 text-xs mt-2">
                ✅ Totalmente Ativado
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-3xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            E MUITO MAIS! Categorias Disponíveis:
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors duration-300"
              >
                <p className="text-white font-medium">{category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            TUDO ISSO POR APENAS R$14,90 VITALÍCIO!
          </h3>
          <p className="text-xl text-green-100 mb-2">
            🔥 Economia de R$50.000+ em licenças originais
          </p>
          <p className="text-lg text-green-100 mb-8">
            ⚡ Instalação offline • 🛡️ Suporte vitalício • 📱 WhatsApp + Email
          </p>
          
          <button
            onClick={handlePurchase}
            className="bg-white hover:bg-gray-100 text-green-600 font-black text-xl md:text-2xl py-6 px-12 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center gap-3"
          >
            <Download className="w-8 h-8" />
            GARANTIR MEUS PROGRAMAS - R$14,90
          </button>
          
          <p className="text-green-100 text-sm mt-4">
            ✅ Acesso imediato • ✅ Garantia de 30 dias • ✅ Pagamento 100% seguro
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
