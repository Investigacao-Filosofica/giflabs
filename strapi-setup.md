# Setup do Strapi para GIFLABS

## Instalação Manual

Como o comando interativo está pedindo confirmações, siga estes passos:

### 1. Instalar Strapi na pasta strapi/

```bash
cd strapi
npx create-strapi-app@latest . --quickstart --skip-cloud
```

Quando perguntar sobre A/B testing, responda `N` (não).

### 2. Configurar o banco de dados

O Strapi será configurado com SQLite por padrão (ideal para desenvolvimento).

### 3. Criar o primeiro admin

Na primeira execução, o Strapi pedirá para criar um usuário admin.

### 4. Configurar Content Types

Após o setup, acesse http://localhost:1337/admin e crie:

1. **Content Type: Blog Post**
   - Campos:
     - `title` (Text, Short text)
     - `slug` (Text, Short text, Unique)
     - `excerpt` (Text, Long text)
     - `content` (Rich text)
     - `author` (Relation, User)
     - `publishedAt` (Date)
     - `featuredImage` (Media, Single media)
     - `tags` (Component ou Relation)
     - `category` (Relation)

### 5. Configurar Permissões

1. Vá em Settings > Users & Permissions Plugin > Roles
2. Configure a role `Public` para permitir acesso à API:
   - `blog-post`: `find` e `findOne`

### 6. Integração com Next.js

Criar arquivo `.env.local` na raiz do projeto Next.js:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=seu-token-aqui
```

### 7. Scripts úteis

Adicionar ao `package.json` da raiz:

```json
{
  "scripts": {
    "strapi:dev": "cd strapi && pnpm develop",
    "strapi:build": "cd strapi && pnpm build",
    "strapi:start": "cd strapi && pnpm start"
  }
}
```

## Estrutura Recomendada

```
giflabs/
├── strapi/              # CMS Strapi
│   ├── src/
│   │   ├── api/         # Content Types
│   │   ├── components/  # Componentes reutilizáveis
│   │   └── plugins/     # Plugins customizados
│   └── config/          # Configurações
└── src/                 # Next.js app
    └── app/
        └── blog/        # Páginas do blog
```

## Próximos Passos

1. ✅ Criar branch `feature/strapi-blog-integration`
2. ⏳ Instalar Strapi
3. ⏳ Configurar Content Types
4. ⏳ Criar componentes Next.js para blog
5. ⏳ Integrar API do Strapi
