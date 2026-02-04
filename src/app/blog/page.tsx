'use client';

import { useEffect, useState, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { X } from 'lucide-react';
import { PostList, PostListSkeleton, Pagination, CategoryBadge } from '@/components/blog';
import { useLanguage } from '@/contexts/LanguageContext';
import { useBlogFilters } from '@/contexts/BlogFiltersContext';
import type { PostPreview, Category, Tag, StrapiResponse } from '@/types/blog';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

function BlogContent() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();
  
  const [posts, setPosts] = useState<PostPreview[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [pagination, setPagination] = useState({ page: 1, pageCount: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const blogFilters = useBlogFilters();
  const showFilters = blogFilters?.showFilters ?? false;
  const filterPanelRef = useRef<HTMLDivElement>(null);

  // Fechar filtro ao clicar fora (ignora clique no botão do filtro no header)
  useEffect(() => {
    if (!showFilters) return;
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest('[data-filter-trigger]')) return;
      if (filterPanelRef.current && !filterPanelRef.current.contains(target)) {
        blogFilters?.closeFilters();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showFilters, blogFilters]);

  // Filtros da URL (suporte a múltiplos para category e tag)
  const currentPage = Number(searchParams.get('page')) || 1;
  const categoryFilters = searchParams.getAll('category').filter(Boolean);
  const tagFilters = searchParams.getAll('tag').filter(Boolean);
  const authorFilter = searchParams.get('author') || '';
  const languageFilter = searchParams.get('language') || '';
  const searchQuery = searchParams.get('q') || '';

  // Buscar posts
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          'pagination[page]': String(currentPage),
          'pagination[pageSize]': '9',
          'populate[featured_image]': 'true',
          'populate[author][populate][avatar]': 'true',
          'populate[categories]': 'true',
          'populate[tags]': 'true',
          'populate[projects]': 'true',
          'populate[coauthors][populate][avatar]': 'true',
          'sort[0]': 'publishedAt:desc',
        });

        if (categoryFilters.length > 0) {
          categoryFilters.forEach((slug, i) => {
            params.append(`filters[categories][slug][$in][${i}]`, slug);
          });
        }
        if (tagFilters.length > 0) {
          tagFilters.forEach((slug, i) => {
            params.append(`filters[tags][slug][$in][${i}]`, slug);
          });
        }
        if (authorFilter) {
          params.append('filters[author][slug][$eq]', authorFilter);
        }
        if (languageFilter) {
          params.append('filters[language][$eq]', languageFilter);
        }
        if (searchQuery) {
          params.append('filters[$or][0][title][$containsi]', searchQuery);
          params.append('filters[$or][1][excerpt][$containsi]', searchQuery);
        }

        const res = await fetch(`${STRAPI_URL}/api/posts?${params}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
        }

        const data: StrapiResponse<PostPreview> = await res.json();
        
        setPosts(data.data || []);
        setPagination({
          page: data.meta?.pagination?.page || 1,
          pageCount: data.meta?.pagination?.pageCount || 1,
          total: data.meta?.pagination?.total || 0,
        });
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError(error instanceof Error ? error.message : 'Erro ao carregar posts. Verifique se o Strapi está rodando.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage, categoryFilters.join(','), tagFilters.join(','), authorFilter, languageFilter, searchQuery]);

  // Buscar categorias e tags
  useEffect(() => {
    async function fetchFilters() {
      try {
        const [catRes, tagRes] = await Promise.all([
          fetch(`${STRAPI_URL}/api/categories?pagination[pageSize]=100`, {
            headers: {
              'Content-Type': 'application/json',
            },
          }),
          fetch(`${STRAPI_URL}/api/tags?pagination[pageSize]=100`, {
            headers: {
              'Content-Type': 'application/json',
            },
          }),
        ]);

        if (!catRes.ok) {
          throw new Error(`Failed to fetch categories: ${catRes.status} ${catRes.statusText}`);
        }
        if (!tagRes.ok) {
          throw new Error(`Failed to fetch tags: ${tagRes.status} ${tagRes.statusText}`);
        }

        const catData: StrapiResponse<Category> = await catRes.json();
        const tagData: StrapiResponse<Tag> = await tagRes.json();

        setCategories(catData.data || []);
        setTags(tagData.data || []);
      } catch (error) {
        console.error('Error fetching filters:', error);
        // Não quebrar a UI se os filtros falharem
        setCategories([]);
        setTags([]);
      }
    }

    fetchFilters();
  }, []);

  const hasActiveFilters = categoryFilters.length > 0 || tagFilters.length > 0 || authorFilter || languageFilter || searchQuery;

  // Helpers para toggle de filtros múltiplos
  const buildCategoryToggleUrl = (slug: string) => {
    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('page', '1');
    const current = params.getAll('category');
    const newCategories = current.includes(slug)
      ? current.filter((c) => c !== slug)
      : [...current, slug];
    params.delete('category');
    newCategories.forEach((c) => params.append('category', c));
    return `/blog?${params.toString()}`;
  };
  const buildTagToggleUrl = (slug: string) => {
    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('page', '1');
    const current = params.getAll('tag');
    const newTags = current.includes(slug)
      ? current.filter((t) => t !== slug)
      : [...current, slug];
    params.delete('tag');
    newTags.forEach((t) => params.append('tag', t));
    return `/blog?${params.toString()}`;
  };

  const buildClearParamUrl = (param: string) => {
    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('page', '1');
    params.delete(param);
    return `/blog?${params.toString()}`;
  };

  const buildLanguageUrl = (lang: string) => {
    const params = new URLSearchParams(searchParams?.toString() || '');
    params.set('page', '1');
    if (lang) params.set('language', lang);
    else params.delete('language');
    return `/blog?${params.toString()}`;
  };

  return (
    <div className="relative bg-neutral-50 min-h-screen font-light">
      {/* Filtros - fixed, só visível quando aberto (filtros ativos + opções = uma coisa só) */}
      {showFilters && (
        <div className="fixed top-16 left-0 right-0 z-40" ref={filterPanelRef}>
          <div className="container mx-auto px-6 py-4">
            <div className="mx-auto max-w-6xl">
              <div className="rounded-lg border border-neutral-200 bg-white/95 backdrop-blur-md shadow-lg p-6">
                {/* Active Filters - dentro do card */}
                {hasActiveFilters && (
                  <div className="mb-6 flex flex-wrap items-center gap-2">
                    <span className="text-sm text-neutral-500">{t('blog.active_filters') || 'Filtros ativos'}:</span>
                    {categoryFilters.map((slug) => {
                      const cat = categories.find((c) => c.slug === slug);
                      return (
                        <Link
                          key={slug}
                          href={buildCategoryToggleUrl(slug)}
                          className="flex items-center gap-1 rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-700 transition-colors hover:bg-neutral-300"
                        >
                          {cat?.name || slug}
                          <X className="h-3 w-3" />
                        </Link>
                      );
                    })}
                    {tagFilters.map((slug) => {
                      const tag = tags.find((t) => t.slug === slug);
                      return (
                        <Link
                          key={slug}
                          href={buildTagToggleUrl(slug)}
                          className="flex items-center gap-1 rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-700 transition-colors hover:bg-neutral-300"
                        >
                          #{tag?.name || slug}
                          <X className="h-3 w-3" />
                        </Link>
                      );
                    })}
                    {authorFilter && (
                      <Link
                        href={buildClearParamUrl('author')}
                        className="flex items-center gap-1 rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-700 transition-colors hover:bg-neutral-300"
                      >
                        @{authorFilter}
                        <X className="h-3 w-3" />
                      </Link>
                    )}
                    {languageFilter && (
                      <Link
                        href={buildClearParamUrl('language')}
                        className="flex items-center gap-1 rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-700 transition-colors hover:bg-neutral-300"
                      >
                        {languageFilter === 'pt-BR' ? (t('blog.language_pt') || 'Português') : (t('blog.language_en') || 'Inglês')}
                        <X className="h-3 w-3" />
                      </Link>
                    )}
                    {searchQuery && (
                      <Link
                        href={buildClearParamUrl('q')}
                        className="flex items-center gap-1 rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-700 transition-colors hover:bg-neutral-300"
                      >
                        "{searchQuery}"
                        <X className="h-3 w-3" />
                      </Link>
                    )}
                    <Link
                      href="/blog"
                      className="text-sm text-neutral-600 underline hover:text-neutral-900"
                    >
                      {t('blog.clear_filters') || 'Limpar todos'}
                    </Link>
                  </div>
                )}

                {/* Filters Panel - opções de filtro */}
                {showFilters && (
                  <div className="grid gap-6 md:grid-cols-3">
                    {/* Language */}
                    <div>
                      <h3 className="mb-3 font-semibold text-neutral-900">
                        {t('blog.language') || 'Idioma'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={buildLanguageUrl('')}
                          className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                            !languageFilter
                              ? 'bg-neutral-900 text-white'
                              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                          }`}
                        >
                          {t('blog.language_all') || 'Todos'}
                        </Link>
                        <Link
                          href={buildLanguageUrl('pt-BR')}
                          className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                            languageFilter === 'pt-BR'
                              ? 'bg-neutral-900 text-white'
                              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                          }`}
                        >
                          {t('blog.language_pt') || 'Português'}
                        </Link>
                        <Link
                          href={buildLanguageUrl('en-US')}
                          className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                            languageFilter === 'en-US'
                              ? 'bg-neutral-900 text-white'
                              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                          }`}
                        >
                          {t('blog.language_en') || 'Inglês'}
                        </Link>
                      </div>
                    </div>

                    {/* Categories - múltipla seleção */}
                    <div>
                      <h3 className="mb-3 font-semibold text-neutral-900">
                        {t('blog.categories') || 'Categorias'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <CategoryBadge
                            key={cat.id}
                            category={cat}
                            size="sm"
                            href={buildCategoryToggleUrl(cat.slug)}
                            isSelected={categoryFilters.includes(cat.slug)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Tags - múltipla seleção */}
                    <div>
                      <h3 className="mb-3 font-semibold text-neutral-900">
                        {t('blog.tags') || 'Tags'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tags.slice(0, 15).map((tag) => (
                          <Link
                            key={tag.id}
                            href={buildTagToggleUrl(tag.slug)}
                            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                              tagFilters.includes(tag.slug)
                                ? 'border-neutral-900 bg-neutral-900 text-white'
                                : 'border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
                            }`}
                          >
                            #{tag.name}
                          </Link>
                        ))}
                        {tags.length > 15 && (
                          <span className="px-3 py-1 text-xs text-neutral-400">+{tags.length - 15}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header editorial + Posts - título à esquerda, mais respiro */}
      <section className={`py-16 md:py-24 bg-neutral-50 ${showFilters ? 'pt-56' : ''}`}>
        <div className="mx-auto w-full max-w-6xl px-6">
          {/* Título + count na mesma linha (estilo editorial) */}
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-light leading-tight tracking-tight text-neutral-900">
                {t('blog.title') || 'Blog'}
              </h1>
              <p className="mt-2 text-neutral-600 text-base md:text-lg max-w-xl">
                {t('blog.description') || 'Artigos, notícias e reflexões sobre filosofia, tecnologia e educação.'}
              </p>
            </div>
            {!loading && (
              <p className="text-sm text-neutral-500 shrink-0 pt-2 sm:pt-0">
                {pagination.total} {pagination.total === 1 ? 'post' : 'posts'} {t('blog.found') || 'encontrados'}
              </p>
            )}
          </div>

          {/* Divisor sutil */}
          <div className="mb-12 mt-8 border-t border-neutral-200" />

          {/* Loading - skeleton do layout de posts */}
          {loading ? (
            <PostListSkeleton showFeatured={currentPage === 1 && !hasActiveFilters} />
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-red-600 mb-4">{error}</p>
              <p className="text-sm text-neutral-500">
                Verifique se o Strapi está rodando em {STRAPI_URL}
              </p>
            </div>
          ) : (
            <>
              {/* Posts Grid */}
              <PostList posts={posts} showFeatured={currentPage === 1 && !hasActiveFilters} />

              {/* Pagination */}
              <div className="mt-12">
                <Pagination
                  currentPage={pagination.page}
                  totalPages={pagination.pageCount}
                  queryParams={Object.fromEntries(searchParams.entries())}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-4">
            <div className="h-9 w-32 bg-neutral-200 rounded animate-pulse mb-2" />
            <div className="h-5 w-96 max-w-full bg-neutral-200 rounded animate-pulse" />
          </div>
          <div className="mb-12 mt-8 border-t border-neutral-200" />
          <PostListSkeleton showFeatured />
        </div>
      </div>
    }>
      <BlogContent />
    </Suspense>
  );
}
