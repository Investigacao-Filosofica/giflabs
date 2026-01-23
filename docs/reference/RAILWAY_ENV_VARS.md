# 🔐 Variáveis de Ambiente - PostgreSQL no Railway

Este arquivo serve como referência para usar o PostgreSQL do Railway com o Strapi.

---

## 📦 Variáveis do PostgreSQL (Railway)

Quando você cria um PostgreSQL no Railway, ele automaticamente cria estas variáveis:

| Variável | Descrição |
|----------|-----------|
| `PGHOST` | Host do banco de dados |
| `PGPORT` | Porta (geralmente 5432) |
| `PGDATABASE` | Nome do banco |
| `PGUSER` | Usuário |
| `PGPASSWORD` | Senha |
| `DATABASE_URL` | URL completa de conexão |

---

## 🔧 Configurar no Strapi

### Se Strapi estiver no Railway (usar referências)

```
DATABASE_HOST=${PGHOST}
DATABASE_PORT=${PGPORT}
DATABASE_NAME=${PGDATABASE}
DATABASE_USERNAME=${PGUSER}
DATABASE_PASSWORD=${PGPASSWORD}
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

### Se Strapi estiver local ou em outro lugar (usar valores diretos)

Copie os valores das variáveis do Railway e use no `.env` do Strapi:

```env
DATABASE_HOST=xxxxx.railway.app
DATABASE_PORT=5432
DATABASE_NAME=railway
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua-senha-aqui
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

---

## 📝 Como Obter as Credenciais

1. No Railway, clique no serviço **PostgreSQL**
2. Vá na aba **"Variables"**
3. Copie os valores necessários
