# 📚 GIFLABS - Documentação

> **Documentação completa do projeto GIFLABS - Grupo Investigação Filosófica**

## 📋 Índice Geral

### 🏗️ Arquitetura
- **[Arquitetura do Sistema](./guides/architecture/ARQUITETURA_SISTEMA.md)** - Visão geral da arquitetura completa
- **[Guia de Arquitetura](./guides/architecture/ARCHITECTURE_GUIDE.md)** - Arquitetura técnica detalhada
- **[Arquitetura do Blog](./guides/architecture/BLOG_ARCHITECTURE.md)** - Planejamento e estrutura do blog
- **[Estrutura Completa do Blog](./guides/architecture/ESTRUTURA_BLOG_COMPLETA.md)** - Schema completo do blog Strapi

### 🛠️ Desenvolvimento
- **[Guia de Desenvolvimento](./guides/development/DEVELOPMENT_GUIDE.md)** - Configuração, padrões e boas práticas
- **[Guia de Contribuição](./guides/development/CONTRIBUTING.md)** - Como contribuir com o projeto
- **[Sistema de Design](./guides/development/DESIGN_SYSTEM.md)** - Componentes, cores e tipografia
- **[Desenvolvimento vs Produção](./guides/development/DESENVOLVIMENTO_VS_PRODUCAO.md)** - Diferenças entre ambientes

### 📖 Tutoriais
- **[Setup do Strapi](./guides/tutorials/SETUP_STRAPI.md)** - Tutorial completo para configurar o Strapi
- **[Como Criar Posts](./guides/tutorials/COMO_CRIAR_POSTS.md)** - Tutorial completo para criar posts no blog
- **[Como Criar Usuários](./guides/tutorials/COMO_CRIAR_USUARIOS.md)** - Tutorial para criar usuários no Strapi

### 👥 Equipe
- **[Planejamento da Equipe](./guides/team/PLANEJAMENTO_EQUIPE.md)** - Planejamento para criação de usuários
- **[Plano de Reorganização](./guides/team/PLANO_REORGANIZACAO_EQUIPE.md)** - Plano de reorganização da equipe

### 📖 Referência Técnica
- **[Estrutura do Projeto](./reference/PROJECT_STRUCTURE.md)** - Organização de arquivos e pastas
- **[Configurações](./reference/CONFIGURATIONS.md)** - Configurações de build, linting e deploy
- **[Variáveis Railway](./reference/RAILWAY_ENV_VARS.md)** - Como obter credenciais do Railway
- **[Status do Projeto](./reference/PROJETO_STATUS_ATUAL.md)** - Análise do estado atual do projeto

---

## 🎯 Início Rápido

