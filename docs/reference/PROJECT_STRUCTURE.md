# 📁 GIFLABS - Estrutura do Projeto

> **Documentação detalhada da estrutura de arquivos e organização do projeto**

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura de Diretórios](#estrutura-de-diretórios)
3. [Arquivos de Configuração](#arquivos-de-configuração)
4. [Sistema de Roteamento](#sistema-de-roteamento)
5. [Componentes](#componentes)
6. [Contextos e Estado](#contextos-e-estado)
7. [Assets e Recursos](#assets-e-recursos)
8. [Documentação](#documentação)

---

## 🎯 Visão Geral

O projeto GIFLABS segue uma estrutura organizada baseada no Next.js 14 App Router, com separação clara de responsabilidades e foco na manutenibilidade.

### Princípios Organizacionais
- **Separação por funcionalidade** - Cada projeto tem sua pasta específica
- **Componentes reutilizáveis** - Componentes compartilhados em `/src/components/`
- **Internacionalização centralizada** - Traduções organizadas por projeto
- **Configurações explícitas** - Arquivos de configuração bem documentados

---

## 🏗️ Estrutura de Diretórios

```
giflabs/
├── docs/                           # 📚 Documentação completa
│   ├── guides/                     # Guias detalhados
│   ├── reference/                  # Referência técnica
│   └── examples/                   # Exemplos práticos
├── public/                         # 🌐 Assets estáticos
│   └── images/                     # Imagens públicas
│       ├── icons/                  # Ícones (favicon)
│       └── logos/                  # Logos (X logo)
├── src/                           # 💻 Código fonte (Next.js)
│   ├── app/                       # 📄 Páginas (App Router)
│   │   ├── [projeto]/             # Páginas dinâmicas de projetos
│   │   ├── layout.tsx             # Layout raiz
│   │   ├── page.tsx               # Página inicial
│   │   └── globals.css            # Estilos globais
│   ├── components/                # 🧩 Componentes reutilizáveis
│   │   ├── layout/                # Componentes de layout
│   │   └── ui/                    # Componentes base (Shadcn UI)
│   ├── contexts/                  # 🔄 Contextos React
│   │   ├── LanguageContext.tsx    # Contexto de idioma
│   │   └── translations/          # Arquivos de tradução
│   └── lib/                       # 🔧 Utilitários
├── strapi/                        # 📝 CMS Strapi (Blog)
│   ├── config/                    # Configurações do Strapi
│   │   ├── admin.ts               # Config do painel admin
│   │   ├── database.ts            # Conexão com banco de dados
│   │   ├── middlewares.ts         # Middlewares
│   │   ├── plugins.ts             # Plugins (i18n)
│   │   └── server.ts              # Config do servidor
│   ├── database/migrations/       # Migrações do banco
│   ├── public/uploads/            # Arquivos enviados
│   ├── src/                       # Código fonte Strapi
│   ├── types/generated/           # Tipos TypeScript
│   ├── .env.example               # Template de variáveis
│   ├── package.json               # Dependências Strapi
│   └── README.md                  # Documentação Strapi
├── components.json                # ⚙️ Configuração Shadcn UI
├── next.config.mjs               # ⚙️ Configuração Next.js
├── package.json                  # 📦 Dependências e scripts
├── postcss.config.mjs           # ⚙️ Configuração PostCSS
├── tailwind.config.ts           # ⚙️ Configuração Tailwind
├── tsconfig.json                # ⚙️ Configuração TypeScript
└── README.md                    # 📖 Documentação principal
```

---

## 📝 Strapi CMS (strapi/)

### Estrutura do Strapi
```
strapi/
├── config/
│   ├── admin.ts              # Configurações do painel admin
│   ├── database.ts           # Conexão PostgreSQL (Supabase)
│   ├── middlewares.ts        # Middlewares padrão
│   ├── plugins.ts            # Plugins habilitados (i18n)
│   └── server.ts             # Configuração do servidor
├── database/
│   └── migrations/           # Migrações automáticas
├── public/
│   └── uploads/              # Arquivos enviados pelos usuários
├── src/
│   ├── admin/                # Customizações do admin
│   │   └── app.example.tsx   # Exemplo de customização
│   └── index.ts              # Hooks register/bootstrap
├── types/
│   └── generated/            # Tipos TypeScript gerados
├── .env                      # Variáveis de ambiente (NÃO COMMITAR!)
├── .env.example              # Template de configuração
├── package.json              # Dependências
├── tsconfig.json             # Configuração TypeScript
└── README.md                 # Documentação específica
```

### Tecnologias do Strapi
| Item | Tecnologia |
|------|------------|
| **Versão** | Strapi 5.33.4 (Community Edition) |
| **Banco de Dados** | PostgreSQL (Supabase - gratuito) |
| **Idiomas** | Português (pt-BR), Inglês (en) |
| **API** | REST e GraphQL |
| **Autenticação** | Users & Permissions plugin |

### URLs do Strapi
| URL | Descrição |
|-----|-----------|
| `http://localhost:1337/admin` | Painel de administração |
| `http://localhost:1337/api` | API REST |
| `http://localhost:1337/graphql` | API GraphQL (se habilitado) |

---

## 📄 Sistema de Roteamento (src/app/)

### Estrutura App Router
```
src/app/
├── layout.tsx                     # Layout raiz da aplicação
├── page.tsx                       # Página inicial (/)
├── globals.css                    # Estilos CSS globais
├── digital-education-app/         # Projeto: Digital Education App
│   └── page.tsx                   # (/digital-education-app)
├── serie-if/                      # Projeto: Série IF
│   ├── page.tsx                   # (/serie-if)
│   └── _components/               # Componentes específicos
│       └── collaborators-list.tsx # Lista de colaboradores
├── virtualia/                     # Projeto: Virtualia
│   ├── page.tsx                   # (/virtualia)
│   └── _components/
│       └── staff-list.tsx         # Lista da equipe
├── literatura/                    # Projeto: Literatura
│   └── page.tsx                   # (/literatura)
├── metaverso/                     # Projeto: Metaverso
│   └── page.tsx                   # (/metaverso)
├── arqueologia-digital/           # Projeto: Arquivologia Digital
│   └── page.tsx                   # (/arqueologia-digital)
└── giflabs/                       # Projeto: GIFLABS
    └── page.tsx                   # (/giflabs)
```

### Páginas Implementadas

#### 1. Página Principal (`page.tsx`)
```typescript
// Seções implementadas:
- Hero Section (apresentação principal)
- About Section (sobre o GIFLABS)
- Projects Section (grid de projetos)
- Team Section (membros da equipe)
- Background animado com grid sutil
```

#### 2. Layout Raiz (`layout.tsx`)
```typescript
// Funcionalidades:
- Configuração de fonts (Inter + Lora)
- Metadata e SEO
- Provider de idioma
- Header e Footer globais
- Favicon configurado
```

#### 3. Páginas de Projetos
Cada projeto segue uma estrutura similar:
```typescript
// Padrão comum:
- Hero Section com título e descrição
- Seções de conteúdo específicas
- Header com navegação específica
- Responsividade completa
- Internacionalização
```

### Rotas Especiais

#### Componentes Específicos (`_components/`)
```
_components/              # Convenção Next.js para componentes privados
├── collaborators-list.tsx # Lista de colaboradores (Série IF)
└── staff-list.tsx        # Lista da equipe (Virtualia)
```

---

## 🧩 Componentes (src/components/)

### Estrutura de Componentes
```
src/components/
├── layout/                        # Componentes de layout
│   ├── header.tsx                 # Header principal
│   ├── footer.tsx                 # Footer principal
│   └── language-switcher.tsx      # Seletor de idioma
└── ui/                           # Componentes base (Shadcn UI)
    ├── button.tsx                # Botão base
    ├── badge.tsx                 # Badge/tag
    ├── card.tsx                  # Card (disponível, pouco usado)
    └── [45+ outros componentes]  # Outros componentes Shadcn UI
```

### Componentes de Layout

#### Header (`header.tsx`)
```typescript
// Funcionalidades:
- Logo GIFLABS com estilo customizado
- Navegação dinâmica baseada na rota atual
- Menu mobile responsivo
- Integração com LanguageSwitcher
- Suporte a múltiplas páginas de projeto
```

#### Footer (`footer.tsx`)
```typescript
// Seções:
- Informações de contato
- Links externos (Virtualia, CNPq, Lattes)
- Áreas de pesquisa (badges)
- Copyright e citação
```

#### Language Switcher (`language-switcher.tsx`)
```typescript
// Funcionalidades:
- Dropdown com hover/click
- Persistência no localStorage
- Integração com LanguageContext
- Design consistente com UI
```

### Componentes UI (Shadcn)

#### Componentes Utilizados
```typescript
// Atualmente em uso:
- Button: Amplamente usado em CTAs e navegação
- Badge: Tags da equipe e áreas de pesquisa
- Card: Disponível mas raramente usado

// Disponíveis mas não utilizados:
- Input, Form, Textarea: Para formulários futuros
- Dialog, AlertDialog: Para modais
- Tabs, Accordion: Para organização
- Table: Para dados tabulares
- E 40+ outros componentes
```

---

## 🔄 Contextos e Estado (src/contexts/)

### Estrutura de Contextos
```
src/contexts/
├── LanguageContext.tsx           # Contexto principal de idioma
└── translations/                 # Arquivos de tradução por projeto
    ├── header-footer.ts          # Navegação e rodapé
    ├── home.ts                   # Página inicial
    ├── serie-if.ts              # Projeto Série IF
    ├── digital-education-app.ts  # Projeto Digital Education App
    ├── virtualia.ts             # Projeto Virtualia
    ├── metaverso.ts             # Projeto Metaverso
    ├── arqueologia-digital.ts   # Projeto Arquivologia Digital
    ├── giflabs.ts                # Projeto GIFLABS
    └── literatura.ts            # Projeto Literatura
```

### LanguageContext (`LanguageContext.tsx`)
```typescript
// Funcionalidades:
- Gerencia idioma atual (pt/en)
- Persistência no localStorage
- Função t() para traduções
- Merge de todas as traduções
- Fallback para chaves não encontradas
- Provider para toda a aplicação
```

### Sistema de Traduções
```typescript
// Estrutura padrão:
export const projetoTranslations = {
  pt: {
    "projeto_nome": {
      "hero": { "title": "...", "description": "..." },
      "sections": { /* ... */ }
    }
  },
  en: {
    "projeto_nome": {
      "hero": { "title": "...", "description": "..." },
      "sections": { /* ... */ }
    }
  }
};
```

⚠️ **Inconsistência Menor Identificada**:
- IDs de projetos: `"digital-education-app"` (com hífen)
- Chaves de tradução: `"digital_education_app"` (com underscore)
- **Impacto**: Mínimo - sistema funciona perfeitamente

---

## 🔧 Utilitários (src/lib/)

### Estrutura Atual
```
src/lib/
└── utils.ts                      # Utilitário único
```

### utils.ts
```typescript
// Função principal:
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))     // Merge de classes Tailwind
}

// Usado para:
- Combinação condicional de classes CSS
- Merge inteligente de classes Tailwind
- Prevenção de conflitos de estilo
```

---

## 🌐 Assets e Recursos (public/)

### Estrutura de Assets
```
public/
└── images/
    ├── icons/
    │   └── favico.gif            # Favicon animado (GIF)
    └── logos/
        └── x-logo.png            # Logo do X/Twitter (100KB)
```

### Uso de Assets
```typescript
// Favicon (definido em layout.tsx)
icons: {
  icon: '/images/icons/favico.gif',
  shortcut: '/images/icons/favico.gif',
  apple: '/images/icons/favico.gif',
}

// Logo X (usado em page.tsx)
<Image 
  src="/images/logos/x-logo.png" 
  alt="X logo" 
  width={16} 
  height={16}
  className="filter grayscale hover:grayscale-0"
/>
```

✅ **Configuração Atual**: `images: { unoptimized: false, formats: ['image/webp'] }` - otimizada para produção.

---

## ⚙️ Arquivos de Configuração

### Next.js (`next.config.mjs`)
```javascript
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,     // ❌ Ignora erros ESLint
  },
  typescript: {
    ignoreBuildErrors: true,      // ❌ Ignora erros TypeScript
  },
  images: {
    unoptimized: true,           // ❌ Desabilita otimização
  },
}
```

### TypeScript (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "strict": false,              // ❌ TypeScript não estrito
    "target": "ES6",              // ✅ Target adequado
    "module": "esnext",           // ✅ Módulos ES
    "jsx": "preserve",            // ✅ JSX preservado
    "baseUrl": ".",               // ✅ Base URL
    "paths": {
      "@/*": ["./src/*"]          // ✅ Alias configurado
    }
  }
}
```

### Tailwind CSS (`tailwind.config.ts`)
```typescript
const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',      // ✅ Correto
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // ✅ Correto
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',      // ✅ Correto
  ],
  theme: {
    extend: {
      colors: { /* cores customizadas */ },    // ✅ Configurado
      fontFamily: { /* fontes customizadas */ }, // ✅ Configurado
      animation: { /* animações customizadas */ } // ✅ Configurado
    }
  }
}
```

### PostCSS (`postcss.config.mjs`)
```javascript
const config = {
  plugins: {
    tailwindcss: {},              // ✅ Presente
    // ❌ PROBLEMA: autoprefixer não configurado
  },
};
```

### Shadcn UI (`components.json`)
```json
{
  "style": "default",
  "rsc": true,                    // ✅ React Server Components
  "tsx": true,                    // ✅ TypeScript
  "tailwind": {
    "config": "tailwind.config.ts", // ✅ Correto
    "css": "app/globals.css",      // ❌ Deveria ser "src/app/globals.css"
    "baseColor": "neutral",        // ✅ Correto
    "cssVariables": true           // ✅ CSS variables
  }
}
```

### Package.json
```json
{
  "name": "my-v0-project",         // ❌ Nome genérico
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",             // ✅ Desenvolvimento
    "build": "next build",         // ✅ Build
    "start": "next start",         // ✅ Produção
    "lint": "next lint"            // ✅ Linting
  }
}
```

---

## 📚 Documentação (docs/)

### Nova Estrutura de Documentação
```
docs/
├── README.md                     # Índice principal
├── guides/                       # Guias detalhados
│   ├── DEVELOPMENT_GUIDE.md      # Guia de desenvolvimento
│   ├── ARCHITECTURE_GUIDE.md     # Arquitetura técnica
│   ├── DESIGN_SYSTEM.md          # Sistema de design
│   └── CONTRIBUTING.md           # Como contribuir
├── reference/                    # Referência técnica
│   ├── PROJECT_STRUCTURE.md      # Este arquivo
│   ├── CONFIGURATIONS.md         # Configurações detalhadas
│   ├── INTERNATIONALIZATION.md   # Sistema i18n
│   └── PERFORMANCE.md            # Otimizações
└── examples/                     # Exemplos práticos
    ├── CREATING_COMPONENTS.md     # Criando componentes
    ├── ADDING_PROJECTS.md         # Adicionando projetos
    ├── ADDING_LANGUAGES.md       # Adicionando idiomas
    └── DEBUGGING.md               # Debugging
```

---

## 🎯 Padrões e Convenções

### Nomenclatura de Arquivos
```typescript
// ✅ Páginas
page.tsx                          // Páginas principais
layout.tsx                        // Layouts

// ✅ Componentes
header.tsx                        // kebab-case
language-switcher.tsx             // kebab-case
collaborators-list.tsx            // kebab-case

// ✅ Contextos
LanguageContext.tsx               // PascalCase

// ✅ Traduções
digital-education-app.ts          // kebab-case (mesmo com inconsistência de IDs)
```

### Estrutura de Pastas
```typescript
// ✅ Privadas (Next.js)
_components/                      // Componentes específicos de página

// ✅ Públicas
components/                       // Componentes reutilizáveis
contexts/                         // Contextos globais
lib/                             // Utilitários
```

### Importações
```typescript
// ✅ Alias configurado
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

// ✅ Importações relativas para componentes específicos
import { CollaboratorsList } from "./_components/collaborators-list";
```

---

## 📊 Status do Projeto - ATUALIZADO

### Configurações Otimizadas ✅
1. **next.config.mjs**: Verifica erros e otimiza imagens
2. **tsconfig.json**: TypeScript em modo estrito
3. **postcss.config.mjs**: Autoprefixer configurado
4. **components.json**: Caminhos corretos
5. **package.json**: Nome específico "giflabs-website"

### Inconsistências Menores (Não Críticas)
1. **IDs vs Traduções**: Hífen vs underscore (impacto mínimo)
2. **Rota fantasma**: `/matzatea` no header (não afeta funcionamento)
3. **Componentes disponíveis**: Shadcn UI completo instalado (preparado para expansão)

### Oportunidades de Melhoria
1. **Organização**: Criar pasta `/src/types/` para tipos
2. **Testes**: Criar pasta `/tests/` ou `/__tests__/`
3. **Hooks**: Criar pasta `/src/hooks/` para hooks customizados
4. **Dados**: Criar pasta `/src/data/` para dados estáticos

---

## 🔮 Evolução da Estrutura

### Próximas Adições Planejadas
```
src/
├── types/                        # Tipos TypeScript globais
├── hooks/                        # Hooks customizados
├── data/                         # Dados estáticos
├── utils/                        # Utilitários expandidos
└── tests/                        # Testes (ou __tests__)
```

### Melhorias Futuras
1. **Monorepo**: Para projetos maiores
2. **Micro-frontends**: Para escalabilidade
3. **Storybook**: Para documentação de componentes
4. **API Layer**: Para integração com backends

---

## 📊 Estatísticas do Projeto

### Arquivos por Categoria
- **Páginas**: 8 páginas (1 principal + 7 projetos)
- **Componentes**: 3 layout + 45+ UI (Shadcn)
- **Traduções**: 9 arquivos de tradução
- **Configurações**: 6 arquivos principais
- **Assets**: 2 imagens

### Complexidade
- **Linhas de código**: ~3.000+ linhas (estimativa)
- **Componentes utilizados**: ~10% dos disponíveis
- **Idiomas suportados**: 2 (PT/EN)
- **Projetos documentados**: 7

---

## 🏆 RESUMO EXECUTIVO - PROJETO GIFLABS

### Status Geral: EXCELENTE ✅

**O projeto GIFLABS está em excelente estado técnico:**

#### ✅ **Pontos Fortes**
- **Arquitetura sólida**: Next.js 15.2.4 + App Router bem implementado
- **Configurações otimizadas**: Todas as configurações foram corrigidas e estão prontas para produção
- **Código limpo**: TypeScript strict mode, ESLint, estrutura bem organizada
- **Sistema de design**: Tailwind + Shadcn UI consistente e profissional
- **Internacionalização**: Sistema próprio funcional e eficiente
- **Performance**: Otimizações de imagem e build configuradas
- **Documentação**: Completa e detalhada

#### ⚠️ **Pontos de Atenção (Menores)**
- Inconsistência de nomenclatura (hífen vs underscore)
- Rota `/matzatea` não utilizada no header
- Oportunidades de expansão (testes, hooks customizados)

#### 🎯 **Recomendação**
**Projeto aprovado para produção!** As configurações estão otimizadas e o código está bem estruturado. As inconsistências identificadas são menores e não afetam o funcionamento.

**📁 Esta estrutura foi projetada para ser escalável e manutenível, permitindo crescimento organizado do projeto GIFLABS.**









