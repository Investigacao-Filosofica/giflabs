import React from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  description?: string;
  icon?: React.ReactElement;
  theme?: 'light' | 'dark';
}

interface Theme {
  iconBg: string;
  iconColor: string;
  textColor: string;
  bgColor: string;
}

const themes: Record<'light' | 'dark', Theme> = {
  light: {
    iconBg: 'bg-neutral-100',
    iconColor: 'text-neutral-600',
    textColor: 'text-neutral-800',
    bgColor: 'bg-white'
  },
  dark: {
    iconBg: 'bg-neutral-800',
    iconColor: 'text-neutral-300',
    textColor: 'text-white',
    bgColor: 'bg-neutral-900'
  }
};

export function TeamMemberCard({ 
  name, 
  role, 
  description, 
  icon, 
  theme = 'light' 
}: TeamMemberCardProps) {
  const currentTheme = themes[theme];

  return (
    <div className={`${currentTheme.bgColor} p-6 rounded-lg border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition-all duration-300`}>
      <div className="text-center">
        {icon && (
          <div className={`w-20 h-20 mx-auto mb-4 ${currentTheme.iconBg} rounded-full flex items-center justify-center`}>
            {icon && React.cloneElement(icon as React.ReactElement<any>, {
              size: 32,
              className: currentTheme.iconColor,
            })}
          </div>
        )}
        <h3 className={`text-xl font-semibold ${currentTheme.textColor} mb-3`}>{name}</h3>
        <p className={`${currentTheme.textColor} text-sm mb-2 font-medium opacity-80`}>{role}</p>
        {description && (
          <p className={`${currentTheme.textColor} leading-relaxed text-sm opacity-70`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default TeamMemberCard;
