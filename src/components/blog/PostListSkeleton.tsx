'use client';

import { PostCardSkeleton } from './PostCardSkeleton';

interface PostListSkeletonProps {
  /** Se true, mostra 1 destaque + grid (como PostList com showFeatured) */
  showFeatured?: boolean;
}

export function PostListSkeleton({ showFeatured = true }: PostListSkeletonProps) {
  if (showFeatured) {
    return (
      <div className="space-y-2">
        <PostCardSkeleton featured />
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <PostCardSkeleton />
          <PostCardSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </div>
  );
}
