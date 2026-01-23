'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { PostPreview } from '@/types/blog';
import { getStrapiImageUrl, formatDate } from '@/lib/strapi';
import { useLanguage } from '@/contexts/LanguageContext';

interface PostCardProps {
  post: PostPreview;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const { language } = useLanguage();
  const imageUrl = getStrapiImageUrl(post.featured_image?.url);

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 ${
        featured ? 'md:flex-row' : ''
      }`}
    >
      {/* Imagem */}
      <Link
        href={`/blog/${post.slug}`}
        className={`relative overflow-hidden ${
          featured ? 'md:w-1/2' : 'aspect-video'
        }`}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full min-h-[200px] w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <span className="text-4xl opacity-20">📝</span>
          </div>
        )}
        
        {/* Categoria Badge */}
        {post.category && (
          <div className="absolute left-3 top-3">
            <Badge
              style={{ backgroundColor: post.category.color }}
              className="text-white"
            >
              {post.category.name}
            </Badge>
          </div>
        )}
      </Link>

      {/* Conteúdo */}
      <div className={`flex flex-1 flex-col p-5 ${featured ? 'md:p-6' : ''}`}>
        {/* Meta info */}
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(post.publishedAt, language === 'pt' ? 'pt-BR' : 'en-US')}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.reading_time} min
          </span>
          {post.author && (
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {post.author.name}
            </span>
          )}
        </div>

        {/* Título */}
        <h3
          className={`mb-2 font-serif font-bold text-white transition-colors group-hover:text-blue-400 ${
            featured ? 'text-2xl md:text-3xl' : 'text-lg'
          }`}
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p
            className={`mb-4 line-clamp-3 text-zinc-400 ${
              featured ? 'text-base' : 'text-sm'
            }`}
          >
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag.id}
                href={`/blog?tag=${tag.slug}`}
                className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        )}

        {/* Featured badge */}
        {post.is_featured && (
          <div className="absolute right-3 top-3">
            <Badge variant="outline" className="border-yellow-500 text-yellow-500">
              ⭐ Destaque
            </Badge>
          </div>
        )}
      </div>
    </article>
  );
}
