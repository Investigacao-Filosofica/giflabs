# 🔐 Variáveis de Ambiente - PostgreSQL no Railway

Este arquivo serve como referência para usar o PostgreSQL do Railway com o Strapi.

---

## 📦 Variáveis do PostgreSQL (Railway)

Quando você cria um PostgreSQL no Railway, ele automaticamente cria estas variáveis:

| Variável | Descrição |
|----------|-----------|
| `PGHOST` | Host do banco (endpoint **público** — gera egress fees) |
| `PGPORT` | Porta (geralmente 5432) |
| `PGDATABASE` | Nome do banco |
| `PGUSER` | Usuário |
| `PGPASSWORD` | Senha |
| `RAILWAY_PRIVATE_DOMAIN` | Domínio privado (ex.: `postgres.railway.internal`) — **sem egress** |
| `DATABASE_URL` | URL completa de conexão |

---

## 🔧 Configurar no Strapi

### Se Strapi e PostgreSQL estiverem no **mesmo projeto** Railway (recomendado — evita egress)

No serviço **Strapi**, em Variables, use **referências** ao PostgreSQL. Ajuste `Postgres` para o nome do seu serviço de banco:

```
DATABASE_HOST=${{ Postgres.RAILWAY_PRIVATE_DOMAIN }}
DATABASE_PORT=${{ Postgres.PGPORT }}
DATABASE_NAME=${{ Postgres.PGDATABASE }}
DATABASE_USERNAME=${{ Postgres.PGUSER }}
DATABASE_PASSWORD=${{ Postgres.PGPASSWORD }}
DATABASE_SSL=false
```

**Nota:** `DATABASE_SSL=false` na rede privada (tráfego interno). Se der erro de conexão, tente `DATABASE_SSL=true` com `DATABASE_SSL_REJECT_UNAUTHORIZED=false`.

### Se Strapi estiver no Railway mas usar endpoint público (gera egress)

```
DATABASE_HOST=${{ Postgres.PGHOST }}
DATABASE_PORT=${{ Postgres.PGPORT }}
DATABASE_NAME=${{ Postgres.PGDATABASE }}
DATABASE_USERNAME=${{ Postgres.PGUSER }}
DATABASE_PASSWORD=${{ Postgres.PGPASSWORD }}
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

### Se Strapi estiver local ou em outro lugar (usar valores diretos)

Copie os valores das variáveis do Railway e use no `.env` do Strapi:

```env
DATABASE_HOST=xxxxx.proxy.rlwy.net
DATABASE_PORT=34199
DATABASE_NAME=railway
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua-senha-aqui
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

---

## 📝 Como configurar no Railway

1. No Railway, clique no serviço **Strapi**
2. Vá na aba **"Variables"**
3. Adicione as variáveis com a sintaxe de referência `${{ Postgres.VAR }}`
4. **Importante:** Substitua `Postgres` pelo nome exato do seu serviço PostgreSQL (veja no Project Canvas)

---

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF)
