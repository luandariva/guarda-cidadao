
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MinhasOcorrencias() {
  const [filterStatus, setFilterStatus] = useState('todas');
  const [viewMode, setViewMode] = useState('list');

  const ocorrencias = [
    {
      id: 'GM2024001247',
      tipo: 'Estacionamento irregular',
      data: '15/12/2024',
      status: 'em_andamento',
      endereco: 'Rua Flores da Cunha, 456 - Centro',
      descricao: 'Veículo estacionado em vaga para deficientes sem autorização',
      urgencia: 'normal',
      progresso: 60
    },
    {
      id: 'GM2024001235',
      tipo: 'Perturbação do sossego',
      data: '12/12/2024', 
      status: 'resolvida',
      endereco: 'Av. Presidente Vargas, 789 - São João',
      descricao: 'Som alto após 22h em estabelecimento comercial',
      urgencia: 'alta',
      progresso: 100
    },
    {
      id: 'GM2024001220',
      tipo: 'Lixo em local inadequado',
      data: '10/12/2024',
      status: 'pendente',
      endereco: 'Rua dos Andradas, 123 - Bela Vista',
      descricao: 'Descarte de lixo em terreno baldio',
      urgencia: 'baixa',
      progresso: 20
    },
    {
      id: 'GM2024001198',
      tipo: 'Iluminação pública',
      data: '08/12/2024',
      status: 'resolvida',
      endereco: 'Rua 15 de Novembro, 321 - Centro',
      descricao: 'Poste de luz queimado há mais de uma semana',
      urgencia: 'normal',
      progresso: 100
    },
    {
      id: 'GM2024001185',
      tipo: 'Buraco na via',
      data: '05/12/2024',
      status: 'em_andamento',
      endereco: 'Av. Julio de Castilhos, 654 - Industrial',
      descricao: 'Buraco grande na pista causando danos aos veículos',
      urgencia: 'alta',
      progresso: 75
    }
  ];

  const getStatusInfo = (status) => {
    switch (status) {
      case 'pendente':
        return {
          label: 'Aguardando',
          color: 'from-yellow-500 to-yellow-600',
          bgColor: 'bg-yellow-50',
          textColor: 'text-yellow-700',
          icon: 'ri-time-line'
        };
      case 'em_andamento':
        return {
          label: 'Em Andamento',
          color: 'from-blue-500 to-blue-600',
          bgColor: 'bg-blue-50',
          textColor: 'text-blue-700',
          icon: 'ri-settings-4-line'
        };
      case 'resolvida':
        return {
          label: 'Concluída',
          color: 'from-green-500 to-green-600',
          bgColor: 'bg-green-50',
          textColor: 'text-green-700',
          icon: 'ri-check-double-line'
        };
      default:
        return {
          label: 'Desconhecido',
          color: 'from-gray-500 to-gray-600',
          bgColor: 'bg-gray-50',
          textColor: 'text-gray-700',
          icon: 'ri-question-line'
        };
    }
  };

  const getUrgenciaInfo = (urgencia) => {
    switch (urgencia) {
      case 'baixa':
        return { label: 'Baixa', color: 'text-green-600 bg-green-100' };
      case 'normal':
        return { label: 'Normal', color: 'text-yellow-600 bg-yellow-100' };
      case 'alta':
        return { label: 'Alta', color: 'text-red-600 bg-red-100' };
      default:
        return { label: 'Normal', color: 'text-yellow-600 bg-yellow-100' };
    }
  };

  const filteredOcorrencias = filterStatus === 'todas' 
    ? ocorrencias 
    : ocorrencias.filter(oc => oc.status === filterStatus);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <i className="ri-shield-star-fill text-white text-lg"></i>
              </div>
              <div>
                <h1 className="font-['Pacifico'] text-lg text-gray-800">Guarda Cidadão</h1>
                <p className="text-xs text-gray-500">Minhas Ocorrências</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Link 
                href="/nova-ocorrencia" 
                className="bg-gradient-to-r from-red-500 to-red-600 text-white p-2.5 rounded-lg hover:shadow-lg transition-all cursor-pointer"
                title="Nova Ocorrência"
              >
                <i className="ri-add-line text-lg"></i>
              </Link>
              <Link href="/" className="text-gray-600 hover:text-blue-600 cursor-pointer">
                <i className="ri-home-line text-xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Stats Cards */}
        <div className="grid sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{ocorrencias.length}</div>
                <div className="text-blue-100">Total</div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <i className="ri-file-list-3-line text-2xl"></i>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{ocorrencias.filter(o => o.status === 'pendente').length}</div>
                <div className="text-yellow-100">Aguardando</div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <i className="ri-time-line text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{ocorrencias.filter(o => o.status === 'em_andamento').length}</div>
                <div className="text-blue-100">Em Andamento</div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <i className="ri-settings-4-line text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{ocorrencias.filter(o => o.status === 'resolvida').length}</div>
                <div className="text-green-100">Concluídas</div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <i className="ri-check-double-line text-2xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Suas Ocorrências</h2>
              <p className="text-gray-600">Acompanhe o status e progresso de suas solicitações</p>
            </div>

            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1.5 rounded-md font-medium text-sm cursor-pointer whitespace-nowrap ${
                    viewMode === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <i className="ri-list-unordered mr-1"></i>Lista
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-md font-medium text-sm cursor-pointer whitespace-nowrap ${
                    viewMode === 'grid' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <i className="ri-layout-grid-line mr-1"></i>Grade
                </button>
              </div>

              <Link
                href="/nova-ocorrencia"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-add-line mr-2"></i>
                Nova
              </Link>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              {[
                { key: 'todas', label: 'Todas', count: ocorrencias.length },
                { key: 'pendente', label: 'Aguardando', count: ocorrencias.filter(o => o.status === 'pendente').length },
                { key: 'em_andamento', label: 'Em Andamento', count: ocorrencias.filter(o => o.status === 'em_andamento').length },
                { key: 'resolvida', label: 'Concluídas', count: ocorrencias.filter(o => o.status === 'resolvida').length }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setFilterStatus(filter.key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap ${
                    filterStatus === filter.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ocorrências List/Grid */}
        {filteredOcorrencias.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-inbox-line text-gray-400 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma ocorrência encontrada</h3>
            <p className="text-gray-600 mb-6">
              {filterStatus === 'todas' 
                ? 'Você ainda não registrou nenhuma ocorrência.'
                : `Não há ocorrências com este status.`
              }
            </p>
            <Link
              href="/nova-ocorrencia"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              Registrar Primeira Ocorrência
            </Link>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid lg:grid-cols-2 gap-6' : 'space-y-6'}>
            {filteredOcorrencias.map((ocorrencia) => {
              const statusInfo = getStatusInfo(ocorrencia.status);
              const urgenciaInfo = getUrgenciaInfo(ocorrencia.urgencia);
              
              return (
                <div key={ocorrencia.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{ocorrencia.tipo}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${urgenciaInfo.color}`}>
                            {urgenciaInfo.label}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>
                            <i className="ri-hashtag mr-1"></i>
                            {ocorrencia.id}
                          </span>
                          <span>
                            <i className="ri-calendar-line mr-1"></i>
                            {ocorrencia.data}
                          </span>
                        </div>
                      </div>
                      
                      <div className={`px-4 py-2 rounded-xl ${statusInfo.bgColor}`}>
                        <div className={`flex items-center ${statusInfo.textColor} font-semibold text-sm`}>
                          <i className={`${statusInfo.icon} mr-2`}></i>
                          {statusInfo.label}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {ocorrencia.status === 'em_andamento' && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span>Progresso</span>
                          <span>{ocorrencia.progresso}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${ocorrencia.progresso}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-700 mb-4">{ocorrencia.descricao}</p>
                    
                    {/* Location */}
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <i className="ri-map-pin-line mr-2"></i>
                      {ocorrencia.endereco}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center text-gray-600 hover:text-blue-600 text-sm font-medium cursor-pointer whitespace-nowrap">
                          <i className="ri-eye-line mr-2"></i>
                          Detalhes
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blue-600 text-sm font-medium cursor-pointer whitespace-nowrap">
                          <i className="ri-message-3-line mr-2"></i>
                          Mensagens
                        </button>
                      </div>
                      
                      <button className={`px-4 py-2 rounded-lg font-medium text-sm cursor-pointer whitespace-nowrap bg-gradient-to-r ${statusInfo.color} text-white hover:shadow-lg transition-all`}>
                        Acompanhar
                        <i className="ri-arrow-right-line ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
