"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  accessText?: string;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function ProjectCard({
  title,
  description,
  icon,
  href,
  accessText = "Acessar projeto",
  className = "",
  iconClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={`group block w-full sm:w-80 lg:w-72 ${className}`}
    >
      <div className="bg-transparent hover:bg-neutral-800 transition-colors duration-200 flex flex-col rounded-lg h-full">
        <div className="p-8 text-center flex flex-col flex-grow">
          <div className={`mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 mx-auto ${iconClassName}`}>
            {icon}
          </div>
          
          <h3 className={`mb-3 text-xl font-bold text-white ${titleClassName}`}>
            {title}
          </h3>
          
          <p className={`flex-grow text-sm leading-relaxed text-neutral-400 ${descriptionClassName}`}>
            {description}
          </p>
          
          <div className="mt-6 flex items-center font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span>{accessText}</span>
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
