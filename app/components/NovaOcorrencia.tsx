'use client'

interface NovaOcorrenciaProps {
  className?: string
}

export default function NovaOcorrencia({ className = '' }: NovaOcorrenciaProps) {
  const handleRegistrarOcorrencia = () => {
    console.log('Botão de nova ocorrência clicado')
    window.open('https://readdy.ai/home/6120b6a1-4604-4e04-a551-c42afbaa5828/3ccbcae0-b08f-466e-9366-fb1058464abf', '_blank')
  }

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
            <i className="ri-alarm-warning-fill text-primary text-2xl"></i>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Registrar Nova Ocorrência
          </h2>
          <p className="text-gray-600 text-sm">
            Relate situações que necessitam da atenção da Guarda Municipal
          </p>
        </div>
        
        <button 
          onClick={handleRegistrarOcorrencia}
          className="w-full bg-primary text-white py-4 rounded-button font-medium text-lg shadow-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        >
          <i className="ri-add-circle-line mr-2"></i>
          Registrar Ocorrência
        </button>
      </div>
    </div>
  )
}