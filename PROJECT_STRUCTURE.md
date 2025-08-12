# GIFLABS - Documentação Completa da Estrutura do Projeto

## Visão Geral
O GIFLABS é um site institucional desenvolvido com Next.js 14 (App Router), TypeScript, Tailwind CSS e Shadcn UI. O projeto implementa um sistema de internacionalização completo (Português/Inglês) e segue padrões modernos de desenvolvimento web.

## Arquitetura Técnica

### Framework e Tecnologias
- **Next.js 14** com App Router
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **Shadcn UI** para componentes base
- **React 18** com hooks modernos
- **Lucide React** para ícones

### Estrutura de Diretórios
```
giflabs/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── page.tsx           # Página inicial (landing page)
│   │   ├── digital-education-app/
│   │   │   └── page.tsx       # Página do projeto Digital Education App
│   │   ├── serie-if/
│   │   │   └── page.tsx       # Página do projeto Série IF
│   │   ├── virtualia/
│   │   │   └── page.tsx       # Página do projeto Virtualia
│   │   ├── arqueologia-digital/
│   │   │   └── page.tsx       # Página do projeto Arqueologia Digital
│   │   ├── the-philosophers-dao/
│   │   │   └── page.tsx       # Página do projeto The Philosophers DAO
│   │   └── metaverso/
│   │       └── page.tsx       # Página do projeto Metaverso
│   ├── components/             # Componentes reutilizáveis
│   │   ├── layout/            # Componentes de layout
│   │   │   ├── header.tsx     # Cabeçalho da aplicação
│   │   │   ├── footer.tsx     # Rodapé da aplicação
│   │   │   └── language-switcher.tsx # Seletor de idioma
│   │   └── ui/                # Componentes base do Shadcn UI
│   ├── contexts/              # Contextos React
│   │   ├── LanguageContext.tsx # Contexto de internacionalização
│   │   └── translations/      # Arquivos de tradução
│   │       ├── home.ts        # Traduções da página inicial
│   │       ├── header-footer.ts # Traduções de cabeçalho/rodapé
│   │       ├── serie-if.ts    # Traduções da página Série IF
│   │       ├── digital-education-app.ts # Traduções Digital Education App
│   │       ├── virtualia.ts   # Traduções da página Virtualia
│   │       ├── metaverso.ts   # Traduções da página Metaverso
│   │       ├── arqueologia-digital.ts # Traduções Arqueologia Digital
│   │       └── the-philosophers-dao.ts # Traduções The Philosophers DAO
│   └── lib/                   # Utilitários e configurações
├── public/                     # Arquivos estáticos
├── components.json             # Configuração do Shadcn UI
├── next.config.mjs            # Configuração do Next.js
├── tailwind.config.ts         # Configuração do Tailwind CSS
├── tsconfig.json              # Configuração do TypeScript
└── package.json               # Dependências do projeto
```

## Sistema de Internacionalização (i18n)

### Arquitetura
O projeto utiliza um sistema de internacionalização customizado baseado em Context API do React, não dependendo de bibliotecas externas como `next-i18next`.

### Componentes Principais

#### LanguageContext.tsx
- **Localização**: `src/contexts/LanguageContext.tsx`
- **Funcionalidade**: Gerencia o estado do idioma e fornece a função de tradução
- **Estado**: Idioma atual (pt/en) persistido no localStorage
- **Padrão**: Português (pt) como idioma padrão
- **Função Principal**: `t(key: string)` - busca traduções usando chaves aninhadas

#### Estrutura de Traduções
```typescript
// Exemplo de estrutura em home.ts
export const homeTranslations = {
  pt: {
    home: {
      projects: {
        title: "Nossos Projetos",
        cards: {
          education_app: {
            title: "Digital Education App",
            description: "Descrição em português..."
          }
        }
      }
    }
  },
  en: {
    home: {
      projects: {
        title: "Our Projects",
        cards: {
          education_app: {
            title: "Digital Education App",
            description: "Description in English..."
          }
        }
      }
    }
  }
}
```

### Como Usar Traduções
```typescript
import { useLanguage } from "@/contexts/LanguageContext";

function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <h1>{t("home.projects.title")}</h1>
  );
}
```

## Estrutura da Página Principal

### Arquivo Principal
- **Localização**: `src/app/page.tsx`
- **Componente**: `GifLabsSite`
- **Tipo**: Client Component (usa "use client")

### Seções da Página
1. **Hero Section** (`id="home"`)
   - Título principal e descrição
   - Botão CTA que leva para a seção de projetos
   - Background com gradiente e grid animado

2. **Sobre Section** (`id="sobre"`)
   - Descrição do GIFLABS
   - Missão, Visão e Valores
   - Layout em grid de 3 colunas

3. **Projetos Section** (`id="projetos"`)
   - Renderizada pelo componente `Projects`
   - Grid responsivo de cards de projetos
   - Cada card tem ícone, título, descrição e link

4. **Equipe Section** (`id="equipe"`)
   - Membros da equipe com perfis
   - Badges de especialização
   - Links para redes sociais e currículos

### Componente Projects
```typescript
const projects = [
  {
    id: "education-app",
    iconName: "GraduationCap",
    link: "/digital-education-app",
  },
  // ... outros projetos
];
```

**IMPORTANTE**: Para adicionar um novo projeto, é necessário:
1. Adicionar entrada no array `projects`
2. Adicionar traduções em `home.ts` para ambos os idiomas
3. Criar a página do projeto em `src/app/[nome-do-projeto]/page.tsx`

