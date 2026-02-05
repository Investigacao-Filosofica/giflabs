'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { Category } from '@/types/blog';

interface CategoryBadgeProps {
  category: Category;
  size?: 'sm' | 'md' | 'lg';
  linkable?: boolean;
  /** URL customizada para o link (ex: toggle de filtro múltiplo) */
  href?: string;
  /** Indica se está selecionado (ex: no painel de filtros) */
  isSelected?: boolean;
}

export function CategoryBadge({
  category,
  size = 'md',
  linkable = true,
  href,
  isSelected = false,
}: CategoryBadgeProps) {
  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };

  const badge = (
    <Badge
      style={{ backgroundColor: category.color }}
      className={`text-white transition-opacity hover:opacity-80 ${sizes[size]} ${
        isSelected ? 'ring-2 ring-neutral-900 ring-offset-2' : ''
      }`}
    >
      {category.name}
    </Badge>
  );

  const linkHref = href ?? `/blog?category=${category.slug}`;

  if (linkable) {
    return <Link href={linkHref}>{badge}</Link>;
  }

  return badge;
}
