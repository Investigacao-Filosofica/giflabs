# 📝 Arquitetura do Blog GIFLABS

> **Documento de planejamento para o sistema de blog integrado com Strapi**

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Opções de Arquitetura](#opções-de-arquitetura)
3. [Estrutura de Campos](#estrutura-de-campos)
4. [Formato do Conteúdo](#formato-do-conteúdo)
5. [Taxonomia e Organização](#taxonomia-e-organização)
6. [SEO e Metadados](#seo-e-metadados)
7. [Internacionalização](#internacionalização)
8. [Comparativo de Abordagens](#comparativo-de-abordagens)
9. [Recomendação Final](#recomendação-final)

---

## 🎯 Visão Geral

### Contexto do GIFLABS

O GIFLABS é um grupo de investigação filosófica que precisa de um blog para:
- Publicar artigos acadêmicos e reflexões
- Divulgar notícias sobre projetos
- Compartilhar traduções e conteúdo educacional
- Manter comunicação bilíngue (PT/EN)

### Requisitos Identificados

| Requisito | Prioridade | Notas |
|-----------|------------|-------|
| Suporte a múltiplos autores | Alta | 5+ pessoas |
| Bilíngue (PT/EN) | Alta | Campo `language` no Post |
| SEO otimizado | Alta | Acadêmico precisa de visibilidade |
| Categorização por projeto | Média | Digital Education, Série IF, etc. |
| Rich Text / Markdown | Média | Para formatação acadêmica |
| Imagens e mídia | Média | Ilustrações, diagramas |
| Agendamento de posts | Baixa | Futuro |
| Comentários | Baixa | Pode usar serviço externo |

---

## 🏗️ Opções de Arquitetura

### Opção 1: Estrutura Simples (Flat)

**Descrição**: Um único Content Type `Post` com todos os campos.

```
Post
├── title (string)
├── slug (string)
├── content (rich text)
├── excerpt (text)
├── featured_image (media)
├── author (relation → User)
├── category (enumeration)
├── tags (text array)
├── published_at (datetime)
└── language (string)
```

**Prós**:
- ✅ Simples de implementar
- ✅ Fácil de consultar
- ✅ Menos tabelas no banco
- ✅ Ideal para blogs pequenos/médios

**Contras**:
- ❌ Categorias fixas (enum)
- ❌ Menos flexível para expansão
- ❌ Tags como texto simples

**Uso recomendado**: Blogs pessoais, sites pequenos, MVPs.

---

### Opção 2: Estrutura Relacional (Normalizada)

**Descrição**: Múltiplos Content Types relacionados.

```
Post
├── title (string)
├── slug (string)
├── content (rich text)
├── excerpt (text)
├── featured_image (media)
├── author (relation → Author)
├── categories (relation → Category, many-to-many)
├── tags (relation → Tag, many-to-many)
├── projects (relation → Project, many-to-many)
├── published_at (datetime)
└── language (string)

Author
├── name (string)
├── bio (text)
├── avatar (media)
├── social_links (JSON)
└── posts (relation → Post, one-to-many)

Category
├── name (string)
├── slug (string)
├── description (text)
├── color (string)
└── posts (relation → Post, many-to-many)

Tag
├── name (string)
├── slug (string)
└── posts (relation → Post, many-to-many)
```

**Prós**:
- ✅ Flexível e escalável
- ✅ Categorias/tags gerenciáveis pelo admin
- ✅ Perfis de autores independentes
- ✅ Padrão da indústria (WordPress, Ghost)

**Contras**:
- ❌ Mais complexo de implementar
- ❌ Queries mais elaboradas
- ❌ Mais tabelas no banco

**Uso recomendado**: Blogs corporativos, sites de notícias, projetos de médio/grande porte.

---

### Opção 3: Estrutura Modular (Blocos/Components)

**Descrição**: Conteúdo construído com blocos reutilizáveis (como Notion/Gutenberg).

```
Post
├── title (string)
├── slug (string)
├── content (dynamic zone) ←── Múltiplos tipos de bloco
│   ├── TextBlock (rich text)
│   ├── ImageBlock (media + caption)
│   ├── QuoteBlock (text + author)
│   ├── CodeBlock (text + language)
│   ├── VideoBlock (url + provider)
│   └── EmbedBlock (url)
├── excerpt (text)
├── featured_image (media)
├── author (relation → Author)
├── categories (relation → Category, many-to-many)
└── language (string)
```

**Prós**:
- ✅ Máxima flexibilidade de layout
- ✅ Conteúdo estruturado
- ✅ Ideal para conteúdo visual variado
- ✅ Moderno (padrão 2024+)

**Contras**:
- ❌ Mais complexo de renderizar no frontend
- ❌ Curva de aprendizado para editores
- ❌ Pode ser "overkill" para texto simples

**Uso recomendado**: Sites de mídia, magazines, conteúdo altamente visual.

---

## 📝 Estrutura de Campos

### Campos Essenciais (Obrigatórios)

| Campo | Tipo | Descrição | Validação |
|-------|------|-----------|-----------|
| `title` | String | Título do post | Required, max 200 chars |
| `slug` | UID | URL amigável | Unique, auto-gerado |
| `content` | Rich Text / Blocks | Corpo do artigo | Required |
| `published_at` | DateTime | Data de publicação | Required |

### Campos Recomendados (SEO)

| Campo | Tipo | Descrição | Notas |
|-------|------|-----------|-------|
| `excerpt` | Text | Resumo/descrição | Para meta description |
| `featured_image` | Media | Imagem de capa | Para Open Graph |
| `meta_title` | String | Título SEO | Opcional, fallback para title |
| `meta_description` | Text | Descrição SEO | Opcional, fallback para excerpt |

### Campos de Organização

| Campo | Tipo | Descrição | Notas |
|-------|------|-----------|-------|
| `author` | Relation | Autor do post | User ou Author custom |
| `categories` | Relation | Categorias | Múltiplas por post (manyToMany) |
| `tags` | Relation/Array | Tags secundárias | Múltiplas por post |
| `projects` | Relation | Projetos relacionados | Múltiplos por post (manyToMany) |
| `language` | String | Idioma do conteúdo | pt-BR, en, etc. |

### Campos Avançados (Opcionais)

| Campo | Tipo | Descrição | Uso |
|-------|------|-----------|-----|
| `reading_time` | Integer | Tempo de leitura | Calculado automaticamente |
| `views_count` | Integer | Contador de views | Analytics |
| `is_featured` | Boolean | Post em destaque | Homepage |
| `related_posts` | Relation | Posts relacionados | Navegação |
| `table_of_contents` | JSON | Sumário automático | Artigos longos |
| `canonical_url` | String | URL canônica | SEO avançado |

---

## 📄 Formato do Conteúdo

### Opção A: Rich Text (WYSIWYG)

**O que é**: Editor visual tipo Word/Google Docs.

```
Strapi usa: CKEditor ou TipTap (dependendo da versão)
```

**Prós**:
- ✅ Familiar para não-técnicos
- ✅ Preview em tempo real
- ✅ Formatação visual imediata

**Contras**:
- ❌ HTML gerado pode ser inconsistente
- ❌ Menos controle sobre output
- ❌ Pode gerar código "sujo"

**Ideal para**: Editores não-técnicos, conteúdo simples.

---

### Opção B: Markdown

**O que é**: Texto com sintaxe de marcação simples.

```markdown
# Título

Parágrafo com **negrito** e *itálico*.

- Lista
- De itens

> Citação
```

**Prós**:
- ✅ Portável (funciona em qualquer lugar)
- ✅ Versionável (diff amigável)
- ✅ Leve e rápido
- ✅ Padrão em documentação técnica

**Contras**:
- ❌ Curva de aprendizado
- ❌ Sem preview nativo no Strapi
- ❌ Limitado para layouts complexos

**Ideal para**: Desenvolvedores, documentação, conteúdo acadêmico.

---

### Opção C: Blocks (Dynamic Zone)

**O que é**: Conteúdo estruturado em blocos tipados.

```json
{
  "content": [
    { "__component": "blocks.text", "body": "..." },
    { "__component": "blocks.image", "url": "...", "caption": "..." },
    { "__component": "blocks.quote", "text": "...", "author": "..." }
  ]
}
```

**Prós**:
- ✅ Máxima flexibilidade
- ✅ Conteúdo estruturado (JSON)
- ✅ Renderização customizada
- ✅ Validação por tipo de bloco

**Contras**:
- ❌ Mais complexo de implementar
- ❌ Requer componentes React específicos
- ❌ Experiência de edição diferente

**Ideal para**: Sites de mídia, layouts complexos, conteúdo interativo.

---

### Opção D: MDX (Markdown + JSX)

**O que é**: Markdown que permite componentes React.

```mdx
# Meu Artigo

Texto normal em markdown.

<VideoPlayer url="https://youtube.com/..." />

<InfoBox type="warning">
  Atenção: isso é importante!
</InfoBox>

Mais texto...
```

**Prós**:
- ✅ Poder do Markdown + React
- ✅ Componentes interativos
- ✅ Popular em docs técnicos

**Contras**:
- ❌ Não nativo no Strapi (precisa processar)
- ❌ Requer conhecimento de React
- ❌ Mais complexo de validar

**Ideal para**: Documentação técnica, blogs de desenvolvedores.

---

## 🏷️ Taxonomia e Organização

### Categorias vs Tags

| Aspecto | Categorias | Tags |
|---------|------------|------|
| **Hierarquia** | Pode ter subcategorias | Flat (sem hierarquia) |
| **Quantidade por post** | Geralmente 1 | Múltiplas |
| **Propósito** | Organização principal | Temas secundários |
| **Exemplo** | "Artigos", "Notícias" | "blockchain", "educação" |

### Estrutura Sugerida para GIFLABS

#### Categorias (por tipo de conteúdo)
```
- Artigos Acadêmicos
- Notícias
- Traduções (Série IF)
- Tutoriais
- Eventos
- Opinião
```

#### Tags (por tema)
```
- filosofia
- blockchain
- web3
- educação
- arte-digital
- metaverso
- ética
- tecnologia
- literatura
- AI
```

#### Projetos (relação com projetos existentes)
```
- Digital Education App
- Série IF
- Virtualia
- Literatura
- Youtube GIFLABS
- Metaverso
- Arquivologia Digital
```

---

## 🔍 SEO e Metadados

### Campos SEO Essenciais

```typescript
interface PostSEO {
  // Básico
  title: string;           // <title> tag
  description: string;     // <meta name="description">
  
  // Open Graph (Facebook, LinkedIn)
  og_title?: string;       // Fallback para title
  og_description?: string; // Fallback para description
  og_image?: Media;        // Fallback para featured_image
  
  // Twitter Cards
  twitter_card?: 'summary' | 'summary_large_image';
  
  // Avançado
  canonical_url?: string;  // URL canônica
  no_index?: boolean;      // Bloquear indexação
  
  // Structured Data (JSON-LD)
  schema_type?: 'Article' | 'BlogPosting' | 'ScholarlyArticle';
}
```

### Schema.org para Artigos Acadêmicos

```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "Título do Artigo",
  "author": {
    "@type": "Person",
    "name": "Prof. Dr. Rodrigo Cid"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GIFLABS"
  },
  "datePublished": "2026-01-23",
  "image": "url-da-imagem"
}
```

---

## 🌍 Sistema de Idiomas

### Abordagem Escolhida: Campo `language` (String) ✅

**Decisão Arquitetural**: Content Types principais **não são localizados**. Posts têm campo `language` (string) para indicar o idioma do conteúdo.

```
Post
├── title (string)
├── content (rich text)
├── language (string) ←── Campo de idioma (pt-BR, en, etc.)
└── ...
```

**Vantagens**:
- ✅ Schema mais simples
- ✅ Menos complexidade no banco de dados
- ✅ Posts sempre visíveis independente do idioma selecionado
- ✅ Fácil adicionar novos idiomas no futuro
- ✅ Sem necessidade de criar posts duplicados por idioma

**Como Funciona**:
- Cada post tem um campo `language` (obrigatório)
- Valores comuns: `"pt-BR"`, `"en"`, `"es"`, etc.
- Filtros podem ser aplicados por `language` na API
- Frontend pode filtrar posts por idioma se necessário
- Todos os outros Content Types (Author, Category, Tag, Project) são globais

**Exemplo de Uso**:
```typescript
// Buscar posts em português
GET /api/posts?filters[language][$eq]=pt-BR

// Buscar posts em inglês
GET /api/posts?filters[language][$eq]=en

// Buscar todos os posts (sem filtro)
GET /api/posts
```

---

### Abordagens Alternativas (Não Utilizadas)

### Abordagem 1: Campo por Idioma

```
Post
├── title_pt (string)
├── title_en (string)
├── content_pt (rich text)
├── content_en (rich text)
└── ...
```

**Prós**: Simples, tudo em um lugar  
**Contras**: Campos duplicados, difícil escalar

---

### Abordagem 2: i18n Plugin

```
Post (locale: pt-BR)
├── title: "Título em Português"
├── content: "Conteúdo em português..."
└── ...

Post (locale: en)
├── title: "Title in English"
├── content: "Content in English..."
└── ...
```

**Prós**: 
- Nativo do Strapi
- Cada idioma é uma entrada separada
- Fallback automático

**Contras**: 
- Posts precisam ser criados em cada idioma
- Mais registros no banco
- Mais complexidade no schema
- **Não utilizado neste projeto**

---

### Abordagem 3: Relação de Traduções

```
Post
├── title (string)
├── content (rich text)
├── language (enum: pt, en)
├── translations (relation → Post, self-referencing)
└── ...
```

**Prós**: Flexível, relaciona traduções explicitamente  
**Contras**: Mais complexo de gerenciar  
**Status**: Não utilizado - campo `language` simples é suficiente

---

## 📊 Comparativo de Abordagens

### Por Complexidade

| Abordagem | Complexidade | Tempo de Setup | Manutenção |
|-----------|--------------|----------------|------------|
| Flat + Rich Text | ⭐ Baixa | 1-2 horas | Fácil |
| Relacional + Rich Text | ⭐⭐ Média | 3-4 horas | Média |
| Relacional + Blocks | ⭐⭐⭐ Alta | 6-8 horas | Complexa |
| MDX (custom) | ⭐⭐⭐⭐ Muito Alta | 10+ horas | Complexa |

### Por Caso de Uso

| Caso de Uso | Recomendação |
|-------------|--------------|
| Blog pessoal simples | Flat + Rich Text |
| Blog corporativo | Relacional + Rich Text |
| Site de notícias | Relacional + Blocks |
| Documentação técnica | MDX ou Markdown |
| **GIFLABS (acadêmico)** | **Relacional + Rich Text** |

### Por Volume de Conteúdo

| Volume | Recomendação |
|--------|--------------|
| < 50 posts | Flat |
| 50-500 posts | Relacional |
| > 500 posts | Relacional + Cache |

---

## ✅ Recomendação Final para GIFLABS

### Arquitetura Escolhida: **Relacional + Rich Text**

**Justificativa**:
1. **Acadêmico**: Precisa de estrutura para autores e categorias
2. **Bilíngue**: Campo `language` no Post para indicar idioma
3. **Escalável**: Múltiplos projetos e autores
4. **Balanceado**: Não é simples demais nem complexo demais

### Content Types Propostos (Strapi — apenas blog)

*Comentários, perfil (community_user) e gamificação ficam fora do Strapi (módulo dedicado, ex.: Prisma).*

```
📁 Content Types (Strapi)

├── 📝 Post (Collection)
│   ├── title (string, required)
│   ├── subtitle (string)
│   ├── slug (UID, unique)
│   ├── content (rich text, required)
│   ├── intro (text)
│   ├── excerpt (text, max 300)
│   ├── featured_image (media, single, required)
│   ├── language (string, required) ←── Campo de idioma
│   ├── author (relation → Author, manyToOne)
│   ├── coauthors (relation → Author, manyToMany)
│   ├── categories (relation → Category, manyToMany)
│   ├── tags (relation → Tag, many)
│   ├── projects (relation → Project, manyToMany)
│   ├── related_posts (relation → Post, manyToMany)
│   ├── reading_time (integer)
│   ├── is_featured (boolean)
│   ├── scheduledAt (datetime)
│   ├── gallery (media, multiple)
│   ├── attachments (media, multiple)
│   ├── video_url (string)
│   ├── series_name (string)
│   ├── series_part (integer)
│   ├── view_count (integer)
│   ├── share_count (integer)
│   ├── comment_count (integer)
│   ├── published_at (datetime)
│   └── seo (component → SEO)

├── 👤 Author (Collection)
│   ├── name (string, required)
│   ├── slug (UID, unique)
│   ├── bio (text)
│   ├── avatar (media, single)
│   ├── email (email)
│   ├── academic_title (string)
│   ├── role (string)
│   ├── institution (string)
│   ├── lattes_url (string)
│   ├── orcid (string)
│   ├── website (string)
│   └── social_links (JSON)

├── 📂 Category (Collection)
│   ├── name (string, required)
│   ├── slug (UID, unique)
│   ├── description (text)
│   └── color (string)

├── 🏷️ Tag (Collection)
│   ├── name (string, required)
│   └── slug (UID, unique)

├── 🔬 Project (Collection)
│   ├── name (string, required)
│   ├── slug (UID, unique)
│   ├── description (text)
│   ├── color (string)
│   └── icon (string)

└── 🔧 Components
    └── 🔍 SEO
        ├── meta_title (string)
        ├── meta_description (text)
        ├── og_image (media)
        └── no_index (boolean)
```

### Próximos Passos

1. **Revisar e aprovar** esta arquitetura
2. **Criar Content Types** no painel do Strapi
3. **Configurar permissões** de API
4. **Integrar com Next.js** frontend
5. **Criar componentes** de listagem e visualização

---

## 📚 Referências

- [Strapi Documentation - Content Types](https://docs.strapi.io/dev-docs/backend-customization/models)
- [Strapi Blog Template](https://github.com/strapi/strapi-template-blog)
- [Next.js + Strapi Integration](https://docs.strapi.io/dev-docs/integrations/next-js)
- [Schema.org Article](https://schema.org/Article)
- [Open Graph Protocol](https://ogp.me/)

---

**📅 Documento criado em**: 23/01/2026  
**🔄 Status**: ✅ IMPLEMENTADO (Janeiro 2026)  
**🏗️ Arquitetura escolhida**: Relacional + Rich Text + Campo `language`

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF)