## Sistema de Navegação

### Navegação Interna (Scroll)
- Links âncora para seções: `/#projetos`, `/#equipe`, etc.
- Scroll suave entre seções
- IDs de seção: `home`, `sobre`, `projetos`, `equipe`

### Navegação entre Páginas
- Cada projeto tem sua própria rota
- Links externos para redes sociais e currículos
- Navegação por breadcrumbs implícita

## Padrões de Desenvolvimento

### Convenções de Nomenclatura
- **Arquivos**: kebab-case (`digital-education-app.ts`)
- **Componentes**: PascalCase (`GifLabsSite`)
- **Funções**: camelCase (`useLanguage`)
- **Constantes**: camelCase (`homeTranslations`)

### Estrutura de Componentes
```typescript
// Ordem recomendada:
export default function ComponentName() {
  // 1. Hooks e estado
  // 2. Lógica de negócio
  // 3. Renderização
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Estilização
- **Tailwind CSS** como framework principal
- **Mobile-first** approach
- **Componentes Shadcn UI** para elementos base
- **Customização** através de classes Tailwind

## Configurações Importantes

### Next.js
```javascript
// next.config.mjs
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }
};
```

### Tailwind CSS
- Configuração customizada em `tailwind.config.ts`
- Sistema de cores neutras como base
- Grid responsivo e utilitários de espaçamento

### TypeScript
- Configuração estrita em `tsconfig.json`
- Path mapping para imports (`@/components`, `@/contexts`)

## Fluxo de Dados

### Estado Global
- **Idioma**: Gerenciado pelo LanguageContext
- **Persistência**: localStorage para preferência de idioma
- **Reatividade**: Context API para atualizações em tempo real

### Props e Comunicação
- Componentes recebem dados via props quando necessário
- Context API para dados compartilhados (idioma)
- Dados estáticos definidos localmente nos componentes

## Considerações de Performance

### Otimizações Implementadas
- **Lazy Loading**: Imagens otimizadas com Next.js Image
- **CSS-in-JS**: Tailwind CSS com purging automático
- **Bundle Splitting**: Next.js automaticamente
- **Static Generation**: Páginas estáticas quando possível

### Boas Práticas
- Uso de `use client` apenas quando necessário
- Componentes funcionais com hooks
- Memoização quando apropriado
- Imports otimizados

## Estrutura de Dados

### Projetos
```typescript
interface Project {
  id: string;           // Identificador único
  iconName: string;     // Nome do ícone Lucide
  link: string;         // Rota da página do projeto
}
```

### Membros da Equipe
```typescript
interface TeamMember {
  id: string;           // Identificador único
  iconName: string;     // Nome do ícone Lucide
  lattes: string;       // Link para currículo Lattes
  github: string;       // Link para GitHub
  linkedin: string;     // Link para LinkedIn
  twitter: string;      // Link para Twitter
  badges: string[];     // Array de badges de especialização
}
```

## Regras para Modificações

### Ao Adicionar Novos Projetos
1. **Array de Projetos**: Adicionar entrada em `projects` em `page.tsx`
2. **Traduções**: Adicionar entradas em `home.ts` para ambos os idiomas
3. **Página**: Criar `src/app/[nome-projeto]/page.tsx`
4. **Traduções da Página**: Criar arquivo em `translations/`
5. **Context**: Importar novas traduções em `LanguageContext.tsx`

### Ao Modificar Componentes
1. **Manter Tipagem**: Sempre usar TypeScript
2. **Internacionalização**: Usar função `t()` para todos os textos
3. **Responsividade**: Seguir padrão mobile-first
4. **Acessibilidade**: Manter padrões ARIA e semânticos

### Ao Adicionar Novos Idiomas
1. **Context**: Modificar `LanguageContext.tsx`
2. **Traduções**: Adicionar novo idioma em todos os arquivos de tradução
3. **Switcher**: Atualizar `language-switcher.tsx`
4. **Validação**: Atualizar lógica de validação de idioma

## Dependências Principais

### Produção
- `next`: ^14.0.0
- `react`: ^18.0.0
- `typescript`: ^5.0.0
- `tailwindcss`: ^3.0.0
- `lucide-react`: Para ícones
- `@radix-ui/*`: Componentes base do Shadcn UI

### Desenvolvimento
- `@types/node`: Tipos do Node.js
- `@types/react`: Tipos do React
- `eslint`: Linting
- `postcss`: Processamento CSS

## Comandos Úteis

### Desenvolvimento
```bash
npm run dev          # Iniciar servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Iniciar servidor de produção
npm run lint         # Executar ESLint
```

### Instalação
```bash
npm install          # Instalar dependências
npm run build       # Build antes de deploy
```

## Considerações de Deploy

### Build
- Next.js gera build otimizado
- Imagens são otimizadas automaticamente
- CSS é purgado e minificado
- JavaScript é code-splitted

### Arquivos Estáticos
- Localizados em `/public`
- Acessíveis diretamente via URL
- Otimizados pelo Next.js

## Conclusão

Esta documentação serve como guia completo para qualquer modificação no projeto GIFLABS. Seguir estas regras e padrões garante consistência, manutenibilidade e qualidade do código. Sempre consulte esta documentação antes de implementar mudanças para manter a integridade da arquitetura existente.

---

**Última Atualização**: Dezembro 2025  
**Versão do Projeto**: 1.0.0  
**Mantenedor**: Equipe GIFLABS
