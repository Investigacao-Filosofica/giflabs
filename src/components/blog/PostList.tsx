'use client';

import { PostCard } from './PostCard';
import type { PostPreview } from '@/types/blog';
import { useLanguage } from '@/contexts/LanguageContext';

interface PostListProps {
  posts: PostPreview[];
  showFeatured?: boolean;
}

export function PostList({ posts, showFeatured = true }: PostListProps) {
  const { t } = useLanguage();

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="mb-6">
          <p className="text-2xl md:text-3xl font-light text-neutral-900 mb-2">
            {t('blog.empty_state.title') || 'Pensar é revolucionário'}
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            <span className="text-neutral-400 text-sm font-light">
              {t('blog.empty_state.description') || 'Em construção filosófica'}
            </span>
            <span className="flex gap-1">
              <span className="inline-block w-1 h-1 bg-neutral-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
              <span className="inline-block w-1 h-1 bg-neutral-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
              <span className="inline-block w-1 h-1 bg-neutral-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Separar post em destaque (primeiro featured ou primeiro da lista)
  const featuredPost = showFeatured
    ? posts.find((p) => p.is_featured) || posts[0]
    : null;
  const otherPosts = showFeatured
    ? posts.filter((p) => p.id !== featuredPost?.id)
    : posts;

  // Layout estilo Instagram: primeiro post grande, resto em grid compacto (gap mínimo)
  if (featuredPost && showFeatured && otherPosts.length > 0) {
    return (
      <div className="space-y-2">
        {/* Post em destaque (grande) */}
        <PostCard post={featuredPost} featured />
        
        {/* Grid de posts (compacto estilo Instagram - gap mínimo) */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }

  // Se não houver featured ou não mostrar featured, grid normal compacto (estilo Instagram)
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
