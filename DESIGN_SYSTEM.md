# 🎨 GIFLABS - Design System

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

### Paleta Principal
```css
:root {
  /* Cores Neutras */
  --color-neutral-50: #fafafa;   /* Background mais claro */
  --color-neutral-100: #f5f5f5;  /* Background claro */
  --color-neutral-200: #e5e5e5;  /* Bordas e divisores */
  --color-neutral-300: #d4d4d4;  /* Texto secundário */
  --color-neutral-400: #a3a3a3;  /* Texto terciário */
  --color-neutral-500: #737373;  /* Texto médio */
  --color-neutral-600: #525252;  /* Texto principal */
  --color-neutral-700: #404040;  /* Texto forte */
  --color-neutral-800: #262626;  /* Background escuro */
  --color-neutral-900: #171717;  /* Background mais escuro */
  
  /* Cores Primárias */
  --color-primary-black: #000000; /* Preto puro */
  --color-primary-white: #ffffff; /* Branco puro */
}
```

### Uso das Cores
```typescript
// ✅ Backgrounds
"bg-neutral-50"    // Background principal
"bg-neutral-100"   // Background secundário
"bg-white"         // Background de seções
"bg-neutral-900"   // Background escuro

// ✅ Textos
"text-neutral-900" // Texto principal
"text-neutral-600" // Texto secundário
"text-neutral-400" // Texto terciário
"text-white"       // Texto sobre fundo escuro

// ✅ Bordas
"border-neutral-200" // Bordas claras
"border-neutral-300" // Bordas médias
"border-neutral-800" // Bordas escuras
```

### Estados de Cor
```typescript
// Hover states
"hover:bg-neutral-800"  // Hover em botões escuros
"hover:text-neutral-900" // Hover em links
"hover:border-neutral-400" // Hover em bordas

// Focus states
"focus:ring-2 focus:ring-neutral-500" // Anel de foco
"focus:outline-none" // Remove outline padrão

// Active states
"active:bg-neutral-700" // Estado ativo
```

---

## 📝 Tipografia

### Fontes
```typescript
// Fontes principais
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});
```

### Hierarquia Tipográfica
```css
/* Títulos */
h1 {
  font-size: 2.5rem;      /* 40px - Mobile */
  font-size: 4rem;        /* 64px - Desktop */
  font-weight: 200;       /* Extra light */
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h2 {
  font-size: 2rem;        /* 32px - Mobile */
  font-size: 3rem;        /* 48px - Desktop */
  font-weight: 300;       /* Light */
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h3 {
  font-size: 1.5rem;      /* 24px */
  font-weight: 300;       /* Light */
  line-height: 1.3;
}

/* Corpo do texto */
p {
  font-size: 1rem;        /* 16px */
  font-weight: 300;       /* Light */
  line-height: 1.6;
  letter-spacing: 0.01em;
}

/* Texto pequeno */
.text-sm {
  font-size: 0.875rem;    /* 14px */
  font-weight: 300;
  line-height: 1.5;
}
```

### Classes Tailwind para Tipografia
```typescript
// Títulos
"text-4xl md:text-6xl font-bold leading-tight tracking-tighter"
"text-3xl md:text-4xl font-bold tracking-tight"
"text-2xl font-bold tracking-tight"

// Corpo do texto
"text-lg leading-relaxed"
"text-base leading-relaxed"
"text-sm leading-relaxed"

// Pesos
"font-light"      // 300
"font-normal"     // 400
"font-medium"     // 500
"font-bold"       // 700
```

---

## 📏 Espaçamento

### Sistema de Espaçamento
```css
:root {
  /* Espaçamento base */
  --spacing-xs: 0.25rem;    /* 4px */
  --spacing-sm: 0.5rem;     /* 8px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 1.5rem;     /* 24px */
  --spacing-xl: 2rem;       /* 32px */
  --spacing-2xl: 3rem;      /* 48px */
  --spacing-3xl: 4rem;      /* 64px */
  --spacing-4xl: 5rem;      /* 80px */
  --spacing-5xl: 6rem;      /* 96px */
}
```

### Classes de Espaçamento
```typescript
// Padding
"p-4"           // 16px em todos os lados
"px-6"          // 24px horizontal
"py-20"         // 80px vertical
"pt-8"          // 32px top
"pb-12"         // 48px bottom

// Margin
"m-0"           // 0px em todos os lados
"mx-auto"       // Centralizar horizontalmente
"mt-16"         // 64px top
"mb-8"          // 32px bottom

// Espaçamento entre elementos
"space-y-6"     // 24px entre elementos filhos
"gap-8"         // 32px entre elementos do grid
```

