import NovaOcorrencia from './components/NovaOcorrencia'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Guarda Cidadão
          </h1>
          <p className="text-gray-600">Prefeitura de Vacaria - RS</p>
        </div>
        
        <NovaOcorrencia />
      </div>
    </main>
  )
}
