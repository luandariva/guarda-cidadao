<<<<<<< HEAD

import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guarda Cidadão - Prefeitura de Vacaria",
  description: "Canal direto com a Guarda Municipal de Vacaria para reportar ocorrências e acompanhar soluções",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
=======
﻿import type { Metadata } from 'next'
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
>>>>>>> 6f51858cfaf39ec5ad390b82c742ca0350dbe786
}