### Espaçamento de Seções
```typescript
// Seções principais
"py-20 md:py-28"    // 80px mobile, 112px desktop
"py-16 md:py-24"    // 64px mobile, 96px desktop
"py-12 md:py-20"    // 48px mobile, 80px desktop

// Containers
"px-6"              // 24px horizontal
"px-4 md:px-6"     // 16px mobile, 24px desktop
```

---

## 🧩 Componentes

### Botões
```typescript
// Variantes de botão
<Button variant="default" size="lg">
  Botão Principal
</Button>

<Button variant="outline" size="lg">
  Botão Secundário
</Button>

<Button variant="ghost" size="sm">
  Botão Terciário
</Button>

// Classes customizadas
"bg-neutral-900 hover:bg-neutral-800 text-white px-10 py-6 text-lg transition-all duration-300 border-0 font-medium"
```

### Cards
```typescript
// Card de projeto
<div className="bg-transparent hover:bg-neutral-800 transition-colors duration-200 flex flex-col rounded-lg h-full">
  <div className="p-8 text-center flex flex-col flex-grow">
    <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 mx-auto">
      {/* Ícone */}
    </div>
    <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
    <p className="flex-grow text-sm leading-relaxed text-neutral-400">{description}</p>
  </div>
</div>
```

### Badges
```typescript
// Badge padrão
<Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs px-3 py-1">
  {text}
</Badge>

// Badge escuro
<Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
  {text}
</Badge>
```

### Ícones
```typescript
// Tamanhos padrão
<Icon size={16} />   // Pequeno
<Icon size={20} />   // Médio
<Icon size={24} />   // Grande
<Icon size={32} />   // Extra grande
<Icon size={40} />   // Muito grande

// Cores
"text-neutral-600"   // Cor padrão
"text-neutral-400"   // Cor secundária
"text-neutral-300"   // Cor terciária
"text-white"         // Sobre fundo escuro
```

---

## 🏗️ Layout

### Container System
```typescript
// Container principal
<div className="container mx-auto px-6">
  {/* Conteúdo */}
</div>

// Container com largura máxima
<div className="max-w-4xl mx-auto px-6">
  {/* Conteúdo limitado */}
</div>

// Container extra largo
<div className="max-w-7xl mx-auto px-6">
  {/* Conteúdo muito largo */}
</div>
```

### Grid System
```typescript
// Grid responsivo
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"

// Grid específico para projetos
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// Grid para equipe
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12"
```

### Flexbox Layout
```typescript
// Layout flexível
"flex flex-col md:flex-row items-center justify-between"

// Centralização
"flex items-center justify-center"

// Espaçamento entre elementos
"flex items-center space-x-4"
```

---

## 📱 Responsividade

### Breakpoints
```css
/* Tailwind CSS breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1400px /* 2X large devices */
```

### Mobile-First Approach
```typescript
// ✅ Correto: Mobile-first
"text-2xl md:text-4xl"     // 24px mobile, 36px desktop
"py-12 md:py-20"           // 48px mobile, 80px desktop
"px-4 md:px-6"             // 16px mobile, 24px desktop

// ❌ Incorreto: Desktop-first
"text-4xl text-2xl"        // Não funciona assim
```

### Responsividade de Componentes
```typescript
// Hero section responsiva
<section className="pt-24 min-h-screen flex items-center justify-center">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-5xl md:text-7xl font-bold mb-8 font-light leading-tight tracking-tight">
      {title}
    </h1>
    <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
      {description}
    </p>
  </div>
</section>
```

### Imagens Responsivas
```typescript
// Next.js Image com responsividade
<Image
  src="/images/logo.png"
  alt="Logo"
  width={200}
  height={100}
  className="w-32 md:w-40 lg:w-48"
  priority={true}
/>
```

---

## ✨ Animações

### Transições CSS
```typescript
// Transições básicas
"transition-colors duration-200"    // Transição de cores
"transition-all duration-300"       // Transição de todas as propriedades
"transition-transform duration-500"  // Transição de transformações

// Hover effects
"hover:bg-neutral-800 transition-colors duration-200"
"hover:scale-105 transition-transform duration-200"
"hover:opacity-80 transition-opacity duration-200"
```

### Animações CSS
```css
/* Keyframes para animações */
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

### Animações Interativas
```typescript
// Hover com animação
<div className="
  opacity-0 group-hover:opacity-100 
  transition-opacity duration-300
">
  Hover effect
</div>

// Animações de entrada
<div className="animate-fade-in-up">
  Conteúdo animado
