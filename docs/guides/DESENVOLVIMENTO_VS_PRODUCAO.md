# 🔧 Desenvolvimento vs Produção no Strapi

Guia explicando a diferença entre os modos e quando usar cada um.

---

## 🎯 O Que Significa "Produção" e "Desenvolvimento"?

### **Modo Produção** (Production)
- **Onde está**: Servidor hospedado (Railway, Vercel, etc.)
- **URL**: `https://giflabs-production.up.railway.app`
- **Propósito**: Sistema em uso pelos usuários finais
- **Características**:
  - ✅ Otimizado para performance
  - ✅ Mais seguro
  - ❌ **Algumas funcionalidades bloqueadas** (por segurança)
  - ❌ Não permite alterar schemas (estrutura de dados)
  - ❌ Não permite instalar plugins
  - ❌ Não permite modificar configurações avançadas

### **Modo Desenvolvimento** (Development)
- **Onde está**: Seu computador local
- **URL**: `http://localhost:1337`
- **Propósito**: Desenvolver, testar e fazer alterações
- **Características**:
  - ✅ Permite alterar tudo (schemas, plugins, configurações)
  - ✅ Hot reload (mudanças aparecem instantaneamente)
  - ✅ Ferramentas de debug
  - ✅ Permite experimentar sem quebrar produção
  - ⚠️ Menos seguro (não deve ser exposto publicamente)

---

## 🤔 Por Que Você Está em Produção?

Você está acessando o Strapi hospedado no **Railway**, que é o ambiente de **produção**. Isso significa:

- ✅ Seus colegas podem acessar de qualquer lugar
- ✅ O sistema está sempre disponível
- ✅ Os posts criados aparecem no site público
- ❌ Você **não pode** alterar a estrutura de dados (schemas)
- ❌ Você **não pode** instalar novos plugins
- ❌ Você **não pode** modificar algumas configurações

---

## ✅ O Que Você PODE Fazer em Produção

Mesmo em produção, você pode:

- ✅ Criar, editar e publicar posts
- ✅ Criar e gerenciar usuários
- ✅ Criar e gerenciar Authors, Categories, Tags, Projects
- ✅ Fazer upload de imagens
- ✅ Gerenciar conteúdo (tudo que é "Content")
- ✅ Configurar permissões de usuários
- ✅ Usar todas as funcionalidades de criação de conteúdo

---

## ❌ O Que Você NÃO PODE Fazer em Produção

Por segurança, o Strapi bloqueia em produção:

- ❌ **Alterar schemas** (estrutura de Content Types)
  - Exemplo: Adicionar novos campos em "Post"
  - Exemplo: Criar novos Content Types
- ❌ **Instalar plugins**
- ❌ **Modificar configurações avançadas** (algumas)
- ❌ **Acessar o Content-Type Builder** (ferramenta visual)
- ❌ **Fazer alterações que podem quebrar o sistema**

**Por quê?** Para evitar que mudanças acidentais quebrem o sistema em produção!

---

## 🛠️ Como Rodar em Modo Desenvolvimento (Local)

Para fazer alterações que não são permitidas em produção, você precisa rodar o Strapi localmente:

### Passo 1: Instalar Dependências

```bash
# Na raiz do projeto
cd strapi
npm install
```

### Passo 2: Configurar Variáveis de Ambiente

Crie o arquivo `strapi/.env` com as credenciais do banco de dados:

```env
# Banco de dados (use as mesmas credenciais do Railway)
DATABASE_HOST=xxxxx.proxy.rlwy.net
DATABASE_PORT=34199
DATABASE_NAME=railway
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=sua-senha-do-railway
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false

# Secrets (use os mesmos do Railway)
APP_KEYS=seu-app-keys
API_TOKEN_SALT=seu-api-token-salt
ADMIN_JWT_SECRET=seu-admin-jwt-secret
TRANSFER_TOKEN_SALT=seu-transfer-token-salt
JWT_SECRET=seu-jwt-secret

# Modo desenvolvimento
NODE_ENV=development
```

**📝 Nota**: Você pode copiar as variáveis do Railway para o `.env` local.

### Passo 3: Rodar em Desenvolvimento

