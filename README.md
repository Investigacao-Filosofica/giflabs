# GIFLABS - Grupo Investigação Filosófica

> **"Pensar é revolucionário."**

Um grupo interdisciplinar sediado na Universidade Federal de Ouro Preto (UFOP), dedicado à investigação filosófica aplicada às artes, tecnologia e educação. O GIFLABS se posiciona como um espaço aberto ao diálogo e ao desenvolvimento crítico frente às transformações digitais contemporâneas.

## 🎯 Sobre o GIFLABS

### Missão
Promover investigação filosófica associada ao desenvolvimento tecnológico para as artes e a educação, fomentando práticas pedagógicas inclusivas, críticas e colaborativas.

### Visão
Ser reconhecido como referência em pesquisa e desenvolvimento de soluções educacionais integradas às tecnologias digitais emergentes, com destaque para blockchain, Web3 e arquiteturas descentralizadas.

### Valores
- **Transparência** - Abertura e clareza em todas as ações
- **Inclusão** - Acesso democrático ao conhecimento
- **Colaboração** - Trabalho conjunto e compartilhamento
- **Inovação Responsável** - Desenvolvimento ético e sustentável

## 🚀 Projetos Principais

### 1. Digital Education App
Uma plataforma educacional híbrida que combina:
- **Educação gamificada** com missões interativas
- **Certificação blockchain** via NFTs verificáveis
- **Curadoria colaborativa** de conteúdo
- **Arquitetura modular** e aberta
- **Modelo híbrido** (Web2 + Web3)

### 2. Série IF (Investigação Filosófica)
Pesquisa e tradução de verbetes da Stanford Encyclopedia of Philosophy, publicados como livros de acesso gratuito pela UFPel.

### 3. Canal The Philosophers DAO
Canal do YouTube para divulgação de vídeos e podcasts de interesse filosófico.

### 4. Near Alexandria Library
Biblioteca no Metaverso com os livros publicados pelo NEPFIL/UFPel.

### 5. Virtualia Magazine/Journal
Revista acadêmica sobre Arte, Tecnologia e Filosofia.

## 👥 Equipe

### Prof. Dr. Rodrigo Cid - **Líder**
- Pesquisador em metafísica da ciência e filosofia das leis da natureza
- Especialista em tecnologias digitais e editoriais para educação e governança
- Responsável pela definição estratégica do GIFLABS

### Prof. Dr. Rafael Martins - **Editor Acadêmico**
- Professor de Filosofia na UNIMAX e UNIFAJ
- Pesquisador em ética, filosofia política e filosofia aplicada
- Editor da Virtualia Journal e co-coordenador da Série Investigação Filosófica

### Roseline Crippa - **Secretária-Executiva**
- Vice-diretora escolar, formada em Letras
- Estudante de Especialização em Educação a Distância pela UFF
- Responsável pelas funções administrativas e organizacionais

### Mateus Rodrigues - **Artista Visual e Desenvolvedor Frontend**
- Pesquisador em arte digital e modelos educacionais descentralizados
- Responsável pelo desenvolvimento de projetos experimentais na interface entre Web3, educação e arte

### Alexandre Eduardo - **Desenvolvedor Backend**
- Pesquisador em arquitetura de dados e sistemas descentralizados
- Responsável pela infraestrutura de análise de dados e integração com protocolos Web3

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Linguagem de programação tipada
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes de interface reutilizáveis
- **Radix UI** - Componentes acessíveis e customizáveis
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos

### Backend & Infraestrutura
- **Node.js** - Runtime JavaScript
- **Express/NestJS** - Framework backend
- **MongoDB** - Banco de dados NoSQL
- **Solidity** - Smart contracts (Ethereum, Polygon)
- **IPFS/Arweave** - Armazenamento descentralizado
- **Functions (serverless)** - Escalabilidade e redução de custos

### Ferramentas de Desenvolvimento
- **pnpm** - Gerenciador de pacotes
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 📋 Pré-requisitos

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

## 🚀 Configuração do Projeto

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
├── src/
│   ├── app/                    # Páginas e layouts (App Router)
│   │   ├── digital-education-app/  # Página do projeto principal
│   │   │   └── page.tsx
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout raiz com favicon
│   │   └── page.tsx           # Página inicial
│   ├── components/            # Componentes reutilizáveis
│   │   ├── layout/           # Componentes de layout
│   │   │   ├── header.tsx    # Navegação principal
│   │   │   └── footer.tsx    # Rodapé com contatos
│   │   └── ui/               # Componentes de interface (Shadcn/ui)
│   └── lib/                  # Utilitários e configurações
│       └── utils.ts          # Funções utilitárias
├── public/                   # Arquivos estáticos
│   ├── GIF-LABS-LOGO.gif    # Favicon animado
│   ├── logo-black.png       # Logo para redes sociais
│   └── placeholder-*.jpg    # Imagens placeholder
├── tailwind.config.ts       # Configuração do Tailwind CSS
├── next.config.mjs          # Configuração do Next.js
├── package.json             # Dependências e scripts
└── README.md               # Esta documentação
```

## 🎨 Design System

### Cores Principais
- **Neutro**: `#6b7280` (gray-600) - Cor base
- **Azul Tecnológico**: `#0a2463` (blue-tech) - Destaque
- **Verde Esmeralda**: `#4a7c59` (green-emerald) - Ação
- **Dourado Metálico**: `#d4af37` (gold-metallic) - Premium

### Tipografia
- **Inter** - Fonte principal (sans-serif)
- **Lora** - Fonte secundária (serif)
- **Courier** - Fonte monospace para código

### Componentes
- Baseados em **Shadcn/ui** e **Radix UI**
- Design responsivo com abordagem mobile-first
- Animações suaves com **Framer Motion**
- Acessibilidade integrada

## 📱 Funcionalidades

### Página Inicial
- **Hero Section** com apresentação do grupo
- **Seção Sobre** com missão, visão e valores
- **Projetos** com cards interativos
- **Equipe** com perfis detalhados
- **Contato** com informações de contato

### Digital Education App
- **Apresentação** do projeto principal
- **Desafios** atuais da educação
- **Solução** proposta com 4 pilares
- **Tecnologia** utilizada
- **Roadmap** de desenvolvimento
- **Call-to-Action** para parcerias

### Navegação
- **Header fixo** com navegação responsiva
- **Menu mobile** com hamburger
- **Scroll suave** entre seções
- **Navegação contextual** por página

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

## 🔗 Links Importantes

- **Website**: [GIFLABS](http://giflabs.xyz)
- **Virtualia Journal**: [virtualiajournal.com](https://www.virtualiajournal.com/)
- **Canal YouTube**: [The Philosophers DAO](https://www.youtube.com/@ThePhilosophersDAOpt)
- **Série IF**: [UFPel](https://wp.ufpel.edu.br/nepfil/serie-investigacao-filosofica/)
- **Near Alexandria**: [Cryptovoxels](https://www.cryptovoxels.com/play?coords=SW@1789E,1180N)
- **CNPq**: [Grupo registrado](http://dgp.cnpq.br/dgp/espelhogrupo/513418)

## 📞 Contato

- **Email**: rodrigorlcid@gmail.com
- **Instituição**: Universidade Federal de Ouro Preto (UFOP)
- **Áreas**: Filosofia, Web3, Educação, Blockchain, IA, Arte Digital

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ pelo GIFLABS - UFOP**

*"Pensar é revolucionário."* 