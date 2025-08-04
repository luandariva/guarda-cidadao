import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guarda Cidadão - Prefeitura de Vacaria',
  description: 'Sistema de registro de ocorrências da Guarda Municipal de Vacaria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
