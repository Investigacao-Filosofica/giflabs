# 🎨 GIFLABS - Sistema de Design

> **Sistema de design completo do projeto GIFLABS**

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Princípios de Design](#princípios-de-design)
3. [Sistema de Cores](#sistema-de-cores)
4. [Tipografia](#tipografia)
5. [Espaçamento](#espaçamento)
6. [Componentes](#componentes)
7. [Layout](#layout)
8. [Responsividade](#responsividade)
9. [Animações](#animações)
10. [Acessibilidade](#acessibilidade)

---

## 🎯 Visão Geral

### Filosofia do Design
O design system do GIFLABS é baseado em **simplicidade, elegância e funcionalidade**. Priorizamos a legibilidade e a experiência do usuário, mantendo um visual clean e profissional adequado para um grupo de pesquisa acadêmica.

### Características Principais
- **Minimalista**: Design limpo e focado no conteúdo
- **Responsivo**: Mobile-first approach
- **Acessível**: Padrões WCAG 2.1 AA
- **Consistente**: Padrões visuais uniformes
- **Escalável**: Fácil manutenção e expansão

---

## 🧭 Princípios de Design

### 1. Simplicidade
- **Menos é mais**: Cada elemento deve ter um propósito claro
- **Hierarquia visual**: Informação organizada por importância
- **Espaçamento generoso**: Respiração entre elementos

### 2. Legibilidade
- **Contraste adequado**: Texto sempre legível
- **Tipografia clara**: Fontes escolhidas para leitura
- **Tamanhos apropriados**: Texto não muito pequeno

### 3. Consistência
- **Padrões uniformes**: Mesmo comportamento em situações similares
- **Reutilização**: Componentes padronizados
- **Sistema de design**: Regras claras e documentadas

### 4. Acessibilidade
- **Inclusivo**: Design para todos os usuários
- **Navegação clara**: Estrutura lógica e intuitiva
- **Feedback visual**: Estados claros e compreensíveis

---

## 🎨 Sistema de Cores

### Paleta Principal (Tailwind CSS)
```css
/* Cores Neutras - Base do sistema */
neutral-50: #fafafa    /* Background mais claro */
neutral-100: #f5f5f5   /* Background claro */
neutral-200: #e5e5e5   /* Bordas e divisores */
neutral-300: #d4d4d4   /* Texto secundário claro */
neutral-400: #a3a3a3   /* Texto terciário */
neutral-500: #737373   /* Texto médio */
neutral-600: #525252   /* Texto principal */
neutral-700: #404040   /* Texto forte */
neutral-800: #262626   /* Background escuro */
neutral-900: #171717   /* Background mais escuro */

/* Cores Especiais (Tailwind Config) */
primary: #0a2463       /* Azul escuro */
secondary: #f5f5f5     /* Cinza claro */
accent: #4a7c59        /* Verde */
```

### CSS Variables Definidas (Shadcn UI)
```css
/* src/app/globals.css */
:root {
  /* Variáveis do sistema de cores neutras */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-900: #171717;
  
  /* Variáveis Shadcn UI */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96%;
  --muted: 210 40% 96%;
  --accent: 210 40% 96%;
  --border: 214.3 31.8% 91.4%;
  --radius: 0.5rem;
}
```

### Uso das Cores
```typescript
// ✅ Backgrounds
"bg-neutral-50"     // Background principal
"bg-neutral-100"    // Background secundário
"bg-white"          // Background de seções
"bg-neutral-900"    // Background escuro

// ✅ Textos
"text-neutral-900"  // Texto principal
"text-neutral-600"  // Texto secundário
"text-neutral-400"  // Texto terciário
"text-white"        // Texto sobre fundo escuro

// ✅ Bordas
"border-neutral-200" // Bordas claras
"border-neutral-300" // Bordas médias
"border-neutral-800" // Bordas escuras
```

### Estados de Cor
```typescript
// Hover states
"hover:bg-neutral-800"   // Hover em botões escuros
"hover:text-neutral-900" // Hover em links
"hover:border-neutral-400" // Hover em bordas

// Focus states
"focus:ring-2 focus:ring-neutral-500" // Anel de foco
"focus:outline-none"     // Remove outline padrão

// Transitions
"transition-colors duration-200" // Transição suave
```

---

## 📝 Tipografia

### Fontes Definidas
```typescript
// src/app/layout.tsx
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",    // Fonte principal
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"], 
  variable: "--font-lora",     // Fonte serif (pouco usada)
  display: "swap",
});
```

### Configuração Tailwind
```typescript
// tailwind.config.ts
fontFamily: {
  inter: ["var(--font-inter)", "sans-serif"],     // Fonte principal
  lora: ["var(--font-lora)", "serif"],           // Fonte serif
  courier: ["Courier New", "Courier", "monospace"], // Fonte mono
},
```

### Hierarquia Tipográfica
```css
/* Estilos globais definidos */
body {
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 300;    /* Light por padrão */
  line-height: 1.6;
}

/* Títulos */
h1, h2, h3, h4, h5, h6 {
  font-weight: 300;    /* Light */
  letter-spacing: -0.02em;
}

h1 { font-weight: 200; }  /* Extra light */
h2 { font-weight: 300; }  /* Light */
```

### Classes Tailwind para Tipografia
```typescript
// Títulos
"text-4xl md:text-6xl font-bold leading-tight tracking-tighter"  // Hero
"text-3xl md:text-4xl font-bold tracking-tight"                 // Section
"text-2xl font-bold tracking-tight"                             // Subsection

// Corpo do texto
"text-lg leading-relaxed"       // Texto grande
"text-base leading-relaxed"     // Texto normal
"text-sm leading-relaxed"       // Texto pequeno

// Pesos usados
"font-light"     // 300 - Padrão do projeto
"font-normal"    // 400 - Ocasional
"font-medium"    // 500 - Botões e destaques
"font-bold"      // 700 - Títulos
```

### Responsividade Tipográfica
```css
/* src/app/globals.css */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;     /* 40px */
    line-height: 1.1;
  }
  
  h2 {
    font-size: 2rem;       /* 32px */
  }
  
  h3 {
    font-size: 1.5rem;     /* 24px */
  }
}
```

---

## 📏 Espaçamento

### Sistema de Espaçamento Tailwind
```typescript
// Espaçamentos mais utilizados no projeto
"p-4"    // 16px padding
"px-6"   // 24px horizontal padding
"py-20"  // 80px vertical padding
"py-24"  // 96px vertical padding
"py-28"  // 112px vertical padding

"gap-8"  // 32px gap entre elementos grid
"gap-12" // 48px gap entre elementos
"space-y-6" // 24px espaço vertical entre filhos

"mb-4"   // 16px margin bottom
"mb-6"   // 24px margin bottom
"mb-8"   // 32px margin bottom
"mb-12"  // 48px margin bottom
"mb-16"  // 64px margin bottom
"mb-20"  // 80px margin bottom
```

### Espaçamento de Seções
```typescript
// Padrões de seção usados no projeto
"py-20 md:py-28"     // 80px mobile, 112px desktop (mais comum)
"py-16 md:py-24"     // 64px mobile, 96px desktop
"py-12 md:py-20"     // 48px mobile, 80px desktop

// Containers
"px-6"               // 24px horizontal (padrão)
"container mx-auto"  // Container centralizado
"max-w-4xl mx-auto"  // Largura limitada centralizada
```

### Scroll Offset
```typescript
// Para navegação interna
"scroll-mt-24"       // 96px offset para header fixo
"scroll-mt-32"       // 128px offset para seções
```

---

## 🧩 Componentes

### Componentes Base (Shadcn UI)

#### Button
```typescript
// Variantes usadas no projeto
<Button 
  variant="default"    // Fundo sólido
  size="lg"           // Tamanho grande
  className="bg-neutral-900 hover:bg-neutral-800 text-white"
>
  Texto do Botão
</Button>

<Button 
  variant="outline"   // Apenas borda
  size="sm"          // Tamanho pequeno
  className="border-neutral-300 hover:bg-neutral-900 hover:text-white"
>
  Botão Outline
</Button>
```

#### Badge
```typescript
// Para tags da equipe
<Badge 
  variant="outline" 
  className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs"
>
  Tag Text
</Badge>

// Para badges escuros
<Badge 
  variant="outline" 
  className="border-neutral-600 text-neutral-300 bg-transparent text-xs"
>
  Dark Badge
</Badge>
```

#### Card (Disponível mas pouco usado)
```typescript
<Card className="h-full">
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
</Card>
```

### Componentes de Layout

#### Container Pattern
```typescript
// Padrão usado em todas as seções
<section className="py-20 md:py-28">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      {/* Conteúdo */}
    </div>
  </div>
</section>
```

#### Grid Pattern
```typescript
// Grid de projetos
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>

// Grid da equipe
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
  {teamMembers.map((member) => (
    <MemberCard key={member.id} member={member} />
  ))}
</div>
```

### Ícones (Lucide React)
```typescript
// Ícones usados no projeto
import { 
  ChevronDown,       // Navegação
  Menu, X,           // Menu mobile
  ArrowUpRight,      // Links externos
  BookOpen,          // Livros/literatura
  GraduationCap,     // Educação
  Users,             // Equipe
  Palette,           // Arte
  Database,          // Dados
  Globe,             // Idiomas
} from "lucide-react";

// Tamanhos padrão
<Icon size={16} />   // Pequeno
<Icon size={20} />   // Médio (padrão)
<Icon size={24} />   // Grande
<Icon size={32} />   // Extra grande
<Icon size={40} />   // Muito grande (cards de projeto)
```

---

## 🏗️ Layout

### Container System
```typescript
// Container principal (usado em todas as seções)
<div className="container mx-auto px-6">
  {/* Conteúdo */}
</div>

// Container com largura limitada
<div className="max-w-4xl mx-auto">
  {/* Conteúdo centralizado */}
</div>

// Container extra largo (para grids)
<div className="max-w-6xl mx-auto">
  {/* Conteúdo largo */}
</div>
```

### Grid System
```typescript
// Grid responsivo padrão
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// Grid da equipe (5 colunas)
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12"

// Grid de 3 colunas (sobre)
"grid md:grid-cols-3 gap-10"
```

### Flexbox Layout
```typescript
// Centralização
"flex items-center justify-center"

// Layout header
"flex items-center justify-between"

// Espaçamento entre elementos
"flex items-center space-x-4"

// Direção responsiva
"flex flex-col md:flex-row"
```

---

## 📱 Responsividade

### Breakpoints Tailwind
```css
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

### Mobile-First Approach
```typescript
// ✅ Padrão usado no projeto
"text-4xl md:text-6xl"           // 36px mobile, 60px desktop
"py-20 md:py-28"                 // 80px mobile, 112px desktop
"grid grid-cols-1 md:grid-cols-2" // 1 coluna mobile, 2 desktop

// ✅ Grid responsivo complexo
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
```

### Componentes Responsivos

#### Hero Section
```typescript
<section className="pt-24 min-h-screen flex items-center justify-center">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-5xl md:text-7xl font-bold mb-8 font-light">
      {title}
    </h1>
    <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto">
      {description}
    </p>
  </div>
</section>
```

#### Navigation
```typescript
// Desktop menu
<nav className="hidden md:flex items-center space-x-8">
  {/* Links */}
</nav>

// Mobile menu button
<button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
  {isMenuOpen ? <X /> : <Menu />}
</button>

// Mobile menu
{isMenuOpen && (
  <nav className="md:hidden mt-4 pb-4">
    {/* Mobile links */}
  </nav>
)}
```

---

## ✨ Animações

### Transições CSS
```typescript
// Transições básicas usadas
"transition-colors duration-200"      // Mudança de cor
"transition-all duration-300"         // Todas as propriedades
"transition-opacity duration-300"     // Opacidade

// Hover effects
"hover:bg-neutral-800 transition-colors duration-200"
"hover:opacity-100 transition-opacity duration-300"
```

### Animações CSS Customizadas
```css
/* src/app/globals.css */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Classes de animação */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}
```

### Animações de Hover
```typescript
// Efeito nos cards de projeto
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <span>Acessar Projeto</span>
  <ArrowUpRight className="ml-2 h-4 w-4" />
</div>

// Efeito no language switcher
<ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
```

### Scroll Behavior
```css
/* src/app/globals.css */
html {
  scroll-behavior: smooth;
}

* {
  scroll-behavior: smooth;
}
```

---

## ♿ Acessibilidade

### Contraste e Cores
```css
/* Padrões de contraste adequados */
.text-neutral-900 { color: #171717; }  /* Sobre background claro */
.text-white { color: #ffffff; }        /* Sobre background escuro */
.text-neutral-300 { color: #d4d4d4; } /* Sobre background escuro */
```

### Estados de Foco
```css
/* src/app/globals.css */
button:focus,
a:focus {
  outline: none;  /* Removido em favor de focus-visible */
}

a:focus-visible {
  outline: none;  /* Usa ring do Tailwind */
}
```

```typescript
// Focus rings no Tailwind
"focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
"focus-visible:outline-none focus-visible:ring-2"
```

### ARIA Labels
```typescript
// Labels descritivos usados no projeto
<button aria-label="Alterar idioma para inglês">
  EN
</button>

<a 
  href={member.lattes}
  aria-label={`Currículo Lattes de ${member.name}`}
>
  <GraduationCap size={20} />
</a>

// Links externos
<a
  target="_blank"
  rel="noopener noreferrer"  // Segurança
  aria-label="GitHub"
>
  <Github size={20} />
</a>
```

### HTML Semântico
```typescript
// ✅ Estrutura semântica usada
<main>
  <section id="projetos">
    <h2>Nossos Projetos</h2>
    <div className="grid">
      {/* Cards de projeto como <a> para serem clicáveis */}
      <a href={project.link} className="group block h-full">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </a>
    </div>
  </section>
</main>
```

---

## 🎨 Customizações CSS

### Scrollbar Personalizada
```css
/* src/app/globals.css */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background: #404040;
  border-radius: 0;
}

::-webkit-scrollbar-thumb:hover {
  background: #262626;
}
```

### Seleção de Texto
```css
::selection {
  background-color: #e5e5e5;
  color: #171717;
}
```

### Utility Classes
```css
@layer components {
  .section-padding {
    @apply py-20 md:py-28;
  }
  
  .container-padding {
    @apply px-6;
  }
  
  .text-gradient {
    @apply bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent;
  }
}
```

---

## 🔮 Evolução do Design System

### Implementado
- [x] Sistema de cores neutras
- [x] Tipografia consistente  
- [x] Componentes base (Button, Badge)
- [x] Layout responsivo
- [x] Animações sutis
- [x] Acessibilidade básica

### Próximas Implementações
- [ ] **Tema escuro**: Sistema de temas alternativo
- [ ] **Mais componentes**: Forms, Modals, Tables
- [ ] **Micro-interactions**: Feedback visual refinado
- [ ] **Design tokens**: Sistema centralizado
- [ ] **Storybook**: Documentação interativa

### Componentes Futuros
- [ ] **Data Visualization**: Gráficos e charts
- [ ] **Form Components**: Formulários complexos
- [ ] **Navigation**: Breadcrumbs, paginação
- [ ] **Feedback**: Toasts, modais, tooltips
- [ ] **Layout**: Sidebar, drawer, tabs

---

## 📊 Recursos e Ferramentas

### Design Tokens (Futuro)
```typescript
// Estrutura planejada
export const designTokens = {
  colors: {
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      // ...
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    // ...
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 200,
      lineHeight: 1.1
    }
  }
};
```

### Ferramentas de Design
- **Figma**: Para mockups e protótipos
- **Tailwind CSS IntelliSense**: Autocompletar classes
- **Headless UI**: Para componentes complexos futuros
- **Framer Motion**: Para animações avançadas (já instalado)

---

## 🎯 Checklist de Design

### Antes do Deploy
- [ ] Contraste de cores adequado (4.5:1 mínimo)
- [ ] Estados de foco visíveis
- [ ] ARIA labels implementados
- [ ] HTML semântico correto
- [ ] Responsividade testada
- [ ] Animações não interferem na usabilidade

### Padrões de Qualidade
- [ ] Consistência visual entre componentes
- [ ] Espaçamento uniforme usando sistema
- [ ] Hierarquia visual clara
- [ ] Feedback visual adequado
- [ ] Performance das animações
- [ ] Acessibilidade para leitores de tela

---

**🎨 Este design system foi criado para manter consistência visual e melhorar a experiência do usuário, seguindo as melhores práticas de design moderno e acessibilidade.**

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF)