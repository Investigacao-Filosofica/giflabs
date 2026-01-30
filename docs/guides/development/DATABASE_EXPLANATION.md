# 🗄️ Entendendo o Sistema de Banco de Dados do GIFLABS

> **Guia completo sobre como funcionam os bancos de dados no projeto**  
> **Última atualização:** Janeiro 2026

---

## 📋 Visão Geral

O projeto GIFLABS usa **PostgreSQL** como banco de dados principal. Atualmente você tem:

1. **Railway PostgreSQL** - Banco de produção (em uso)
2. **Supabase PostgreSQL** - Banco de desenvolvimento local (em uso)
3. **Banco Local** - Opção teórica (PostgreSQL instalado no computador - não configurado)

---

## 🏗️ Arquitetura de Ambientes

### **Produção (Railway)**
- **Onde**: Servidor Railway (nuvem)
- **Banco**: PostgreSQL no Railway
- **URL Strapi**: `https://giflabs-production.up.railway.app`
- **Propósito**: Sistema em uso pelos usuários finais
- **Dados**: Posts, usuários, conteúdo real do blog

### **Desenvolvimento Local**
- **Onde**: Seu computador
- **Banco**: Supabase PostgreSQL (configurado no `strapi/.env`)
- **URL Strapi**: `http://localhost:1337`
- **Propósito**: Desenvolver, testar, fazer alterações
- **Dados**: Banco separado do de produção (isolado)

---

## 🔧 Como Funciona a Configuração

### Arquivo de Configuração: `strapi/config/database.ts`

```typescript
export default ({ env }) => {
  return {
    connection: {
      client: 'postgres',  // Sempre PostgreSQL
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: env.bool('DATABASE_SSL', false) && {
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
    },
  };
};
```

**Como funciona:**
- O Strapi lê as variáveis de ambiente do arquivo `.env`
- Essas variáveis definem qual banco usar
- **Não há código diferente** - apenas variáveis diferentes!

---

## 📁 Arquivos de Configuração

### 1. **`strapi/.env`** (Local - não está no Git)
Este arquivo define qual banco o Strapi local vai usar:

```env
# Opção 1: Usar o mesmo banco do Railway (produção)
DATABASE_HOST=xxxxx.proxy.rlwy.net
DATABASE_PORT=34199
DATABASE_NAME=railway
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua-senha-do-railway
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false

# Opção 2: Usar Supabase
DATABASE_HOST=db.xxxxx.supabase.co
DATABASE_PORT=5432
DATABASE_NAME=postgres
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua-senha-do-supabase
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false

# Opção 3: Usar PostgreSQL local
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi_local
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua-senha-local
DATABASE_SSL=false
```

### 2. **Railway Environment Variables** (Produção)
No Railway, as variáveis são configuradas no painel:
- Railway automaticamente injeta variáveis do PostgreSQL
- O Strapi em produção usa essas variáveis

---

## 🎯 Cenários de Uso

### **Cenário 1: Desenvolvimento Local usando Produção**
**Quando usar**: Quando você quer ver os mesmos dados que estão em produção

**Configuração**:
```env
# strapi/.env local
DATABASE_HOST=xxxxx.proxy.rlwy.net  # Mesmo banco do Railway
DATABASE_PORT=34199
DATABASE_NAME=railway
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua-senha-do-railway
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
NODE_ENV=development
```

**Vantagens**:
- ✅ Vê os mesmos dados de produção
- ✅ Não precisa sincronizar dados
- ✅ Testa com dados reais

**Desvantagens**:
- ⚠️ Cuidado ao deletar/modificar dados (afeta produção!)
- ⚠️ Mais lento (conexão remota)

### **Cenário 2: Desenvolvimento Local com Banco Separado**
**Quando usar**: Quando você quer testar sem afetar produção

**Configuração**:
```env
# strapi/.env local
DATABASE_HOST=localhost  # OU Supabase
DATABASE_PORT=5432
DATABASE_NAME=strapi_dev
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua-senha-local
DATABASE_SSL=false
NODE_ENV=development
```

**Vantagens**:
- ✅ Pode deletar/modificar sem medo
- ✅ Mais rápido (banco local)
- ✅ Isolado de produção

**Desvantagens**:
- ⚠️ Precisa sincronizar dados manualmente
- ⚠️ Precisa configurar PostgreSQL local

