# 🏗️ Arquitetura do Sistema GIFLABS

## 📊 Diagrama de Arquitetura Geral

```
┌─────────────────────────────────────────────────────────────────┐
│                        USUÁRIO FINAL                            │
│                    (Navegador Web)                             │
└────────────────────────────┬────────────────────────────────────┘
                              │
                              │ HTTP/HTTPS
                              │
┌─────────────────────────────▼────────────────────────────────────┐
│                    FRONTEND - Next.js 15.2.8                    │
│                    (App Router)                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Páginas:                                                │  │
│  │  • / (Homepage)                                          │  │
│  │  • /blog (Listagem de posts)                             │  │
│  │  • /blog/[slug] (Post individual)                        │  │
│  │  • /digital-education-app                                │  │
│  │  • /serie-if, /virtualia, /literatura, etc.              │  │
│  └──────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Componentes:                                             │  │
│  │  • Header, Footer                                         │  │
│  │  • PostCard, PostList, PostContent                        │  │
│  │  • LanguageSwitcher                                       │  │
│  │  • SloganLoader                                           │  │
│  └──────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Contextos:                                               │  │
│  │  • LanguageContext (i18n PT/EN)                          │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────┬────────────────────────────────────┘
                              │
                              │ REST API
                              │ (fetch)
                              │
┌─────────────────────────────▼────────────────────────────────────┐
│                    BACKEND - Strapi CMS                         │
│                    (v5.33.4)                                    │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Content Types (Strapi = apenas blog):                  │  │
│  │  • Post, Author, Category, Tag, Project                  │  │
│  │  (Comentários, perfil, gamificação ficam fora do Strapi) │  │
│  └──────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Componentes:                                             │  │
│  │  • SEO (shared.seo)                                       │  │
│  └──────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Plugins:                                                 │  │
│  │  • Users & Permissions                                    │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────┬────────────────────────────────────┘
                              │
                              │ SQL Queries
                              │
┌─────────────────────────────▼────────────────────────────────────┐
│                    BANCO DE DADOS                                │
│                    PostgreSQL (Railway)                         │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Tabelas:                                                 │  │
│  │  • posts                                                  │  │
│  │  • authors                                                │  │
│  │  • categories                                             │  │
│  │  • tags                                                   │  │
│  │  • projects                                               │  │
│  │  • posts_categories_links                                 │  │
│  │  • posts_projects_links                                   │  │
│  │  • posts_authors_links (coauthors)                        │  │
│  │  • posts_related_links                                   │  │
│  │  • upload_files                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## 🔗 Relações entre Content Types

```
┌─────────────┐
│    Post     │
│             │
│ • title     │
│ • subtitle  │
│ • slug      │
│ • content   │
│ • intro     │
│ • excerpt   │
│ • language  │
│ • featured_image │
│ • gallery   │
│ • attachments │
│ • video_url │
│ • series_name │
│ • series_part │
│ • view_count │
│ • share_count │
│ • comment_count │
└──────┬──────┘
       │
       ├──────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
       │              │              │              │              │              │
       │ manyToOne    │ manyToMany  │ manyToMany   │ manyToMany   │ manyToMany   │
       │              │              │              │              │              │
┌──────▼──────┐ ┌────▼─────┐ ┌─────▼─────┐ ┌─────▼──────┐ ┌─────▼──────┐
│   Author     │ │ Category │ │    Tag    │ │  Project   │ │   Post     │
│              │ │          │ │           │ │            │ │ (related)  │
│ • name       │ │ • name   │ │ • name    │ │ • name     │ │            │
│ • slug       │ │ • slug   │ │ • slug    │ │ • slug     │ │            │
│ • bio        │ │ • color  │ │ • description │ • color    │ │            │
│ • avatar     │ │ • description │           │ │ • description │ │            │
│ • email      │ └──────────┘ └───────────┘ └────────────┘ └────────────┘
│ • academic_title │
│ • role       │
│ • institution │
│ • lattes_url │
│ • orcid      │
│ • website    │
│ • social_links │
└──────────────┘
```

## 🌐 Sistema de Idiomas

**Decisão Arquitetural**: Content Types principais **não são localizados**. Posts têm campo `language` (string) para indicar o idioma do conteúdo.

```
┌─────────────────────────────────────────────────────────────┐
│                    LanguageContext                          │
│                  (Frontend - Next.js)                       │
│                                                             │
│  Estado: 'pt' ou 'en'                                      │
│  Função: t(key) → tradução (apenas UI)                    │
└────────────────────┬──────────────────────────────────────┘
                      │
                      │ Filtra posts por language (opcional)
                      │
