# Strapi CMS para GIFLABS

Este diretório contém a instalação do Strapi CMS para gerenciar o conteúdo do blog.

## Instalação

```bash
cd strapi
pnpm install
```

## Configuração

1. Configure as variáveis de ambiente em `.env`:
   - `HOST=0.0.0.0`
   - `PORT=1337`
   - `APP_KEYS` (gerado automaticamente)
   - `API_TOKEN_SALT` (gerado automaticamente)
   - `ADMIN_JWT_SECRET` (gerado automaticamente)

## Executar

```bash
# Desenvolvimento
pnpm develop

# Produção
pnpm start

# Build
pnpm build
```

## Acesso

- Admin Panel: http://localhost:1337/admin
- API: http://localhost:1337/api

## Estrutura

- `src/api/` - Content Types e APIs
- `src/components/` - Componentes reutilizáveis
- `src/plugins/` - Plugins customizados
- `config/` - Configurações do Strapi

## Integração com Next.js

O Next.js consome a API REST do Strapi em:
- `http://localhost:1337/api`

Para produção, configure a variável de ambiente:
- `NEXT_PUBLIC_STRAPI_URL=https://seu-strapi.com`
