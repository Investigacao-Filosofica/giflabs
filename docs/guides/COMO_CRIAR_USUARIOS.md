# 👥 Como Criar Usuários no Strapi GIFLABS

Guia completo para criar usuários que podem acessar o painel admin e criar posts.

---

## 🔑 Tipos de Usuários no Strapi

No Strapi existem **dois tipos de usuários** diferentes:

### 1. **Admin Users** (Usuários Administradores)
- **O que são**: Usuários que podem acessar o painel admin (`/admin`)
- **Para que servem**: Criar, editar e publicar posts no blog
- **Onde criar**: Settings > Users (na seção ADMINISTRATION PANEL)

### 2. **Authors** (Autores)
- **O que são**: Perfis de autores que aparecem nos posts
- **Para que servem**: Informações sobre quem escreveu o post (nome, bio, foto, etc.)
- **Onde criar**: Content Manager > Author

**⚠️ IMPORTANTE**: Para criar posts, você precisa ser um **Admin User**, não apenas um Author!

---

## 🚀 Criando Admin Users (Usuários do Painel Admin)

### Método 1: Pelo Painel Admin (Recomendado)

#### Passo 1: Acessar o Painel Admin
1. Acesse: `https://giflabs-production.up.railway.app/admin`
2. Faça login com sua conta de administrador

#### Passo 2: Ir para Settings > Users
1. No menu lateral esquerdo, clique em **"Settings"** (⚙️)
2. Na seção **"ADMINISTRATION PANEL"**, você verá três opções:
   - **Roles** - Para gerenciar permissões (Author, Editor, Super Admin) - **NÃO É AQUI!**
   - **Users** - Para criar usuários admin - **É AQUI!** ✅
   - **Audit Logs** - Para ver logs de auditoria
3. Clique em **"Users"** (não em "Roles")

**⚠️ DIFERENÇA IMPORTANTE**: 
- **"Roles"** = Define o que cada tipo de usuário pode fazer (permissões)
- **"Users"** = Cria os usuários reais que vão acessar o painel admin

#### Passo 3: Criar Novo Usuário
1. Clique no botão **"+ Add new user"** ou **"+ Create new user"** (canto superior direito)

#### Passo 4: Preencher os Dados
Preencha os campos:

**First Name** (Nome)
- Exemplo: "João"

**Last Name** (Sobrenome)
- Exemplo: "Silva"

**Email** ⚠️ **OBRIGATÓRIO**
- Email do usuário (será usado para login)
- Exemplo: `joao.silva@ufop.edu.br`
- **Importante**: Deve ser um email válido e único

**Password** ⚠️ **OBRIGATÓRIO**
- Senha para login
- Mínimo: 6 caracteres
- **Dica**: Use uma senha forte e compartilhe de forma segura

**Confirm Password**
- Confirme a senha

**Roles** (Funções)
- Selecione a role apropriada:
  - **Super Admin**: Acesso total (use com cuidado!)
  - **Editor**: Pode criar e editar posts
  - **Author**: Pode criar posts próprios

#### Passo 5: Salvar
1. Clique em **"Save"**
2. O usuário será criado e poderá fazer login imediatamente

---

### Método 2: Via Linha de Comando (Avançado)

Se você tem acesso SSH ao servidor Railway:

```bash
# Conectar ao container do Strapi no Railway
railway run bash

# Dentro do container, criar usuário admin
cd strapi
npm run strapi admin:create-user
```

Siga as instruções interativas:
- Email
- Password
- First name
- Last name
- Confirm super admin (yes/no)

---

## 📝 Criando Authors (Perfis de Autores)

Authors são diferentes de Admin Users. Eles são **Content Types** que representam quem escreveu o post.

### Quando Criar um Author?

Crie um Author quando:
- Um novo membro da equipe vai começar a escrever posts
- Você quer adicionar informações sobre o autor (bio, foto, links sociais)

### Como Criar um Author

#### Passo 1: Acessar Content Manager
1. No menu lateral, clique em **"Content Manager"**
2. Selecione **"Author"**

#### Passo 2: Criar Novo Author
1. Clique em **"+ Create new entry"**

#### Passo 3: Preencher os Campos

**Name** (Nome) ⚠️ **OBRIGATÓRIO**
- Nome completo do autor
- Exemplo: "Prof. Dr. João Silva"

**Slug** ⚠️ **OBRIGATÓRIO**
- Gerado automaticamente a partir do nome
- Exemplo: `prof-dr-joao-silva`
- Você pode editar manualmente

**Role** (Função)
- Função do autor na equipe
- Exemplo: "Pesquisador", "Professor", "Coordenador"

**Bio** (Biografia)
- Breve descrição do autor
- Aparece nos posts e na página do autor

**Email**
- Email de contato (opcional)

**Avatar** (Foto)
- Foto do autor
- Clique em "Add media" para fazer upload
- Formatos: JPG, PNG, WebP

**Social Links** (Links Sociais)
- **Lattes**: Link do currículo Lattes
- **Twitter/X**: Link do perfil no Twitter/X
- **GitHub**: Link do perfil no GitHub
- **LinkedIn**: Link do perfil no LinkedIn

