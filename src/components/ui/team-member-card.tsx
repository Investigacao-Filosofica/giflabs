"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Github, Linkedin } from "lucide-react";

export interface SocialLink {
  lattes?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  badges: string[];
  icon?: React.ReactNode;
  avatar?: string;
  socialLinks?: SocialLink;
  theme?: "light" | "dark";
  className?: string;
}

export function TeamMemberCard({
  name,
  role,
  description,
  badges,
  icon,
  avatar,
  socialLinks,
  theme = "light",
  className = "",
}: TeamMemberCardProps) {
  const themeClasses = {
    light: {
      container: "bg-transparent hover:bg-neutral-100",
      iconBg: "bg-neutral-100",
      iconColor: "text-neutral-600",
      name: "text-neutral-900",
      role: "text-neutral-600",
      description: "text-neutral-600",
      badge: "border-neutral-300 text-neutral-700 bg-neutral-50",
      socialIcon: "text-neutral-500 hover:text-neutral-900",
    },
    dark: {
      container: "bg-neutral-800 border border-neutral-700 hover:bg-neutral-700",
      iconBg: "bg-neutral-700",
      iconColor: "text-white",
      name: "text-white",
      role: "text-neutral-300",
      description: "text-neutral-400",
      badge: "border-neutral-600 text-neutral-300 bg-transparent",
      socialIcon: "text-neutral-400 hover:text-white",
    },
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className={`${currentTheme.container} transition-colors duration-200 flex flex-col rounded-lg ${className}`}>
      <div className="p-4 text-center flex flex-col flex-grow">
        {/* Avatar ou Ícone */}
        {avatar ? (
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
            <Image
              src={avatar}
              alt={name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className={`w-20 h-20 mx-auto mb-4 ${currentTheme.iconBg} rounded-full flex items-center justify-center`}>
            {icon && React.cloneElement(icon as React.ReactElement, {
              size: 32,
              className: currentTheme.iconColor,
            })}
          </div>
        )}

        {/* Informações */}
        <h3 className={`text-lg font-bold mb-2 leading-tight ${currentTheme.name}`}>
          {name}
        </h3>
        
        <p className={`mb-3 font-medium text-sm leading-tight ${currentTheme.role}`}>
          {role}
        </p>
        
        <p className={`mb-4 font-light leading-relaxed text-sm ${currentTheme.description}`}>
          {description}
        </p>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`${currentTheme.badge} text-xs`}
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}

        {/* Links Sociais */}
        {socialLinks && (
          <div className="mt-auto pt-4">
            <div className="flex justify-center gap-4">
              {socialLinks.lattes && socialLinks.lattes !== "#" && (
                <a
                  href={socialLinks.lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${currentTheme.socialIcon} transition-colors`}
                  aria-label="Currículo Lattes"
                >
                  <GraduationCap size={20} />
                </a>
              )}
              
              {socialLinks.github && socialLinks.github !== "#" && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${currentTheme.socialIcon} transition-colors`}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              
              {socialLinks.linkedin && socialLinks.linkedin !== "#" && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${currentTheme.socialIcon} transition-colors`}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              
              {socialLinks.twitter && socialLinks.twitter !== "#" && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${currentTheme.socialIcon} transition-colors`}
                  aria-label="X (Twitter)"
                >
                  <Image 
                    src="/images/logos/x-logo.png" 
                    alt="X logo" 
                    width={16} 
                    height={16}
                    className="filter grayscale hover:grayscale-0 transition-all duration-200 opacity-80 hover:opacity-100"
                    style={{ marginTop: '2px' }}
                  />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
