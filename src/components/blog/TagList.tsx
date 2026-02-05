'use client';

import Link from 'next/link';
import type { Tag } from '@/types/blog';

interface TagListProps {
  tags: Tag[];
  size?: 'sm' | 'md' | 'lg';
  limit?: number;
}

export function TagList({ tags, size = 'md', limit }: TagListProps) {
  const displayTags = limit ? tags.slice(0, limit) : tags;

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className="flex flex-wrap gap-2">
      {displayTags.map((tag) => (
        <Link
          key={tag.id}
          href={`/blog?tag=${tag.slug}`}
          className={`rounded-full border border-neutral-300 px-3 py-1 text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900 ${sizes[size]}`}
        >
          #{tag.name}
        </Link>
      ))}
      {limit && tags.length > limit && (
        <span className={`px-3 py-1 text-neutral-400 ${sizes[size]}`}>
          +{tags.length - limit}
        </span>
      )}
    </div>
  );
}
