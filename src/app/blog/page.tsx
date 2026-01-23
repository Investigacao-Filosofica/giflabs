'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, X } from 'lucide-react';
import { PostList, Pagination, CategoryBadge, TagList } from '@/components/blog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import type { PostPreview, Category, Tag, StrapiResponse } from '@/types/blog';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export default function BlogPage() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();
  
  const [posts, setPosts] = useState<PostPreview[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [pagination, setPagination] = useState({ page: 1, pageCount: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Filtros da URL
  const currentPage = Number(searchParams.get('page')) || 1;
  const categoryFilter = searchParams.get('category') || '';
  const tagFilter = searchParams.get('tag') || '';
  const authorFilter = searchParams.get('author') || '';
  const searchQuery = searchParams.get('q') || '';

  const locale = language === 'pt' ? 'pt-BR' : 'en';

  // Buscar posts
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          locale,
          'pagination[page]': String(currentPage),
          'pagination[pageSize]': '9',
          'populate[author][populate]': 'avatar',
          'populate[category]': '*',
          'populate[tags]': '*',
          'populate[project]': '*',
          'populate[featured_image]': '*',
          'sort[0]': 'publishedAt:desc',
        });

        if (categoryFilter) {
          params.append('filters[category][slug][$eq]', categoryFilter);
        }
        if (tagFilter) {
          params.append('filters[tags][slug][$contains]', tagFilter);
        }
        if (authorFilter) {
          params.append('filters[author][slug][$eq]', authorFilter);
        }
        if (searchQuery) {
          params.append('filters[$or][0][title][$containsi]', searchQuery);
          params.append('filters[$or][1][excerpt][$containsi]', searchQuery);
        }

        const res = await fetch(`${STRAPI_URL}/api/posts?${params}`);
        const data: StrapiResponse<PostPreview> = await res.json();
        
        setPosts(data.data || []);
        setPagination({
          page: data.meta?.pagination?.page || 1,
          pageCount: data.meta?.pagination?.pageCount || 1,
          total: data.meta?.pagination?.total || 0,
        });
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [locale, currentPage, categoryFilter, tagFilter, authorFilter, searchQuery]);

  // Buscar categorias e tags
  useEffect(() => {
    async function fetchFilters() {
      try {
        const [catRes, tagRes] = await Promise.all([
          fetch(`${STRAPI_URL}/api/categories?locale=${locale}&pagination[pageSize]=100`),
          fetch(`${STRAPI_URL}/api/tags?locale=${locale}&pagination[pageSize]=100`),
        ]);

        const catData: StrapiResponse<Category> = await catRes.json();
        const tagData: StrapiResponse<Tag> = await tagRes.json();

        setCategories(catData.data || []);
        setTags(tagData.data || []);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    }

    fetchFilters();
  }, [locale]);

  const hasActiveFilters = categoryFilter || tagFilter || authorFilter || searchQuery;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-black px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            {t('blog.title') || 'Blog'}
          </h1>
          <p className="max-w-2xl text-lg text-zinc-400">
            {t('blog.description') || 'Artigos, notícias e reflexões sobre filosofia, tecnologia e educação.'}
          </p>

          {/* Search Bar */}
          <form className="mt-8 flex gap-2" action="/blog" method="get">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                name="q"
                defaultValue={searchQuery}
                placeholder={t('blog.search_placeholder') || 'Buscar posts...'}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 py-3 pl-10 pr-4 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              {t('blog.search') || 'Buscar'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-zinc-700 bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              <Filter className="mr-2 h-4 w-4" />
              {t('blog.filters') || 'Filtros'}
            </Button>
          </form>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-zinc-500">{t('blog.active_filters') || 'Filtros ativos'}:</span>
              {categoryFilter && (
                <a
                  href={`/blog?${new URLSearchParams({ ...Object.fromEntries(searchParams.entries()), category: '' }).toString()}`}
                  className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700"
                >
                  {categoryFilter}
                  <X className="h-3 w-3" />
                </a>
              )}
              {tagFilter && (
                <a
                  href={`/blog?${new URLSearchParams({ ...Object.fromEntries(searchParams.entries()), tag: '' }).toString()}`}
                  className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700"
                >
                  #{tagFilter}
                  <X className="h-3 w-3" />
                </a>
              )}
              {authorFilter && (
                <a
                  href={`/blog?${new URLSearchParams({ ...Object.fromEntries(searchParams.entries()), author: '' }).toString()}`}
                  className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700"
                >
                  @{authorFilter}
                  <X className="h-3 w-3" />
                </a>
              )}
              {searchQuery && (
                <a
                  href={`/blog?${new URLSearchParams({ ...Object.fromEntries(searchParams.entries()), q: '' }).toString()}`}
                  className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-700"
                >
                  "{searchQuery}"
                  <X className="h-3 w-3" />
                </a>
              )}
              <a
                href="/blog"
                className="text-sm text-blue-400 hover:underline"
              >
                {t('blog.clear_filters') || 'Limpar todos'}
              </a>
            </div>
          )}

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Categories */}
                <div>
                  <h3 className="mb-3 font-semibold text-white">
                    {t('blog.categories') || 'Categorias'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <CategoryBadge key={cat.id} category={cat} size="sm" />
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="mb-3 font-semibold text-white">
                    {t('blog.tags') || 'Tags'}
                  </h3>
                  <TagList tags={tags} size="sm" limit={15} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Posts Section */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-zinc-500">
              {pagination.total} {pagination.total === 1 ? 'post' : 'posts'} {t('blog.found') || 'encontrados'}
            </p>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
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
