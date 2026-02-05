# Roadmap Fase 1 — DEA (Digital Education App)

> **Plano central:** O repositório [dea-app](https://github.com/ctrlshiftOFF/dea-app) é o objetivo central. O blog (giflabs) é a **primeira etapa** da Fase 1 do DEA. Este documento consolida a ordem oficial das etapas e o estado atual do alinhamento.

**Documentos relacionados:**
- [Manifesto de Gamificação](../gamificacao/GAMIFICACAO_MANIFESTO.md) — por onde começamos (blog como experimento de gamificação)
- [Arquitetura de Gamificação](../gamificacao/ARQUITETURA_GAMIFICACAO.md) — decisões do core team
- [Atualização do BD para Gamificação](../gamificacao/ATUALIZACAO_BD_GAMIFICACAO.md) — community_user, comentários, XP, runas
- [Estrutura Completa do Blog](../blog/ESTRUTURA_BLOG_COMPLETA.md) — schema do blog (Strapi)

---

## 1. Ordem oficial — Fase 1 do DEA

A Fase 1 do DEA passa a ter a seguinte ordem (blog como primeira etapa; chat fora do plano):

| Etapa | Nome | Descrição |
|-------|------|-----------|
| **1** | **Blog** | Conteúdo editorial (posts, authors). Strapi + PostgreSQL (Railway). **Estado atual:** em produção no giflabs. |
| **2** | **Perfil** | community_user, perfil público. A pessoa tem identidade/perfil antes de poder comentar. Módulo dedicado (PostgreSQL, ex.: Prisma). |
| **3** | **Comentários/Discussão** | Fórum sob os posts do blog: threads, respostas, subrespostas. Quem tem perfil pode comentar nos posts. Módulo dedicado (Fórum). |
| **4** | **Gamificação inicial** | XP, níveis, runas. Regras de pontuação e reconhecimento a partir de comentários e outras ações (ex.: +XP por comentário, runas por curadoria). **Já pensando em Web3 e estruturas de contratos** desde o desenho. Módulo dedicado (Gamificação). |
| **5** | **[Em discussão]** | Próxima etapa a definir em grupo. Opções em aberto: Gamificação avançada + Web3, Curso básico/Onboarding, Cursos (Moodle), DAO/Governança, etc. |

**Chat:** fora do plano da Fase 1 (removido).

**Decisão de arquitetura — Strapi apenas para o blog:** O Strapi é usado **somente** para conteúdo editorial (Post, Author, Category, Tag, Project). Perfil (community_user), Comentários/Fórum, Gamificação ficam **fora do Strapi** — módulo dedicado (ex.: Prisma), mesmo PostgreSQL. Objetivo: controle total e possibilidade de sair do Strapi no futuro sem perder dados de produto.

---

## 2. Decisão em aberto — DAO e grant

Fica em aberto para **discussão e decisão em grupo** a possível inserção da **DAO** após o Perfil e antes de Comentários, em função de **aplicação para grant** prevista nessa direção.

- **Opção A:** Manter a ordem atual: Perfil → Comentários/Discussão → Gamificação inicial → [etapa 5 em discussão].
- **Opção B:** Inserir DAO como etapa 3: **Perfil → DAO → Comentários/Discussão → Gamificação inicial → [etapa 5 em discussão].**

A decisão será registrada aqui após o alinhamento do grupo.

---

## 3. Módulos e responsabilidades (resumo)

| Módulo | Responsabilidade | Onde vive |
|--------|------------------|-----------|
| **Blog (Strapi)** | Conteúdo editorial (post, author). | Strapi → PostgreSQL (Railway). |
| **Perfil** | community_user, perfil público. | PostgreSQL (módulo dedicado, ex.: Prisma). |
| **Fórum** | Comentários/discussão sob os posts (threads, respostas, subrespostas). | PostgreSQL (módulo dedicado). |
| **Gamificação** | XP, níveis, runas; recebe eventos do Fórum, Blog, Moodle, etc. | PostgreSQL (módulo dedicado). |
| **Cursos (futuro)** | Moodle ou equivalente. | LMS externo; integração com gamificação. |

---

## 4. Estado atual (giflabs)

- **Etapa 1 (Blog):** ✅ Em produção. Strapi + Next.js + PostgreSQL (Railway). Posts, authors, categories, tags, projects.
- **Etapas 2–5:** 📋 Planejadas. Documentação de arquitetura e BD existente; implementação a seguir conforme este roadmap.

---

## 5. Próximos passos (documentação)

1. **Decisão em grupo:** Etapa 5 (o que vem após Gamificação inicial) e eventual inserção da DAO (Opção A ou B).
2. **Atualização do roadmap do DEA-app:** Incluir o blog como primeira etapa da Fase 1 e remover o chat do plano (no repositório dea-app).
3. **Documentação dos próximos passos:** Detalhamento das etapas 2 (Perfil), 3 (Comentários/Discussão) e 4 (Gamificação inicial) em guias de implementação quando for o momento.

---

*Documento criado a partir do alinhamento de roadmap (Fase 1 DEA — blog primeiro). Última atualização: Janeiro 2026.*

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF)

