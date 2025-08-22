# 🤝 GIFLABS - Guia de Contribuição

## 📋 Índice
1. [Como Contribuir](#como-contribuir)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Fluxo de Trabalho](#fluxo-de-trabalho)
4. [Padrões de Código](#padrões-de-código)
5. [Sistema de Traduções](#sistema-de-traduções)
6. [Testes](#testes)
7. [Pull Requests](#pull-requests)
8. [Reportando Bugs](#reportando-bugs)
9. [Solicitando Features](#solicitando-features)
10. [Código de Conduta](#código-de-conduta)

---

## 🚀 Como Contribuir

### Tipos de Contribuição
- 🐛 **Bug Fixes**: Correção de problemas existentes
- ✨ **New Features**: Adição de novas funcionalidades
- 📚 **Documentation**: Melhorias na documentação
- 🎨 **UI/UX Improvements**: Melhorias visuais e de experiência
- 🌐 **Translations**: Traduções para novos idiomas
- 🧪 **Tests**: Adição ou melhoria de testes
- 🔧 **Refactoring**: Melhorias na estrutura do código

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
```

### 3. Desenvolvimento
```bash
# Faça suas alterações
# Teste localmente
pnpm dev
pnpm build
pnpm lint

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

// 5. Tipos
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

### Executando Testes
```bash
# Executar todos os testes
pnpm test

# Executar testes em modo watch
pnpm test:watch

# Executar testes com coverage
pnpm test:coverage

# Executar testes específicos
pnpm test NovoComponente
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

## 🔧 Alterações Realizadas
- [ ] Adiciona nova funcionalidade X
- [ ] Corrige bug na página Y
- [ ] Atualiza traduções para Z
- [ ] Melhora performance do componente W

## 📱 Testes
- [ ] Testei localmente
- [ ] Testei em diferentes dispositivos
- [ ] Testei em ambos os idiomas (PT/EN)
- [ ] Adicionei/atualizei testes

## 📸 Screenshots
Se aplicável, adicione screenshots das mudanças visuais.

## ✅ Checklist
- [ ] Código segue padrões do projeto
- [ ] Traduções implementadas (PT/EN)
- [ ] Componentes são responsivos
- [ ] Acessibilidade mantida
- [ ] Performance não degradou
- [ ] Build sem erros
```

### Processo de Review
1. **Auto-review**: Revise seu próprio código antes de submeter
2. **Testes**: Execute todos os testes localmente
3. **Build**: Verifique se o build está funcionando
4. **Documentação**: Atualize documentação se necessário
5. **Submissão**: Crie o PR com descrição clara

### Critérios de Aprovação
- ✅ Código segue padrões do projeto
- ✅ Funcionalidade funciona conforme esperado
- ✅ Testes passam
- ✅ Build sem erros
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
- **Versão**: [ex: 1.0.0]

## 📸 Screenshots
Se aplicável, adicione screenshots.

## 📝 Logs
Se aplicável, adicione logs de erro.
```

### Informações Úteis para Bugs
- **URL da página** onde o bug ocorre
- **Ações específicas** que causam o problema
- **Frequência** do bug (sempre, às vezes, raramente)
- **Impacto** na experiência do usuário

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
- [ ] Outro
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

### Comportamentos Inaceitáveis
- ❌ Linguagem ofensiva ou discriminatória
- ❌ Comportamento assediador ou intimidatório
- ❌ Trollagem ou comportamento disruptivo
- ❌ Publicar informações privadas de outros

### Aplicação
- Violações serão investigadas pela equipe do projeto
- Medidas apropriadas serão tomadas
- Contribuidores podem ser removidos temporária ou permanentemente

---

## 🎯 Checklist de Contribuição

### Antes de Submeter
- [ ] Código segue padrões do projeto
- [ ] Funcionalidade testada localmente
- [ ] Testes passam
- [ ] Build sem erros
- [ ] Traduções implementadas (PT/EN)
- [ ] Responsividade mantida
- [ ] Acessibilidade mantida
- [ ] Documentação atualizada

### Para Pull Requests
- [ ] Branch criada a partir de `main` atualizada
- [ ] Commits com mensagens descritivas
- [ ] PR com descrição clara e template preenchido
- [ ] Screenshots adicionados (se aplicável)
- [ ] Testes adicionados/atualizados

### Para Bug Reports
- [ ] Bug reproduzível
- [ ] Descrição clara e concisa
- [ ] Passos para reproduzir
- [ ] Informações do sistema fornecidas
- [ ] Screenshots/logs adicionados (se aplicável)

---

## 📞 Comunicação

### Canais de Comunicação
- **GitHub Issues**: Para bugs e feature requests
- **GitHub Discussions**: Para discussões gerais
- **Pull Requests**: Para discussões sobre código
- **Email**: Para assuntos privados ou urgentes

### Boas Práticas de Comunicação
- **Seja claro e conciso** nas descrições
- **Use exemplos** quando possível
- **Responda prontamente** a comentários e feedback
- **Mantenha o foco** no projeto e nas contribuições

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
- **Colaborador**: Contribuidor com acesso de escrita
- **Mantenedor**: Membro da equipe principal do projeto

### Como se Tornar um Colaborador
- Contribuições consistentes e de qualidade
- Demonstração de conhecimento técnico
- Compromisso com os objetivos do projeto
- Aprovação da equipe principal

---

## 📚 Recursos Adicionais

### Documentação
- [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) - Guia de desenvolvimento
- [ARCHITECTURE_GUIDE.md](./ARCHITECTURE_GUIDE.md) - Guia de arquitetura
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Sistema de design
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Estrutura do projeto

### Ferramentas Úteis
- **VS Code Extensions**: TypeScript, Tailwind CSS IntelliSense
- **Browser DevTools**: React DevTools, Performance tab
- **Testing**: Jest, React Testing Library
- **Performance**: Lighthouse, WebPageTest

### Comunidade
- **GitHub**: [giflabs](https://github.com/Investigacao-Filosofica/giflabs)
- **Issues**: Para bugs e feature requests
- **Discussions**: Para discussões gerais
- **Wiki**: Documentação adicional

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

**Para dúvidas ou sugestões sobre este guia, abra uma issue no GitHub ou entre em contato com a equipe de desenvolvimento.**
