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
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-neutral-500 text-base font-light">
          {t('blog.empty_state.no_posts') || 'Nenhum post encontrado para os filtros selecionados.'}
        </p>
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
