'use client';

import { processPostContent } from '@/lib/strapi';

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  // Processar o conteúdo HTML antes de renderizar
  const processedContent = processPostContent(content);

  return (
    <div
      className="prose prose-lg max-w-none
        prose-headings:font-serif prose-headings:text-neutral-900
        prose-h1:text-4xl prose-h1:font-bold
        prose-h2:text-3xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-6
        prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
        prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6
        prose-a:text-neutral-900 prose-a:underline prose-a:decoration-neutral-400 hover:prose-a:decoration-neutral-900
        prose-strong:text-neutral-900 prose-strong:font-semibold
        prose-em:text-neutral-700
        prose-blockquote:border-l-neutral-900 prose-blockquote:bg-neutral-100 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-neutral-700
        prose-code:text-neutral-800 prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-neutral-900 prose-pre:text-neutral-100 prose-pre:border prose-pre:border-neutral-200
        prose-ul:text-neutral-700 prose-ol:text-neutral-700
        prose-li:marker:text-neutral-400
        prose-img:rounded-lg prose-img:shadow-lg
        prose-hr:border-neutral-200"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}
