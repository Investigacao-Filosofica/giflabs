# GIFLABS Strapi CMS

Sistema de gerenciamento de conteúdo (CMS) para o blog do GIFLABS.

## 📋 Informações do Projeto

| Item | Valor |
|------|-------|
| **Versão Strapi** | 5.33.4 (Community Edition) |
| **Banco de Dados** | PostgreSQL (Railway) |
| **Node.js** | >=20.0.0 <=24.x.x |
| **Idiomas** | Campo `language` no Post (pt-BR, en, etc.) |
| **Hospedagem** | Railway |
| **URL Produção** | https://giflabs-production.up.railway.app |

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20+ instalado
- Conta no Railway (banco de dados PostgreSQL)
- Para desenvolvimento local: credenciais do PostgreSQL Railway

### 1. Instalar dependências
```bash
cd strapi
npm install
```

### 2. Configurar variáveis de ambiente
Crie o arquivo `.env` baseado no exemplo:
```bash
cp .env.example .env
```

Edite o `.env` com suas credenciais do Railway PostgreSQL:
```env
DATABASE_HOST=xxxxx.proxy.rlwy.net
DATABASE_PORT=34199
DATABASE_NAME=railway
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua-senha
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

📖 Veja [docs/reference/RAILWAY_ENV_VARS.md](../docs/reference/RAILWAY_ENV_VARS.md) para detalhes sobre como obter as credenciais do Railway.

📚 **Tutorial completo de setup:** Veja [docs/guides/tutorials/SETUP_STRAPI.md](../docs/guides/tutorials/SETUP_STRAPI.md)

### 3. Executar em desenvolvimento
```bash
npm run develop
```

### 4. Acessar o painel admin
- **Local**: http://localhost:1337/admin
- **Produção**: https://giflabs-production.up.railway.app/admin

---

## 📁 Estrutura de Arquivos

```
strapi/
├── config/
│   ├── admin.ts          # Configurações do painel admin
│   ├── database.ts       # Conexão com banco de dados
│   ├── middlewares.ts    # Middlewares do Strapi
│   └── server.ts         # Configurações do servidor
├── database/
│   └── migrations/       # Migrações do banco de dados
├── public/
│   └── uploads/          # Arquivos enviados pelos usuários
├── src/
│   ├── api/              # Content Types
│   │   ├── post/
│   │   │   └── content-types/post/schema.json
│   │   ├── author/
│   │   │   └── content-types/author/schema.json
│   │   ├── category/
│   │   │   └── content-types/category/schema.json
│   │   ├── tag/
│   │   │   └── content-types/tag/schema.json
│   │   └── project/
│   │       └── content-types/project/schema.json
│   ├── components/       # Componentes reutilizáveis
│   │   └── shared/
│   │       └── seo.json
│   └── admin/            # Customizações do painel admin
│       └── app.example.tsx
├── types/
│   └── generated/        # Tipos TypeScript gerados
├── .env                  # Variáveis de ambiente (NÃO COMMITAR!)
├── package.json          # Dependências
└── tsconfig.json         # Configuração TypeScript
```

---

## 🔧 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run develop` | Inicia em modo desenvolvimento (hot reload) |
| `npm run start` | Inicia em modo produção |
| `npm run build` | Compila para produção |
| `npm run strapi` | CLI do Strapi |

---

## 🗄️ Banco de Dados

### Railway PostgreSQL

O projeto usa PostgreSQL hospedado no Railway.

1. Acesse https://railway.com
2. Crie um novo projeto
3. Adicione um serviço PostgreSQL
4. Vá em **Settings > Networking** para obter o TCP Proxy público
5. Copie as credenciais das variáveis de ambiente
6. Configure o `.env` com os valores do TCP Proxy

📖 Veja [docs/reference/RAILWAY_ENV_VARS.md](../docs/reference/RAILWAY_ENV_VARS.md) para instruções detalhadas.

### Variáveis de Ambiente do Railway

O Railway fornece automaticamente:
- `PGHOST` - Host do banco (use o TCP Proxy público)
- `PGPORT` - Porta do TCP Proxy
- `PGDATABASE` - Nome do banco
- `PGUSER` - Usuário
- `PGPASSWORD` - Senha

---

## 🔐 Segurança

### Variáveis de Ambiente Obrigatórias

| Variável | Descrição |
|----------|-----------|
| `APP_KEYS` | Chaves da aplicação (separadas por vírgula) |
| `API_TOKEN_SALT` | Salt para tokens de API |
| `ADMIN_JWT_SECRET` | Secret para JWT do admin |
| `TRANSFER_TOKEN_SALT` | Salt para tokens de transferência |
| `JWT_SECRET` | Secret para JWT de usuários |
| `DATABASE_*` | Credenciais do banco de dados |

⚠️ **IMPORTANTE**: Nunca commite o arquivo `.env`!

---

## 🌐 Sistema de Idiomas

**Decisão Arquitetural**: Content Types principais **não são localizados** (não usam plugin i18n). 

Posts têm um campo `language` (string) para indicar o idioma do conteúdo:
- Valores comuns: `"pt-BR"`, `"en"`, `"es"`, etc.
- Campo obrigatório no Post
- Filtros podem ser aplicados por `language` na API
- Todos os outros Content Types (Author, Category, Tag, Project) são globais

**Exemplo de uso na API**:
```
GET /api/posts?filters[language][$eq]=pt-BR
GET /api/posts?filters[language][$eq]=en
```

**Vantagens desta abordagem**:
- ✅ Schema mais simples
- ✅ Menos complexidade no banco de dados
- ✅ Posts sempre visíveis independente do idioma
- ✅ Fácil adicionar novos idiomas no futuro

---

## 🔗 Integração com Next.js

### API REST
- **Local**: `http://localhost:1337/api`
- **Produção**: `https://giflabs-production.up.railway.app/api`
- **Documentação**: `http://localhost:1337/documentation` (local)

### Variável de Ambiente no Next.js

Configure no Vercel (ou `.env.local`):
```env
NEXT_PUBLIC_STRAPI_URL=https://giflabs-production.up.railway.app
```

### Exemplo de Fetch
```typescript
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const response = await fetch(`${STRAPI_URL}/api/posts`);
const { data } = await response.json();
```

---

## 📚 Documentação Oficial

- [Strapi Docs](https://docs.strapi.io)
- [Railway Docs](https://docs.railway.com)
- [Strapi Discord](https://discord.strapi.io)

---

## 🚨 Troubleshooting

### Erro: "Port 1337 already in use"
```bash
# Windows
netstat -ano | findstr :1337
taskkill /PID <PID> /F
```

### Erro: "ECONNREFUSED" ou "getaddrinfo ENOTFOUND"
- Verifique se está usando o TCP Proxy público do Railway (não o hostname interno)
- Verifique se as credenciais do Railway estão corretas
- Verifique se o serviço PostgreSQL no Railway está ativo

### Erro: "SASL authentication failed"
- A senha do banco de dados está incorreta
- Verifique se está usando valores diretos (não referências `${PGUSER}`) no Railway

### Erro: "password authentication failed for user"
- No Railway, use valores diretos das variáveis, não referências `${PGUSER}`
- Verifique se `DATABASE_USERNAME` e `DATABASE_PASSWORD` estão corretos

---

## 📝 Licença

MIT License - GIFLABS © 2026
