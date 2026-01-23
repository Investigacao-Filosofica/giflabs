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
        <span className="mb-4 text-6xl">📭</span>
        <h3 className="mb-2 text-xl font-semibold text-neutral-900">
          {t('blog.no_posts') || 'Nenhum post encontrado'}
        </h3>
        <p className="text-neutral-500">
          {t('blog.no_posts_description') || 'Volte em breve para novos conteúdos.'}
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

  return (
    <div className="space-y-8">
      {/* Post em destaque */}
      {featuredPost && showFeatured && (
        <PostCard post={featuredPost} featured />
      )}

      {/* Grid de posts */}
      {otherPosts.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
