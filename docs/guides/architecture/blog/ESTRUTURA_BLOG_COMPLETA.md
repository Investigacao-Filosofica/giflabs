# 📋 Estrutura Completa do Blog GIFLABS

> **Documento de planejamento completo da estrutura do blog**
> 
> **Data de criação**: Janeiro 2026  
> **Status**: Planejamento Finalizado ✅

---

## 📊 Visão Geral

O blog do GIFLABS é um **blog misto** que combina:
- Conteúdo acadêmico/científico
- Notícias institucionais
- Materiais educacionais
- Artigos e reflexões

**Princípio de design**: Simplicidade e escalabilidade, seguindo padrões contemporâneos de desenvolvimento.

**Escopo do Strapi (decisão de arquitetura):** O Strapi é usado **apenas para o blog** — conteúdo editorial. Os Content Types do Strapi são somente: Post, Author, Category, Tag, Project. Comentários, perfis (community_user), gamificação (XP, runas) ficam **fora do Strapi** (módulo dedicado, ex.: Prisma, mesmo PostgreSQL). Isso garante controle total e possibilidade de sair do Strapi no futuro sem perder dados de produto.

---

## 🎯 Decisões Arquiteturais Principais

### Sistema de Localização

**Decisão**: **NÃO localizado** para entidades principais

- ✅ **Posts**: Não localizados (aparecem em todos os idiomas)
- ✅ **Authors**: Não localizados (globais)
- ✅ **Categories**: Não localizados (globais)
- ✅ **Tags**: Não localizados (globais)
- ✅ **Projects**: Não localizados (globais)

**Campo de idioma**: Posts têm campo `language` (string) para indicar o idioma do conteúdo.

**Vantagens**:
- Schema mais simples
- Menos complexidade no banco de dados
- Posts sempre visíveis independente do idioma selecionado
- Fácil adicionar novos idiomas no futuro

---

## 📦 Content Types

### 1. POST

**Tipo**: Collection Type  
**Localizado**: ❌ Não  
**Descrição**: Posts do blog (artigos, notícias, materiais educacionais)

#### Campos Básicos

| Campo | Tipo | Obrigatório | Validação | Descrição |
|-------|------|-------------|-----------|-----------|
| `title` | string | ✅ Sim | max: 200 | Título do post |
| `subtitle` | string | ❌ Não | - | Subtítulo opcional |
| `slug` | uid | ✅ Sim | unique: global | URL amigável (único globalmente) |
| `content` | richtext | ✅ Sim | min: 500, max: 100000 | Conteúdo completo do post |
| `intro` | text | ❌ Não | - | Introdução/resumo inicial |
| `excerpt` | text | ❌ Não | max: 300 | Resumo curto para previews |
| `featured_image` | media (single) | ✅ Sim | images only | Imagem de destaque |
| `language` | string | ✅ Sim | default: "pt-BR" | Idioma do post (pt-BR, en, etc.) |
| `reading_time` | integer | ❌ Não | min: 1, default: 5 | Tempo de leitura em minutos (manual) |
| `is_featured` | boolean | ❌ Não | default: false | Destacar na homepage |
| `publishedAt` | datetime | ✅ Sim | - | Data de publicação |
| `scheduledAt` | datetime | ❌ Não | - | Agendamento de publicação futura |
| `createdAt` | datetime | ✅ Auto | - | Data de criação |
| `updatedAt` | datetime | ✅ Auto | - | Data de atualização |

#### Campos de Mídia

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `gallery` | media (multiple) | Galeria de imagens |
| `attachments` | media (multiple) | Arquivos para download (PDFs, documentos) |
| `video_url` | string | Link para vídeo (YouTube, Vimeo, etc.) |

#### Campos de Relacionamento

| Campo | Tipo | Relação | Descrição |
|-------|------|---------|-----------|
| `author` | relation | manyToOne → Author | Autor principal (obrigatório) |
| `coauthors` | relation | manyToMany → Author | Coautores (opcional) |
| `categories` | relation | manyToMany → Category | Categorias (múltiplas) |
| `tags` | relation | manyToMany → Tag | Tags (múltiplas) |
| `projects` | relation | manyToMany → Project | Projetos vinculados (opcional, múltiplos) |
| `related_posts` | relation | manyToMany → Post | Posts relacionados |
| `series_name` | string | - | Nome da série (se parte de série) |
| `series_part` | integer | - | Número da parte na série |

