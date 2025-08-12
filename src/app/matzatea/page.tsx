"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Palette, User, Award, Users, Globe } from "lucide-react";
import Link from "next/link";

export default function MatzateaPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-neutral-900 text-white py-6">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-neutral-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("matzatea.back_to_home")}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-100 to-neutral-200">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900">
              {t("matzatea.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 font-light leading-relaxed">
              {t("matzatea.hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                {t("matzatea.hero.badges.literary")}
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Palette className="w-4 h-4 mr-2" />
                {t("matzatea.hero.badges.artistic")}
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                {t("matzatea.hero.badges.cultural")}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* O Projeto Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-neutral-900">
              {t("matzatea.project.title")}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p className="mb-6 leading-relaxed">
                {t("matzatea.project.description")}
              </p>
              <p className="mb-6 leading-relaxed">
                {t("matzatea.project.context")}
              </p>
              <p className="mb-6 leading-relaxed">
                {t("matzatea.project.collaboration")}
              </p>
              <p className="mb-6 leading-relaxed">
                {t("matzatea.project.actions")}
              </p>
              <p className="leading-relaxed">
                {t("matzatea.project.objectives")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Autor Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-neutral-900">
              {t("matzatea.author.title")}
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mr-4">
                  <User className="w-8 h-8 text-neutral-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">Emanuel Souza</h3>
                  <p className="text-neutral-600">{t("matzatea.author.roles")}</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-neutral-700">
                <p className="mb-4 leading-relaxed">
                  {t("matzatea.author.description")}
                </p>
                <p className="mb-4 leading-relaxed">
                  {t("matzatea.author.technique")}
                </p>
                <p className="mb-4 leading-relaxed">
                  {t("matzatea.author.participations")}
                </p>
                <p className="leading-relaxed">
                  {t("matzatea.author.final")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Artista Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-neutral-900">
              {t("matzatea.artist.title")}
            </h2>
            <div className="bg-neutral-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mr-4">
                  <Palette className="w-8 h-8 text-neutral-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">Fer Caggiano</h3>
                  <p className="text-neutral-600">{t("matzatea.artist.roles")}</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-neutral-700">
                <p className="mb-4 leading-relaxed">
                  {t("matzatea.artist.description")}
                </p>
                <p className="mb-4 leading-relaxed">
                  {t("matzatea.artist.project")}
                </p>
                <p className="leading-relaxed">
                  {t("matzatea.artist.activities")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevância Cultural Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              {t("matzatea.cultural_relevance.title")}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-300">
              <p className="mb-6 leading-relaxed">
                {t("matzatea.cultural_relevance.intro")}
              </p>
              <p className="mb-6 leading-relaxed">
                {t("matzatea.cultural_relevance.boundaries")}
              </p>
              <p className="mb-6 leading-relaxed">
                {t("matzatea.cultural_relevance.expansion")}
              </p>
              <p className="leading-relaxed">
                {t("matzatea.cultural_relevance.initiative")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financiamento Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-neutral-900">
              {t("matzatea.funding.title")}
            </h2>
            <p className="text-xl text-neutral-600 mb-8 font-light">
              {t("matzatea.funding.subtitle")}
            </p>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <p className="mb-6 leading-relaxed">
                {t("matzatea.funding.description")}
              </p>
              <p className="text-lg font-medium text-neutral-800">
                {t("matzatea.funding.final")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              {t("matzatea.cta.title")}
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              {t("matzatea.cta.description")}
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-neutral-100 text-neutral-900 px-8 py-4 text-lg transition-all duration-300"
            >
              <Link href="/#projetos">
                {t("matzatea.cta.button")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
