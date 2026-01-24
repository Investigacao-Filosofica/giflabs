/**
 * Biblioteca de conexão com Strapi API
 */

import type {
  Post,
  PostPreview,
  Author,
  Category,
  Tag,
  Project,
  PostFilters,
  StrapiResponse,
  StrapiSingleResponse,
} from '@/types/blog';

// URL base do Strapi
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

/**
 * Função genérica para fazer requisições ao Strapi
 */
async function fetchStrapi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${STRAPI_URL}/api${endpoint}`;
  
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    next: {
      revalidate: 60, // Revalidar a cada 60 segundos (ISR)
    },
  });

  if (!res.ok) {
    console.error(`Strapi fetch error: ${res.status} ${res.statusText}`);
    throw new Error(`Failed to fetch from Strapi: ${endpoint}`);
  }

  return res.json();
}

/**
 * Construir query string para filtros
 */
function buildQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, String(value));
    }
  });
  
  return searchParams.toString();
}

// ============================================
// POSTS
// ============================================

/**
 * Buscar lista de posts
 */
export async function getPosts(
  filters: PostFilters = {}
): Promise<StrapiResponse<PostPreview>> {
  const {
    locale = 'pt-BR',
    page = 1,
    pageSize = 10,
    category,
    tag,
    author,
    project,
    featured,
    search,
  } = filters;

  const params: Record<string, any> = {
    locale,
    'pagination[page]': page,
    'pagination[pageSize]': pageSize,
    'populate': '*',
    'sort[0]': 'publishedAt:desc',
  };

  // Filtros opcionais
  if (category) {
    params['filters[category][slug][$eq]'] = category;
  }
  if (tag) {
    params['filters[tags][slug][$contains]'] = tag;
  }
  if (author) {
    params['filters[author][slug][$eq]'] = author;
  }
  if (project) {
    params['filters[project][slug][$eq]'] = project;
  }
  if (featured !== undefined) {
    params['filters[is_featured][$eq]'] = featured;
  }
  if (search) {
    params['filters[$or][0][title][$containsi]'] = search;
    params['filters[$or][1][excerpt][$containsi]'] = search;
  }

  const query = buildQueryString(params);
  return fetchStrapi<StrapiResponse<PostPreview>>(`/posts?${query}`);
}

/**
 * Buscar posts em destaque
 */
export async function getFeaturedPosts(
  locale = 'pt-BR',
  limit = 3
): Promise<StrapiResponse<PostPreview>> {
  return getPosts({
    locale,
    pageSize: limit,
    featured: true,
  });
}

/**
 * Buscar post por slug
 */
export async function getPostBySlug(
  slug: string,
  locale = 'pt-BR'
): Promise<Post | null> {
  const params = {
    locale,
    'filters[slug][$eq]': slug,
    'populate': '*',
  };

  const query = buildQueryString(params);
  const response = await fetchStrapi<StrapiResponse<Post>>(`/posts?${query}`);
  
  return response.data[0] || null;
}

/**
 * Buscar todos os slugs de posts (para generateStaticParams)
 */
export async function getAllPostSlugs(locale = 'pt-BR'): Promise<string[]> {
  const params = {
    locale,
    'fields[0]': 'slug',
    'pagination[pageSize]': 1000,
  };

  const query = buildQueryString(params);
  const response = await fetchStrapi<StrapiResponse<{ slug: string }>>(`/posts?${query}`);
  
  return response.data.map((post) => post.slug);
}

// ============================================
// AUTHORS
// ============================================

/**
 * Buscar lista de autores
 */
export async function getAuthors(
  locale = 'pt-BR'
): Promise<StrapiResponse<Author>> {
  const params = {
    locale,
    'populate': 'avatar',
    'pagination[pageSize]': 100,
  };

  const query = buildQueryString(params);
  return fetchStrapi<StrapiResponse<Author>>(`/authors?${query}`);
}

/**
 * Buscar autor por slug
 */
export async function getAuthorBySlug(
  slug: string,
  locale = 'pt-BR'
): Promise<Author | null> {
  const params = {
    locale,
    'filters[slug][$eq]': slug,
    'populate': 'avatar',
  };

  const query = buildQueryString(params);
  const response = await fetchStrapi<StrapiResponse<Author>>(`/authors?${query}`);
  
  return response.data[0] || null;
}

// ============================================
// CATEGORIES
// ============================================

/**
 * Buscar lista de categorias
 */
export async function getCategories(
  locale = 'pt-BR'
): Promise<StrapiResponse<Category>> {
  const params = {
    locale,
    'pagination[pageSize]': 100,
  };

  const query = buildQueryString(params);
  return fetchStrapi<StrapiResponse<Category>>(`/categories?${query}`);
}

/**
 * Buscar categoria por slug
 */
export async function getCategoryBySlug(
  slug: string,
  locale = 'pt-BR'
): Promise<Category | null> {
  const params = {
    locale,
    'filters[slug][$eq]': slug,
  };

  const query = buildQueryString(params);
  const response = await fetchStrapi<StrapiResponse<Category>>(`/categories?${query}`);
  
  return response.data[0] || null;
}

// ============================================
// TAGS
// ============================================

/**
 * Buscar lista de tags
 */
export async function getTags(
  locale = 'pt-BR'
): Promise<StrapiResponse<Tag>> {
  const params = {
    locale,
    'pagination[pageSize]': 100,
  };

  const query = buildQueryString(params);
  return fetchStrapi<StrapiResponse<Tag>>(`/tags?${query}`);
}

/**
 * Buscar tag por slug
 */
export async function getTagBySlug(
  slug: string,
  locale = 'pt-BR'
): Promise<Tag | null> {
  const params = {
    locale,
    'filters[slug][$eq]': slug,
  };

  const query = buildQueryString(params);
  const response = await fetchStrapi<StrapiResponse<Tag>>(`/tags?${query}`);
  
  return response.data[0] || null;
}

// ============================================
// PROJECTS
// ============================================

/**
 * Buscar lista de projetos
 */
export async function getProjects(
  locale = 'pt-BR'
): Promise<StrapiResponse<Project>> {
  const params = {
    locale,
    'pagination[pageSize]': 100,
  };

  const query = buildQueryString(params);
  return fetchStrapi<StrapiResponse<Project>>(`/projects?${query}`);
}

/**
 * Buscar projeto por slug
 */
export async function getProjectBySlug(
  slug: string,
  locale = 'pt-BR'
): Promise<Project | null> {
  const params = {
    locale,
    'filters[slug][$eq]': slug,
  };

  const query = buildQueryString(params);
  const response = await fetchStrapi<StrapiResponse<Project>>(`/projects?${query}`);
  
  return response.data[0] || null;
}

// ============================================
// UTILS
// ============================================

/**
 * Obter URL completa da imagem do Strapi
 */
export function getStrapiImageUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  
  // Se já for URL completa, retornar
  if (url.startsWith('http')) return url;
  
  // Caso contrário, adicionar URL base do Strapi
  return `${STRAPI_URL}${url}`;
}

/**
 * Formatar data para exibição
 */
export function formatDate(dateString: string, locale = 'pt-BR'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
