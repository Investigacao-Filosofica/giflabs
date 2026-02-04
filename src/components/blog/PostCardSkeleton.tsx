'use client';

interface PostCardSkeletonProps {
  featured?: boolean;
}

export function PostCardSkeleton({ featured = false }: PostCardSkeletonProps) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white ${
        featured ? 'md:flex-row md:h-[400px]' : ''
      }`}
    >
      {/* Imagem skeleton */}
      <div
        className={`bg-neutral-200 animate-pulse ${
          featured ? 'md:w-1/2 md:h-full aspect-video md:aspect-auto' : 'aspect-video'
        }`}
      />

      {/* Conteúdo skeleton */}
      <div className={`flex flex-1 flex-col p-5 ${featured ? 'md:p-6' : ''}`}>
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <div className="h-3 w-16 bg-neutral-200 rounded animate-pulse" />
          <div className="h-3 w-12 bg-neutral-200 rounded animate-pulse" />
          <div className="h-3 w-20 bg-neutral-200 rounded animate-pulse" />
        </div>
        <div
          className={`mb-2 bg-neutral-200 rounded animate-pulse ${
            featured ? 'h-8 w-4/5 max-w-md' : 'h-5 w-full'
          }`}
        />
        <div className={`mb-4 space-y-2 ${featured ? 'space-y-3' : ''}`}>
          <div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-neutral-200 rounded animate-pulse" />
          <div className={`h-4 bg-neutral-200 rounded animate-pulse ${featured ? 'w-4/5 max-w-sm' : 'w-3/4'}`} />
        </div>
        <div className="mt-auto flex gap-2">
          <div className="h-3 w-16 bg-neutral-200 rounded animate-pulse" />
          <div className="h-3 w-20 bg-neutral-200 rounded animate-pulse" />
          <div className="h-3 w-14 bg-neutral-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
