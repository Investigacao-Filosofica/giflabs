'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { PostContent, AuthorCard, CategoryBadge, TagList } from '@/components/blog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getStrapiImageUrl, formatDate } from '@/lib/strapi';
import type { Post, StrapiResponse } from '@/types/blog';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { language, t } = useLanguage();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          'filters[slug][$eq]': slug,
          'populate': '*',
        });

        const res = await fetch(`${STRAPI_URL}/api/posts?${params}`);
        const data: StrapiResponse<Post> = await res.json();

        if (!data.data || data.data.length === 0) {
          setPost(null);
        } else {
          setPost(data.data[0]);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const handleShare = async (platform: 'twitter' | 'linkedin' | 'copy') => {
    const url = window.location.href;
    const title = post?.title || '';

    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-900 border-t-transparent" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 px-4">
        <span className="mb-4 text-6xl">📭</span>
        <h1 className="mb-2 text-2xl font-bold text-neutral-900">
          {t('blog.post_not_found') || 'Post não encontrado'}
        </h1>
        <p className="mb-6 text-neutral-600">
          {t('blog.post_not_found_description') || 'O post que você procura não existe ou foi removido.'}
        </p>
        <Button asChild className="bg-neutral-900 hover:bg-neutral-800">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('blog.back_to_blog') || 'Voltar ao Blog'}
          </Link>
        </Button>
      </div>
    );
  }

  const imageUrl = getStrapiImageUrl(post.featured_image?.url);

  return (
    <article className="min-h-screen bg-neutral-50">
      {/* Hero Image */}
      {imageUrl && (
        <div className="relative h-[40vh] min-h-[300px] w-full md:h-[50vh]">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-neutral-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('blog.back_to_blog') || 'Voltar ao Blog'}
        </Link>

        {/* Header */}
        <header className="mb-12">
          {/* Category */}
          {post.category && (
            <div className="mb-4">
              <CategoryBadge category={post.category} size="md" />
            </div>
          )}

          {/* Title */}
          <h1 className="mb-6 font-serif text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="mb-6 text-lg text-neutral-600 md:text-xl">
              {post.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt, language === 'pt' ? 'pt-BR' : 'en-US')}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.reading_time} min {t('blog.reading_time') || 'de leitura'}
            </span>
          </div>

          {/* Share Buttons */}
          <div className="mt-6 flex items-center gap-2">
            <span className="text-sm text-neutral-500">{t('blog.share') || 'Compartilhar'}:</span>
            <button
              onClick={() => handleShare('twitter')}
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
              title="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
              title={copied ? 'Copiado!' : 'Copiar link'}
            >
              <LinkIcon className="h-4 w-4" />
            </button>
            {copied && (
              <span className="text-xs text-green-600">{t('blog.link_copied') || 'Link copiado!'}</span>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="mb-12">
          <PostContent content={post.content} />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12 border-t border-neutral-200 pt-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500">
              {t('blog.tags') || 'Tags'}
            </h3>
            <TagList tags={post.tags} size="md" />
          </div>
        )}

        {/* Author */}
        {post.author && (
          <div className="border-t border-neutral-200 pt-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500">
              {t('blog.written_by') || 'Escrito por'}
            </h3>
            <div className="rounded-lg border border-neutral-200 bg-white">
              <AuthorCard author={post.author} size="lg" showBio />
            </div>
          </div>
        )}

        {/* Project Link */}
        {post.project && (
          <div className="mt-8 rounded-lg border border-neutral-200 bg-white p-6">
            <p className="mb-2 text-sm text-neutral-500">
              {t('blog.related_project') || 'Projeto relacionado'}:
            </p>
            <Link
              href={`/${post.project.slug}`}
              className="inline-flex items-center gap-2 font-semibold text-neutral-900 transition-colors hover:text-neutral-600"
              style={{ color: post.project.color }}
            >
              {post.project.name}
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
