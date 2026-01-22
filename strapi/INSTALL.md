# Instalação do Strapi para GIFLABS

## Passo 1: Instalar o Strapi

Execute o comando na raiz do projeto:

```bash
cd strapi
npx create-strapi-app@latest . --quickstart --skip-cloud
```

**Quando perguntar:**
- "Participate in anonymous A/B testing?" → Responda `N` (não)
- Aguarde a instalação das dependências

## Passo 2: Primeira Execução

```bash
cd strapi
pnpm develop
```

Na primeira execução, o Strapi abrirá automaticamente o navegador em `http://localhost:1337/admin` para criar o primeiro usuário administrador.

**Crie um usuário admin:**
- Nome completo
- Email
- Senha (guarde bem!)

## Passo 3: Configurar Content Type - Blog Post

Após fazer login no admin panel:

1. Vá em **Content-Type Builder** (ícone de puzzle no menu lateral)
2. Clique em **Create new collection type**
3. Nome: `Blog Post`
4. Clique em **Continue**

### Adicionar Campos:

1. **title** (Text - Short text)
   - Clique em **Add another field**
   - Selecione **Text**
   - Nome: `title`
   - Tipo: **Short text**
   - Marque como **Required**

2. **slug** (Text - Short text, Unique)
   - Adicione campo **Text**
   - Nome: `slug`
   - Tipo: **Short text**
   - Marque como **Required** e **Unique**

3. **excerpt** (Text - Long text)
   - Adicione campo **Text**
   - Nome: `excerpt`
   - Tipo: **Long text**

4. **content** (Rich text)
   - Adicione campo **Rich text**
   - Nome: `content`
   - Marque como **Required**

5. **author** (Relation - User)
   - Adicione campo **Relation**
   - Relacionar com **User**
   - Tipo: **Many-to-one** (Many Blog Posts to One User)

6. **publishedAt** (Date)
   - Adicione campo **Date**
   - Nome: `publishedAt`
   - Tipo: **Date**

7. **featuredImage** (Media - Single media)
   - Adicione campo **Media**
   - Nome: `featuredImage`
   - Tipo: **Single media**

8. **category** (Text - Short text)
   - Adicione campo **Text**
   - Nome: `category`
   - Tipo: **Short text**

9. Clique em **Save** e aguarde o rebuild

## Passo 4: Configurar Permissões da API

1. Vá em **Settings** (ícone de engrenagem)
2. Clique em **Users & Permissions Plugin**
3. Clique em **Roles**
4. Clique em **Public** role
5. Em **Permissions**, encontre **Blog Post**
6. Marque as permissões:
   - ✅ **find** (listar posts)
   - ✅ **findOne** (ver post individual)
7. Clique em **Save**

## Passo 5: Criar um Post de Teste

1. Vá em **Content Manager**
2. Clique em **Blog Post**
3. Clique em **Create new entry**
4. Preencha:
   - Title: "Primeiro Post do Blog"
   - Slug: "primeiro-post-do-blog"
   - Excerpt: "Este é um post de teste"
   - Content: "Conteúdo do post aqui..."
   - Author: Selecione seu usuário
   - Published At: Data atual
   - Featured Image: (opcional) Faça upload de uma imagem
   - Category: "Geral"
5. Clique em **Save**
6. Clique em **Publish**

## Passo 6: Testar a API

Abra no navegador ou use curl:

```bash
# Listar todos os posts
curl http://localhost:1337/api/blog-posts

# Ver um post específico
curl http://localhost:1337/api/blog-posts/1
```

## Próximos Passos

Após configurar o Strapi, você pode:

1. Integrar com Next.js (ver `../strapi-setup.md`)
2. Criar componentes de blog no Next.js
3. Configurar variáveis de ambiente

## Comandos Úteis

```bash
# Desenvolvimento
pnpm strapi:dev

# Build para produção
pnpm strapi:build

# Executar em produção
pnpm strapi:start
```
