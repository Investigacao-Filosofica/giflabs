import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GIF LABS - Grupo de Pesquisa em Investigação Filosófica | UFOP",
  description:
    "Grupo interdisciplinar dedicado à investigação filosófica aplicada à tecnologia e educação, com foco em blockchain, Web3 e IA.",
  keywords: "filosofia, tecnologia, educação, blockchain, Web3, IA, UFOP, pesquisa",
  authors: [{ name: "GIF LABS - UFOP" }],
  openGraph: {
    title: "GIF LABS - Filosofia, Tecnologia e Educação",
    description: "Desenvolvendo educação crítica com blockchain, IA e Web3",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${lora.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