┌───────▼─────────────────────────────────────────────────────┐
│         Strapi API Request                                 │
│  GET /api/posts?filters[language][$eq]=pt-BR              │
│  GET /api/posts?filters[language][$eq]=en                  │
│                                                             │
│  Nota: Todos os posts aparecem independente do idioma      │
│  selecionado. Filtro por language é opcional.             │
└─────────────────────────────────────────────────────────────┘
```

## 📝 Estrutura de um Post

```
Post
├── Campos Básicos:
│   ├── title (string, obrigatório)
│   ├── subtitle (string, opcional)
│   ├── slug (uid, obrigatório, único globalmente)
│   ├── content (richtext, obrigatório)
│   ├── intro (text, opcional)
│   ├── excerpt (text, opcional, max 300)
│   ├── language (string, obrigatório, ex: "pt-BR", "en")
│   ├── reading_time (integer, opcional)
│   ├── is_featured (boolean, default: false)
│   ├── publishedAt (datetime, obrigatório)
│   └── scheduledAt (datetime, opcional)
│
├── Campos de Mídia:
│   ├── featured_image (media, obrigatório, images only)
│   ├── gallery (media[], opcional, images)
│   ├── attachments (media[], opcional, files)
│   └── video_url (string, opcional)
│
├── Campos de Série:
│   ├── series_name (string, opcional)
│   └── series_part (integer, opcional)
│
├── Campos de Analytics:
│   ├── view_count (integer, default: 0)
│   ├── share_count (integer, default: 0)
│   └── comment_count (integer, default: 0)
│
├── Componente SEO:
│   └── seo (component shared.seo)
│       ├── meta_title
│       ├── meta_description
│       ├── og_title
│       ├── og_description
│       ├── og_image
│       ├── twitter_card
│       └── canonical_url
│
└── Relações:
    ├── author → Author (manyToOne, obrigatório)
    ├── coauthors → Author[] (manyToMany, opcional)
    ├── categories → Category[] (manyToMany, múltiplas)
    ├── tags → Tag[] (manyToMany, múltiplas)
    ├── projects → Project[] (manyToMany, opcional, múltiplos)
    └── related_posts → Post[] (manyToMany, opcional)
```

## 🔄 Fluxo de Criação de Post

```
1. Admin acessa Strapi Admin Panel
   └─> http://localhost:1337/admin

2. Cria/Edita Post
   └─> Content Manager → Post → Create/Edit

3. Preenche campos:
   ├── Título (obrigatório)
   ├── Subtítulo (opcional)
   ├── Slug (gerado automaticamente do título)
   ├── Conteúdo (richtext, obrigatório)
   ├── Intro (opcional)
   ├── Excerpt (opcional)
   ├── Language (obrigatório, ex: "pt-BR", "en")
   ├── Featured Image (obrigatório)
   ├── Seleciona Author (obrigatório, único)
   ├── Seleciona Coauthors (opcional, múltiplos)
   ├── Seleciona Categories (múltiplas)
   ├── Seleciona Tags (múltiplas)
   ├── Seleciona Projects (opcional, múltiplos)
   ├── Seleciona Related Posts (opcional)
   └── Preenche SEO (componente opcional)

4. Publica
   └─> Botão "Publish"