### Para Desenvolvedores
1. **[Configuração do Ambiente](./guides/development/DEVELOPMENT_GUIDE.md#configuração-do-ambiente)**
2. **[Arquitetura do Sistema](./guides/architecture/ARQUITETURA_SISTEMA.md)**
3. **[Padrões de Código](./guides/development/DEVELOPMENT_GUIDE.md#padrões-de-código)**

### Para Criadores de Conteúdo
1. **[Setup do Strapi](./guides/tutorials/SETUP_STRAPI.md)** - Configuração inicial
2. **[Como Criar Posts](./guides/tutorials/COMO_CRIAR_POSTS.md)**
3. **[Como Criar Usuários](./guides/tutorials/COMO_CRIAR_USUARIOS.md)**
4. **[Estrutura do Blog](./guides/architecture/ESTRUTURA_BLOG_COMPLETA.md)**

### Para Contribuidores
1. **[Como Contribuir](./guides/development/CONTRIBUTING.md)**
2. **[Fluxo de Trabalho](./guides/development/CONTRIBUTING.md#fluxo-de-trabalho)**
3. **[Pull Requests](./guides/development/CONTRIBUTING.md#pull-requests)**

---

## 🏗️ Estrutura da Documentação

```
docs/
├── README.md                    # Este arquivo
│
├── guides/                      # Guias detalhados
│   ├── architecture/           # Documentos de arquitetura
│   │   ├── ARQUITETURA_SISTEMA.md
│   │   ├── ARCHITECTURE_GUIDE.md
│   │   ├── BLOG_ARCHITECTURE.md
│   │   └── ESTRUTURA_BLOG_COMPLETA.md
│   │
│   ├── development/            # Guias de desenvolvimento
│   │   ├── DEVELOPMENT_GUIDE.md
│   │   ├── CONTRIBUTING.md
│   │   ├── DESIGN_SYSTEM.md
│   │   └── DESENVOLVIMENTO_VS_PRODUCAO.md
│   │
│   ├── tutorials/              # Tutoriais práticos
│   │   ├── SETUP_STRAPI.md
│   │   ├── COMO_CRIAR_POSTS.md
│   │   └── COMO_CRIAR_USUARIOS.md
│   │
│   └── team/                   # Documentos da equipe
│       ├── PLANEJAMENTO_EQUIPE.md
│       └── PLANO_REORGANIZACAO_EQUIPE.md
│
└── reference/                   # Referência técnica
    ├── PROJECT_STRUCTURE.md
    ├── CONFIGURATIONS.md
    ├── RAILWAY_ENV_VARS.md
    └── PROJETO_STATUS_ATUAL.md
```

---

## 🛠️ Stack Tecnológico

| Categoria | Tecnologia | Versão | Status |
|-----------|------------|--------|--------|
| **Framework** | Next.js | 15.2.8 | ✅ Ativo |
| **UI Library** | React | 19 | ✅ Ativo |
| **Language** | TypeScript | 5 | ✅ Ativo |
| **Styling** | Tailwind CSS | 3.4.17 | ✅ Ativo |
| **Components** | Shadcn UI | Latest | ✅ Ativo |
| **Icons** | Lucide React | 0.454.0 | ✅ Ativo |
| **CMS** | Strapi | 5.33.4 | ✅ Ativo |
| **Database** | PostgreSQL | - | ✅ Ativo |

---

## 📊 Estado da Documentação

### ✅ Concluído
- [x] Estrutura básica da documentação
- [x] Guias principais criados e organizados
- [x] Sistema de design documentado
- [x] Arquitetura técnica documentada
- [x] Tutoriais práticos criados (incluindo Setup do Strapi)
- [x] Documentação do blog completa
- [x] Referência técnica completa
- [x] Estrutura de pastas organizada e verificada

### 📋 Organização
- [x] Documentos organizados por categorias
- [x] Subpastas criadas em `guides/` (architecture, development, tutorials, team)
- [x] Links atualizados e funcionais
- [x] Estrutura hierárquica clara
- [x] Arquivos obsoletos removidos

---

## 🎯 Contribuindo com a Documentação

A documentação é um projeto vivo que evolui com o código. Para contribuir:

1. **Identifique lacunas** na documentação existente
2. **Crie issues** para documentação faltante
3. **Submeta PRs** com melhorias
4. **Teste** os exemplos e tutoriais

### 📝 Padrões da Documentação

- **Linguagem**: Português brasileiro
- **Formato**: Markdown com emojis para clareza
- **Estrutura**: Hierárquica com links internos
- **Exemplos**: Sempre incluir código funcional
- **Versionamento**: Manter sincronizado com o código

---

## 🔗 Links Úteis

### Projeto
- **GitHub**: [giflabs](https://github.com/Investigacao-Filosofica/giflabs)
- **Virtualia Journal**: [virtualiajournal.com](https://www.virtualiajournal.com/)
- **CNPq**: [Grupo de Pesquisa](http://dgp.cnpq.br/dgp/espelhogrupo/821202)

### Tecnologias
- **Next.js**: [Documentação Oficial](https://nextjs.org/docs)
- **React**: [Documentação Oficial](https://react.dev/)
- **Tailwind CSS**: [Documentação Oficial](https://tailwindcss.com/docs)
- **Shadcn UI**: [Documentação Oficial](https://ui.shadcn.com/)
- **TypeScript**: [Handbook](https://www.typescriptlang.org/docs/)
- **Strapi**: [Documentação Oficial](https://docs.strapi.io)

---

## 📞 Suporte

Para dúvidas sobre a documentação:

- **Issues**: Abra uma issue no GitHub
- **Email**: rodrigorlcid@gmail.com
- **Discussões**: Use GitHub Discussions

---

**📖 Última atualização:** Janeiro 2026  
**✨ Versão da documentação:** 3.1  
**🎯 Cobertura:** 95% do projeto documentado  
**📁 Estrutura:** Organizada por categorias em subpastas  
**✅ Status:** Totalmente atualizada e verificada
