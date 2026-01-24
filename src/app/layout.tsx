import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LanguageProvider } from "@/contexts/LanguageContext"

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
  title: "GIFLABS",
  description:
    "Grupo interdisciplinar dedicado à investigação filosófica aplicada à tecnologia, artes e educação, com foco em blockchain, Web3 e IA.",
  keywords: "filosofia, tecnologia, artes, educação, blockchain, Web3, IA, UFOP, pesquisa",
  authors: [{ name: "GIFLABS - UFOP" }],
  openGraph: {
    title: "GIFLABS - Filosofia, Artes, Tecnologia e Educação",
    description: "Desenvolvendo educação crítica com blockchain, IA e Web3",
    type: "website",
    url: "https://giflabs.xyz",
    siteName: "GIFLABS",
    images: [
      {
        url: '/images/icons/og-image.png',
        width: 1200,
        height: 675,
        alt: 'GIFLABS Logo',
      },
    ],
    locale: 'pt_BR',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: "GIFLABS - Filosofia, Artes, Tecnologia e Educação",
    description: "Desenvolvendo educação crítica com blockchain, IA e Web3",
    images: ['/images/og-image.png'],
    creator: '@GIFLABS_xyz',
    site: 'giflabs.xyz',
  },
  icons: {
    icon: [
      { url: '/images/icons/favico.gif', type: 'image/gif' },
      { url: '/images/icons/favico.gif', sizes: '32x32', type: 'image/gif' },
    ],
    shortcut: '/images/icons/favico.gif',
    apple: '/images/icons/favico.gif',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://giflabs.xyz'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${lora.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