#### Campos de SEO

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `seo` | component | Componente `shared.seo` do Strapi |
| | | - meta_title |
| | | - meta_description |
| | | - og_image |
| | | - og_title |
| | | - og_description |
| | | - twitter_card |
| | | - canonical_url |

**Nota**: SEO não localizado (um único conjunto de metadados por post).

#### Campos de Analytics

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `view_count` | integer | Contador de visualizações (default: 0) |
| `share_count` | integer | Contador de compartilhamentos (default: 0) |
| `comment_count` | integer | Contador de comentários (default: 0) |

#### Estados de Publicação

- **Draft**: Rascunho (não publicado)
- **Published**: Publicado

**Workflow**:
- Membros da equipe: podem criar e publicar diretamente
- Autores convidados (sem usuário): equipe cria e publica em nome deles

---

### 2. AUTHOR

**Tipo**: Collection Type  
**Localizado**: ❌ Não  
**Descrição**: Autores dos posts (membros da equipe e convidados)

#### Campos Básicos

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | string | ✅ Sim | Nome completo |
| `slug` | uid | ✅ Sim | URL amigável (único) |
| `bio` | text | ❌ Não | Biografia |
| `avatar` | media (single) | ❌ Não | Foto do autor |
| `email` | email | ❌ Não | Email de contato |

#### Campos Acadêmicos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `academic_title` | string | Ex: "Prof. Dr.", "Mestre" |
| `role` | string | Cargo/função no GIFLABS |
| `institution` | string | Instituição de origem |
| `lattes_url` | string | Link para Lattes |
| `orcid` | string | ID ORCID |

#### Campos de Redes Sociais

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `social_links` | json | Objeto com links sociais |
| | | - twitter |
| | | - instagram |
| | | - linkedin |
| | | - github |
| | | - website |
| `website` | string | Site pessoal |

#### Relacionamentos

| Campo | Tipo | Relação |
|-------|------|---------|
| `posts` | relation | oneToMany → Post (inverso de author) |

#### Tipos de Authors

1. **Membros da Equipe**:
   - Têm Author (Content Type)
   - Podem ter Admin User (para acesso ao Strapi)
   - Permissão: criar e publicar diretamente

2. **Autores Convidados**:
   - Têm apenas Author (Content Type)
   - Não têm Admin User (por enquanto)
   - Equipe publica em nome deles
   - **Nota**: Pode evoluir para ter acesso depois se necessário

---

### 3. CATEGORY

**Tipo**: Collection Type  
**Localizado**: ❌ Não  
**Descrição**: Categorias principais do blog

#### Campos

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | string | ✅ Sim | Nome da categoria |
| `slug` | uid | ✅ Sim | URL amigável (único) |
| `description` | text | ❌ Não | Descrição da categoria |
| `color` | string | ❌ Não | Cor para badges/UI (hex) |

#### Relacionamentos

| Campo | Tipo | Relação |
|-------|------|---------|
| `posts` | relation | oneToMany → Post (inverso de categories) |

#### Categorias Planejadas

- Filosofia
- Tecnologia
- Literatura
- Educação
- Arte

**Nota**: Um post pode ter múltiplas categorias.

---

### 4. TAG

**Tipo**: Collection Type  
**Localizado**: ❌ Não  
**Descrição**: Tags/palavras-chave secundárias

#### Campos

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | string | ✅ Sim | Nome da tag |
| `slug` | uid | ✅ Sim | URL amigável (único) |
| `description` | text | ❌ Não | Descrição opcional |

#### Relacionamentos

| Campo | Tipo | Relação |
|-------|------|---------|
| `posts` | relation | manyToMany → Post (inverso de tags) |

---

### 5. PROJECT

**Tipo**: Collection Type  
**Localizado**: ❌ Não  
**Descrição**: Projetos do GIFLABS (Virtualia, Série IF, etc.)

#### Campos

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | string | ✅ Sim | Nome do projeto |
| `slug` | uid | ✅ Sim | URL amigável (único) |
| `description` | text | ❌ Não | Descrição do projeto |
| `color` | string | ❌ Não | Cor para badges/UI (hex) |

