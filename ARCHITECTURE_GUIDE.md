# 🏗️ GIFLABS - Guia de Arquitetura Técnica

## 📋 Índice
1. [Visão Geral da Arquitetura](#visão-geral-da-arquitetura)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Estrutura de Dados](#estrutura-de-dados)
4. [Sistema de Estado](#sistema-de-estado)
5. [Roteamento e Navegação](#roteamento-e-navegação)
6. [Sistema de Componentes](#sistema-de-componentes)
7. [Internacionalização](#internacionalização)
8. [Performance e Otimização](#performance-e-otimização)
9. [Segurança](#segurança)
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
- **App Router Pattern** (Next.js 14)
- **Context API Pattern** para estado global
- **Composition Pattern** para componentes
- **Container/Presentational Pattern** para separação de responsabilidades

---

## 🛠️ Stack Tecnológico

### Frontend Framework
```typescript
// Next.js 14 com App Router
- React 19 (Server Components + Client Components)
- TypeScript 5 (tipagem estrita)
- Tailwind CSS 3.4+ (utility-first CSS)
- Shadcn UI (component library)
```

### Dependências Principais
```json
{
  "next": "15.2.4",           // Framework principal
  "react": "^19",             // Biblioteca de UI
  "typescript": "^5",         // Tipagem estática
  "tailwindcss": "^3.4.17",  // Framework CSS
  "lucide-react": "^0.454.0", // Ícones
  "framer-motion": "^12.23.7" // Animações (futuro)
}
```

### Ferramentas de Desenvolvimento
```json
{
  "devDependencies": {
    "@types/node": "^22",     // Tipos Node.js
    "@types/react": "^19",    // Tipos React
    "postcss": "^8.5",        // Processador CSS
    "autoprefixer": "^10.4.20" // Prefixos CSS
  }
}
```

---

## 📊 Estrutura de Dados

### Tipos Globais
```typescript
// src/types/global.ts
export interface Project {
  id: string;
  iconName: keyof typeof iconMap;
  link: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  iconName: keyof typeof iconMap;
  name: string;
  role: string;
  description: string;
  badges: string[];
  social: {
    lattes?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface TranslationKey {
  [key: string]: string | TranslationKey;
}
```

### Estrutura de Traduções
```typescript
// Hierarquia de chaves
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
  };
}
```

### Dados Estáticos
```typescript
// src/data/projects.ts
export const projects: Project[] = [
  {
    id: "education-app",
    iconName: "GraduationCap",
    link: "/digital-education-app",
    title: "Digital Education App",
    description: "Descrição do projeto..."
  }
  // ... outros projetos
];

// src/data/team.ts
export const teamMembers: TeamMember[] = [
  {
    id: "rodrigo_cid",
    iconName: "Users",
    name: "Prof. Dr. Rodrigo Cid",
    role: "Líder",
    description: "Descrição do membro...",
    badges: ["philosophy_science", "educational_technology"],
    social: {
      lattes: "http://lattes.cnpq.br/...",
      github: "https://github.com/...",
      twitter: "https://x.com/..."
    }
  }
  // ... outros membros
];
```

---

## 🔄 Sistema de Estado

### Context API Architecture
```typescript
// src/contexts/LanguageContext.tsx
interface LanguageContextType {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
  t: (key: string) => string;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  
  // Persistência no localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && ['pt', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage as 'pt' | 'en');
    }
  }, []);

  // Função de tradução com fallback
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Fallback para a chave original
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

### Estado Local vs Global
```typescript
// ✅ Estado Local (useState)
function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* conteúdo */}
    </div>
  );
}

// ✅ Estado Global (Context)
function Header() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <header>
      <LanguageSwitcher 
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
    </header>
  );
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

// src/app/page.tsx (Home Page)
export default function GifLabsSite() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Seções da página inicial */}
    </div>
  );
}

