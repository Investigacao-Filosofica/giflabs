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
  publishedAt: string | null;
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
  og_title: string | null;
  og_description: string | null;
  twitter_card: 'summary' | 'summary_large_image' | 'app' | 'player' | null;
  canonical_url: string | null;
  no_index: boolean;
}

// Author
export interface Author extends StrapiEntity {
  name: string;
  slug: string;
  bio: string | null;
  avatar: StrapiImage | null;
  email: string | null;
  academic_title: string | null;
  role: string | null;
  institution: string | null;
  lattes_url: string | null;
  orcid: string | null;
  social_links: {
    twitter?: string | null;
    instagram?: string | null;
    linkedin?: string | null;
    github?: string | null;
    website?: string | null;
    lattes?: string | null;
  } | null;
  website: string | null;
  posts?: PostPreview[];
  coauthored_posts?: PostPreview[];
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
  description: string | null;
}

// Project
export interface Project extends StrapiEntity {
  name: string;
  slug: string;
  description: string | null;
  color: string;
}

// Post
export interface Post extends StrapiEntity {
  title: string;
  subtitle: string | null;
  slug: string;
  content: string;
  intro: string | null;
  excerpt: string | null;
  featured_image: StrapiImage | null;
  language: string;
  author: Author | null;
  coauthors: Author[];
  categories: Category[];
  tags: Tag[];
  projects: Project[];
  related_posts: Post[];
  reading_time: number;
  is_featured: boolean;
  scheduledAt: string | null;
  gallery: StrapiImage[];
  attachments: StrapiImage[];
  video_url: string | null;
  series_name: string | null;
  series_part: number | null;
  view_count: number;
  share_count: number;
  comment_count: number;
  seo: SEO | null;
}

// Post para listagem (sem conteúdo completo)
export interface PostPreview extends Omit<Post, 'content'> {
  content?: string;
}

// Parâmetros de filtro para posts
export interface PostFilters {
  language?: string;
  page?: number;
  pageSize?: number;
  category?: string;
  tag?: string;
  author?: string;
  project?: string;
  featured?: boolean;
  search?: string;
}
