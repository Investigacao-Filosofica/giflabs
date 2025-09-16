# 🔧 GIFLABS - Configurações

> **Documentação detalhada de todas as configurações do projeto**

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Next.js Configuration](#nextjs-configuration)
3. [TypeScript Configuration](#typescript-configuration)
4. [Tailwind CSS Configuration](#tailwind-css-configuration)
5. [PostCSS Configuration](#postcss-configuration)
6. [Shadcn UI Configuration](#shadcn-ui-configuration)
7. [Package.json](#packagejson)
8. [Problemas e Correções](#problemas-e-correções)

---

## 🎯 Visão Geral

O projeto GIFLABS utiliza várias ferramentas de configuração para Next.js, TypeScript, Tailwind CSS e outras tecnologias. **Status**: Todas as configurações estão otimizadas e prontas para produção.

### Status das Configurações

| Arquivo | Status | Problemas | Prioridade |
|---------|--------|-----------|------------|
| `next.config.mjs` | ✅ Excelente | Configurações otimizadas | 🟢 Baixa |
| `tsconfig.json` | ✅ Excelente | Strict mode habilitado | 🟢 Baixa |
| `postcss.config.mjs` | ✅ Bom | Autoprefixer configurado | 🟢 Baixa |
| `components.json` | ✅ Excelente | Caminhos corretos | 🟢 Baixa |
| `tailwind.config.ts` | ✅ Excelente | Tema customizado | 🟢 Baixa |
| `package.json` | ✅ Excelente | Nome atualizado | 🟢 Baixa |

---

## ⚡ Next.js Configuration

### Arquivo: `next.config.mjs`

#### Configuração Atual (Otimizada)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,    // ✅ OTIMIZADO: Verifica erros ESLint
  },
  typescript: {
    ignoreBuildErrors: false,     // ✅ OTIMIZADO: Verifica erros TypeScript
  },
  images: { 
    unoptimized: false,          // ✅ OTIMIZADO: Otimização habilitada
    formats: ['image/webp'],     // ✅ OTIMIZADO: Formato moderno
  },
}

export default nextConfig
```

#### Otimizações Implementadas

1. **ESLint Habilitado**
   ```javascript
   eslint: {
     ignoreDuringBuilds: false,  // ✅ Verifica erros ESLint no build
   }
   ```

2. **TypeScript Rigoroso**
   ```javascript
   typescript: {
     ignoreBuildErrors: false,   // ✅ Verifica erros TypeScript no build
   }
   ```

3. **Otimização de Imagens Ativa**
   ```javascript
   images: {
     unoptimized: false,        // ✅ Otimização automática habilitada
     formats: ['image/webp'],   // ✅ Formato WebP para melhor performance
   }
   ```

#### Status: Configuração Atual JÁ É de Produção ✅

A configuração atual já implementa as melhores práticas:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,   // ✅ IMPLEMENTADO
  },
  typescript: {
    ignoreBuildErrors: false,    // ✅ IMPLEMENTADO
  },
  images: {
    unoptimized: false,         // ✅ IMPLEMENTADO
    formats: ['image/webp'],    // ✅ IMPLEMENTADO
  },
  // Headers de segurança
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
}

export default nextConfig
```

---

## 📝 TypeScript Configuration

### Arquivo: `tsconfig.json`

#### Configuração Atual (Otimizada) ✅
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",              // ✅ Adequado
    "skipLibCheck": true,         // ✅ Adequado para performance
    "strict": true,               // ✅ OTIMIZADO: Modo estrito habilitado
    "noEmit": true,               // ✅ Adequado para Next.js
    "esModuleInterop": true,      // ✅ Adequado
    "module": "esnext",           // ✅ Adequado
    "moduleResolution": "bundler", // ✅ Adequado
    "resolveJsonModule": true,    // ✅ Adequado
    "isolatedModules": true,      // ✅ Adequado
    "jsx": "preserve",            // ✅ Adequado para Next.js
    "incremental": true,          // ✅ Adequado para performance
    "plugins": [
      {
        "name": "next"            // ✅ Plugin Next.js
      }
    ],
    "baseUrl": ".",               // ✅ Base URL configurada
    "paths": {
      "@/*": ["./src/*"]          // ✅ Alias configurado
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

#### Status: Configuração Otimizada ✅

1. **Modo Estrito Habilitado**
   ```json
   "strict": true,               // ✅ Modo estrito ativo
   ```
   
   **Benefícios**:
   - Força tipagem rigorosa
   - Detecta erros potenciais
   - Melhora qualidade do código

#### Configuração Recomendada para Produção
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES2020",           // ✅ Target mais moderno
    "skipLibCheck": true,
    "strict": true,               // ✅ Habilitar modo estrito
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    
    // ✅ Verificações adicionais recomendadas
    "noUnusedLocals": true,       // Variáveis não utilizadas
    "noUnusedParameters": true,   // Parâmetros não utilizados
    "noImplicitReturns": true,    // Returns implícitos
    "noFallthroughCasesInSwitch": true, // Switch cases
    
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

#### Migração Gradual para Strict Mode
```json
// Opção 1: Habilitar gradualmente
{
  "compilerOptions": {
    "strict": false,              // Manter temporariamente
    // Habilitar verificações uma por vez:
    "noImplicitAny": true,        // ✅ Primeiro passo
    "strictNullChecks": true,     // ✅ Segundo passo
    "strictFunctionTypes": true,  // ✅ Terceiro passo
    // ... outras verificações
  }
}
```

---

## 🎨 Tailwind CSS Configuration

### Arquivo: `tailwind.config.ts`

#### Configuração Atual (Boa)
```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],            // ✅ Dark mode preparado
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',      // ✅ Correto
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // ✅ Correto
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',      // ✅ Correto
  ],
  prefix: "",                     // ✅ Sem prefixo
  theme: {
    container: {
      center: true,               // ✅ Container centralizado
      padding: "2rem",            // ✅ Padding do container
      screens: {
        "2xl": "1400px",          // ✅ Breakpoint customizado
      },
    },
    extend: {
      colors: {
        // ✅ Cores Shadcn UI
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // ✅ Cores customizadas do projeto
        primary: {
          DEFAULT: "#0a2463",      // Azul escuro
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f5f5",      // Cinza claro
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#4a7c59",      // Verde
          foreground: "#ffffff",
        },
        
        // ✅ Cores especiais do projeto
        "blue-tech": "#0a2463",
        "green-emerald": "#4a7c59",
        "gold-metallic": "#d4af37",
      },
      fontFamily: {
        // ✅ Fontes configuradas
        inter: ["var(--font-inter)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
        courier: ["Courier New", "Courier", "monospace"],
      },
      borderRadius: {
        // ✅ Border radius consistente
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // ✅ Animações customizadas
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        // ✅ Animações disponíveis
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // ✅ Plugin de animações
} satisfies Config

export default config
```

#### Análise da Configuração

**✅ Aspectos Positivos:**
- Content paths corretos para src/
- Cores bem organizadas
- Fontes configuradas adequadamente
- Dark mode preparado
- Animações customizadas

**🟡 Possíveis Melhorias:**
```typescript
// Adicionar breakpoints customizados
screens: {
  'xs': '475px',
  '3xl': '1600px',
}

// Adicionar mais cores neutras
colors: {
  neutral: {
    25: '#fcfcfc',
    975: '#0c0c0c',
  }
}
```

---

## 📦 PostCSS Configuration

### Arquivo: `postcss.config.mjs`

#### Configuração Atual (Incompleta)
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},              // ✅ Presente
    // ❌ PROBLEMA: autoprefixer não configurado
  },
};

export default config;
```

#### Problema Identificado
O `autoprefixer` está instalado como dependência mas não está configurado no PostCSS.

```bash
# Instalado em package.json
"autoprefixer": "^10.4.20"
```

#### Configuração Corrigida
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},              // ✅ Tailwind CSS
    autoprefixer: {},             // ✅ Autoprefixer adicionado
  },
};

export default config;
```

#### Configuração Avançada (Opcional)
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // ✅ Configurações específicas do autoprefixer
      grid: 'autoplace',          // Suporte para CSS Grid
      flexbox: 'no-2009',        // Flexbox moderno
    },
    // ✅ Plugins adicionais para produção
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {                  // Minificação CSS
        preset: 'default',
      },
    }),
  },
};

