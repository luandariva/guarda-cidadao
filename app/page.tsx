
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-shield-star-fill text-white text-xl"></i>
              </div>
              <div>
                <h1 className="font-['Pacifico'] text-xl text-gray-800">Guarda Cidadão</h1>
                <p className="text-xs text-gray-500">Vacaria</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#como-funciona" className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer">
                Como Funciona
              </Link>
              <Link href="#contato" className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer">
                Contato
              </Link>
              <Link href="/minhas-ocorrencias" className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer">
                Minhas Ocorrências
              </Link>
              <Link 
                href="/nova-ocorrencia"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium whitespace-nowrap cursor-pointer"
              >
                Reportar
              </Link>
            </div>

            <button 
              className="md:hidden p-2 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-xl text-gray-700"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link href="#como-funciona" className="block text-gray-600 font-medium cursor-pointer">
                Como Funciona
              </Link>
              <Link href="#contato" className="block text-gray-600 font-medium cursor-pointer">
                Contato
              </Link>
              <Link href="/minhas-ocorrencias" className="block text-gray-600 font-medium cursor-pointer">
                Minhas Ocorrências
              </Link>
              <Link 
                href="/nova-ocorrencia"
                className="block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-center font-medium cursor-pointer"
              >
                Reportar Ocorrência
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <i className="ri-shield-check-line mr-2"></i>
              Conectando Comunidade e Segurança
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sua voz para uma
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> cidade melhor</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Reporte ocorrências, acompanhe soluções e seja parte ativa na construção de uma Vacaria mais segura e organizada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/nova-ocorrencia"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-center cursor-pointer group whitespace-nowrap"
              >
                <i className="ri-alert-line mr-2 group-hover:animate-pulse"></i>
                Reportar Agora
              </Link>
              <Link 
                href="/minhas-ocorrencias"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold text-center cursor-pointer whitespace-nowrap"
              >
                <i className="ri-list-check-2 mr-2"></i>
                Ver Status
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1.247</div>
                <div className="text-sm text-gray-500">Resolvidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-500">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2h</div>
                <div className="text-sm text-gray-500">Resp. Média</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl transform rotate-3 opacity-10"></div>
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20city%20of%20Vacaria%20Brazil%20with%20municipal%20guard%20officers%20helping%20citizens%2C%20clean%20urban%20environment%2C%20professional%20municipal%20building%2C%20community%20safety%2C%20bright%20daylight%2C%20peaceful%20neighborhood%2C%20modern%20architecture%2C%20civic%20engagement%2C%20public%20safety%20personnel%20in%20uniform&width=600&height=500&seq=hero-modern-1&orientation=landscape"
              alt="Guarda Municipal de Vacaria"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-top"
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-sm">
              <i className="ri-information-line mr-2"></i>
              Processo Simplificado
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Em apenas 3 passos simples, sua ocorrência chega até nossa equipe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Documente",
                description: "Tire fotos, descreva a situação e informe a localização",
                icon: "ri-camera-3-line",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02", 
                title: "Envie",
                description: "Sua ocorrência é enviada diretamente para nossa central",
                icon: "ri-rocket-2-line",
                color: "from-green-500 to-green-600"
              },
              {
                step: "03",
                title: "Acompanhe",
                description: "Receba atualizações em tempo real sobre o andamento",
                icon: "ri-notification-badge-line",
                color: "from-purple-500 to-purple-600"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`${item.icon} text-white text-2xl`}></i>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-bold text-gray-400 mb-2">PASSO {item.step}</div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <i className="ri-arrow-right-line text-2xl text-gray-300"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-phone-line text-3xl text-white"></i>
                </div>
                <h3 className="text-3xl font-bold mb-4">Situação de Emergência?</h3>
                <p className="text-red-100 text-lg mb-8">
                  Para ocorrências que precisam de atenção imediata, ligue diretamente para os números de emergência.
                </p>
                <div className="text-sm text-red-100">
                  Para situações não emergenciais, use nosso sistema de ocorrências online.
                </div>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">153</div>
                  <div className="text-sm text-red-100">Guarda Municipal</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">190</div>
                  <div className="text-sm text-red-100">Polícia Militar</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">193</div>
                  <div className="text-sm text-red-100">Bombeiros</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tipos de Ocorrências</h2>
            <p className="text-xl text-gray-600">
              Principais categorias atendidas pela Guarda Municipal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "ri-volume-mute-line", title: "Perturbação do Sossego", color: "bg-orange-100 text-orange-600" },
              { icon: "ri-car-line", title: "Estacionamento Irregular", color: "bg-blue-100 text-blue-600" },
              { icon: "ri-delete-bin-line", title: "Lixo Inadequado", color: "bg-green-100 text-green-600" },
              { icon: "ri-lightbulb-line", title: "Iluminação Pública", color: "bg-yellow-100 text-yellow-600" },
              { icon: "ri-road-map-line", title: "Problemas na Via", color: "bg-purple-100 text-purple-600" },
              { icon: "ri-store-line", title: "Comércio Irregular", color: "bg-indigo-100 text-indigo-600" },
              { icon: "ri-community-line", title: "Aglomeração", color: "bg-pink-100 text-pink-600" },
              { icon: "ri-more-line", title: "Outras Situações", color: "bg-gray-100 text-gray-600" }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <i className={`${category.icon} text-xl`}></i>
                </div>
                <h4 className="font-semibold text-gray-800">{category.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <i className="ri-shield-star-fill text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-['Pacifico'] text-xl">Guarda Cidadão</h3>
                  <p className="text-gray-400">Prefeitura de Vacaria</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Conectando a comunidade com a segurança pública para construir uma cidade mais segura, organizada e próspera para todos os cidadãos de Vacaria.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <i className="ri-facebook-line text-lg"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <i className="ri-instagram-line text-lg"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <i className="ri-twitter-line text-lg"></i>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
              <div className="space-y-3">
                <Link href="/nova-ocorrencia" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Nova Ocorrência
                </Link>
                <Link href="/minhas-ocorrencias" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Minhas Ocorrências
                </Link>
                <Link href="#como-funciona" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Como Funciona
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <i className="ri-phone-line text-lg"></i>
                  <span>(54) 3232-1234</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <i className="ri-mail-line text-lg"></i>
                  <span>guarda@vacaria.rs.gov.br</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <i className="ri-map-pin-line text-lg"></i>
                  <span>Centro, Vacaria - RS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Prefeitura de Vacaria. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Privacidade</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Termos</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
