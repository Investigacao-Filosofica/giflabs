# GIF LABS - Grupo de Pesquisa em Investigação Filosófica

Um grupo interdisciplinar sediado na Universidade Federal de Ouro Preto, dedicado à investigação filosófica aplicada à tecnologia e à educação.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Linguagem de programação tipada
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes de interface reutilizáveis
- **Radix UI** - Componentes acessíveis e customizáveis
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **pnpm** (gerenciador de pacotes recomendado)

### Instalando o Node.js

1. Acesse [nodejs.org](https://nodejs.org/)
2. Baixe a versão LTS (Long Term Support)
3. Execute o instalador e siga as instruções

### Instalando o pnpm

```bash
npm install -g pnpm
```

## 🛠️ Configuração do Projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd giflabs
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Execute o projeto em modo de desenvolvimento

```bash
pnpm dev
```

O projeto estará disponível em: [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
giflabs/
├── app/                    # Páginas e layouts (App Router)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes de interface (Shadcn/ui)
│   └── theme-provider.tsx # Provedor de tema
├── lib/                  # Utilitários e configurações
│   └── utils.ts          # Funções utilitárias
├── public/               # Arquivos estáticos
├── styles/               # Estilos adicionais
└── hooks/                # Hooks customizados
```

## 🎨 Personalização

### Temas e Cores

O projeto utiliza Tailwind CSS com configuração personalizada. As cores principais são:

- **Azul**: `#2563eb` (blue-600)
- **Verde**: `#16a34a` (green-600)
- **Cinza**: `#6b7280` (gray-600)

### Componentes

Os componentes estão organizados seguindo as melhores práticas:

- **Componentes UI**: Baseados em Shadcn/ui e Radix UI
- **Componentes de Página**: Específicos para cada seção
- **Hooks Customizados**: Lógica reutilizável

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia o servidor de desenvolvimento

# Build e Produção
pnpm build        # Cria build de produção
pnpm start        # Inicia servidor de produção

# Qualidade de Código
pnpm lint         # Executa ESLint
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Outras Plataformas

O projeto é compatível com:
- Netlify
- Railway
- Render
- Qualquer plataforma que suporte Next.js

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Website**: [GIF LABS](http://localhost:3000)
- **Email**: [contato@giflabs.ufop.edu.br]
- **Universidade**: Universidade Federal de Ouro Preto (UFOP)

---

Desenvolvido com ❤️ pelo GIF LABS - UFOP 