```bash
# Na raiz do projeto
npm run strapi:dev

# OU diretamente na pasta strapi
cd strapi
npm run develop
```

### Passo 4: Acessar o Painel Local

Abra no navegador:
```
http://localhost:1337/admin
```

Agora você está em **modo desenvolvimento** e pode fazer todas as alterações!

---

## 🎯 Quando Usar Cada Modo?

### Use **Produção** (Railway) quando:
- ✅ Criar posts normalmente
- ✅ Gerenciar conteúdo
- ✅ Criar usuários
- ✅ Trabalho do dia a dia
- ✅ Seus colegas precisam acessar

### Use **Desenvolvimento** (Local) quando:
- ✅ Precisa alterar a estrutura de dados (schemas)
- ✅ Quer adicionar novos campos em Posts
- ✅ Precisa instalar plugins
- ✅ Quer testar mudanças antes de colocar em produção
- ✅ Está desenvolvendo novas funcionalidades

---

## 🔄 Fluxo de Trabalho Recomendado

### Para Trabalho Normal (Criar Posts)
1. Use **Produção** (Railway)
2. Acesse: `https://giflabs-production.up.railway.app/admin`
3. Crie seus posts normalmente
4. ✅ Pronto!

### Para Alterações Técnicas (Schemas, Plugins)
1. Faça as alterações em **Desenvolvimento** (local)
2. Teste tudo localmente
3. Quando estiver pronto, faça deploy para produção:
   ```bash
   npm run strapi:build
   # Depois faça commit e push (Railway faz deploy automático)
   ```

---

## 🚨 Problemas Comuns

### "Não consigo alterar o schema em produção"
- ✅ **Normal!** Isso é bloqueado por segurança
- ✅ Use modo desenvolvimento local para fazer alterações
- ✅ Depois faça deploy das mudanças

### "Quero adicionar um novo campo em Posts"
1. Rode localmente: `npm run strapi:dev`
2. Acesse: `http://localhost:1337/admin`
3. Vá em **Content-Type Builder > Post**
4. Adicione o novo campo
5. Salve e teste
6. Faça commit e push (Railway atualiza automaticamente)

### "Preciso instalar um plugin"
1. Rode localmente: `npm run strapi:dev`
2. Instale o plugin
3. Configure
4. Faça commit e push

### "As mudanças locais não aparecem em produção"
- Mudanças em desenvolvimento **não aparecem automaticamente** em produção
- Você precisa fazer **deploy**:
  1. Faça commit das mudanças
  2. Faça push para o repositório
  3. O Railway faz deploy automático

---

## 📊 Comparação Rápida

| Característica | Produção (Railway) | Desenvolvimento (Local) |
|----------------|-------------------|------------------------|
| **URL** | `https://giflabs-production...` | `http://localhost:1337` |
| **Criar Posts** | ✅ Sim | ✅ Sim |
| **Alterar Schemas** | ❌ Não | ✅ Sim |
| **Instalar Plugins** | ❌ Não | ✅ Sim |
| **Acesso Remoto** | ✅ Sim (qualquer lugar) | ❌ Não (só seu PC) |
| **Performance** | ✅ Otimizado | ⚠️ Mais lento |
| **Segurança** | ✅ Alta | ⚠️ Desenvolvimento |
| **Hot Reload** | ❌ Não | ✅ Sim |

---

## 💡 Dica Importante

**Para o trabalho diário de criar posts**: Use **Produção** (Railway) - é mais prático e seus colegas também podem acessar.

**Para alterações técnicas**: Use **Desenvolvimento** (local) - você tem controle total.

---

## 🔗 Scripts Disponíveis

No `package.json` da raiz:

```bash
# Desenvolvimento local
npm run strapi:dev

# Build para produção
npm run strapi:build

# Rodar em produção (localmente)
npm run strapi:start
```

---

## 📚 Recursos Adicionais

- [Documentação Strapi - Environments](https://docs.strapi.io/dev-docs/configurations/environment)
- [Documentação Strapi - Deployment](https://docs.strapi.io/dev-docs/deployment)

---

**Última atualização**: Janeiro 2026
