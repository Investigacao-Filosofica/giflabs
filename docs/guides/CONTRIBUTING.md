# 🤝 GIFLABS - Guia de Contribuição

> **Guia completo para contribuir com o projeto GIFLABS**

## 📋 Índice
1. [Como Contribuir](#como-contribuir)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Fluxo de Trabalho](#fluxo-de-trabalho)
4. [Padrões de Código](#padrões-de-código)
5. [Sistema de Traduções](#sistema-de-traduções)
6. [Pull Requests](#pull-requests)
7. [Reportando Bugs](#reportando-bugs)
8. [Solicitando Features](#solicitando-features)
9. [Código de Conduta](#código-de-conduta)

---

## 🚀 Como Contribuir

### Tipos de Contribuição
- 🐛 **Bug Fixes**: Correção de problemas existentes
- ✨ **New Features**: Adição de novas funcionalidades
- 📚 **Documentation**: Melhorias na documentação
- 🎨 **UI/UX Improvements**: Melhorias visuais e de experiência
- 🌐 **Translations**: Traduções para novos idiomas
- 🔧 **Refactoring**: Melhorias na estrutura do código
- ⚙️ **Configuration**: Melhorias nas configurações de build

### Pré-requisitos
- Conhecimento básico de React, TypeScript e Next.js
- Familiaridade com Git e GitHub
- Entendimento de Tailwind CSS
- Compromisso com qualidade e acessibilidade

---

## 🛠️ Configuração do Ambiente

### 1. Fork e Clone
```bash
# 1. Faça fork do repositório no GitHub
# 2. Clone seu fork localmente
git clone https://github.com/SEU_USUARIO/giflabs.git
cd giflabs

# 3. Adicione o repositório original como upstream
git remote add upstream https://github.com/Investigacao-Filosofica/giflabs.git
```

### 2. Instalação de Dependências
```bash
# Instale as dependências
pnpm install

# Verifique se tudo está funcionando
pnpm dev
```

### 3. Configuração do Editor
Recomendamos o **VS Code** com as seguintes extensões:
- TypeScript Importer
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint

⚠️ **Nota sobre Configurações**: O projeto atualmente tem algumas configurações que ignoram erros. Estamos trabalhando para corrigi-las.

---

## 🔄 Fluxo de Trabalho

### 1. Sincronização com Upstream
```bash
# Sempre sincronize antes de começar
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### 2. Criação de Branch
```bash
# Crie uma branch para sua feature/fix
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-fix
# ou
git checkout -b docs/nome-da-doc
```

### 3. Desenvolvimento
```bash
# Faça suas alterações
# Teste localmente
pnpm dev
pnpm build

# Commit suas alterações
git add .
git commit -m "feat: adiciona nova funcionalidade X"
```

### 4. Push e Pull Request
```bash
# Push para seu fork
git push origin feature/nome-da-feature

# Crie um Pull Request no GitHub
# Use o template fornecido
```

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

### Convenções de Nomenclatura
```typescript
// ✅ Arquivos: kebab-case
"novo-componente.tsx"
"lista-projetos.tsx"

// ✅ Componentes: PascalCase
export function NovoComponente() {}
export function ListaProjetos() {}

// ✅ Funções: camelCase
function handleClick() {}
function useProjectData() {}

// ✅ Constantes: camelCase
const projectList = [];
const homeTranslations = {};
```

---

## 🌐 Sistema de Traduções

### Estrutura Atual
O projeto usa um sistema customizado com Context API. **Importante**: Há uma inconsistência atual entre IDs de projetos (com hífen) e chaves de tradução (com underscore).

### Adicionando Novos Projetos
1. **Criar arquivo de traduções** em `src/contexts/translations/`
2. **Importar no LanguageContext** e adicionar ao merge
3. **Adicionar entrada no array** `projects` em `src/app/page.tsx`
4. **Criar página do projeto** em `src/app/[nome-projeto]/page.tsx`

⚠️ **Atenção à Inconsistência**: 
- Projeto: `{ id: "novo-projeto" }` (com hífen)
- Tradução: `"novo_projeto"` (com underscore)

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

### Atualizando o LanguageContext
```typescript
// src/contexts/LanguageContext.tsx
import { novoProjetoTranslations } from './translations/novo-projeto';

// Adicione ao merge de traduções
const allTranslations = {
  pt: {
    ...headerFooterTranslations.pt,
    ...homeTranslations.pt,
    ...novoProjetoTranslations.pt, // ← Nova tradução
    // ... outras traduções
  },
  en: {
    ...headerFooterTranslations.en,
    ...homeTranslations.en,
    ...novoProjetoTranslations.en, // ← Nova tradução
    // ... outras traduções
  }
};
```

---

## 🔀 Pull Requests

### Template de Pull Request
```markdown
## 📝 Descrição
Breve descrição das alterações realizadas.

## 🎯 Tipo de Mudança
- [ ] Bug fix (correção de bug)
- [ ] New feature (nova funcionalidade)
- [ ] Breaking change (mudança que quebra compatibilidade)
- [ ] Documentation (documentação)
- [ ] Configuration (configurações)

## 🔧 Alterações Realizadas
- [ ] Adiciona nova funcionalidade X
- [ ] Corrige bug na página Y
- [ ] Atualiza traduções para Z
- [ ] Melhora performance do componente W

## 📱 Testes
- [ ] Testei localmente
- [ ] Testei em diferentes dispositivos
- [ ] Testei em ambos os idiomas (PT/EN)
- [ ] Verifiquei responsividade

## 📸 Screenshots
Se aplicável, adicione screenshots das mudanças visuais.

## ⚠️ Notas Especiais
- Mencione qualquer configuração especial necessária
- Indique se há breaking changes
- Liste dependências adicionadas/removidas

## ✅ Checklist
- [ ] Código segue padrões do projeto
- [ ] Traduções implementadas (PT/EN)
- [ ] Componentes são responsivos
- [ ] Acessibilidade mantida
- [ ] Performance não degradou
- [ ] Build sem erros (ignorando configurações atuais)
```

### Processo de Review
1. **Auto-review**: Revise seu próprio código antes de submeter
2. **Testes**: Execute todos os comandos localmente
3. **Build**: Verifique se o build está funcionando
4. **Documentação**: Atualize documentação se necessário
5. **Submissão**: Crie o PR com descrição clara

### Critérios de Aprovação
- ✅ Código segue padrões do projeto
- ✅ Funcionalidade funciona conforme esperado
- ✅ Build funciona (considerando configurações atuais)
- ✅ Responsividade mantida
- ✅ Acessibilidade mantida
- ✅ Traduções implementadas

---

## 🐛 Reportando Bugs

### Template de Bug Report
```markdown
## 🐛 Descrição do Bug
Descrição clara e concisa do bug.

## 🔄 Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role para baixo até '...'
4. Veja o erro

## ✅ Comportamento Esperado
O que deveria acontecer.

## ❌ Comportamento Atual
O que está acontecendo.

## 📱 Informações do Sistema
- **Dispositivo**: [ex: iPhone 12, Desktop]
- **Navegador**: [ex: Chrome 91, Safari 14]
- **Sistema Operacional**: [ex: iOS 14.6, Windows 10]
- **Resolução**: [ex: 1920x1080]

## 📸 Screenshots
Se aplicável, adicione screenshots.

## 📝 Console Logs
Se aplicável, adicione logs de erro do console.

## 🔗 URL
URL onde o bug ocorre.

## 📊 Impacto
- [ ] Crítico (quebra funcionalidade principal)
- [ ] Alto (prejudica experiência significativamente)
- [ ] Médio (problema perceptível mas contornável)
- [ ] Baixo (problema menor)
```

### Informações Úteis para Bugs
- **URL específica** onde o bug ocorre
- **Ações específicas** que causam o problema
- **Frequência** do bug (sempre, às vezes, raramente)
- **Impacto** na experiência do usuário
- **Console errors** se houver

---

## ✨ Solicitando Features

### Template de Feature Request
```markdown
## 🚀 Descrição da Feature
Descrição clara e concisa da funcionalidade desejada.

## 💡 Problema que Resolve
Explicação de como esta feature resolve um problema ou melhora a experiência.

## 🎯 Solução Proposta
Descrição da solução ideal.

## 🔄 Alternativas Consideradas
Outras soluções que foram consideradas.

## 📱 Contexto Adicional
Qualquer contexto adicional, screenshots, mockups, etc.

## 🏷️ Categorias
- [ ] UI/UX
- [ ] Funcionalidade
- [ ] Performance
- [ ] Acessibilidade
- [ ] Internacionalização
- [ ] Configuração
- [ ] Outro

## 📊 Prioridade
- [ ] Crítica (essencial para o projeto)
- [ ] Alta (muito importante)
- [ ] Média (seria útil)
- [ ] Baixa (nice to have)

## 🎯 Critérios de Aceitação
- [ ] Critério 1
- [ ] Critério 2
- [ ] Critério 3
```

### Critérios para Features
- **Alinhamento**: A feature deve alinhar com os objetivos do projeto
- **Impacto**: Deve melhorar significativamente a experiência do usuário
- **Viabilidade**: Deve ser tecnicamente viável
- **Manutenibilidade**: Deve ser fácil de manter e expandir

---

## 📚 Código de Conduta

### Princípios
- **Respeito**: Trate todos os contribuidores com respeito
- **Inclusão**: Seja inclusivo e acolhedor
- **Colaboração**: Trabalhe em conjunto para melhorar o projeto
- **Profissionalismo**: Mantenha um ambiente profissional

### Comportamentos Esperados
- ✅ Usar linguagem inclusiva e respeitosa
- ✅ Aceitar feedback construtivo
- ✅ Focar no código e nas ideias, não nas pessoas
- ✅ Demonstrar empatia para com outros contribuidores
- ✅ Ajudar novos contribuidores

### Comportamentos Inaceitáveis
- ❌ Linguagem ofensiva ou discriminatória
- ❌ Comportamento assediador ou intimidatório
- ❌ Trollagem ou comportamento disruptivo
- ❌ Publicar informações privadas de outros
- ❌ Ataques pessoais

### Aplicação
- Violações serão investigadas pela equipe do projeto
- Medidas apropriadas serão tomadas
- Contribuidores podem ser removidos temporária ou permanentemente

---

## 🎯 Checklist de Contribuição

### Antes de Submeter PR
- [ ] Código segue padrões do projeto
- [ ] Funcionalidade testada localmente
- [ ] Build funciona (pnpm build)
- [ ] Traduções implementadas (PT/EN)
- [ ] Responsividade mantida
- [ ] Acessibilidade mantida
- [ ] Documentação atualizada (se necessário)

### Para Pull Requests
- [ ] Branch criada a partir de `main` atualizada
- [ ] Commits com mensagens descritivas
- [ ] PR com descrição clara e template preenchido
- [ ] Screenshots adicionados (se aplicável)
- [ ] Considera as configurações atuais do projeto

### Para Bug Reports
- [ ] Bug reproduzível
- [ ] Descrição clara e concisa
- [ ] Passos para reproduzir
- [ ] Informações do sistema fornecidas
- [ ] Screenshots/logs adicionados (se aplicável)

---

## ⚠️ Notas Importantes

### Configurações Atuais que Afetam Contribuições

1. **TypeScript não estrito**: `"strict": false` no tsconfig.json
2. **ESLint ignorado no build**: `ignoreDuringBuilds: true`
3. **Erros TypeScript ignorados**: `ignoreBuildErrors: true`
4. **Falta autoprefixer**: Não configurado no PostCSS
5. **Inconsistência de IDs**: Hífen vs underscore

### Como Lidar com Essas Configurações

1. **Desenvolva com qualidade** mesmo com configurações permissivas
2. **Use TypeScript corretamente** apesar do modo não estrito
3. **Teste manualmente** já que algumas verificações estão desabilitadas
4. **Documente problemas** que encontrar relacionados às configurações

---

## 📞 Comunicação

### Canais de Comunicação
- **GitHub Issues**: Para bugs e feature requests
- **GitHub Discussions**: Para discussões gerais
- **Pull Requests**: Para discussões sobre código
- **Email**: rodrigorlcid@gmail.com para assuntos urgentes

### Boas Práticas de Comunicação
- **Seja claro e conciso** nas descrições
- **Use exemplos** quando possível
- **Responda prontamente** a comentários e feedback
- **Mantenha o foco** no projeto e nas contribuições
- **Seja paciente** com novos contribuidores

### Etiqueta no GitHub
- **Mencione pessoas** usando `@username` quando relevante
- **Referencie issues** usando `#123` quando aplicável
- **Use labels** apropriados para issues e PRs
- **Mantenha discussões** organizadas e construtivas

---

## 🏆 Reconhecimento

### Contribuidores
- Todos os contribuidores serão listados no README
- Contribuições significativas serão destacadas
- Agradecimentos especiais para contribuições excepcionais

### Tipos de Contribuição
- **Contribuidor**: Qualquer pessoa que contribuiu com o projeto
- **Colaborador**: Contribuidor com múltiplas contribuições aceitas
- **Mantenedor**: Membro da equipe principal do projeto

### Como se Tornar um Colaborador
- Contribuições consistentes e de qualidade
- Demonstração de conhecimento técnico
- Compromisso com os objetivos do projeto
- Aprovação da equipe principal

---

## 📚 Recursos Adicionais

### Documentação
- **[Guia de Desenvolvimento](./DEVELOPMENT_GUIDE.md)** - Padrões técnicos
- **[Guia de Arquitetura](./ARCHITECTURE_GUIDE.md)** - Arquitetura técnica
- **[Sistema de Design](./DESIGN_SYSTEM.md)** - Componentes e design
- **[Estrutura do Projeto](../reference/PROJECT_STRUCTURE.md)** - Organização

### Ferramentas Úteis
- **VS Code Extensions**: TypeScript, Tailwind CSS IntelliSense
- **Browser DevTools**: React DevTools, Performance tab
- **Git**: Para controle de versão
- **GitHub CLI**: Para facilitar workflow

### Aprendizado
- **Next.js**: [Documentação Oficial](https://nextjs.org/docs)
- **React**: [Documentação Oficial](https://react.dev/)
- **TypeScript**: [Handbook](https://www.typescriptlang.org/docs/)
- **Tailwind CSS**: [Documentação](https://tailwindcss.com/docs)

---

## 🎉 Agradecimentos

**Obrigado por considerar contribuir com o projeto GIFLABS!**

Sua contribuição é valiosa para:
- Melhorar a experiência dos usuários
- Expandir a funcionalidade do projeto
- Manter a qualidade do código
- Construir uma comunidade ativa

**Juntos, podemos criar algo incrível! 🚀**

---

**Para dúvidas sobre contribuições, abra uma issue no GitHub ou entre em contato com a equipe de desenvolvimento.**

