"use client";

import React from "react";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  layout?: "vertical" | "horizontal";
  alignment?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  layout = "vertical",
  alignment = "center",
  theme = "light",
  className = "",
  iconClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: FeatureCardProps) {
  const themeClasses = {
    light: {
      title: "text-neutral-800",
      description: "text-neutral-600",
    },
    dark: {
      title: "text-white",
      description: "text-neutral-300",
    },
  };

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  const layoutClasses = {
    vertical: "flex-col",
    horizontal: "flex-row space-x-4",
  };

  return (
    <div className={`flex ${layoutClasses[layout]} ${alignmentClasses[alignment]} ${className}`}>
      <div className={`flex-shrink-0 ${layout === "vertical" ? "mb-4" : "mt-1"} ${iconClassName}`}>
        {icon}
      </div>
      <div className={layout === "horizontal" ? "flex-grow" : ""}>
        <h3 className={`font-semibold text-lg mb-2 ${themeClasses[theme].title} ${titleClassName}`}>
          {title}
        </h3>
        <p className={`font-light leading-relaxed ${themeClasses[theme].description} ${descriptionClassName}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
