# 🚀 GIFLABS - Guia de Desenvolvimento

## 📋 Índice
1. [Configuração do Ambiente](#configuração-do-ambiente)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Padrões de Código](#padrões-de-código)
4. [Sistema de Internacionalização](#sistema-de-internacionalização)
5. [Componentes e UI](#componentes-e-ui)
6. [Roteamento e Páginas](#roteamento-e-páginas)
7. [Estilização](#estilização)
8. [Performance e Otimização](#performance-e-otimização)
9. [Testes](#testes)
10. [Deploy](#deploy)
11. [Troubleshooting](#troubleshooting)

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
pnpm lint         # Verificação de código
```

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
- **Arquivos**: kebab-case (`digital-education-app.ts`)
- **Componentes**: PascalCase (`GifLabsSite`)
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

// 5. Tipos
interface Props {
  // ...
}
```

---

## 🌐 Sistema de Internacionalização

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

// ❌ Evite chaves muito longas
// t("novo_projeto.hero.section.subsection.element.title")
```

---

## 🧩 Componentes e UI

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

### Shadcn UI
```typescript
// ✅ Use variantes do Shadcn UI
<Button variant="outline" size="lg">
  {t("button.text")}
</Button>

// ✅ Customize com className quando necessário
<Button className="bg-custom-color hover:bg-custom-color-dark">
  Custom Button
</Button>
```

---

## 🛣️ Roteamento e Páginas

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
        
        {/* Outras seções */}
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

### CSS Customizado
```css
/* ✅ Adicione estilos customizados em globals.css */
@layer components {
  .custom-button {
    @apply bg-neutral-900 hover:bg-neutral-800 text-white;
  }
}

/* ✅ Use variáveis CSS para consistência */
:root {
  --color-primary: #171717;
  --color-secondary: #f5f5f5;
}
```

### Animações
```typescript
// ✅ Use classes de animação do Tailwind
<div className="
  opacity-0 group-hover:opacity-100 
  transition-opacity duration-300
">
  Hover effect
</div>

// ✅ Animações CSS customizadas
<div className="animate-fade-in-up">
  Fade in animation
</div>
```

---

## ⚡ Performance e Otimização

### Next.js Otimizações
```typescript
// ✅ Use Image component para otimização
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

// ✅ Use tree shaking para bibliotecas grandes
import { Button } from "@/components/ui/button";
```

### CSS Optimization
```css
/* ✅ Use @apply para classes complexas */
.custom-card {
  @apply bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow;
}

/* ✅ Evite CSS inline quando possível */
```

---

## 🧪 Testes

### Estrutura de Testes
```
tests/
├── components/           # Testes de componentes
├── pages/               # Testes de páginas
├── utils/               # Testes de utilitários
└── __mocks__/           # Mocks para testes
```

### Testes de Componentes
```typescript
// tests/components/NovoComponente.test.tsx
import { render, screen } from '@testing-library/react';
import { NovoComponente } from '@/components/novo-componente';

describe('NovoComponente', () => {
  it('renders correctly', () => {
    render(<NovoComponente>Test content</NovoComponente>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
```

### Testes de Integração
```typescript
// tests/pages/novo-projeto.test.tsx
import { render, screen } from '@testing-library/react';
import NovoProjetoPage from '@/app/novo-projeto/page';

// Mock do contexto de idioma
jest.mock('@/contexts/LanguageContext', () => ({
  useLanguage: () => ({
    t: (key: string) => key
  })
}));

describe('NovoProjetoPage', () => {
  it('displays hero section', () => {
    render(<NovoProjetoPage />);
    expect(screen.getByText('novo_projeto.hero.title')).toBeInTheDocument();
  });
});
```

---

## 🚀 Deploy

### Build de Produção
```bash
# Build otimizado
pnpm build

# Verificar build
pnpm start

# Análise de bundle (opcional)
pnpm analyze
```

### Variáveis de Ambiente
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.giflabs.com
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
```

### Deploy Platforms
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker + VPS**

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
```bash
# Verificar tipos
pnpm type-check

# Regenerar tipos
pnpm types:generate
```

#### Problemas de CSS
```bash
# Limpar cache do Tailwind
pnpm tailwind:clean

# Rebuild CSS
pnpm tailwind:build
```

### Debug
```typescript
// ✅ Use console.log para debug
console.log('Debug info:', { data, loading });

// ✅ Use React DevTools para inspecionar componentes
// ✅ Use Network tab para verificar requests
// ✅ Use Performance tab para análise de performance
```

---

## 📚 Recursos Adicionais

### Documentação
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Ferramentas Úteis
- **VS Code Extensions**: TypeScript, Tailwind CSS IntelliSense
- **Browser Extensions**: React DevTools, Redux DevTools
- **Performance**: Lighthouse, WebPageTest
- **Accessibility**: axe DevTools, WAVE

### Comunidade
- **GitHub Issues**: Para bugs e feature requests
- **Discord/Slack**: Para discussões técnicas
- **Stack Overflow**: Para perguntas específicas

---

## 🎯 Checklist de Qualidade

### Antes do Commit
- [ ] Código segue padrões de TypeScript
- [ ] Componentes são responsivos
- [ ] Traduções estão implementadas (PT/EN)
- [ ] Acessibilidade básica implementada
- [ ] Performance não degradou
- [ ] Testes passam (se aplicável)

### Antes do Deploy
- [ ] Build sem erros
- [ ] Testes de integração passam
- [ ] Performance auditado
- [ ] Acessibilidade verificada
- [ ] SEO otimizado
- [ ] Analytics configurado

---

**🎉 Parabéns! Você está pronto para contribuir com o projeto GIFLABS!**

Para dúvidas ou sugestões, abra uma issue no GitHub ou entre em contato com a equipe de desenvolvimento.