#### Relacionamentos

| Campo | Tipo | Relação |
|-------|------|---------|
| `posts` | relation | manyToMany → Post (inverso de projects) |

**Nota**: 
- Posts podem estar vinculados a múltiplos projetos (opcional)
- Projects aparecem como filtro principal no blog

---

### 6. Comentários — fora do Strapi

**Comentários não são Content Type do Strapi.** Eles ficam no **módulo Fórum** (PostgreSQL, ex.: Prisma), junto com Perfil (community_user) e Gamificação. O Post no Strapi tem o campo `comment_count` (integer) para exibição; esse contador é atualizado pela **nossa API** quando um comentário é criado ou removido no módulo Fórum.

- Schema e regras de Comment (post_id, community_user_id, content, approved, parent, etc.): ver [Atualização do BD para Gamificação](../gamificacao/ATUALIZACAO_BD_GAMIFICACAO.md) e [Fórum e Comentários](../forum/FORUM_COMENTARIOS.md).

---

## 🔗 Relacionamentos Entre Content Types (Strapi — apenas blog)

```
POST
├── author → AUTHOR (manyToOne) [obrigatório]
├── coauthors → AUTHOR[] (manyToMany) [opcional]
├── categories → CATEGORY[] (manyToMany) [múltiplas]
├── tags → TAG[] (manyToMany) [múltiplas]
├── projects → PROJECT[] (manyToMany) [opcional, múltiplos]
└── related_posts → POST[] (manyToMany) [opcional]

AUTHOR
└── posts → POST[] (oneToMany) [inverso]

CATEGORY
└── posts → POST[] (oneToMany) [inverso]

TAG
└── posts → POST[] (manyToMany) [inverso]

PROJECT
└── posts → POST[] (manyToMany) [inverso]
```

*Comment e community_user ficam fora do Strapi (módulo Fórum/Perfil).*

---

## 🔐 Sistema de Permissões

### Roles do Strapi

1. **Super Admin**
   - Acesso total ao sistema
   - Pode gerenciar usuários, configurações, etc.

2. **Editor**
   - Pode criar/editar/aprovar posts
   - Pode gerenciar todos os Content Types
   - Pode publicar posts de qualquer autor

3. **Author**
   - Pode criar posts próprios
   - Pode precisar aprovação (depende da configuração)
   - Pode editar apenas seus próprios posts

4. **Contributor**
   - Pode criar rascunhos
   - Não pode publicar diretamente
   - Precisa aprovação de Editor/Super Admin

### Workflow de Publicação

**Membros da Equipe**:
- ✅ Criar e publicar diretamente
- ✅ Editar posts próprios e de outros
- ✅ Gerenciar categorias, tags, projetos

**Autores Convidados** (sem usuário):
- ❌ Não têm acesso ao Strapi
- ✅ Equipe cria Author (Content Type) para eles
- ✅ Equipe publica posts em nome deles
- **Nota**: Pode evoluir para ter acesso depois se necessário

---

## 📝 Validações e Regras

### Posts

- **Slug**: Único globalmente (não por idioma)
- **Title**: Máximo 200 caracteres
- **Excerpt**: Máximo 300 caracteres
- **Content**: Mínimo 500 caracteres, máximo 100.000 caracteres
- **Language**: String (formato BCP 47: pt-BR, en, es, etc.)
- **Reading time**: Campo manual (editável)

### Authors

- **Slug**: Único globalmente
- **Name**: Obrigatório

### Categories

- **Slug**: Único globalmente
- **Name**: Obrigatório

### Tags

- **Slug**: Único globalmente
- **Name**: Obrigatório

### Projects

- **Slug**: Único globalmente
- **Name**: Obrigatório

---

## 🌐 Sistema de Idiomas

### Estrutura

- **Posts**: Campo `language` (string) indica idioma do conteúdo
- **Todos os outros**: Não localizados (globais)

### Idioma Padrão

- **Default**: `pt-BR`
- **Outros idiomas**: `en`, `es`, `fr`, etc. (podem ser adicionados depois)

### Filtros

