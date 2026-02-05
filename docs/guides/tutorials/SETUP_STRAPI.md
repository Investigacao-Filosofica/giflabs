# 🚀 Setup do Strapi para GIFLABS

> **Tutorial completo para configurar o Strapi CMS do GIFLABS**  
> **Última atualização:** Janeiro 2026

---

## 📋 Pré-requisitos

- Node.js 20+ instalado
- Conta no Railway (banco de dados PostgreSQL)
- Git configurado

---

## 🎯 Visão Geral

O projeto GIFLABS já possui o Strapi configurado com:
- ✅ Content Types criados (Post, Author, Category, Tag, Project)
- ✅ Schema completo definido
- ✅ Relacionamentos configurados
- ✅ Componentes compartilhados (SEO)

Este tutorial é para **configurar um ambiente novo** ou **entender a estrutura existente**.

---

## 🔧 Configuração Inicial

### 1. Instalar Dependências

```bash
cd strapi
npm install
```

### 2. Configurar Variáveis de Ambiente

Crie o arquivo `.env` baseado no exemplo:

```bash
cp .env.example .env
```

Edite o `.env` com suas credenciais do Railway PostgreSQL:

```env
# Banco de Dados PostgreSQL (Railway)
DATABASE_HOST=xxxxx.proxy.rlwy.net
DATABASE_PORT=34199
DATABASE_NAME=railway
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua-senha
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false

# Strapi Secrets (gerar novos para produção)
APP_KEYS=toBeModified1,toBeModified2,toBeModified3,toBeModified4
API_TOKEN_SALT=toBeModified
ADMIN_JWT_SECRET=toBeModified
TRANSFER_TOKEN_SALT=toBeModified
JWT_SECRET=toBeModified

# Ambiente
NODE_ENV=development
```

📖 **Detalhes completos:** Veja [docs/reference/RAILWAY_ENV_VARS.md](../../reference/RAILWAY_ENV_VARS.md)

---

## 🗄️ Estrutura de Content Types

O projeto já possui os seguintes Content Types configurados:

### 1. **POST** (Posts do Blog)
- Campos principais: `title`, `slug`, `content`, `language`, `featured_image`
- Relacionamentos: `author` (manyToOne), `coauthors` (manyToMany), `categories` (manyToMany), `tags` (manyToMany), `projects` (manyToMany)
- Campo `language`: String obrigatória, default "pt-BR" (pt-BR, en, etc.) - **não usa i18n**

### 2. **AUTHOR** (Autores)
- Campos: `name`, `slug`, `bio`, `avatar`, `email`, `role`, `social_links`
- Relacionamentos: `posts` (oneToMany), `coauthored_posts` (manyToMany)

### 3. **CATEGORY** (Categorias)
- Campos: `name`, `slug`, `description`, `color`
- Relacionamentos: `posts` (manyToMany)

### 4. **TAG** (Tags)
- Campos: `name`, `slug`, `description`
- Relacionamentos: `posts` (manyToMany)

### 5. **PROJECT** (Projetos)
- Campos: `name`, `slug`, `description`, `color`
- Relacionamentos: `posts` (manyToMany)

📖 **Schema completo:** Veja [docs/guides/architecture/blog/ESTRUTURA_BLOG_COMPLETA.md](../architecture/blog/ESTRUTURA_BLOG_COMPLETA.md)

---

## 🔐 Configurar Permissões

### 1. Acessar o Admin

```bash
npm run develop
```

Acesse: http://localhost:1337/admin

### 2. Criar Primeiro Admin User

Na primeira execução, o Strapi pedirá para criar um usuário admin.

### 3. Configurar Permissões Públicas

1. Vá em **Settings** > **Users & Permissions Plugin** > **Roles** > **Public**
2. Configure as seguintes permissões (somente leitura):

**Posts:**
- ✅ `find`
- ✅ `findOne`

**Authors:**
- ✅ `find`
- ✅ `findOne`

**Categories:**
- ✅ `find`
- ✅ `findOne`

**Tags:**
- ✅ `find`
- ✅ `findOne`

**Projects:**
- ✅ `find`
- ✅ `findOne`

### 4. Configurar Permissões Autenticadas (Opcional)

Para usuários autenticados, configure CRUD completo em **Settings** > **Users & Permissions Plugin** > **Roles** > **Authenticated**.

---

## 🌐 Configuração de CORS