---

## 🧹 Como Limpar o Banco Local

### **Opção 1: Deletar Tabelas Específicas**

Se você está usando PostgreSQL local, pode conectar e deletar:

```sql
-- Conectar ao banco
psql -h localhost -U postgres -d strapi_local

-- Deletar todas as tabelas (CUIDADO!)
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
```

### **Opção 2: Usar Strapi CLI (Recomendado)**

```bash
cd strapi
npm run develop
```

No painel admin:
1. Vá em **Content Manager**
2. Delete manualmente os registros que não quer

### **Opção 3: Resetar Banco Completamente**

**CUIDADO: Isso apaga TUDO!**

```bash
# 1. Parar o Strapi
# 2. Deletar o banco e criar novo
psql -h localhost -U postgres
DROP DATABASE strapi_local;
CREATE DATABASE strapi_local;

# 3. Rodar Strapi novamente (ele cria as tabelas automaticamente)
cd strapi
npm run develop
```

### **Opção 4: Usar Migrations**

O Strapi pode resetar o banco através de migrations, mas isso é mais avançado.

---

## 🔍 Como Descobrir Qual Banco Você Está Usando

### 1. **Verificar arquivo `.env`**
```bash
cat strapi/.env
# Ou no Windows:
type strapi\.env
```

### 2. **Verificar logs do Strapi**
Quando você roda `npm run develop`, os logs mostram:
```
[INFO] Database connection established
[INFO] Database: strapi
[INFO] Host: localhost:5432
```

### 3. **Verificar no Railway**
- Acesse: https://railway.app
- Veja qual banco está configurado no serviço Strapi

---

## 📊 Comparação: Railway vs Supabase vs Local

| Característica | Railway | Supabase | Local |
|----------------|---------|----------|-------|
| **Custo** | Pago (após free tier) | Free tier generoso | Grátis |
| **Performance** | ✅ Boa | ✅ Boa | ⚠️ Depende do PC |
| **Backup** | ✅ Automático | ✅ Automático | ❌ Manual |
| **Acesso Remoto** | ✅ Sim | ✅ Sim | ❌ Só local |
| **SSL** | ✅ Sim | ✅ Sim | ❌ Não necessário |
| **Uso Atual** | ✅ Produção | ⚠️ Configurado | ⚠️ Desenvolvimento |

---

## 🚨 Importante: Sobre SQLite

Você mencionou SQLite no Supabase, mas:

- **Supabase usa PostgreSQL**, não SQLite
- **Strapi pode usar SQLite** em desenvolvimento (mas não está configurado no seu projeto)
- Se você viu SQLite em algum lugar, pode ser:
  - Um projeto antigo/teste
  - Uma dependência do Strapi (better-sqlite3) que não está sendo usada

**Seu projeto atual usa APENAS PostgreSQL.**

---

## 🎯 Recomendações

### **Para Desenvolvimento Local:**

1. **Use o mesmo banco do Railway** se:
   - Você quer ver dados reais
   - Não vai fazer mudanças destrutivas
   - Precisa testar com dados de produção

2. **Use banco local separado** se:
   - Você vai fazer testes destrutivos
   - Quer desenvolver mais rápido
   - Precisa isolar do ambiente de produção

### **Para Limpar Dados Locais:**

1. **Se está usando banco local separado:**
   - Pode deletar tudo sem medo
   - Use uma das opções acima

2. **Se está usando o mesmo banco do Railway:**
   - ⚠️ **CUIDADO!** Você vai deletar dados de produção
   - Melhor usar banco separado para testes

---

## 🔗 Próximos Passos

1. **Verificar qual banco você está usando localmente:**
   ```bash
   cat strapi/.env
   ```

2. **Decidir se quer usar banco separado ou o mesmo de produção**

3. **Se quiser limpar dados locais:**
   - Use uma das opções de limpeza acima
   - Ou configure um banco local separado

---

## 📚 Recursos Adicionais

- [Documentação Strapi - Database](https://docs.strapi.io/dev-docs/configurations/database)
- [Railway PostgreSQL Docs](https://docs.railway.app/databases/postgresql)
- [Supabase PostgreSQL Docs](https://supabase.com/docs/guides/database)

---

**Última atualização**: Janeiro 2026
