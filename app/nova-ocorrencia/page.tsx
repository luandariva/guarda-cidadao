
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NovaOcorrencia() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    tipo: '',
    descricao: '',
    endereco: '',
    foto: null,
    urgencia: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [location, setLocation] = useState(null);

  const tiposOcorrencia = [
    { value: 'perturbacao', label: 'Perturbação do Sossego', icon: 'ri-volume-mute-line', color: 'from-orange-500 to-orange-600' },
    { value: 'estacionamento', label: 'Estacionamento Irregular', icon: 'ri-car-line', color: 'from-blue-500 to-blue-600' },
    { value: 'comercio', label: 'Comércio Irregular', icon: 'ri-store-line', color: 'from-purple-500 to-purple-600' },
    { value: 'lixo', label: 'Lixo Inadequado', icon: 'ri-delete-bin-line', color: 'from-green-500 to-green-600' },
    { value: 'vandalismo', label: 'Vandalismo/Pichação', icon: 'ri-spray-line', color: 'from-red-500 to-red-600' },
    { value: 'iluminacao', label: 'Iluminação Pública', icon: 'ri-lightbulb-line', color: 'from-yellow-500 to-yellow-600' },
    { value: 'via', label: 'Problemas na Via', icon: 'ri-road-map-line', color: 'from-indigo-500 to-indigo-600' },
    { value: 'animais', label: 'Animais Soltos', icon: 'ri-bug-line', color: 'from-emerald-500 to-emerald-600' },
    { value: 'aglomeracao', label: 'Aglomeração Irregular', icon: 'ri-community-line', color: 'from-pink-500 to-pink-600' },
    { value: 'outros', label: 'Outros', icon: 'ri-more-line', color: 'from-gray-500 to-gray-600' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTipoSelect = (tipo) => {
    setFormData(prev => ({ ...prev, tipo }));
    setCurrentStep(2);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      foto: file
    }));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setFormData(prev => ({
            ...prev,
            endereco: `Localização GPS: ${position.coords.latitude.toFixed(6)}, ${position.coords.longitude.toFixed(6)}`
          }));
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
        }
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2000);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line text-white text-3xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ocorrência Registrada!</h2>
          <p className="text-gray-600 mb-2">
            Sua ocorrência foi registrada com sucesso.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="text-sm text-gray-500 mb-1">Protocolo:</div>
            <div className="font-mono font-bold text-lg text-blue-600">GM2024001248</div>
          </div>
          
          <div className="space-y-3">
            <Link
              href="/minhas-ocorrencias"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer block text-center whitespace-nowrap"
            >
              Ver Minhas Ocorrências
            </Link>
            <button
              onClick={() => {
                setShowSuccess(false);
                setCurrentStep(1);
                setFormData({ tipo: '', descricao: '', endereco: '', foto: null, urgencia: 'normal' });
              }}
              className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all cursor-pointer whitespace-nowrap"
            >
              Nova Ocorrência
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <i className="ri-shield-star-fill text-white text-lg"></i>
              </div>
              <div>
                <h1 className="font-['Pacifico'] text-lg text-gray-800">Guarda Cidadão</h1>
                <p className="text-xs text-gray-500">Nova Ocorrência</p>
              </div>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600 cursor-pointer">
              <i className="ri-close-line text-2xl"></i>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step === currentStep 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                    : step < currentStep 
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                }`}>
                  {step < currentStep ? <i className="ri-check-line"></i> : step}
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">Passo {currentStep} de 4</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          {/* Step 1: Tipo */}
          {currentStep === 1 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-list-check text-white text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tipo de Ocorrência</h2>
                <p className="text-gray-600">Selecione a categoria que melhor descreve sua situação</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {tiposOcorrencia.map((tipo) => (
                  <button
                    key={tipo.value}
                    onClick={() => handleTipoSelect(tipo.value)}
                    className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all text-left group cursor-pointer"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${tipo.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <i className={`${tipo.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tipo.label}
                    </h3>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Detalhes */}
          {currentStep === 2 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-file-text-line text-white text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Descreva a Situação</h2>
                <p className="text-gray-600">Forneça detalhes que ajudem nossa equipe</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Nível de Urgência</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'baixa', label: 'Baixa', color: 'border-green-500 bg-green-50 text-green-700', icon: 'ri-time-line' },
                      { value: 'normal', label: 'Normal', color: 'border-yellow-500 bg-yellow-50 text-yellow-700', icon: 'ri-alarm-line' },
                      { value: 'alta', label: 'Alta', color: 'border-red-500 bg-red-50 text-red-700', icon: 'ri-alert-line' }
                    ].map((urgencia) => (
                      <button
                        key={urgencia.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, urgencia: urgencia.value }))}
                        className={`p-3 border-2 rounded-lg font-semibold transition-all cursor-pointer ${
                          formData.urgencia === urgencia.value 
                            ? urgencia.color
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <i className={`${urgencia.icon} mr-2`}></i>
                        {urgencia.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Descrição Detalhada *</label>
                  <textarea
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleInputChange}
                    required
                    maxLength={500}
                    rows={5}
                    placeholder="Descreva a situação com o máximo de detalhes possível..."
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-2">
                    {formData.descricao.length}/500 caracteres
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.descricao.trim()}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Localização */}
          {currentStep === 3 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-map-pin-line text-white text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Localização</h2>
                <p className="text-gray-600">Onde está acontecendo a situação?</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Endereço ou Localização *</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="endereco"
                      value={formData.endereco}
                      onChange={handleInputChange}
                      required
                      placeholder="Ex: Rua João Silva, 123 - Centro"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-16"
                    />
                    <button
                      type="button"
                      onClick={getCurrentLocation}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700 cursor-pointer"
                      title="Usar localização atual"
                    >
                      <i className="ri-gps-line text-2xl"></i>
                    </button>
                  </div>
                  {location && (
                    <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center text-green-700">
                        <i className="ri-check-line mr-2"></i>
                        <span className="text-sm">Localização GPS capturada com sucesso</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.endereco.trim()}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Foto e Envio */}
          {currentStep === 4 && (
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-camera-line text-white text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Foto e Envio</h2>
                <p className="text-gray-600">Adicione uma foto para finalizar</p>
              </div>

              <form onSubmit={handleSubmit} id="ocorrencia-form">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Foto da Ocorrência</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                      <input
                        type="file"
                        name="foto"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="foto-input"
                      />
                      <label htmlFor="foto-input" className="cursor-pointer">
                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <i className="ri-camera-3-line text-gray-400 text-2xl"></i>
                        </div>
                        <p className="text-gray-600 font-medium mb-2">
                          {formData.foto ? formData.foto.name : 'Clique para adicionar uma foto'}
                        </p>
                        <p className="text-sm text-gray-400">
                          Máximo 10MB • JPG, PNG
                        </p>
                      </label>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">Resumo da Ocorrência</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Tipo:</span> {tiposOcorrencia.find(t => t.value === formData.tipo)?.label}</div>
                      <div><span className="font-medium">Urgência:</span> {formData.urgencia}</div>
                      <div><span className="font-medium">Local:</span> {formData.endereco}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:border-gray-400 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line mr-2 animate-spin"></i>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-fill mr-2"></i>
                          Enviar Ocorrência
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
