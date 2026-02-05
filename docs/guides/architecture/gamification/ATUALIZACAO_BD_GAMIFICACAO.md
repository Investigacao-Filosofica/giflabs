# Atualização do Banco de Dados para Gamificação

> **Modelo de dados para community_user, comentários, XP, runas e perfil.**  
> Este documento descreve as alterações desejadas no banco para abrigar o sistema gamificado do blog GIFLABS, sem duplicar a identidade de “quem comenta e ganha XP” com “quem edita no admin” ou “autor do post”.

**Documentos relacionados:**
- [Arquitetura de Gamificação](./ARQUITETURA_GAMIFICACAO.md) — decisões conceituais (perguntas 1–14)
- [Manifesto de Gamificação](./GAMIFICACAO_MANIFESTO.md) — versão pública
- [Estrutura Completa do Blog](../blog/ESTRUTURA_BLOG_COMPLETA.md) — schema atual do blog (Post, Author, Category, Tag, Project)

**Repositórios relacionados (ecossistema GIFLABS):**
- [dea-app](https://github.com/ctrlshiftOFF/dea-app) — Digital Education App (gamificação, Web3, IA, certificação blockchain, trilhas de aprendizado).
- [user-profile-forum-chat](https://github.com/ctrlshiftOFF/user-profile-forum-chat) — StelLearning Web App: perfil, fórum, chat, dashboard (Next.js 15+, Firebase). Base de referência para community_user e comentários.

---

## 1. Visão geral

- **Objetivo:** Uma única “identidade” de participação na gamificação: **community_user**.
- **Quem participa:** Inicialmente o core team (5 admins); depois autores (convidados ou promovidos) e, no futuro, público registrado. Todos que comentam e ganham XP são **community_user**.
- **Decisão de arquitetura — Strapi apenas para o blog:** O Strapi é usado **somente** para conteúdo editorial (Post, Author, Category, Tag, Project). **community_user**, Comment, score, runas ficam **fora do Strapi** — em módulo dedicado (ex.: Prisma), no **mesmo** PostgreSQL. Assim mantemos controle total e possibilidade de sair do Strapi no futuro sem perder dados de produto.
- **Banco:** Mesmo PostgreSQL; Strapi gerencia as tabelas do blog; nosso módulo (ex.: Prisma) gerencia as tabelas de Perfil, Fórum (comentários) e Gamificação.
- **Strapi:** User (plugin users-permissions) e Author (Content Type) permanecem no Strapi; **community_user** é entidade **fora** do Strapi, com referência opcional a User e/ou Author (por id) quando necessário.

---

## 2. Community User (identidade de gamificação)

**community_user** é a entidade central para participação na comunidade: comentários, XP, runas, perfil.

| Conceito | Descrição |
|----------|-----------|
| **Relação com User (Strapi)** | Opcional 1:1. Preenchida quando a pessoa tem login (admin ou usuário registrado). |
| **Relação com Author (Strapi)** | Opcional 1:1. Preenchida quando a pessoa é autor de posts. Perfil do community_user pode ser usado para criar/atualizar Author quando o usuário “virar autor”. |
| **Perfil** | Nome de exibição, avatar, bio, anonimato (flag). Pode ser campos no community_user ou tabela `profile` 1:1. |
| **Atribuição da “role”** | Criar um **community_user** para cada admin e cada autor que participa da gamificação e ligar ao User e/ou Author correspondente. |

**Resumo:** Quem comenta e ganha XP é sempre um **community_user**. Admins e autores participam da gamificação por terem um **community_user** ligado ao seu User e/ou Author.

---

## 3. Comentários (Comment)

Comment vive **fora do Strapi** (módulo Fórum, ex.: Prisma). Comentários são a ação principal que gera XP e interação. O modelo desejado:

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|--------------|-----------|
| **post_id** | integer (FK → posts.id do Strapi) | Sim | Referência ao Post em que o comentário foi feito. O Post continua no Strapi; Comment referencia por id. |
| **community_user_id** | integer (FK → community_user) | Condicional* | Autor do comentário. Quem comenta e ganha XP é sempre um community_user. |
| **content** | text | Sim | Texto do comentário. |
| **approved** | boolean | Sim | Aprovação para publicação. |
| **parent_id** | integer (FK → comment) | Não | Comentário pai (respostas em árvore). |
| **createdAt** / **updatedAt** | datetime | Sim | Timestamps. |

\* **Anônimo vs guest:**  
- **Anônimo (flag no community_user):** o comentário tem `community_user_id`; a pessoa tem perfil/login, só exibe como anônimo. **Ganha XP.**  
- **Guest:** sem login, sem perfil; `community_user_id` fica nulo. **Não ganha XP.**

**Integração com Post (Strapi):** O Post no Strapi possui o campo `comment_count` (integer). Como Comment está fora do Strapi, esse contador é atualizado pela **nossa API** (ou job) quando um comentário aprovado é criado ou removido no módulo Fórum.

---

## 4. Score / XP / Níveis

- **Entidade:** Ligada a **community_user**, **fora do Strapi** (ex.: tabela `score` ou campos no community_user: `xp_total`, `nivel_atual`).
- **Regras:** XP por comentários, respostas, publicação, compartilhamento, etc.; progressão por níveis; marcos (ex.: nível 5 desbloqueia runa, nível máximo dá direito a convite). Detalhes em [ARQUITETURA_GAMIFICACAO.md](./ARQUITETURA_GAMIFICACAO.md).

---

## 5. Runas

- **Definição das runas:** Catálogo (tabela) com runas disponíveis (nome, descrição, critério, etc.), no módulo Gamificação.
- **Runas por usuário:** Tabela de relação **community_user** ↔ **runa** (quem tem qual runa, quando recebeu, quem atribuiu). Tudo por **community_user**, fora do Strapi.

---

## 6. Fluxos resumidos

1. **Core team (Season 1):** Cada um dos 5 admins tem um **User** no Strapi; para cada um cria-se um **community_user** ligado ao User. Eles comentam e recebem runas/XP como community_users.
2. **Autor (não admin):** Tem **Author** no Strapi; pode ter **community_user** ligado ao Author para participar da gamificação.
3. **Community user vira autor:** Quando um community_user é promovido a autor, cria-se/atualiza-se o **Author** no Strapi a partir do perfil do community_user e liga-se Author ↔ community_user.
4. **Comentário:** Sempre associado a um **Post** (`post_id`). Quem tem **community_user_id** (incluindo anônimo com flag) **ganha XP**; **guest** (sem login, sem `community_user_id`) **não ganha XP**.

---

## 7. Melhores práticas adotadas

- **Uma única identidade de gamificação:** community_user para todos (admins, autores, futuros usuários).
- **Comentário com post_id e community_user_id:** quem tem community_user_id (com ou sem flag anônimo) ganha XP; guest (sem login, sem community_user_id) não ganha XP.
- **Perfil, score e runas** sempre referenciam **community_user**.
- **Author no Strapi** continua como “quem escreve o post”; origem pode ser o perfil do community_user quando ele “vira autor”.
- **Strapi apenas para o blog;** Perfil, Comment, score, runas no nosso módulo (mesmo PostgreSQL). Preparado para expansão futura (ex.: integração com plataforma de cursos) e para eventual saída do Strapi sem perder dados de produto.

---

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF) — Janeiro 2026
