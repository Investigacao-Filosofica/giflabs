"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface CTAButton {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: React.ReactNode;
  external?: boolean;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  ctaButtons?: CTAButton[];
  icon?: React.ReactNode;
  background?: "white" | "gradient" | "neutral";
  className?: string;
}

export function HeroSection({
  title,
  description,
  ctaButtons = [],
  icon,
  background = "white",
  className = "",
}: HeroSectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gradient: "bg-gradient-to-br from-neutral-100 to-neutral-200",
    neutral: "bg-neutral-50",
  };

  const getButtonClasses = (variant: CTAButton["variant"]) => {
    switch (variant) {
      case "primary":
        return "bg-neutral-900 hover:bg-neutral-800 text-white px-10 py-6 text-lg transition-all duration-300 border-0 font-medium";
      case "secondary":
        return "border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white text-neutral-900 px-10 py-6 text-lg transition-all duration-300 font-medium";
      case "outline":
        return "border-neutral-300 hover:bg-neutral-100 text-neutral-700 px-10 py-6 text-lg transition-all duration-300 font-medium";
      default:
        return "bg-neutral-900 hover:bg-neutral-800 text-white px-10 py-6 text-lg transition-all duration-300 border-0 font-medium";
    }
  };

  return (
    <section 
      className={`relative flex min-h-screen items-center justify-center overflow-hidden ${backgroundClasses[background]} ${className}`}
    >
      {background === "gradient" && (
        <div className="absolute inset-0 opacity-50" />
      )}
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="mx-auto max-w-4xl">
          {icon && (
            <div className="flex justify-center mb-8">
              {icon}
            </div>
          )}
          
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
            {title}
          </h1>
          
          <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
            {description}
          </p>
          
          {ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  asChild
                  className={getButtonClasses(button.variant)}
                >
                  <Link 
                    href={button.href}
                    {...(button.external && { 
                      target: "_blank", 
                      rel: "noopener noreferrer" 
                    })}
                  >
                    {button.text}
                    {button.icon && <span className="ml-2">{button.icon}</span>}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
