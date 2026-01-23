/**
 * Tipos TypeScript para integração com Strapi Blog
 */

// Tipo base para respostas do Strapi
export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: {};
}

// Tipo base para entidades do Strapi
export interface StrapiEntity {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

// Tipo para imagens/media do Strapi
export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  url: string;
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

// Componente SEO
export interface SEO {
  id: number;
  meta_title: string | null;
  meta_description: string | null;
  og_image: StrapiImage | null;
  no_index: boolean;
}

// Author
export interface Author extends StrapiEntity {
  name: string;
  slug: string;
  bio: string | null;
  avatar: StrapiImage | null;
  role: string | null;
  email: string | null;
  social_links: {
    twitter?: string | null;
    linkedin?: string | null;
    github?: string | null;
    lattes?: string | null;
  } | null;
}

// Category
export interface Category extends StrapiEntity {
  name: string;
  slug: string;
  description: string | null;
  color: string;
}

// Tag
export interface Tag extends StrapiEntity {
  name: string;
  slug: string;
}

// Project
export interface Project extends StrapiEntity {
  name: string;
  slug: string;
  description: string | null;
  color: string;
  icon: string | null;
}

// Post
export interface Post extends StrapiEntity {
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: StrapiImage | null;
  author: Author | null;
  category: Category | null;
  tags: Tag[];
  project: Project | null;
  reading_time: number;
  is_featured: boolean;
  seo: SEO | null;
}

// Post para listagem (sem conteúdo completo)
export interface PostPreview extends Omit<Post, 'content'> {
  content?: string;
}

// Parâmetros de filtro para posts
export interface PostFilters {
  locale?: string;
  page?: number;
  pageSize?: number;
  category?: string;
  tag?: string;
  author?: string;
  project?: string;
  featured?: boolean;
  search?: string;
}