#### Passo 4: Publicar
1. Clique em **"Save"**
2. Clique em **"Publish"**
3. O Author agora pode ser selecionado ao criar posts

---

## 🔐 Roles e Permissões

### Roles Disponíveis no Strapi

#### Super Admin
- **Acesso**: Total ao sistema
- **Pode**: Tudo (criar usuários, modificar configurações, etc.)
- **Use para**: Administradores principais do projeto

#### Editor
- **Acesso**: Criar e editar conteúdo
- **Pode**: Criar, editar e publicar posts
- **Use para**: Membros da equipe que vão criar posts regularmente

#### Author
- **Acesso**: Criar conteúdo próprio
- **Pode**: Criar e editar apenas seus próprios posts
- **Use para**: Colaboradores ocasionais

---

## 📋 Checklist ao Criar um Novo Usuário

Antes de criar um usuário, tenha em mãos:

- [ ] Nome completo do usuário
- [ ] Email válido e único
- [ ] Senha forte (mínimo 6 caracteres)
- [ ] Role apropriada (Super Admin, Editor ou Author)
- [ ] Confirmação de que o usuário precisa de acesso

Após criar:

- [ ] Enviar email com:
  - URL do painel admin: `https://giflabs-production.up.railway.app/admin`
  - Email de login
  - Senha (de forma segura!)
  - Link para o guia "Como Criar Posts"
- [ ] Criar o Author correspondente (se necessário)
- [ ] Verificar se o usuário consegue fazer login

---

## 🎯 Fluxo Recomendado para Novos Membros

### 1. Criar Admin User
1. Vá em **Settings > Users** (na seção ADMINISTRATION PANEL)
2. Clique em **"+ Add new user"**
3. Preencha os dados e selecione a role **"Editor"** ou **"Author"**
4. Envie as credenciais de forma segura

### 2. Criar Author Profile
1. Vá em **Content Manager > Author**
2. Crie o perfil do autor com:
   - Nome completo
   - Bio
   - Foto (avatar)
   - Links sociais (se houver)
3. Publique o Author

### 3. Orientar o Novo Usuário
1. Envie o link do painel admin
2. Envie o guia "Como Criar Posts"
3. Explique a diferença entre Admin User e Author
4. Peça para testar criando um post de teste

---

## 🚨 Problemas Comuns

### "Não consigo criar usuário"
- Verifique se você tem permissão de Super Admin
- Verifique se o email já não está em uso
- Verifique se a senha tem pelo menos 6 caracteres

### "Usuário criado mas não consegue fazer login"
- Verifique se o email está correto
- Verifique se a senha está correta
- Verifique se o usuário não está bloqueado (blocked = false)
- Verifique se o usuário está ativo (isActive = true)

### "Usuário não aparece na lista de Authors ao criar post"
- Verifique se você criou o **Author** (não apenas o Admin User)
- Verifique se o Author foi publicado
- Verifique se o slug do Author está correto

### "Preciso resetar a senha de um usuário"
1. Vá em **Settings > Users** (não "Administrators")
2. Abra o usuário
3. Clique em **"Reset password"** ou edite o usuário
4. Um email será enviado ao usuário com link para resetar

### "Preciso remover um usuário"
1. Vá em **Settings > Users**
2. Abra o usuário
3. Clique no menu de três pontos (⋮) ou no ícone de lixeira
4. Selecione **"Delete"**
5. ⚠️ **CUIDADO**: Esta ação é permanente!

---

## 🔒 Segurança

### Boas Práticas

1. **Senhas Fortes**
   - Mínimo 8 caracteres
   - Combine letras, números e símbolos
   - Não compartilhe senhas por email não criptografado

2. **Roles Apropriadas**
   - Dê apenas o nível de acesso necessário
   - Use "Editor" para a maioria dos usuários
   - Reserve "Super Admin" apenas para administradores principais

3. **Gerenciamento de Usuários**
   - Revise periodicamente a lista de usuários
   - Remova usuários que não precisam mais de acesso
   - Desative (não delete) usuários temporariamente inativos

4. **Compartilhamento Seguro de Credenciais**
   - Use um gerenciador de senhas
   - Ou envie senha e email em mensagens separadas
   - Peça para o usuário trocar a senha no primeiro login

---

## 📞 Suporte

Se você tiver problemas:

1. Consulte este guia primeiro
2. Verifique a [documentação oficial do Strapi sobre usuários](https://docs.strapi.io/dev-docs/backend/users-permissions)
3. Entre em contato com o administrador principal do sistema

---

## 📚 Recursos Adicionais

- [Documentação Strapi - Users & Permissions](https://docs.strapi.io/dev-docs/backend/users-permissions)
- [Documentação Strapi - Admin Panel](https://docs.strapi.io/dev-docs/admin-panel)
- [Guia de Segurança do Strapi](https://docs.strapi.io/dev-docs/security)

---

**Última atualização**: Janeiro 2026
