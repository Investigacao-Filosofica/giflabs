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
    language,
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
    'pagination[page]': page,
    'pagination[pageSize]': pageSize,
    'populate': '*',
    'sort[0]': 'publishedAt:desc',
  };

  // Filtros opcionais
  if (language) {
    params['filters[language][$eq]'] = language;
  }
  if (category) {
    params['filters[categories][slug][$eq]'] = category;
  }
  if (tag) {
    params['filters[tags][slug][$contains]'] = tag;
  }
  if (author) {
    params['filters[author][slug][$eq]'] = author;
  }
  if (project) {
    params['filters[projects][slug][$eq]'] = project;
  }
  if (featured !== undefined) {
    params['filters[is_featured][$eq]'] = featured;
  }
  if (search) {
    params['filters[$or][0][title][$containsi]'] = search;
    params['filters[$or][1][excerpt][$containsi]'] = search;
    params['filters[$or][2][intro][$containsi]'] = search;
  }

  const query = buildQueryString(params);
  return fetchStrapi<StrapiResponse<PostPreview>>(`/posts?${query}`);
}

/**
 * Buscar posts em destaque
 */
export async function getFeaturedPosts(
  language?: string,
  limit = 3
): Promise<StrapiResponse<PostPreview>> {
  return getPosts({
    language,
    pageSize: limit,
    featured: true,
  });
}

/**
 * Buscar post por slug
 */
export async function getPostBySlug(
  slug: string
): Promise<Post | null> {
  const params = {
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
export async function getAllPostSlugs(): Promise<string[]> {
  const params = {
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
export async function getAuthors(): Promise<StrapiResponse<Author>> {
  const params = {
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
  slug: string
): Promise<Author | null> {
  const params = {
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
export async function getCategories(): Promise<StrapiResponse<Category>> {
  const params = {
    'pagination[pageSize]': 100,
  };

  const query = buildQueryString(params);
  return fetchStrapi<StrapiResponse<Category>>(`/categories?${query}`);
}

/**
 * Buscar categoria por slug
 */
export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  const params = {
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
export async function getTags(): Promise<StrapiResponse<Tag>> {
  const params = {
    'pagination[pageSize]': 100,
  };

  const query = buildQueryString(params);
  return fetchStrapi<StrapiResponse<Tag>>(`/tags?${query}`);
}

/**
 * Buscar tag por slug
 */
export async function getTagBySlug(
  slug: string
): Promise<Tag | null> {
  const params = {
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
export async function getProjects(): Promise<StrapiResponse<Project>> {
  const params = {
    'pagination[pageSize]': 100,
  };

  const query = buildQueryString(params);
  return fetchStrapi<StrapiResponse<Project>>(`/projects?${query}`);
}

/**
 * Buscar projeto por slug
 */
export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  const params = {
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
export function formatDate(dateString: string | null | undefined, locale = 'pt-BR'): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
