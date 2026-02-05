# 🏗️ GIFLABS - Guia de Arquitetura Técnica

> **Arquitetura técnica detalhada do projeto GIFLABS**

## 📋 Índice
1. [Visão Geral da Arquitetura](#visão-geral-da-arquitetura)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Estrutura de Dados](#estrutura-de-dados)
4. [Sistema de Estado](#sistema-de-estado)
5. [Roteamento e Navegação](#roteamento-e-navegação)
6. [Sistema de Componentes](#sistema-de-componentes)
7. [Internacionalização](#internacionalização)
8. [Performance e Otimização](#performance-e-otimização)
9. [Configurações e Build](#configurações-e-build)
10. [Escalabilidade](#escalabilidade)

---

## 🎯 Visão Geral da Arquitetura

### Princípios Arquiteturais
- **Component-Based Architecture**: Componentes reutilizáveis e modulares
- **Separation of Concerns**: Separação clara entre lógica, UI e dados
- **Mobile-First Design**: Responsividade como prioridade
- **Performance-First**: Otimizações desde o desenvolvimento
- **Accessibility-First**: Acessibilidade integrada ao design

### Padrões Utilizados
- **App Router Pattern** (Next.js 15.2.8)
- **Context API Pattern** para estado global
- **Composition Pattern** para componentes
- **Container/Presentational Pattern** para separação de responsabilidades

---

## 🛠️ Stack Tecnológico

### Framework Principal
```typescript
// Next.js 15.2.8 com App Router
- React 19 (Server Components + Client Components)
- TypeScript 5 (strict mode habilitado)
- Tailwind CSS 3.4.17 (utility-first CSS)
- Shadcn UI (component library baseada em Radix UI)
```

### Dependências Principais
```json
{
  "next": "15.2.8",           // Framework principal
  "react": "^19",             // Biblioteca de UI
  "typescript": "^5",         // Tipagem estática
  "tailwindcss": "^3.4.17",  // Framework CSS
  "lucide-react": "^0.454.0", // Ícones
  "framer-motion": "^12.23.7" // Animações (instalado mas não usado)
}
```

### Componentes UI (Shadcn)
```json
{
  "@radix-ui/react-*": "^1.*", // Primitivos de UI
  "class-variance-authority": "^0.7.1", // Variantes de classe
  "clsx": "^2.1.1",           // Utilitário de classes
  "tailwind-merge": "^2.5.5", // Merge de classes Tailwind
}
```

### Ferramentas de Desenvolvimento
```json
{
  "devDependencies": {
    "@types/node": "^22",     // Tipos Node.js
    "@types/react": "^19",    // Tipos React
    "postcss": "^8.5",        // Processador CSS
    "autoprefixer": "^10.4.20" // Prefixos CSS (configurado)
  }
}
```

---

## 📊 Estrutura de Dados

### Tipos Principais (Implícitos)
```typescript
// Estrutura inferida do código
interface Project {
  id: string;                    // e.g., "education-app"
  iconName: string;              // Nome do ícone Lucide
  link: string;                  // Rota da página
}

interface TeamMember {
  id: string;                    // e.g., "rodrigo_cid"
  iconName: string;              // Nome do ícone Lucide
  lattes: string;                // URL Lattes
  github: string;                // URL GitHub
  linkedin: string;              // URL LinkedIn
  twitter: string;               // URL Twitter/X
  badges: string[];              // IDs dos badges
}

interface Translation {
  [key: string]: string | Translation;
}
```

### Estrutura de Traduções
```typescript
// Hierarquia atual das traduções
interface TranslationStructure {
  home: {
    hero: {
      title: string;
      description: string;
      cta: string;
    };
    projects: {
      title: string;
      description: string;
      cards: {
        [projectId: string]: {
          title: string;
          description: string;
        };
      };
    };
    team: {
      title: string;
      description: string;
      members: {
        [memberId: string]: {
          name: string;
          role: string;
          description: string;
          badges: {
            [badgeId: string]: string;
          };
        };
      };
    };
  };
}
```

### Dados Estáticos
```typescript
// src/app/page.tsx - Dados dos projetos
const projects = [
  {
    id: "education-app",         // ⚠️ Inconsistência: hífen vs underscore
    iconName: "GraduationCap",
    link: "/digital-education-app",
  },
  // ... outros projetos
];

// src/app/page.tsx - Dados da equipe
const teamMembers = [
  {
    id: "rodrigo_cid",           // Underscore nos IDs
    iconName: "Users",
    lattes: "http://lattes.cnpq.br/...",
    badges: ["philosophy_science", "educational_technology"]
  },
  // ... outros membros
];
```

---

## 🔄 Sistema de Estado

### Context API Architecture
```typescript
// src/contexts/LanguageContext.tsx
interface LanguageContextType {
  language: string;              // 'pt' | 'en'
  setLanguage: (lang: string) => void;
  t: (key: string) => string;    // Função de tradução
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('pt');

  // Persistência no localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && ['pt', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Função de tradução com fallback
  const t = (key: string): string => {
    const allTranslations = {
      pt: { /* todas as traduções PT */ },
      en: { /* todas as traduções EN */ }
    };

    const translations = language === 'en' ? allTranslations.en : allTranslations.pt;
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Fallback para a chave original
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}
```

### Estado Local vs Global
```typescript
// Estado Local (useState) - Para componentes específicos
function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  // ...
}

// Estado Global (Context) - Para dados compartilhados
function Header() {
  const { language, setLanguage } = useLanguage();
  // ...
}
```

---

## 🛣️ Roteamento e Navegação

### App Router Structure
```typescript
// src/app/layout.tsx (Root Layout)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${lora.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
```

### Estrutura de Páginas
```
src/app/
├── page.tsx                    # Página inicial
├── layout.tsx                  # Layout raiz
├── globals.css                 # Estilos globais
├── blog/
│   ├── page.tsx               # Listagem de posts
│   └── [slug]/
│       └── page.tsx           # Post individual
├── digital-education-app/
│   └── page.tsx               # Projeto: Digital Education App
├── serie-if/
│   ├── page.tsx               # Projeto: Série IF
│   └── _components/           # Componentes específicos
├── virtualia/
│   ├── page.tsx               # Projeto: Virtualia
│   └── _components/
├── literatura/
│   └── page.tsx               # Projeto: Literatura
├── metaverso/
│   └── page.tsx               # Projeto: Metaverso
├── arqueologia-digital/
│   └── page.tsx               # Projeto: Arquivologia Digital
└── giflabs/
    └── page.tsx               # Projeto: GIFLABS
```

### Navegação Dinâmica
```typescript
// src/components/layout/header.tsx
export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const getNavLinks = (): NavLink[] => {
    switch (pathname) {
      case "/":
        return [
          { href: "#home", label: t("navigation.home") },
          { href: "#sobre", label: t("navigation.about") },
          // ...
        ];
      case "/literatura":
        return [
          { href: "/", label: "Home" },
          { href: "#projeto", label: t("navigation.project_details") },
          // ...
        ];
      default:
        return [];
    }
  };
}
```

---

## 🧩 Sistema de Componentes

### Hierarquia de Componentes
```
App Layout (src/app/layout.tsx)
├── LanguageProvider (Context)
├── Header (Navigation + Language Switcher)
├── Main Content
│   ├── Home Page (src/app/page.tsx)
│   │   ├── Hero Section
│   │   ├── About Section
│   │   ├── Projects Grid
│   │   └── Team Section
│   └── Project Pages (src/app/[projeto]/page.tsx)
│       ├── Project Hero
│       ├── Project Content
│       └── Project Components (_components/)
└── Footer (Contact + Info)
```

### Componentes Shadcn UI Disponíveis
O projeto tem MUITOS componentes Shadcn UI instalados mas poucos são utilizados:

**Componentes Utilizados:**
- `Button` - Amplamente usado
- `Badge` - Usado para tags da equipe
- `Card` - Disponível mas raramente usado

**Componentes Disponíveis mas Não Utilizados:**
- `Input`, `Form`, `Textarea` - Para formulários futuros
- `Dialog`, `AlertDialog` - Para modais
- `Tabs`, `Accordion` - Para organização de conteúdo
- `Table` - Para dados tabulares
- E muitos outros...

### Padrões de Componentes
```typescript
// 1. Container Component
function ProjectsSection() {
  const { t } = useLanguage();
  const projects = getProjects();
  
  return (
    <section id="projetos" className="bg-neutral-900 py-24">
      <div className="container mx-auto px-6">
        <ProjectsHeader title={t("home.projects.title")} />
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}

// 2. Presentational Component
function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

---

## 🌐 Internacionalização

### Sistema de Traduções
```typescript
// src/contexts/LanguageContext.tsx
const allTranslations = {
  pt: {
    ...headerFooterTranslations.pt,
    ...homeTranslations.pt,
    ...serieIfTranslations.pt,
    ...digitalEducationAppTranslations.pt,
    ...virtualiaTranslations.pt,
    ...metaversoTranslations.pt,
    ...arqueologiaDigitalTranslations.pt,
    ...giflabsTranslations.pt,
    ...literaturaTranslations.pt
  },
  en: {
    // Mesma estrutura para inglês
  }
};
```

### Arquivos de Tradução
```
src/contexts/translations/
├── header-footer.ts        # Navegação e rodapé
├── home.ts                 # Página inicial
├── serie-if.ts            # Projeto Série IF
├── digital-education-app.ts # Projeto Digital Education App
├── virtualia.ts           # Projeto Virtualia
├── metaverso.ts           # Projeto Metaverso
├── arqueologia-digital.ts # Projeto Arquivologia Digital
├── giflabs.ts              # Projeto GIFLABS
└── literatura.ts          # Projeto Literatura
```

### Gestão de Idiomas
```typescript
// src/components/layout/language-switcher.tsx
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
    setIsOpen(false);
  };
  
  // Interface com hover/click para alternar idiomas
}
```

---

## ⚡ Performance e Otimização

### Configurações Atuais (Otimizadas) ✅
```typescript
// next.config.mjs - ✅ Configurações otimizadas para produção
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,    // ✅ Verifica erros ESLint
  },
  typescript: {
    ignoreBuildErrors: false,     // ✅ Verifica erros TypeScript
  },
  images: {
    unoptimized: false,          // ✅ Otimização habilitada
    formats: ['image/webp'],     // ✅ Formato WebP
  },
}
```

### CSS e Tailwind
```typescript
// tailwind.config.ts - ✅ Configuração correta
content: [
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
],
```

### Bundle Optimization
```typescript
// ✅ Tree shaking funcionando
import { Button } from "@/components/ui/button";    // Importa apenas Button
import { ChevronDown, Menu, X } from "lucide-react"; // Importa apenas ícones usados
```

---

## 🔧 Configurações e Build

### Configurações de Desenvolvimento
```json
// tsconfig.json - ✅ Modo estrito habilitado
{
  "compilerOptions": {
    "strict": true,              // ✅ Modo estrito ativo
    "target": "ES6",              // ✅ Adequado
    "module": "esnext",           // ✅ Adequado
    "jsx": "preserve",            // ✅ Adequado para Next.js
    "baseUrl": ".",               // ✅ Para imports @/*
    "paths": {
      "@/*": ["./src/*"]          // ✅ Alias configurado
    }
  },
  "exclude": ["node_modules", "strapi"]  // ✅ Exclui Strapi
}
```

### PostCSS
```javascript
// postcss.config.mjs - ✅ Autoprefixer configurado
const config = {
  plugins: {
    tailwindcss: {},              // ✅ Presente
    autoprefixer: {},             // ✅ Configurado
  },
};
```

### Shadcn UI
```json
// components.json - ✅ Caminho CSS correto
{
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",  // ✅ Caminho correto
    "baseColor": "neutral",       // ✅ Correto
    "cssVariables": true          // ✅ Correto
  }
}
```

---

## 📈 Escalabilidade

### Expansão de Componentes
```typescript
// Estrutura para crescimento
src/components/
├── ui/                    # Componentes base (Shadcn UI)
├── layout/               # Layout (Header, Footer, etc.)
├── forms/                # Formulários (futuro)
├── data-display/         # Tabelas, cards, etc. (futuro)
└── feedback/             # Modais, toasts, etc. (futuro)
```

### Estado Futuro
```typescript
// Para aplicações maiores, considerar:
import { create } from 'zustand';  // Estado mais robusto

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';         // Tema escuro futuro
  projects: Project[];
  setUser: (user: User | null) => void;
  setTheme: (theme: 'light' | 'dark') => void;
}
```

### API Integration (Futuro)
```typescript
// src/lib/api.ts - Estrutura para APIs futuras
class ApiClient {
  private config: ApiConfig;
  
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.config.baseURL}${endpoint}`);
    return response.json();
  }
}
```

---

## 🎯 Roadmap de Arquitetura

### Fase 1: Consolidação (Atual)
- [x] Estrutura base com Next.js 15.2.8
- [x] Sistema de internacionalização customizado
- [x] Component library com Shadcn UI
- [x] Responsividade mobile-first
- [x] **Configurações de produção otimizadas**
- [x] Blog integrado com Strapi
- [x] Deploy no Vercel e Railway

### Fase 2: Otimização (Próximo)
- [x] Habilitar TypeScript strict mode ✅
- [x] Configurar autoprefixer ✅
- [x] Otimização de imagens ✅
- [ ] Implementação de testes
- [ ] ESLint + Prettier adequados

### Fase 3: Expansão (Futuro)
- [ ] PWA capabilities
- [ ] API integration
- [ ] State management avançado (Zustand)
- [ ] Tema escuro

### Fase 4: Enterprise (Longo prazo)
- [ ] Monorepo structure
- [ ] Storybook para documentação
- [ ] Performance monitoring
- [ ] CI/CD pipeline completo

---

## ⚠️ Problemas Arquiteturais Atuais

### Resolvidos ✅
1. ✅ **Configurações de build** - Todas otimizadas
2. ✅ **TypeScript strict mode** - Habilitado
3. ✅ **Autoprefixer** - Configurado
4. ✅ **Caminho CSS** - Corrigido em components.json
5. ✅ **Versão Next.js** - Atualizada para 15.2.8
6. ✅ **Otimização de imagens** - Habilitada com WebP

### Menores (Não Críticos)
1. **Inconsistência de IDs** (hífen vs underscore) - Documentado como padrão
2. **Componentes não utilizados** ocupando espaço

---

## 📚 Recursos e Referências

### Documentação Oficial
- [Next.js App Router](https://nextjs.org/docs/app)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Arquitetura e Padrões
- [React Patterns](https://reactpatterns.com/)
- [Next.js Best Practices](https://nextjs.org/docs/advanced-features/patterns)
- [Component Design Patterns](https://www.patterns.dev/)

---

**🏗️ Esta arquitetura foi projetada para ser escalável e manutenível, mas precisa de ajustes de configuração antes de ir para produção.**

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF)