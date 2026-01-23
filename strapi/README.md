# GIFLABS Strapi CMS

Sistema de gerenciamento de conteúdo (CMS) para o blog do GIFLABS.

## 📋 Informações do Projeto

| Item | Valor |
|------|-------|
| **Versão Strapi** | 5.33.4 (Community Edition) |
| **Banco de Dados** | PostgreSQL (Supabase) |
| **Node.js** | >=20.0.0 <=24.x.x |
| **Idiomas** | Português (pt-BR), Inglês (en) |

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20+ instalado
- Conta no Supabase (banco de dados PostgreSQL gratuito)

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

Edite o `.env` com suas credenciais do Supabase:
```env
DATABASE_HOST=db.xxxxx.supabase.co
DATABASE_PORT=5432
DATABASE_NAME=postgres
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua-senha
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

### 3. Executar em desenvolvimento
```bash
npm run develop
```

### 4. Acessar o painel admin
Abra: **http://localhost:1337/admin**

---

## 📁 Estrutura de Arquivos

```
strapi/
├── config/
│   ├── admin.ts          # Configurações do painel admin
│   ├── database.ts       # Conexão com banco de dados
│   ├── middlewares.ts    # Middlewares do Strapi
│   ├── plugins.ts        # Configuração de plugins (i18n)
│   └── server.ts         # Configurações do servidor
├── database/
│   └── migrations/       # Migrações do banco de dados
├── public/
│   └── uploads/          # Arquivos enviados pelos usuários
├── src/
│   ├── admin/            # Customizações do painel admin
│   │   └── app.example.tsx
│   └── index.ts          # Hooks register/bootstrap
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

### Supabase (Recomendado - Gratuito)

1. Crie uma conta em https://supabase.com
2. Crie um novo projeto
3. Vá em **Settings > Database**
4. Copie as credenciais de conexão
5. Configure o `.env`

### Resetar o Banco de Dados (se necessário)

Execute no SQL Editor do Supabase:
```sql
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
```

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

## 🌐 Internacionalização (i18n)

O Strapi está configurado com:
- **Idioma padrão**: Português (pt-BR)
- **Idiomas disponíveis**: pt-BR, en

Configuração em `config/plugins.ts`.

---

## 🔗 Integração com Next.js

### API REST
- Base URL: `http://localhost:1337/api`
- Documentação: `http://localhost:1337/documentation`

### Exemplo de Fetch
```typescript
const response = await fetch('http://localhost:1337/api/posts');
const { data } = await response.json();
```

---

## 📚 Documentação Oficial

- [Strapi Docs](https://docs.strapi.io)
- [Supabase Docs](https://supabase.com/docs)
- [Strapi Discord](https://discord.strapi.io)

---

## 🚨 Troubleshooting

### Erro: "Port 1337 already in use"
```bash
# Windows
netstat -ano | findstr :1337
taskkill /PID <PID> /F
```

### Erro: "ECONNREFUSED"
- Verifique se as credenciais do Supabase estão corretas
- Verifique se o projeto Supabase está ativo

### Erro: "SASL authentication failed"
- A senha do banco de dados está incorreta
- Resete a senha no painel do Supabase

---

## 📝 Licença

MIT License - GIFLABS © 2026
