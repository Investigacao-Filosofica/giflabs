# 📝 Como Criar Posts no Blog GIFLABS

Guia completo para membros da equipe criarem e publicarem posts no blog do GIFLABS.

---

## 🚀 Acesso ao Painel Admin

### URL de Produção
```
https://giflabs-production.up.railway.app/admin
```

### Primeiro Acesso
1. Acesse a URL acima
2. Faça login com suas credenciais (fornecidas pelo administrador)
3. Se for seu primeiro acesso, você precisará criar uma conta (o administrador deve criar para você)

---

## ✍️ Criando um Novo Post

### Passo 1: Acessar a Seção de Posts
1. No menu lateral esquerdo, clique em **"Content Manager"**
2. Selecione **"Post"** (ou **"Posts"**)
3. Clique no botão **"+ Create new entry"** (canto superior direito)

---

### Passo 2: Preencher os Campos Obrigatórios

#### 📌 Campos Básicos

**1. Title (Título)** ⚠️ **OBRIGATÓRIO**
- Digite o título do seu post
- Máximo: 200 caracteres
- **Dica**: Seja claro e descritivo. O título aparece na listagem do blog.

**2. Slug** ⚠️ **OBRIGATÓRIO**
- O slug é gerado automaticamente a partir do título
- Exemplo: "Como Criar Posts" → `como-criar-posts`
- Você pode editar manualmente se necessário
- **Dica**: Use letras minúsculas, hífens e sem acentos

**3. Content (Conteúdo)** ⚠️ **OBRIGATÓRIO**
- Use o editor de texto rico (Rich Text Editor)
- Funciona como um editor de texto comum (Word/Google Docs)
- Você pode:
  - Formatar texto (negrito, itálico, sublinhado)
  - Criar listas (ordenadas e não ordenadas)
  - Adicionar links
  - Inserir imagens
  - Criar citações
  - Adicionar títulos (H1, H2, H3, etc.)

**4. Excerpt (Resumo)**
- Breve descrição do post (máximo 300 caracteres)
- Aparece na listagem do blog e nas redes sociais
- **Dica**: Escreva 1-2 frases que resumam o conteúdo

---

### Passo 3: Campos Opcionais (mas Recomendados)

**5. Featured Image (Imagem em Destaque)**
- Clique em **"Add media"** ou **"Click to add an asset"**
- Faça upload de uma imagem
- Formatos aceitos: JPG, PNG, WebP
- **Dica**: Use imagens de alta qualidade (mínimo 1200x630px para redes sociais)

**6. Author (Autor)**
- Selecione seu nome na lista de autores
- Se você não aparecer na lista, peça ao administrador para criar seu perfil de autor

**7. Category (Categoria)**
- Selecione uma categoria:
  - **Artigos Acadêmicos** - Para artigos científicos e pesquisas
  - **Notícias** - Para notícias e atualizações
  - **Traduções** - Para conteúdo traduzido (Série IF)
  - **Tutoriais** - Para guias e tutoriais
  - **Eventos** - Para eventos e workshops
  - **Opinião** - Para artigos de opinião

**8. Tags**
- Selecione tags relevantes (você pode selecionar múltiplas)
- Tags disponíveis incluem: filosofia, blockchain, web3, educação, arte-digital, metaverso, ética, tecnologia, literatura, AI, etc.
- **Dica**: Use 3-5 tags por post

**9. Project (Projeto)**
- Se o post está relacionado a um projeto específico, selecione:
  - Digital Education App
  - Série IF
  - Virtualia
  - Literatura
  - Youtube GIFLABS
  - Metaverso
  - Arquivologia Digital
  - Internacionalização

**10. Reading Time (Tempo de Leitura)**
- Tempo estimado de leitura em minutos
- Padrão: 5 minutos
- **Dica**: Calcule aproximadamente (250 palavras = 1 minuto)

**11. Is Featured (Em Destaque)**
- Marque esta opção se quiser que o post apareça em destaque na homepage
- Use com moderação (apenas posts muito importantes)

---

### Passo 4: SEO (Opcional mas Recomendado)

**12. SEO Component**
- Expanda a seção **"SEO"**
- Preencha:
  - **Meta Title**: Título para SEO (pode ser diferente do título do post)
  - **Meta Description**: Descrição para mecanismos de busca (máximo 160 caracteres)
  - **OG Image**: Imagem para compartilhamento em redes sociais
  - **No Index**: Marque apenas se NÃO quiser que o post apareça no Google

---

### Passo 5: Internacionalização (PT/EN)

O Strapi suporta dois idiomas: **Português (pt-BR)** e **Inglês (en)**.

**Para criar o post em português:**
- O idioma padrão já é português
- Preencha normalmente

**Para criar o post em inglês:**
1. No topo do formulário, clique no dropdown de idioma
2. Selecione **"English (en)"**
3. Preencha os campos traduzidos
4. **Importante**: O slug deve ser o mesmo em ambos os idiomas

**Para criar em ambos os idiomas:**
1. Crie primeiro em português
2. Depois, altere o idioma para inglês
3. Preencha as traduções
4. Salve

---

### Passo 6: Salvar e Publicar

**Salvar como Rascunho:**
1. Clique em **"Save"** (canto superior direito)
2. O post será salvo como **"Draft"** (rascunho)
3. Você pode voltar e editar depois

