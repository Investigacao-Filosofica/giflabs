"use client";

import React from "react";

export interface DarkSectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
}

export function DarkSection({
  id,
  title,
  description,
  children,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  containerClassName = "",
}: DarkSectionProps) {
  return (
    <section 
      id={id}
      className={`bg-neutral-900 py-20 md:py-28 text-white scroll-mt-24 ${className}`}
    >
      <div className={`container mx-auto px-6 ${containerClassName}`}>
        {(title || description) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-6 ${titleClassName}`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto ${descriptionClassName}`}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