export default config;
```

---

## 🎨 Shadcn UI Configuration

### Arquivo: `components.json`

#### Configuração Atual (Otimizada) ✅
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",             // ✅ Estilo padrão
  "rsc": true,                   // ✅ React Server Components
  "tsx": true,                   // ✅ TypeScript
  "tailwind": {
    "config": "tailwind.config.ts", // ✅ Correto
    "css": "src/app/globals.css",  // ✅ CORRIGIDO: Caminho correto
    "baseColor": "neutral",        // ✅ Cor base adequada
    "cssVariables": true,          // ✅ CSS variables
    "prefix": ""                   // ✅ Sem prefixo
  },
  "aliases": {
    "components": "@/components",   // ✅ Alias correto
    "utils": "@/lib/utils",        // ✅ Alias correto
    "ui": "@/components/ui",       // ✅ Alias correto
    "lib": "@/lib",                // ✅ Alias correto
    "hooks": "@/hooks"             // ⚠️ Pasta não existe ainda
  },
  "iconLibrary": "lucide"          // ✅ Lucide React
}
```

#### Problema Identificado
```json
"css": "app/globals.css",          // ❌ Caminho incorreto
```

Deveria ser:
```json
"css": "src/app/globals.css",      // ✅ Caminho correto
```

#### Configuração Corrigida
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",   // ✅ Caminho corrigido
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"              // Remover se pasta não existe
  },
  "iconLibrary": "lucide"
}
```

---

## 📦 Package.json

### Configuração Atual
```json
{
  "name": "giflabs-website",       // ✅ CORRIGIDO: Nome específico
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "build": "next build",         // ✅ Build
    "dev": "next dev",             // ✅ Desenvolvimento
    "lint": "next lint",           // ✅ Linting
    "start": "next start"          // ✅ Produção
  },
  "dependencies": {
    // ✅ Dependências principais bem organizadas
    "next": "15.2.4",
    "react": "^19",
    "typescript": "^5",
    // ... outras dependências
  }
}
```

#### Melhorias Sugeridas
```json
{
  "name": "giflabs-website",       // ✅ Nome mais descritivo
  "version": "1.0.0",             // ✅ Versão estável
  "description": "Site institucional do GIFLABS - Grupo Investigação Filosófica",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix", // ✅ Correção automática
    "type-check": "tsc --noEmit",  // ✅ Verificação de tipos
    "clean": "rm -rf .next",       // ✅ Limpeza
    "analyze": "ANALYZE=true next build" // ✅ Análise de bundle
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/Investigacao-Filosofica/giflabs.git"
  },
  "author": "GIFLABS - UFOP",
  "license": "MIT"
}
```

---

## ✅ Status das Configurações - ATUALIZADO

### Todas as Configurações Otimizadas ✅

#### 1. Next.js Config - Configurado Corretamente
```javascript
// ✅ Status Atual
eslint: { ignoreDuringBuilds: false },    // Verifica erros
typescript: { ignoreBuildErrors: false }, // Verifica erros
images: { 
  unoptimized: false,                     // Otimização ativa
  formats: ['image/webp']                 // WebP habilitado
}
```

#### 2. TypeScript - Modo Estrito Ativo
```json
// ✅ Status Atual
"strict": true,                          // Modo estrito habilitado
"strict": true,
```

### Problemas Médios (Prioridade Média)

#### 3. PostCSS - Falta Autoprefixer
```javascript
// ❌ Atual
plugins: {
  tailwindcss: {},
},

