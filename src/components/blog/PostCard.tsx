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
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-300 hover:shadow-md ${
        featured ? 'md:flex-row md:h-[400px]' : ''
      }`}
    >
      {/* Imagem */}
      <div
        className={`relative overflow-hidden ${
          featured ? 'md:w-1/2 md:h-full' : 'aspect-video'
        }`}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="absolute inset-0 block"
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full min-h-[200px] w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
              <span className="text-4xl opacity-30">📝</span>
            </div>
          )}
        </Link>

        {/* Badges: Idioma + Categoria (fora do Link para evitar <a> dentro de <a>) */}
        <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-2">
          {post.language && (
            <Link
              href={`/blog?language=${encodeURIComponent(post.language)}`}
              className="inline-block"
            >
              <Badge variant="outline" className="border-neutral-400 bg-white/90 text-neutral-600 backdrop-blur-sm hover:bg-neutral-100">
                {post.language === 'pt-BR' ? 'PT' : (post.language === 'en' || post.language === 'en-US') ? 'EN' : post.language}
              </Badge>
            </Link>
          )}
          {post.categories && post.categories.length > 0 && (
            <Badge
              style={{ backgroundColor: post.categories[0].color || '#3B82F6' }}
              className="text-white"
            >
              {post.categories[0].name}
            </Badge>
          )}
        </div>
      </div>

      {/* Conteúdo */}
      <div className={`flex flex-1 flex-col p-5 ${featured ? 'md:p-6' : ''}`}>
        {/* Meta info */}
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
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
          className={`mb-2 font-serif font-bold text-neutral-900 transition-colors group-hover:text-neutral-600 ${
            featured ? 'text-2xl md:text-3xl' : 'text-lg'
          }`}
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p
            className={`mb-4 line-clamp-3 text-neutral-600 ${
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
                className="text-xs text-neutral-500 transition-colors hover:text-neutral-900"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        )}

        {/* Featured badge */}
        {post.is_featured && (
          <div className="absolute right-3 top-3">
            <Badge variant="outline" className="border-amber-500 bg-white text-amber-600">
              ⭐ Destaque
            </Badge>
          </div>
        )}
      </div>
    </article>
  );
}
