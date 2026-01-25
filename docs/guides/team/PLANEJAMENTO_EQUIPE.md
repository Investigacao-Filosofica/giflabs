# 📋 Planejamento: Criação de Usuários da Equipe GIFLABS

> **Documento de planejamento para organização dos dados da equipe**  
> **Data de criação**: Janeiro 2026  
> **Status**: Em Planejamento 📝

---

## 🎯 Objetivo

Criar os registros de **Authors** e **Users Admin** no Strapi apenas para a **Equipe Principal (5 membros)**. Estes serão os únicos usuários com acesso ao sistema para criar e publicar posts no blog.

---

## 📊 Estrutura de Dados Coletados

### Equipe Principal (5 Membros)

#### 1. Rodrigo Cid
- **Nome completo**: Rodrigo Reis Lastra Cid
- **Slug**: `rodrigo-cid`
- **Role**: Líder da Equipe
- **Bio**: Pesquisador em metafísica da ciência, filosofia das leis da natureza, e tecnologias digitais e editoriais para a educação e a governança. Responsável pela definição estratégica do GIFLABS.
- **Academic Title**: Prof. Dr.
- **Institution**: UFOP
- **Lattes**: http://lattes.cnpq.br/0847832636263404
- **GitHub**: https://github.com/ThePhilosopherX
- **Twitter/X**: https://x.com/thephilo_sopher
- **LinkedIn**: #
- **Badges**: Filosofia da Ciência, Tecnologia Educacional
- **Tipo**: Membro da Equipe (com User)

#### 2. Rafael Martins
- **Nome completo**: Rafael Martins
- **Slug**: `rafael-martins`
- **Role**: Coordenador de Internacionalização
- **Bio**: Professor de Filosofia na UNIMAX e UNIFAJ, pesquisador em ética, filosofia política e filosofia aplicada. Co-coordenador da Série Investigação Filosófica.
- **Academic Title**: Prof. Dr.
- **Institution**: UNIMAX & UNIFAJ
- **Lattes**: http://lattes.cnpq.br/2938081719142401
- **GitHub**: #
- **Twitter/X**: #
- **LinkedIn**: #
- **Badges**: Filosofia Política, Ética
- **Tipo**: Membro da Equipe (com User)

#### 3. Roseline Crippa
- **Nome completo**: Roseline Crippa
- **Slug**: `roseline-crippa`
- **Role**: Secretária Executiva
- **Bio**: Vice-diretora escolar, formada em Letras e estudante de Especialização em Educação a Distância pela UFF. Responsável pelas funções administrativas e organizacionais do GIFLABS.
- **Academic Title**: -
- **Institution**: UNAR
- **Lattes**: http://lattes.cnpq.br/3386107553390218
- **GitHub**: #
- **Twitter/X**: #
- **LinkedIn**: #
- **Badges**: Gestão Educacional, Letras, Educação a Distância
- **Tipo**: Membro da Equipe (com User)

#### 4. Mateus Rodrigues
- **Nome completo**: Mateus de Oliveira Rodrigues
- **Slug**: `OFF`
- **Role**: Artista Visual e Desenvolvedor Web
- **Bio**: Bacharel em Artes Visuais e desenvolvedor full stack. No GIFLABS, atua no desenvolvimento e na integração dos projetos do grupo no ambiente digital, articulando arte e tecnologias descentralizadas.
- **Academic Title**: Bacharel
- **Institution**: UFSM
- **Lattes**: http://lattes.cnpq.br/5139861876888026
- **GitHub**: https://github.com/ctrlshiftOFF
- **Twitter/X**: https://x.com/ctrlshiftOFF
- **LinkedIn**: #
- **Badges**: Arte Digital, Web3, Frontend, Gamificação
- **Tipo**: Membro da Equipe (com User)

#### 5. Vitor Gripp
- **Nome completo**: Vitor Emanuel Alves de Souza Gripp
- **Slug**: `vitor-gripp`
- **Role**: Estrategista de Comunicação e Inovação Digital
- **Bio**: Mestre em Psicologia, integrando filosofia, arte e tecnologia. No GIF Labs, desenvolve estratégias de comunicação e inovação, unindo experiência em tecnologias emergentes e visão crítica sobre cultura digital.
- **Academic Title**: Mestre
- **Institution**: -
- **Lattes**: http://lattes.cnpq.br/9028510842780316
- **GitHub**: #
- **Twitter/X**: https://x.com/EmanuelAlqm
- **LinkedIn**: #
- **Badges**: Comunicação, Inovação Digital, Psicologia
- **Tipo**: Membro da Equipe (com User)

