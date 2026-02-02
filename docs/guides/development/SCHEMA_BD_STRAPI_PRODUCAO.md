# Schema do BD e Strapi — Produção e Preparação para o Resto

> **Plano de verificação e finalização do schema do banco e do Strapi para produção.** Foco no blog; schema preparado para receber Perfil, Comentários/Fórum e Gamificação fora do Strapi (módulo dedicado, ex.: Prisma, mesmo PostgreSQL).

**Documentos relacionados:**
- [Estrutura Completa do Blog](../architecture/blog/ESTRUTURA_BLOG_COMPLETA.md) — schema planejado do blog (Strapi)
- [Atualização do BD para Gamificação](../architecture/gamificacao/ATUALIZACAO_BD_GAMIFICACAO.md) — community_user, Comment, XP, runas (fora do Strapi)
- [Roadmap Fase 1 — DEA](../architecture/dea-app/ROADMAP_FASE1_DEA.md) — ordem das etapas
- [Banco de Dados](./DATABASE_EXPLANATION.md) — PostgreSQL, Railway, ambientes

---

## 1. Estado atual do schema Strapi

### 1.1 Content Types implementados

| Content Type | collectionName | Campos principais | draftAndPublish |
|--------------|----------------|-------------------|-----------------|
| **Post** | posts | title, subtitle, slug, content, intro, excerpt, featured_image, language, reading_time, is_featured, scheduledAt, gallery, attachments, video_url, author, coauthors, categories, tags, projects, related_posts, series_name, series_part, view_count, share_count, **comment_count**, seo | true |
| **Author** | authors | name, slug, bio, avatar, email, academic_title, role, institution, lattes_url, orcid, social_links, website, posts, coauthored_posts | true |
| **Category** | categories | name, slug, description, color, posts | false |
| **Tag** | tags | name, slug, description, posts | false |
| **Project** | projects | name, slug, description, color, posts | false |

**Componente:** `shared.seo` — meta_title, meta_description, og_image, og_title, og_description, twitter_card, canonical_url, no_index.

**Localização dos schemas (código):** `strapi/src/api/<nome>/content-types/<nome>/schema.json`.

### 1.2 Banco de dados

- **Cliente:** PostgreSQL (`strapi/config/database.ts`).
- **Conexão:** variáveis de ambiente `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`, `DATABASE_SSL`, etc.
- **Tabelas criadas pelo Strapi:** posts, authors, categories, tags, projects; tabelas de junção (posts_categories_links, posts_tags_links, posts_projects_links, posts_authors_links, posts_related_links); upload_files; tabelas de sistema do Strapi.

**Prisma:** ainda não existe no projeto. Perfil (community_user), Comment (Fórum) e Gamificação serão implementados em módulo dedicado (ex.: Prisma) no **mesmo** PostgreSQL.

---

## 2. Comparação com a documentação (ESTRUTURA_BLOG_COMPLETA)

| Item | Doc | Strapi atual | Observação |
|------|-----|--------------|------------|
| Post — campos | title, slug, content, language, author, categories, tags, projects, comment_count, seo, etc. | ✅ Alinhado | — |
| Post — content | min 500, max 100000 caracteres | Sem min/max (apenas required) | Opcional: adicionar validação para produção |
| Post — language | default "pt-BR" | Sem default | Opcional: default no admin ou no schema |
| Author | Campos e relações | ✅ Alinhado | draftAndPublish: true no Strapi; doc não exige; ver seção 4 |
| Category, Tag, Project | Sem draft/publish | ✅ false no Strapi | — |
| comment_count | Campo no Post (default 0) | ✅ Presente | Pronto para ser atualizado pela nossa API quando existir Comment |
| SEO (componente) | meta_title, meta_description, og_*, twitter_card, canonical_url | ✅ + no_index | — |

Nenhuma divergência bloqueia produção; as diferenças são refinamentos opcionais.

---

## 3. Preparação para “o resto” (Perfil, Fórum, Gamificação)

**Decisão de arquitetura:** Strapi é usado **apenas para o blog**. Comment, community_user, score e runas ficam **fora do Strapi** (módulo dedicado, ex.: Prisma), no mesmo PostgreSQL.

### 3.1 O que já está preparado

- **comment_count no Post:** existe (integer, default 0). Quando o módulo Fórum (Comment) existir, a **nossa API** (ou job) deve incrementar/decrementar esse campo ao criar ou remover comentário aprovado.
- **Mesmo PostgreSQL:** Strapi usa uma conexão (env). Ao adicionar Prisma (ou outro ORM), configurar para o **mesmo** host e database. Strapi gerencia posts, authors, etc.; nosso módulo gerencia community_users, comments, etc. Nomes de tabelas diferentes — sem conflito.
- **Nenhum Content Type Comment/community_user no Strapi:** schema atual já está correto; não é necessário criar nada no Strapi para “receber” o resto.