**Publicar:**
1. Clique em **"Save"** primeiro
2. Depois, clique no botão **"Publish"** (ou **"Publicar"**)
3. O post ficará visível no site imediatamente

**⚠️ IMPORTANTE**: 
- Posts em rascunho NÃO aparecem no site público
- Apenas posts publicados são visíveis
- Você pode despublicar depois clicando em **"Unpublish"**

---

## 📋 Checklist Antes de Publicar

Antes de clicar em **"Publish"**, verifique:

- [ ] Título está claro e descritivo
- [ ] Slug está correto (sem acentos, com hífens)
- [ ] Conteúdo está completo e revisado
- [ ] Excerpt está preenchido (resumo do post)
- [ ] Imagem em destaque foi adicionada
- [ ] Autor está selecionado
- [ ] Categoria está selecionada
- [ ] Tags relevantes foram adicionadas
- [ ] Projeto relacionado foi selecionado (se aplicável)
- [ ] Tempo de leitura está correto
- [ ] SEO foi preenchido (meta title e description)
- [ ] Texto foi revisado (ortografia e gramática)
- [ ] Links estão funcionando
- [ ] Imagens têm descrições alternativas (alt text)

---

## 🎨 Dicas de Formatação

### Editor de Texto Rico

O editor funciona como um processador de texto comum:

**Formatação de Texto:**
- **Negrito**: `Ctrl+B` ou botão **B**
- **Itálico**: `Ctrl+I` ou botão **I**
- **Sublinhado**: `Ctrl+U` ou botão **U**

**Títulos:**
- Use **H2** para títulos principais de seções
- Use **H3** para subtítulos
- Evite usar **H1** (já é usado pelo título do post)

**Listas:**
- Lista ordenada (1, 2, 3...): Botão de lista numerada
- Lista não ordenada (bullets): Botão de lista com pontos

**Links:**
- Selecione o texto
- Clique no botão de link
- Cole a URL
- **Dica**: Sempre abra links externos em nova aba (selecione "Open in new tab")

**Imagens no Conteúdo:**
- Clique no botão de imagem
- Faça upload ou selecione uma imagem existente
- Adicione uma descrição alternativa (alt text) para acessibilidade

**Citações:**
- Use o botão de citação para destacar citações importantes
- Útil para citações acadêmicas

---

## 🌐 Trabalhando com Dois Idiomas

### Estratégia Recomendada

1. **Crie primeiro em português** (idioma principal)
2. **Publique em português**
3. **Depois, traduza para inglês**:
   - Altere o idioma para inglês
   - Traduza título, excerpt, conteúdo e SEO
   - Mantenha o mesmo slug
   - Publique também em inglês

### Dicas de Tradução

- Mantenha o mesmo slug em ambos os idiomas
- Traduza o título de forma natural (não precisa ser tradução literal)
- Adapte o excerpt para o público-alvo do idioma
- Revise a tradução antes de publicar

---

## 🔍 Visualizando o Post Publicado

Após publicar:

1. Acesse o site: `https://giflabs.vercel.app/blog`
2. Seu post deve aparecer na listagem
3. Clique no post para ver a página completa
4. Verifique se tudo está correto:
   - Formatação
   - Imagens
   - Links
   - SEO (compartilhe no Facebook/Twitter para ver o preview)

---

## 🛠️ Editando um Post Existente

1. Acesse **Content Manager > Post**
2. Clique no post que deseja editar
3. Faça as alterações
4. Clique em **"Save"**
5. Se o post já estava publicado, ele será atualizado automaticamente

**Para despublicar temporariamente:**
- Clique em **"Unpublish"**
- O post não aparecerá no site, mas será mantido no Strapi

---

## 🚨 Problemas Comuns

### "Não consigo ver meu post no site"
- Verifique se você clicou em **"Publish"** (não apenas "Save")
- Verifique se o post não está em rascunho (status deve ser "Published")

### "O slug está errado"
- Você pode editar o slug manualmente
- Mas cuidado: mudar o slug de um post publicado quebra links antigos

### "Não consigo adicionar imagens"
- Verifique o tamanho do arquivo (máximo recomendado: 5MB)
- Use formatos: JPG, PNG ou WebP
- Se persistir, contate o administrador

### "Não apareço na lista de autores"
- Peça ao administrador para criar seu perfil de autor
- Você precisa ter um perfil de autor antes de poder ser selecionado

### "Preciso deletar um post"
- Abra o post
- Clique no menu de três pontos (⋮)
- Selecione **"Delete"**
- ⚠️ **CUIDADO**: Esta ação é permanente!

---

## 📞 Suporte

Se você tiver problemas ou dúvidas:

1. Consulte este guia primeiro
2. Verifique a [documentação oficial do Strapi](https://docs.strapi.io)
3. Entre em contato com o administrador do sistema

---

## 📚 Recursos Adicionais

- [Documentação do Strapi](https://docs.strapi.io)
- [Guia de SEO para Blogs](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Boas Práticas de Escrita Web](https://www.nngroup.com/articles/writing-for-the-web/)

---

**Última atualização**: Janeiro 2026

**Mateus de Oliveira Rodrigues (OFF)** — [github.com/ctrlshiftOFF](https://github.com/ctrlshiftOFF)
