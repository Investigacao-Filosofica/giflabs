"use client";

import React from "react";

export interface ContentSectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  background?: "white" | "neutral" | "transparent";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
  maxWidth?: "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  titleAlignment?: "left" | "center";
}

export function ContentSection({
  id,
  title,
  description,
  children,
  background = "transparent",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  containerClassName = "",
  maxWidth = "4xl",
  titleAlignment = "center",
}: ContentSectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    neutral: "bg-neutral-50",
    transparent: "",
  };

  const maxWidthClasses = {
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl", 
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
  };

  const titleAlignmentClasses = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <section 
      id={id}
      className={`py-20 md:py-28 scroll-mt-24 ${backgroundClasses[background]} ${className}`}
    >
      <div className={`container mx-auto px-6 ${containerClassName}`}>
        <div className={`${maxWidthClasses[maxWidth]} mx-auto`}>
          {(title || description) && (
            <div className={`${titleAlignmentClasses[titleAlignment]} mb-16`}>
              {title && (
                <h2 className={`text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6 ${titleClassName}`}>
                  {title}
                </h2>
              )}
              {description && (
                <p className={`text-lg text-neutral-600 leading-relaxed ${titleAlignment === "center" ? "max-w-3xl mx-auto" : ""} ${descriptionClassName}`}>
                  {description}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