---

## 📝 Estrutura de Dados para Strapi

### Campos do Schema Author

Para cada membro da equipe, precisamos preencher:

```typescript
{
  name: string,              // Nome completo
  slug: string,              // URL amigável (gerado automaticamente)
  bio: string | null,        // Biografia/descrição
  avatar: media | null,      // Foto (opcional)
  email: string | null,      // Email de contato
  academic_title: string | null,  // Ex: "Prof. Dr.", "Mestre", "PhD"
  role: string | null,       // Cargo/função no GIFLABS
  institution: string | null, // Instituição de origem
  lattes_url: string | null, // Link para Lattes
  orcid: string | null,      // ID ORCID (se disponível)
  social_links: {
    twitter?: string | null,
    instagram?: string | null,
    linkedin?: string | null,
    github?: string | null,
    website?: string | null
  } | null,
  website: string | null    // Site pessoal
}
```

---

## 🎯 Equipe Principal - Únicos Authors e Users

**Apenas estes 5 membros serão criados no Strapi:**

1. ✅ Rodrigo Reis Lastra Cid (`rodrigo-cid`)
2. ✅ Rafael Martins (`rafael-martins`)
3. ✅ Roseline Crippa (`roseline-crippa`)
4. ✅ Mateus de Oliveira Rodrigues (`OFF`)
5. ✅ Vitor Emanuel Alves de Souza Gripp (`vitor-gripp`)

**Para cada membro:**
- Criar **Author** (Content Type)
- Criar **User Admin** (para acesso ao Strapi)
- Configurar permissões para criar/publicar posts

---

## 📋 Checklist de Implementação

### Fase 1: Criar Authors (Content Types)
- [ ] Criar Author para Rodrigo Reis Lastra Cid
- [ ] Criar Author para Rafael Martins
- [ ] Criar Author para Roseline Crippa
- [ ] Criar Author para Mateus de Oliveira Rodrigues (OFF)
- [ ] Criar Author para Vitor Emanuel Alves de Souza Gripp

### Fase 2: Criar Users Admin
- [ ] Criar User Admin para Rodrigo Cid
- [ ] Criar User Admin para Rafael Martins
- [ ] Criar User Admin para Roseline Crippa
- [ ] Criar User Admin para Mateus Rodrigues (OFF)
- [ ] Criar User Admin para Vitor Gripp

### Fase 3: Configurar Permissões
- [ ] Configurar role "Author" ou "Editor" para cada User
- [ ] Garantir permissão para criar Posts
- [ ] Garantir permissão para publicar Posts
- [ ] Garantir permissão para editar próprios Posts

### Fase 4: Validação
- [ ] Verificar todos os slugs são únicos
- [ ] Verificar links Lattes estão corretos
- [ ] Verificar dados acadêmicos estão completos
- [ ] Testar login de cada User Admin
- [ ] Testar criação de post por cada User
- [ ] Testar relacionamento Author → Posts

---

## 🔄 Próximos Passos

1. **Criar os 5 Authors** no Strapi Admin (Content Manager → Author)
2. **Criar os 5 Users Admin** (Settings → Users → Create new user)
3. **Configurar permissões** para cada User (role: Author ou Editor)
4. **Testar workflow**: Cada membro deve conseguir criar e publicar posts
5. **Validar dados**: Verificar se todos os campos estão preenchidos corretamente

---

## 📚 Notas Importantes

- **Apenas 5 membros**: Equipe Principal é o único foco inicial
- **Authors + Users**: Cada membro precisa de ambos (Author para posts, User para acesso)
- **Slugs devem ser únicos**: Verificar antes de criar
- **Emails**: Necessários para criar os Users Admin
- **Permissões**: Configurar role adequada (Author ou Editor) para cada User
- **Avatares**: Adicionar fotos depois se disponíveis

---

**Documento criado em**: Janeiro 2026  
**Última atualização**: Janeiro 2026  
**Status**: ✅ Dados Coletados - Pronto para Implementação