5. Post fica disponível na API
   └─> GET /api/posts
   └─> GET /api/posts?filters[language][$eq]=pt-BR (filtro opcional)
```

## 🎯 Fluxo de Exibição na Homepage

```
Usuário acessa: http://localhost:3000
        │
        ▼
┌───────────────────────┐
│  LanguageContext      │
│  language: 'pt'       │
└───────────┬────────────┘
            │
            ▼
┌───────────────────────┐
│  LatestPosts()        │
│  useEffect()          │
└───────────┬────────────┘
            │
            ▼
┌───────────────────────┐
│  getPosts({           │
│    language: 'pt-BR', │
│    pageSize: 3        │
│  })                   │
└───────────┬────────────┘
            │
            ▼
┌───────────────────────┐
│  fetchStrapi()        │
│  GET /api/posts?      │
│  filters[language][$eq]=pt-BR&... │
└───────────┬────────────┘
            │
            ▼
┌───────────────────────┐
│  Strapi retorna:      │
│  {                    │
│    data: Post[]       │
│  }                    │
└───────────┬────────────┘
            │
            ▼
┌───────────────────────┐
│  Renderiza:           │
│  • Loading → Slogan   │
│  • Empty → Slogan     │
│  • Posts → Grid       │
└───────────────────────┘
```

## 🗂️ Estrutura de Diretórios

```
giflabs/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── blog/
│   │   │   ├── page.tsx       # Listagem de posts
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Post individual
│   │   └── [projeto]/         # Páginas de projetos
│   │
│   ├── components/            # Componentes React
│   │   ├── blog/              # Componentes do blog
│   │   ├── layout/            # Header, Footer
│   │   └── ui/                # Componentes UI base
│   │
│   ├── contexts/              # Contextos React
│   │   ├── LanguageContext.tsx
│   │   └── translations/      # Arquivos de tradução
│   │
│   ├── lib/                   # Utilitários
│   │   └── strapi.ts         # Cliente API Strapi
│   │
│   └── types/                 # TypeScript types
│       └── blog.ts
│
└── strapi/                    # Strapi CMS
    ├── config/                # Configurações
    │   ├── database.ts       # PostgreSQL
    │   ├── server.ts         # Configurações do servidor
    │   └── plugins.ts        # Plugins (se houver)
    │
    └── src/
        ├── api/               # Content Types
        │   ├── post/
        │   │   └── content-types/post/schema.json
        │   ├── author/
        │   │   └── content-types/author/schema.json
        │   ├── category/
        │   │   └── content-types/category/schema.json
        │   ├── tag/
        │   │   └── content-types/tag/schema.json
        │   └── project/
        │       └── content-types/project/schema.json
        │
        └── components/        # Componentes reutilizáveis
            └── shared/
                └── seo.json
```

## 🔐 Sistema de Permissões

```
Strapi Roles:
├── Public
│   └── Permissões: find, findOne (leitura)
│
├── Authenticated
│   └── Permissões: CRUD completo
│
└── Admin Users
    ├── Super Admin (tudo)
    ├── Editor (criar/editar posts)
    └── Author (criar posts próprios)
```

## 📦 Variáveis de Ambiente

```
Frontend (.env.local):
├── NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

Backend (strapi/.env):
├── DATABASE_HOST=...
├── DATABASE_PORT=...
├── DATABASE_NAME=...
├── DATABASE_USERNAME=...
├── DATABASE_PASSWORD=...
├── JWT_SECRET=...
└── NODE_ENV=development
```

## 🚀 Deploy

```
Desenvolvimento:
├── Next.js: localhost:3000
└── Strapi: localhost:1337

Produção:
├── Next.js: Vercel
└── Strapi: Railway
    └── PostgreSQL: Railway
```

---

---

**Última atualização**: Janeiro 2026  
**Nota**: Este documento foi atualizado para refletir a remoção do sistema i18n e a migração para campo `language` nos Posts. Todos os Content Types principais são agora globais (não localizados).

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF)