### 3.2 Quando implementar o resto

1. Adicionar Prisma (ou equivalente) ao projeto.
2. Configurar Prisma para o **mesmo** PostgreSQL (mesmo `DATABASE_NAME` / host).
3. Criar tabelas `community_users`, `comments`, etc., no mesmo banco.
4. Implementar a API (Next.js ou serviço) que, ao criar/apagar Comment, atualize o campo `comment_count` do Post (via API do Strapi ou atualização direta na tabela `posts`, conforme estratégia escolhida).

---

## 4. Plano para produção (foco blog)

### 4.1 Obrigatório para produção (blog)

1. **Ambiente e conexão**
   - Usar variáveis de ambiente de produção (ex.: Railway): `DATABASE_*`, `NEXT_PUBLIC_STRAPI_URL`, etc.
   - Garantir que o front (Next.js) aponte para a API do Strapi em produção e que CORS esteja configurado se necessário.

2. **Permissões no Strapi**
   - **Post, Author, Category, Tag, Project:** permissão **find** e **findOne** públicas para a API pública (front).
   - **Upload (media):** permissão pública de leitura para exibir imagens.
   - **Admin:** restrito a roles de editor/admin.

3. **Dados iniciais**
   - Pelo menos um **Author** para poder publicar posts.
   - Categorias/tags/projects conforme planejado (ex.: Filosofia, Tecnologia, etc.) ou criar conforme necessidade.

4. **Campo language**
   - Definir política: default "pt-BR" no admin ao criar post ou garantir que o front trate valor vazio (ex.: considerar "pt-BR"). Evitar posts sem language se o front filtra por idioma.

### 4.2 Recomendado (qualidade e consistência)

1. **Post**
   - Opcional: validação de `content` (ex.: minLength 500) no schema ou via lifecycle, para evitar posts vazios ou muito curtos.
   - Opcional: default "pt-BR" para `language` (customização no admin ou no schema, se suportado).

2. **Author**
   - Considerar `draftAndPublish: false` para Author (entidade estável; “publicar autor” não é o mesmo que publicar post). Alteração no schema; se já houver dados, planejar migração.

3. **Backup e migrações**
   - Backups regulares do PostgreSQL (Railway ou provedor).
   - Manter schemas do Strapi versionados (já estão em `src/api/*/content-types/`); antes de alterar schema em produção, testar em dev e, se necessário, planejar migração de dados.

### 4.3 Front (Next.js)

- Já utiliza: `language`, `publishedAt`, `comment_count`, filtros por language.
- Garantir que `getPosts` / `getPostBySlug` usem apenas posts publicados e que os tipos TypeScript (`Post`, `PostPreview`) estejam alinhados com a resposta do Strapi (incluindo `comment_count`).

---

## 5. Próximos passos sugeridos (ordem)

1. **Produção do blog (curto prazo)**
   - Revisar permissões da API no Strapi (Post, Author, Category, Tag, Project, upload).
   - Validar variáveis de ambiente de produção (DB e `NEXT_PUBLIC_STRAPI_URL`).
   - Definir default/comportamento do campo `language` e, se desejado, validação de `content`.
   - (Opcional) Alterar Author para `draftAndPublish: false` e aplicar migração se necessário.

2. **Preparação para o resto (quando for implementar)**
   - Adicionar Prisma (ou outro ORM) ao projeto.
   - Configurar Prisma para o **mesmo** PostgreSQL (mesmo `DATABASE_NAME` / host).
   - Criar tabelas `community_users`, `comments`, etc., no mesmo banco.
   - Implementar a API que cria/apaga Comment e atualiza `comment_count` do Post (via API Strapi ou atualização direta).

3. **Documentação**
   - Quando Prisma existir: documentar que o mesmo BD é compartilhado (Strapi = blog; Prisma = Perfil, Fórum, Gamificação) e quem atualiza `comment_count`.

---

## 6. Resumo

| Item | Estado | Ação planejada |
|------|--------|----------------|
| Schema Strapi (Post, Author, Category, Tag, Project) | ✅ Alinhado com a doc; pronto para produção | Ajustes opcionais (language default, content min, Author draft) |
| comment_count no Post | ✅ Presente | Nenhuma alteração; nossa API atualiza quando Comment existir |
| Banco (PostgreSQL) | ✅ Único, Strapi | Mesmo BD para Prisma no futuro |
| Prisma / Comment / community_user | ❌ Ainda não implementados | Implementar depois; schema Strapi não precisa mudar para “receber” |
| Produção do blog | Quase pronto | Permissões, env, idioma, (opcional) validações e Author draft |

---

*Documento criado a partir do planejamento de schema e Strapi para produção (blog + preparação para Perfil, Fórum, Gamificação). Última atualização: Janeiro 2026.*

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF)
