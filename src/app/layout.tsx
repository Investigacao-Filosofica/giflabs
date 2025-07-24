import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

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
  title: "GIFLABS - Grupo Investigação Filosófica | UFOP",
  description:
    "Grupo interdisciplinar dedicado à investigação filosófica aplicada à tecnologia, artes e educação, com foco em blockchain, Web3 e IA.",
  keywords: "filosofia, tecnologia, artes, educação, blockchain, Web3, IA, UFOP, pesquisa",
  authors: [{ name: "GIFLABS - UFOP" }],
  openGraph: {
    title: "GIFLABS - Filosofia, Tecnologia, Artes e Educação",
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