- **Listagem padrão**: Blog exibe todos os posts (sem filtro de idioma)
- **Filtro opcional**: Usuário pode filtrar por idioma (pt-BR, en) via painel de filtros
- **URL**: Parâmetro `?language=pt-BR` ou `?language=en`
- **Badge**: Cada post exibe badge de idioma (PT, EN) no card; badge é clicável para filtrar

---

## 📊 Estrutura de Dados no Banco

### Tabelas Principais

```
posts
├── id
├── title
├── subtitle
├── slug (unique)
├── content
├── intro
├── excerpt
├── language
├── reading_time
├── is_featured
├── view_count
├── share_count
├── comment_count
├── series_name
├── series_part
├── video_url
├── featured_image_id
├── author_id (FK → authors)
├── publishedAt
├── scheduledAt
├── createdAt
├── updatedAt
└── (campos de SEO via componente)

authors
├── id
├── name
├── slug (unique)
├── bio
├── avatar_id
├── email
├── academic_title
├── role
├── institution
├── lattes_url
├── orcid
├── social_links (json)
├── website
├── createdAt
└── updatedAt

categories
├── id
├── name
├── slug (unique)
├── description
├── color
├── createdAt
└── updatedAt

tags
├── id
├── name
├── slug (unique)
├── description
├── createdAt
└── updatedAt

projects
├── id
├── name
├── slug (unique)
├── description
├── color
├── createdAt
└── updatedAt

posts_categories_links (tabela de junção)
├── post_id
└── category_id

posts_tags_links (tabela de junção)
├── post_id
└── tag_id

posts_projects_links (tabela de junção)
├── post_id
└── project_id

posts_authors_links (tabela de junção - coauthors)
├── post_id
└── author_id

posts_related_links (tabela de junção)
├── post_id
└── related_post_id
```

---

## 🚀 Próximos Passos de Implementação

### Fase 1: Estrutura Base ✅ (Planejado)

1. ✅ Criar schemas dos Content Types
2. ✅ Configurar relacionamentos
3. ✅ Definir validações
4. ✅ Configurar permissões

### Fase 2: Frontend ✅ (Implementado - Fevereiro 2026)

1. ✅ **Strapi**: Não usar `locale` do plugin i18n; usar campo `language` do Post
2. ✅ **Componentes**: `formatDate` usa idioma do contexto; imports não utilizados removidos
3. ✅ **Filtro por idioma**: Painel de filtros com opções Todos / Português / Inglês
4. ✅ **Badge de idioma**: Exibido em cada PostCard; clicável para filtrar

### Fase 3: Funcionalidades Futuras

1. Sistema de comentários (módulo Fórum, fora do Strapi; ver docs de Fórum e Gamificação)
2. Analytics avançados
3. Campos acadêmicos adicionais
4. Workflow de aprovação customizado

---

## 📚 Referências e Padrões

- **BCP 47**: Padrão para identificação de idiomas
- **Strapi i18n**: Documentação oficial do plugin i18n
- **Next.js App Router**: Estrutura de rotas
- **REST API**: Endpoints do Strapi

---

## ✅ Checklist de Implementação

### Backend (Strapi)

- [ ] Criar schema do Post (sem localização)
- [ ] Criar schema do Author (sem localização)
- [ ] Criar schema do Category (sem localização)
- [ ] Criar schema do Tag (sem localização)
- [ ] Criar schema do Project (sem localização)
- [ ] Configurar relacionamentos
- [ ] Configurar validações
- [ ] Configurar permissões
- [ ] Adicionar campo `language` ao Post
- [ ] Configurar componente SEO

### Frontend (Next.js)

- [x] Usar campo `language` (não `locale` do Strapi) em `getPosts()`
- [x] Página `/blog` com filtros (categoria, tag, autor, idioma, busca)
- [x] Página `/blog/[slug]` com `formatDate` usando idioma do contexto
- [x] Adicionar filtro por idioma (Todos / PT / EN)
- [x] Adicionar badge de idioma nos PostCards (clicável)

### Documentação

- [ ] Atualizar `ARQUITETURA_SISTEMA.md`
- [ ] Criar guia de uso do blog
- [ ] Documentar workflow de publicação

---

**Documento criado em**: Janeiro 2026  
**Última atualização**: Fevereiro 2026  
**Status**: ✅ Planejamento Completo | Fase 2 Frontend Implementada

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF)
