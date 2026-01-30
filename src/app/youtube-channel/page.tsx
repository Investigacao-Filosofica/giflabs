"use client";

import { ExternalLink, PlayCircle, Youtube, Mic, Clapperboard } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GiflabsPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <div className="flex justify-center mb-8">
                <PlayCircle className="h-16 w-16 text-neutral-800" />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                {t("youtubeChannel.hero.title")}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                {t("youtubeChannel.hero.description")}
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
                  <Link href="https://www.youtube.com/@giflabs" target="_blank">
                    <Youtube className="mr-2 h-5 w-5" />
                    {t("youtubeChannel.hero.cta_main")}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#conteudo">
                    {t("youtubeChannel.hero.cta_secondary")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="conteudo" className="py-20 md:py-28 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                  {t("youtubeChannel.content.title")}
                </h2>
              </div>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                <p>
                  {t("youtubeChannel.content.description_1")}
                </p>
                <p>
                  {t("youtubeChannel.content.description_2")}
                </p>
                <p>
                  {t("youtubeChannel.content.description_3")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="formatos" className="bg-neutral-900 py-20 md:py-28 text-white scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {t("youtubeChannel.formats.title")}
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                  {t("youtubeChannel.formats.description")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
                <div className="flex flex-col items-center">
                  <Mic className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{t("youtubeChannel.formats.interviews.title")}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {t("youtubeChannel.formats.interviews.description")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Clapperboard className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{t("youtubeChannel.formats.courses.title")}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {t("youtubeChannel.formats.courses.description")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <PlayCircle className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{t("youtubeChannel.formats.podcasts.title")}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {t("youtubeChannel.formats.podcasts.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}