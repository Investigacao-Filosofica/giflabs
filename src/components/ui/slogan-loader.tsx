"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface SloganLoaderProps {
  /** Se deve animar letra por letra (true) ou apenas fade in (false) */
  animate?: boolean;
  /** Tamanho do texto */
  size?: "sm" | "md" | "lg" | "xl";
  /** Classe CSS adicional */
  className?: string;
}

const sizeClasses = {
  sm: "text-2xl md:text-3xl",
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-6xl lg:text-7xl",
  xl: "text-5xl md:text-7xl lg:text-8xl",
};

export function SloganLoader({ 
  animate = true, 
  size = "lg",
  className = "" 
}: SloganLoaderProps) {
  const { t } = useLanguage();
  const slogan = t("home.blog.empty_state.title") || "Pensar é revolucionário";
  const letters = slogan.split("");

  if (!animate) {
    // Versão estática (sem animação) - quebra em duas linhas no mobile
    return (
      <div className={`text-center ${className}`}>
        <h2 className={`${sizeClasses[size]} font-light text-neutral-900 italic leading-tight tracking-tight`} style={{ letterSpacing: '-0.03em' }}>
          <span className="block md:inline">Pensar é</span>
          <span className="hidden md:inline"> </span>
          <span className="block md:inline">revolucionário</span>
        </h2>
      </div>
    );
  }

  // Versão animada (letra por letra) - quebra em duas linhas no mobile
  const firstPart = "Pensar é";
  const secondPart = "revolucionário";
  
  return (
    <div className={`text-center ${className}`}>
      <h2 className={`${sizeClasses[size]} font-light text-neutral-900 italic leading-tight tracking-tight`} style={{ letterSpacing: '-0.03em' }}>
        {/* Primeira linha: "Pensar é" */}
        <span className="block md:inline">
          {firstPart.split("").map((letter, index) => (
            <motion.span
              key={`first-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.3,
                ease: "easeOut"
              }}
              className="inline-block"
              style={{ marginRight: '-0.01em' }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </span>
        {/* Espaço entre as partes (visível apenas no desktop) */}
        <span className="hidden md:inline"> </span>
        {/* Segunda linha: "revolucionário" */}
        <span className="block md:inline">
          {secondPart.split("").map((letter, index) => (
            <motion.span
              key={`second-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: (firstPart.length + index) * 0.05,
                duration: 0.3,
                ease: "easeOut"
              }}
              className="inline-block"
              style={{ marginRight: '-0.01em' }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </span>
      </h2>
    </div>
  );
}