// src/app/[projeto]/page.tsx (Project Pages)
export default function ProjectPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <Header />
      <main>
        {/* Conteúdo específico do projeto */}
      </main>
    </div>
  );
}
```

### Navegação Dinâmica
```typescript
// src/components/layout/header.tsx
export function Header() {
  const pathname = usePathname();
  
  const getNavLinks = (): NavLink[] => {
    switch (pathname) {
      case "/":
        return [
          { href: "#home", label: t("navigation.home") },
          { href: "#sobre", label: t("navigation.about") },
          { href: "#projetos", label: t("navigation.projects") },
          { href: "#equipe", label: t("navigation.team") },
          { href: "#contato", label: t("navigation.contact") }
        ];
      case "/literatura":
        return [
          { href: "/", label: "Home" },
          { href: "#projeto", label: t("navigation.project_details") },
          { href: "#criadores", label: t("navigation.collaborators") }
        ];
      // ... outros casos
    }
  };

  return (
    <nav>
      {getNavLinks().map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
```

### Scroll Navigation
```typescript
// Navegação interna com scroll suave
<section id="projetos" className="scroll-mt-18">
  <h2>Projetos</h2>
</section>

// Links com scroll automático
<Link href="#projetos" className="hover:text-neutral-600">
  Ver Projetos
</Link>
```

---

## 🧩 Sistema de Componentes

### Component Hierarchy
```
App Layout
├── Header (Navigation + Language Switcher)
├── Main Content
│   ├── Home Page
│   │   ├── Hero Section
│   │   ├── About Section
│   │   ├── Projects Grid
│   │   └── Team Section
│   └── Project Pages
│       ├── Project Hero
│       ├── Project Content
│       └── Project Components
└── Footer (Contact + Info)
```

### Component Patterns
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

// 3. Reusable Component
function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  
  return (
    <a href={project.link} className="group block">
      <div className="bg-transparent hover:bg-neutral-800 transition-colors">
        <ProjectIcon iconName={project.iconName} />
        <ProjectTitle title={t(`home.projects.cards.${project.id}.title`)} />
        <ProjectDescription description={t(`home.projects.cards.${project.id}.description`)} />
      </div>
    </a>
  );
}
```

### Component Composition
```typescript
// src/components/ui/card.tsx
interface CardProps {
  variant?: 'default' | 'outline' | 'ghost';
  className?: string;
  children: React.ReactNode;
}

export function Card({ variant = 'default', className, children }: CardProps) {
  const baseClasses = "rounded-lg border bg-card text-card-foreground shadow-sm";
  const variantClasses = {
    default: "bg-white border-neutral-200",
    outline: "bg-transparent border-neutral-300",
    ghost: "bg-transparent border-transparent"
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
}

// Uso com composição
<Card variant="outline" className="p-6">
  <CardHeader>
    <CardTitle>Projeto</CardTitle>
    <CardDescription>Descrição do projeto</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo do projeto
  </CardContent>
</Card>
```

---

## 🌐 Internacionalização

### Translation System Architecture
```typescript
// src/contexts/translations/index.ts
export const allTranslations = {
  pt: {
    ...headerFooterTranslations.pt,
    ...homeTranslations.pt,
    ...serieIfTranslations.pt,
    ...digitalEducationAppTranslations.pt,
    ...virtualiaTranslations.pt,
    ...metaversoTranslations.pt,
    ...arqueologiaDigitalTranslations.pt,
    ...thePhilosophersDaoTranslations.pt,
    ...literaturaTranslations.pt
  },
  en: {
    ...headerFooterTranslations.en,
    ...homeTranslations.en,
    ...serieIfTranslations.en,
    ...digitalEducationAppTranslations.en,
    ...virtualiaTranslations.en,
    ...metaversoTranslations.en,
    ...arqueologiaDigitalTranslations.en,
    ...thePhilosophersDaoTranslations.en,
    ...literaturaTranslations.en
  }
};
```

### Translation Key Management
```typescript
// Estrutura hierárquica para organização
const translationKeys = {
  home: {
    hero: {
      title: "home.hero.title",
      description: "home.hero.description"
    },
    projects: {
      title: "home.projects.title",
      cards: {
        education_app: {
          title: "home.projects.cards.education_app.title",
          description: "home.projects.cards.education_app.description"
        }
      }
    }
  }
};

// Uso em componentes
<h1>{t("home.hero.title")}</h1>
<p>{t("home.hero.description")}</p>
```

### Language Switching
```typescript
// src/components/layout/language-switcher.tsx
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen(!isOpen)}>
        <Globe className="h-4 w-4" />
        <span>{language.toUpperCase()}</span>
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0">
          <button onClick={handleLanguageChange}>
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      )}
    </div>
  );
}
```

---

## ⚡ Performance e Otimização

### Next.js Optimizations
```typescript
// 1. Image Optimization
import Image from "next/image";

<Image
  src="/images/logo.png"
  alt="Logo"
  width={200}
  height={100}
  priority={true}        // Above-the-fold images
  loading="lazy"         // Below-the-fold images
  placeholder="blur"     // Blur placeholder
  blurDataURL="data:image/jpeg;base64,..."
/>

// 2. Dynamic Imports
import dynamic from "next/dynamic";

const LazyComponent = dynamic(() => import("./LazyComponent"), {
  loading: () => <div>Loading...</div>,
  ssr: false // Se não precisar de SSR
});

// 3. Route Prefetching
<Link href="/projeto" prefetch={false}>
  Projeto
</Link>
```

### CSS Optimization
```css
/* 1. Tailwind Purge */
/* tailwind.config.ts */
content: [
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
],

/* 2. CSS Variables para consistência */
:root {
  --color-primary: #171717;
  --color-secondary: #f5f5f5;
  --spacing-section: 5rem;
  --spacing-container: 1.5rem;
}

/* 3. Utility Classes */
@layer components {
  .section-padding {
    @apply py-20 md:py-28;
  }
  
  .container-padding {
    @apply px-6;
  }
}
```

### Bundle Optimization
```typescript
// 1. Tree Shaking
import { Button } from "@/components/ui/button";
// ✅ Importa apenas o Button

// 2. Icon Optimization
import { ChevronDown, Menu, X } from "lucide-react";
// ✅ Importa apenas os ícones necessários

// 3. Component Lazy Loading
const HeavyComponent = lazy(() => import("./HeavyComponent"));

// 4. Code Splitting
// Next.js faz automaticamente por rota
```

---

## 🔒 Segurança

### Security Headers
```typescript
// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};
```

### Input Validation
```typescript
// Validação de inputs (se implementar formulários)
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000)
});

type ContactForm = z.infer<typeof contactSchema>;
```

### XSS Prevention
```typescript
// ✅ Sempre use JSX para renderização
// ❌ Nunca use dangerouslySetInnerHTML
<div>{userInput}</div> // ✅ Seguro

// ✅ Sanitize dados se necessário
import DOMPurify from 'dompurify';
const sanitizedHtml = DOMPurify.sanitize(userInput);
```

---

## 📈 Escalabilidade

### Component Library Expansion
```typescript
// src/components/ui/index.ts
export { Button } from './button';
export { Card, CardHeader, CardContent, CardFooter } from './card';
export { Input } from './input';
export { Badge } from './badge';
// ... outros componentes

// Uso simplificado
import { Button, Card, Input } from '@/components/ui';
```

### State Management Evolution
```typescript
// Futuro: Zustand para estado mais complexo
import { create } from 'zustand';

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  setUser: (user: User | null) => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  theme: 'light',
  setUser: (user) => set({ user }),
  setTheme: (theme) => set({ theme })
}));
```

### API Integration
```typescript
// src/lib/api.ts
interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}

class ApiClient {
  private config: ApiConfig;
  
  constructor(config: ApiConfig) {
    this.config = config;
  }
  
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.config.baseURL}${endpoint}`, {
      headers: this.config.headers
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return response.json();
  }
}

export const apiClient = new ApiClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});
```

### Testing Strategy
```typescript
// src/tests/setup.ts
import '@testing-library/jest-dom';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// src/tests/utils/test-utils.tsx
import { render } from '@testing-library/react';
import { LanguageProvider } from '@/contexts/LanguageContext';