O CORS já está configurado em `strapi/config/middlewares.ts` para permitir requisições de:
- `http://localhost:3000` (Next.js local)
- `http://localhost:3001` (alternativa)
- `https://giflabs.vercel.app` (produção)
- Qualquer subdomínio do Vercel

---

## 🔗 Integração com Next.js

### 1. Variável de Ambiente

Configure no `.env.local` da raiz do projeto Next.js:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

Para produção (Vercel), configure:
```env
NEXT_PUBLIC_STRAPI_URL=https://giflabs-production.up.railway.app
```

### 2. Testar Conexão

O frontend já possui funções em `src/lib/strapi.ts` para buscar dados:

```typescript
import { getPosts, getCategories, getTags } from '@/lib/strapi';

// Buscar posts
const posts = await getPosts({ language: 'pt-BR' });

// Buscar categorias
const categories = await getCategories();

// Buscar tags
const tags = await getTags();
```

---

## 📝 Criar Conteúdo

### Criar um Post

1. Acesse **Content Manager** > **Post** > **Create new entry**
2. Preencha os campos obrigatórios:
   - `title`: Título do post
   - `slug`: URL amigável (gerado automaticamente)
   - `content`: Conteúdo em Rich Text
   - `language`: Idioma (pt-BR, en, etc.)
   - `featured_image`: Imagem principal
3. Configure relacionamentos:
   - Selecione `author` (obrigatório)
   - Adicione `categories` (múltiplas)
   - Adicione `tags` (múltiplas)
   - Adicione `projects` (opcional, múltiplos)
4. Clique em **Save** e depois **Publish**

📖 **Tutorial completo:** Veja [docs/guides/tutorials/COMO_CRIAR_POSTS.md](./COMO_CRIAR_POSTS.md)

---

## 👥 Criar Usuários e Autores

### Criar Admin User

1. Vá em **Settings** > **Administration Panel** > **Users**
2. Clique em **Invite user**
3. Preencha email e role (Admin, Editor, Author)

### Criar Author (Content Type)

1. Acesse **Content Manager** > **Author** > **Create new entry**
2. Preencha os campos:
   - `name`: Nome completo
   - `slug`: URL amigável
   - `bio`: Biografia
   - `role`: Função na equipe
   - `email`: Email (opcional)
   - `social_links`: Links sociais (JSON)
3. Clique em **Save** e **Publish**

📖 **Tutorial completo:** Veja [docs/guides/tutorials/COMO_CRIAR_USUARIOS.md](./COMO_CRIAR_USUARIOS.md)

---

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento (hot reload)
npm run develop

# Produção (build)
npm run build

# Produção (start)
npm run start

# CLI do Strapi
npm run strapi
```

---

## 📚 Documentação Relacionada

- **[Estrutura Completa do Blog](../architecture/blog/ESTRUTURA_BLOG_COMPLETA.md)** - Schema detalhado
- **[Arquitetura do Sistema](../architecture/site/ARQUITETURA_SISTEMA.md)** - Visão geral
- **[Variáveis Railway](../../reference/RAILWAY_ENV_VARS.md)** - Configuração do banco
- **[Como Criar Posts](./COMO_CRIAR_POSTS.md)** - Tutorial de criação
- **[Como Criar Usuários](./COMO_CRIAR_USUARIOS.md)** - Tutorial de usuários

---

## ⚠️ Notas Importantes

1. **Não use i18n plugin** - O projeto usa campo `language` no Post
2. **Permissões devem ser configuradas manualmente** - Não há bootstrap automático
3. **Dados iniciais** - Crie manualmente no admin (categorias, tags, projetos, autores)
4. **Produção** - Use variáveis de ambiente do Railway para produção

---

## 🐛 Troubleshooting

### Erro: "Port 1337 already in use"
```bash
# Windows
netstat -ano | findstr :1337
taskkill /PID <PID> /F
```

### Erro: "ECONNREFUSED" ou "getaddrinfo ENOTFOUND"
- Verifique se está usando o TCP Proxy público do Railway
- Verifique se as credenciais estão corretas
- Verifique se o serviço PostgreSQL está ativo no Railway

### Erro: "SASL authentication failed"
- A senha do banco de dados está incorreta
- Use valores diretos (não referências `${PGUSER}`) no Railway

---

**Última atualização:** Janeiro 2026  
**Versão Strapi:** 5.33.4

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF)
