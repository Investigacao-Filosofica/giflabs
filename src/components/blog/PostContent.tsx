'use client';

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <div
      className="prose prose-lg prose-invert max-w-none
        prose-headings:font-serif prose-headings:text-white
        prose-h1:text-4xl prose-h1:font-bold
        prose-h2:text-3xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-6
        prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
        prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-6
        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-white prose-strong:font-semibold
        prose-em:text-zinc-200
        prose-blockquote:border-l-blue-500 prose-blockquote:bg-zinc-800/50 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-zinc-300
        prose-code:text-blue-300 prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
        prose-ul:text-zinc-300 prose-ol:text-zinc-300
        prose-li:marker:text-zinc-500
        prose-img:rounded-lg prose-img:shadow-lg
        prose-hr:border-zinc-800"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
