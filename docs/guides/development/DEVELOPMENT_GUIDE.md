# 🚀 GIFLABS - Guia de Desenvolvimento

> **Guia completo para desenvolvedores do projeto GIFLABS**

## 📋 Índice
1. [Configuração do Ambiente](#configuração-do-ambiente)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Padrões de Código](#padrões-de-código)
4. [Sistema de Internacionalização](#sistema-de-internacionalização)
5. [Componentes e UI](#componentes-e-ui)
6. [Roteamento e Páginas](#roteamento-e-páginas)
7. [Estilização](#estilização)
8. [Performance e Otimização](#performance-e-otimização)
9. [Deploy](#deploy)
10. [Troubleshooting](#troubleshooting)

---

## 🛠️ Configuração do Ambiente

### Pré-requisitos
- **Node.js**: 18.17+ ou 20.9+
- **pnpm**: 8.0+ (recomendado) ou npm 9.0+
- **Git**: 2.30+
- **VS Code** (recomendado) com extensões:
  - TypeScript Importer
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter

### Instalação
```bash
# Clone o repositório
git clone https://github.com/Investigacao-Filosofica/giflabs.git
cd giflabs

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

### Scripts Disponíveis
```bash
pnpm dev          # Servidor de desenvolvimento
pnpm build        # Build de produção
pnpm start        # Servidor de produção
pnpm lint         # Verificação de código (ESLint)
```

⚠️ **Nota**: Todas as configurações estão otimizadas para produção.

---

## 🏗️ Estrutura do Projeto

### Organização de Diretórios
```
src/
├── app/                    # App Router (páginas)
│   ├── page.tsx           # Página inicial
│   ├── [projeto]/         # Páginas de projetos
│   │   ├── page.tsx       # Página principal do projeto
│   │   └── _components/   # Componentes específicos
│   ├── layout.tsx         # Layout raiz
│   └── globals.css        # Estilos globais
├── components/             # Componentes reutilizáveis
│   ├── layout/            # Componentes de layout
│   └── ui/                # Componentes base (Shadcn UI)
├── contexts/               # Contextos React
│   ├── LanguageContext.tsx # Contexto de idioma
│   └── translations/       # Arquivos de tradução
└── lib/                    # Utilitários e configurações
```

### Convenções de Nomenclatura
- **Arquivos**: kebab-case (`digital-education-app.tsx`)
- **Componentes**: PascalCase (`LanguageSwitcher`)
- **Funções**: camelCase (`useLanguage`)
- **Constantes**: camelCase (`homeTranslations`)
- **Diretórios**: kebab-case (`_components/`)

---

## 📝 Padrões de Código

### TypeScript
```typescript
// ✅ Sempre use interfaces para props
interface ComponentProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline';
}

// ✅ Use tipos específicos, não 'any'
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  // ...
};

// ✅ Evite enums, use const assertions
const PROJECT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  ARCHIVED: 'archived'
} as const;
```

### React
```typescript
// ✅ Use functional components
export function MyComponent({ title, children }: ComponentProps) {
  const { t } = useLanguage();
  
  return (
    <div className="container">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

// ✅ Use hooks customizados para lógica complexa
function useProjectData(projectId: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // lógica de fetch
  }, [projectId]);
  
  return { data, loading };
}
```

### Estrutura de Arquivos
```typescript
// ✅ Organize imports nesta ordem:
// 1. React e Next.js
import React from "react";
import Link from "next/link";

// 2. Componentes externos
import { Button } from "@/components/ui/button";

// 3. Hooks e contextos
import { useLanguage } from "@/contexts/LanguageContext";

// 4. Utilitários
import { cn } from "@/lib/utils";

// 5. Tipos (se necessário)
interface Props {
  // ...
}
```

---

## 🌐 Sistema de Internacionalização

### Estrutura Atual
O projeto usa um sistema customizado com Context API para gerenciar traduções entre Português (pt) e Inglês (en).

### Adicionando Novos Projetos
1. **Criar arquivo de traduções** em `src/contexts/translations/`
2. **Importar no LanguageContext** e adicionar ao merge
3. **Adicionar entrada no array** `projects` em `src/app/page.tsx`
4. **Criar página do projeto** em `src/app/[nome-projeto]/page.tsx`

### Estrutura de Traduções
```typescript
// src/contexts/translations/novo-projeto.ts
export const novoProjetoTranslations = {
  pt: {
    "novo_projeto": {
      "hero": {
        "title": "Título em Português",
        "description": "Descrição em Português"
      }
    }
  },
  en: {
    "novo_projeto": {
      "hero": {
        "title": "Title in English",
        "description": "Description in English"
      }
    }
  }
};
```

### Uso em Componentes
```typescript
const { t } = useLanguage();

// ✅ Use chaves aninhadas para organização
<h1>{t("novo_projeto.hero.title")}</h1>
<p>{t("novo_projeto.hero.description")}</p>

// ⚠️ IMPORTANTE: IDs devem ser consistentes
// Projeto: { id: "novo-projeto" } (com hífen)
// Tradução: "novo_projeto" (com underscore)
```

---

## 🧩 Componentes e UI

### Shadcn UI Disponíveis
O projeto inclui uma ampla gama de componentes Shadcn UI. Os mais utilizados são:

- **Button** - Botões com variantes
- **Badge** - Tags e labels
- **Card** - Cards de conteúdo (disponível mas pouco usado)

### Criando Novos Componentes
```typescript
// src/components/novo-componente.tsx
"use client";

import { cn } from "@/lib/utils";

interface NovoComponenteProps {
  variant?: 'default' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export function NovoComponente({ 
  variant = 'default', 
  className, 
  children 
}: NovoComponenteProps) {
  return (
    <div className={cn(
      "base-classes",
      variant === 'outline' && "outline-variant-classes",
      className
    )}>
      {children}
    </div>
  );
}
```

### Componentes de Layout
```typescript
// ✅ Sempre use "use client" para componentes interativos
"use client";

// ✅ Use o hook useLanguage para traduções
const { t } = useLanguage();

// ✅ Mantenha responsividade mobile-first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

## 🛣️ Roteamento e Páginas

### Estrutura App Router
O projeto usa Next.js 15.2.8 com App Router. Cada projeto tem sua própria página em `/src/app/[nome-projeto]/`.

### Criando Novas Páginas
```typescript
// src/app/novo-projeto/page.tsx
"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/header";

export default function NovoProjetoPage() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
          <div className="container relative z-10 mx-auto px-6 text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
              {t("novo_projeto.hero.title")}
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}
```

### Navegação Interna
```typescript
// ✅ Use IDs para navegação interna
<section id="secao" className="scroll-mt-24">
  <h2>Seção</h2>
</section>

// ✅ Links com scroll suave
<Link href="#secao" className="hover:text-neutral-600">
  Ir para Seção
</Link>
```

---

## 🎨 Estilização

### Tailwind CSS
```typescript
// ✅ Use classes utilitárias do Tailwind
<div className="
  bg-white 
  py-20 md:py-28 
  scroll-mt-24
  container mx-auto px-6
">
  {/* conteúdo */}
</div>

// ✅ Responsividade mobile-first
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"

// ✅ Espaçamento consistente
"space-y-6" "gap-8" "py-20 md:py-28"
```

### Sistema de Cores
O projeto usa principalmente tons neutros:

```css
/* Cores principais definidas no Tailwind config */
neutral-50: #fafafa   /* Background mais claro */
neutral-100: #f5f5f5  /* Background claro */
neutral-900: #171717  /* Background mais escuro */
```

### CSS Customizado
```css
/* ✅ Adicione estilos customizados em globals.css */
@layer components {
  .custom-button {
    @apply bg-neutral-900 hover:bg-neutral-800 text-white;
  }
}
```

---

## ⚡ Performance e Otimização

### Next.js Otimizações
```typescript
// ✅ Configurações atuais (otimizadas)
import Image from "next/image";

<Image
  src="/images/logo.png"
  alt="Logo"
  width={200}
  height={100}
  priority={true} // Para above-the-fold images
/>

// ✅ Lazy loading para componentes não críticos
import dynamic from "next/dynamic";

const LazyComponent = dynamic(() => import("./LazyComponent"), {
  loading: () => <div>Loading...</div>
});
```

### Bundle Optimization
```typescript
// ✅ Importe apenas o que precisar do Lucide
import { ChevronDown, Menu, X } from "lucide-react";

// ✅ Use tree shaking para bibliotecas
import { Button } from "@/components/ui/button";
```

---

## 🚀 Deploy

### Build de Produção
```bash
# Build otimizado
pnpm build

# Verificar build
pnpm start
```

✅ **Configurações Atuais (Otimizadas)**:

```typescript
// next.config.mjs - ✅ Configurações de produção
eslint: { ignoreDuringBuilds: false },     // ✅ Verifica erros
typescript: { ignoreBuildErrors: false },  // ✅ Verifica erros
images: { 
  unoptimized: false,                      // ✅ Otimização ativa
  formats: ['image/webp']                  // ✅ WebP habilitado
}
```

```json
// tsconfig.json - ✅ Modo estrito habilitado
"strict": true,                            // ✅ Modo estrito ativo
```

### Plataformas Recomendadas
- **Vercel** (recomendado para Next.js) - ✅ Em uso
- **Railway** (para Strapi + PostgreSQL) - ✅ Em uso
- **Netlify** (alternativa)
- **AWS Amplify** (alternativa)

---

## 🔧 Troubleshooting

### Problemas Comuns

#### Erro de Build
```bash
# Limpar cache
rm -rf .next
pnpm install
pnpm build
```

#### Problemas de TypeScript
✅ **Status**: O projeto está configurado com `"strict": true`, garantindo tipagem rigorosa.

```bash
# Verificar tipos manualmente
npx tsc --noEmit
```

#### Problemas de Configuração
✅ **Status**: Todas as configurações estão otimizadas:
1. ✅ **PostCSS**: Autoprefixer configurado
2. ✅ **Components.json**: Caminho CSS correto
3. ✅ **TypeScript**: Modo estrito habilitado

---

## 📚 Recursos Adicionais

### Documentação
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Ferramentas Úteis
- **VS Code Extensions**: TypeScript, Tailwind CSS IntelliSense
- **Browser Extensions**: React DevTools
- **Performance**: Lighthouse, WebPageTest

---

## 🎯 Checklist de Qualidade

### Antes do Commit
- [ ] Código segue padrões de TypeScript
- [ ] Componentes são responsivos
- [ ] Traduções estão implementadas (PT/EN)
- [ ] Acessibilidade básica implementada
- [ ] Performance não degradou

### Antes do Deploy
- [ ] Corrigir configurações de produção
- [ ] Build sem erros
- [ ] Performance auditado
- [ ] Acessibilidade verificada

---

## ⚠️ Itens que Precisam de Atenção

### ✅ Resolvidos
1. ✅ **next.config.mjs**: Configurações otimizadas
2. ✅ **tsconfig.json**: Modo estrito habilitado
3. ✅ **postcss.config.mjs**: Autoprefixer configurado
4. ✅ **components.json**: Caminho CSS correto
5. ✅ **Otimização de imagens**: Habilitada com WebP
6. ✅ **Versão Next.js**: Atualizada para 15.2.8

### Melhorias Futuras (Opcionais)
1. **Testes**: Implementar Jest + React Testing Library
2. **Linting**: Configurar ESLint + Prettier adequadamente
3. **CI/CD**: GitHub Actions para build/deploy automático
4. **Blog**: Integração com Strapi já documentada

---

**🎉 Agora você está pronto para contribuir com o projeto GIFLABS!**

Para dúvidas específicas, consulte os outros guias na pasta `/docs/` ou abra uma issue no GitHub.