export function renderWithProviders(ui: React.ReactElement) {
  return render(
    <LanguageProvider>
      {ui}
    </LanguageProvider>
  );
}
```

---

## 🎯 Roadmap de Arquitetura

### Fase 1: Consolidação (Atual)
- [x] Estrutura base com Next.js 14
- [x] Sistema de internacionalização
- [x] Component library com Shadcn UI
- [x] Responsividade mobile-first

### Fase 2: Otimização (Próximo)
- [ ] Implementação de testes
- [ ] Lazy loading de componentes
- [ ] Otimização de imagens
- [ ] Service Worker para cache

### Fase 3: Expansão (Futuro)
- [ ] PWA capabilities
- [ ] API integration
- [ ] State management avançado
- [ ] Micro-frontends

### Fase 4: Enterprise (Longo prazo)
- [ ] Monorepo structure
- [ ] Design system documentation
- [ ] Performance monitoring
- [ ] CI/CD pipeline avançado

---

## 📚 Recursos e Referências

### Documentação Oficial
- [Next.js App Router](https://nextjs.org/docs/app)
- [React Server Components](https://react.dev/learn/server-components)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Arquitetura e Padrões
- [React Patterns](https://reactpatterns.com/)
- [Next.js Patterns](https://nextjs.org/docs/advanced-features/patterns)
- [Component Design Patterns](https://www.patterns.dev/)

### Performance
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)

---

**🏗️ Esta arquitetura foi projetada para ser escalável, manutenível e performática, permitindo que o projeto GIFLABS cresça de forma sustentável e organizada.**