</div>
```

---

## ♿ Acessibilidade

### Contraste e Legibilidade
```css
/* Contraste mínimo: 4.5:1 para texto normal */
.text-primary {
  color: #171717; /* Neutral 900 */
  background: #f5f5f5; /* Neutral 100 */
}

/* Contraste mínimo: 3:1 para texto grande */
.text-large {
  color: #262626; /* Neutral 800 */
  background: #e5e5e5; /* Neutral 200 */
}
```

### Estados de Foco
```typescript
// Foco visível
"focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"

// Foco para navegação por teclado
"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
```

### ARIA Labels
```typescript
// Labels descritivos
<button aria-label="Alterar idioma para inglês">
  EN
</button>

// Descrever funcionalidade
<a 
  href={member.lattes}
  aria-label={`Currículo Lattes de ${member.name}`}
>
  <GraduationCap size={20} />
</a>
```

### Semântica HTML
```typescript
// ✅ Correto: HTML semântico
<main>
  <section id="projetos">
    <h2>Nossos Projetos</h2>
    <article className="project-card">
      <h3>Título do Projeto</h3>
      <p>Descrição do projeto</p>
    </article>
  </section>
</main>

// ❌ Incorreto: Divs genéricos
<div>
  <div id="projetos">
    <div>Título</div>
    <div>Descrição</div>
  </div>
</div>
```

---

## 🎨 Componentes de Design

### Hero Section
```typescript
// Estrutura padrão para hero sections
<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
  <div className="container relative z-10 mx-auto px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
        {description}
      </p>
      <div className="flex justify-center gap-4">
        {/* CTAs */}
      </div>
    </div>
  </div>
</section>
```

### Section Padrão
```typescript
// Estrutura para seções de conteúdo
<section className="py-20 md:py-28 scroll-mt-24">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      {/* Conteúdo da seção */}
    </div>
  </div>
</section>
```

### Grid de Cards
```typescript
// Grid responsivo para cards
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {items.map((item) => (
    <Card key={item.id} className="h-full">
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{item.description}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

---

## 📚 Recursos e Ferramentas

### Design Tokens
```typescript
// src/design-tokens/index.ts
export const designTokens = {
  colors: {
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      // ... outras cores
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    // ... outros espaçamentos
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 200,
      lineHeight: 1.1
    }
    // ... outros estilos
  }
};
```

### CSS Variables
```css
/* src/app/globals.css */
:root {
  /* Cores */
  --color-primary: #171717;
  --color-secondary: #f5f5f5;
  
  /* Espaçamento */
  --spacing-section: 5rem;
  --spacing-container: 1.5rem;
  
  /* Tipografia */
  --font-size-h1: 2.5rem;
  --font-weight-light: 300;
}

/* Uso */
.section {
  padding: var(--spacing-section) 0;
}

.container {
  padding: 0 var(--spacing-container);
}
```

### Utility Classes
```css
/* src/app/globals.css */
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
  
  .card-hover {
    @apply hover:bg-neutral-100 transition-colors duration-200;
  }
}
```

---

## 🎯 Checklist de Design

### Antes do Deploy
- [ ] Contraste de cores adequado (4.5:1 mínimo)
- [ ] Estados de foco visíveis
- [ ] ARIA labels implementados
- [ ] HTML semântico correto
- [ ] Responsividade testada em todos os breakpoints
- [ ] Animações não interferem na usabilidade
- [ ] Tipografia legível em todos os tamanhos

### Padrões de Qualidade
- [ ] Consistência visual entre componentes
- [ ] Espaçamento uniforme
- [ ] Hierarquia visual clara
- [ ] Feedback visual adequado
- [ ] Performance das animações
- [ ] Acessibilidade para leitores de tela

---

## 🚀 Futuro do Design System

### Próximas Implementações
- [ ] **Framer Motion**: Animações mais sofisticadas
- [ ] **Dark Mode**: Tema escuro opcional
- [ ] **Micro-interactions**: Feedback visual refinado
- [ ] **Design Tokens**: Sistema centralizado de tokens
- [ ] **Storybook**: Documentação interativa de componentes

### Expansão de Componentes
- [ ] **Data Visualization**: Gráficos e charts
- [ ] **Form Components**: Formulários avançados
- [ ] **Navigation**: Breadcrumbs, paginação
- [ ] **Feedback**: Toasts, modais, tooltips
- [ ] **Layout**: Sidebar, drawer, tabs

---

**🎨 Este design system foi criado para manter a consistência visual e melhorar a experiência do usuário em todo o projeto GIFLABS, seguindo as melhores práticas de design moderno e acessibilidade.**
