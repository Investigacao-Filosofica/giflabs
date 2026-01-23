'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { Category } from '@/types/blog';

interface CategoryBadgeProps {
  category: Category;
  size?: 'sm' | 'md' | 'lg';
  linkable?: boolean;
}

export function CategoryBadge({
  category,
  size = 'md',
  linkable = true,
}: CategoryBadgeProps) {
  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };

  const badge = (
    <Badge
      style={{ backgroundColor: category.color }}
      className={`text-white transition-opacity hover:opacity-80 ${sizes[size]}`}
    >
      {category.name}
    </Badge>
  );

  if (linkable) {
    return <Link href={`/blog?category=${category.slug}`}>{badge}</Link>;
  }

  return badge;
}
