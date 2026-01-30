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
    'populate[featured_image]': 'true',
    'populate[author][populate][avatar]': 'true',
    'populate[categories]': 'true',
    'populate[tags]': 'true',
    'populate[projects]': 'true',
    'populate[coauthors][populate][avatar]': 'true',
    'populate[gallery]': 'true',
    'populate[seo]': 'true',
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
    'populate[featured_image]': 'true',
    'populate[author][populate][avatar]': 'true',
    'populate[categories]': 'true',
    'populate[tags]': 'true',
    'populate[projects]': 'true',
    'populate[coauthors][populate][avatar]': 'true',
    'populate[gallery]': 'true',
    'populate[attachments]': 'true',
    'populate[related_posts][populate][featured_image]': 'true',
    'populate[seo]': 'true',
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

/**
 * Converter Markdown básico para HTML
 * - Converte imagens: ![alt](url) -> <img src="url" alt="alt">
 * - Converte links: [text](url) -> <a href="url">text</a>
 * - Suporta quebras de linha entre [alt] e (url)
 */
function markdownToHtml(markdown: string): string {
  if (!markdown) return '';

  let html = markdown;

  // 1. Converter imagens Markdown para HTML
  // Formato: ![alt text](url) ou ![alt text](url "title")
  // Suporta quebras de linha: ![alt]\n(url)
  // Usa [\s\S] para capturar qualquer caractere incluindo quebras de linha
  html = html.replace(
    /!\[([^\]]*)\]\s*\(([^)]+)(?:\s+"([^"]+)")?\)/g,
    (match, alt, url, title) => {
      // Remover quebras de linha e espaços extras da URL
      const cleanUrl = url.trim().replace(/[\s\n\r]+/g, '');
      const titleAttr = title ? ` title="${title}"` : '';
      return `<img src="${cleanUrl}" alt="${alt}"${titleAttr}>`;
    }
  );

  // Também processar formato com quebra de linha explícita: ![alt]\n(url)
  html = html.replace(
    /!\[([^\]]*)\]\s*[\r\n]+\s*\(([^)]+)(?:\s+"([^"]+)")?\)/g,
    (match, alt, url, title) => {
      const cleanUrl = url.trim().replace(/[\s\n\r]+/g, '');
      const titleAttr = title ? ` title="${title}"` : '';
      return `<img src="${cleanUrl}" alt="${alt}"${titleAttr}>`;
    }
  );

  // 2. Converter links Markdown para HTML
  // Formato: [text](url) ou [text](url "title")
  // Suporta quebras de linha: [text]\n(url)
  html = html.replace(
    /\[([^\]]+)\]\s*\(([^)]+)(?:\s+"([^"]+)")?\)/g,
    (match, text, url, title) => {
      // Remover quebras de linha e espaços extras da URL
      const cleanUrl = url.trim().replace(/[\s\n\r]+/g, '');
      const titleAttr = title ? ` title="${title}"` : '';
      return `<a href="${cleanUrl}"${titleAttr}>${text}</a>`;
    }
  );

  // Também processar formato com quebra de linha explícita: [text]\n(url)
  html = html.replace(
    /\[([^\]]+)\]\s*[\r\n]+\s*\(([^)]+)(?:\s+"([^"]+)")?\)/g,
    (match, text, url, title) => {
      const cleanUrl = url.trim().replace(/[\s\n\r]+/g, '');
      const titleAttr = title ? ` title="${title}"` : '';
      return `<a href="${cleanUrl}"${titleAttr}>${text}</a>`;
    }
  );

  return html;
}

/**
 * Processar conteúdo do post (Markdown ou HTML) para corrigir URLs e links
 * - Converte Markdown para HTML se necessário
 * - Converte URLs relativas de imagens para absolutas
 * - Adiciona atributos aos links externos
 */
export function processPostContent(content: string): string {
  if (!content) return '';

  // Primeiro, converter Markdown para HTML (se necessário)
  let html = markdownToHtml(content);

  // 1. Processar imagens: converter URLs relativas para absolutas
  // Procura por <img src="/uploads/..."> ou <img src="uploads/...">
  html = html.replace(
    /<img([^>]*)\ssrc=["']([^"']+)["']([^>]*)>/gi,
    (match, before, src, after) => {
      // Se já for URL completa (http/https), não alterar
      if (src.startsWith('http://') || src.startsWith('https://')) {
        return match;
      }
      
      // Se for URL relativa, adicionar base do Strapi
      const absoluteUrl = src.startsWith('/') 
        ? `${STRAPI_URL}${src}`
        : `${STRAPI_URL}/${src}`;
      
      return `<img${before} src="${absoluteUrl}"${after}>`;
    }
  );

  // 2. Processar links: adicionar target="_blank" e rel para links externos
  html = html.replace(
    /<a([^>]*)\shref=["']([^"']+)["']([^>]*)>/gi,
    (match, before, href, after) => {
      // Verificar se é link externo
      const isExternal = href.startsWith('http://') || href.startsWith('https://');
      
      // Se já tiver target ou rel, não duplicar
      const hasTarget = /target=/i.test(before + after);
      const hasRel = /rel=/i.test(before + after);
      
      if (isExternal && (!hasTarget || !hasRel)) {
        let newBefore = before;
        let newAfter = after;
        
        if (!hasTarget) {
          newBefore += ' target="_blank"';
        }
        
        if (!hasRel) {
          newBefore += ' rel="noopener noreferrer"';
        }
        
        return `<a${newBefore} href="${href}"${newAfter}>`;
      }
      
      return match;
    }
  );

  return html;
}