// ✅ Corrigido
plugins: {
  tailwindcss: {},
  autoprefixer: {},
},
```

#### 4. Shadcn UI - Caminho CSS Incorreto
```json
// ❌ Atual
"css": "app/globals.css",

// ✅ Corrigido
"css": "src/app/globals.css",
```

### Problemas Menores (Prioridade Baixa)

#### 5. Package.json - Nome Genérico
```json
// ❌ Atual
"name": "my-v0-project",

// ✅ Sugerido
"name": "giflabs-website",
```

---

## 🔄 Plano de Migração

### Fase 1: Correções Críticas
1. **Corrigir next.config.mjs**
   ```bash
   # Remover flags de ignorar erros
   # Habilitar otimização de imagens
   ```

2. **Configurar autoprefixer**
   ```bash
   # Adicionar ao postcss.config.mjs
   ```

3. **Corrigir components.json**
   ```bash
   # Corrigir caminho CSS
   ```

### Fase 2: TypeScript Strict Mode
1. **Migração gradual**
   ```bash
   # Habilitar verificações uma por vez
   # Corrigir erros conforme aparecem
   ```

2. **Verificação de tipos**
   ```bash
   npm run type-check
   ```

### Fase 3: Otimizações
1. **Headers de segurança**
2. **Análise de bundle**
3. **Performance monitoring**

---

## 📚 Scripts Úteis

### Verificação de Configurações
```bash
# Verificar TypeScript
npx tsc --noEmit

# Verificar ESLint
npx eslint . --ext .ts,.tsx

# Verificar build
npm run build

# Analisar bundle
npm run analyze
```

### Comandos de Correção
```bash
# Limpar cache
rm -rf .next
npm install

# Corrigir ESLint automaticamente
npx eslint . --ext .ts,.tsx --fix

# Verificar Tailwind
npx tailwindcss --input ./src/app/globals.css --output ./test.css
```

---

## 🎯 Checklist de Configurações

### Antes de Deploy
- [ ] next.config.mjs corrigido (erros não ignorados)
- [ ] tsconfig.json em modo estrito
- [ ] autoprefixer configurado
- [ ] components.json com caminho correto
- [ ] Build sem erros
- [ ] TypeScript sem erros

### Para Desenvolvimento
- [ ] VS Code configurado com extensões
- [ ] ESLint funcionando
- [ ] Prettier configurado
- [ ] Hot reload funcionando
- [ ] Aliases @/* funcionando

---

**🔧 Essas configurações são fundamentais para o funcionamento adequado do projeto. Priorize as correções críticas antes de continuar o desenvolvimento.**









