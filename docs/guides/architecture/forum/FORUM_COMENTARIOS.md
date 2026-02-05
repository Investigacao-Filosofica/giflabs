# Fórum e Comentários — Módulo de Discussão

> **Comentários e discussão sob os posts do blog.** O Strapi é usado **apenas para o blog**; Comment **não** é Content Type do Strapi. O post do blog funciona como thread; respostas e subrespostas são armazenadas no **módulo Fórum** (PostgreSQL, ex.: Prisma). Quem tem perfil (`community_user`) pode comentar.

## Escopo do módulo

- **Thread:** cada post do blog é uma thread de discussão.
- **Respostas e subrespostas:** armazenadas no módulo Fórum (não no Strapi).
- **Identidade:** comentários ligados a `community_user` (módulo Perfil). Anônimo (flag) ganha XP; guest não ganha XP.

## Documentos relacionados

| Tema | Documento | O que encontrar |
|------|-----------|-----------------|
| **Modelo de dados (Comment)** | [Atualização do BD para Gamificação](../gamificacao/ATUALIZACAO_BD_GAMIFICACAO.md) | Schema `Comment`, `community_user_id`, regras de anônimo/guest |
| **Blog (Strapi — sem Comment)** | [Estrutura Completa do Blog](../blog/ESTRUTURA_BLOG_COMPLETA.md) | Escopo do Strapi (só blog); Comment fora; Post tem `comment_count` atualizado pela nossa API |
| **Ordem no ecossistema** | [Roadmap Fase 1 — DEA](../dea-app/ROADMAP_FASE1_DEA.md) | Fórum como etapa 3 (após Perfil, antes de Gamificação inicial) |

## Responsabilidade e onde vive

| Item | Descrição |
|------|-----------|
| **Módulo** | Fórum (comentários/discussão) |
| **Onde vive** | PostgreSQL — módulo dedicado (ex.: Prisma), mesmo BD que Perfil e Gamificação |
| **Integração** | Recebe identidade do Perfil (`community_user`); envia eventos de comentário para a Gamificação (XP). |

---

*Documento índice do módulo Fórum/Comentários. Detalhes de schema e fluxos nos documentos indicados acima.*

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF)
