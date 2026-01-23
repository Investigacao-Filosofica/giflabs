export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Configurar permissões da API para role "Public"
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (publicRole) {
      // Definir permissões públicas (somente leitura)
      const publicPermissions = [
        // Posts - leitura pública
        { action: 'api::post.post.find' },
        { action: 'api::post.post.findOne' },
        // Authors - leitura pública
        { action: 'api::author.author.find' },
        { action: 'api::author.author.findOne' },
        // Categories - leitura pública
        { action: 'api::category.category.find' },
        { action: 'api::category.category.findOne' },
        // Tags - leitura pública
        { action: 'api::tag.tag.find' },
        { action: 'api::tag.tag.findOne' },
        // Projects - leitura pública
        { action: 'api::project.project.find' },
        { action: 'api::project.project.findOne' },
      ];

      // Verificar e criar permissões que não existem
      for (const perm of publicPermissions) {
        const existingPermission = await strapi
          .query('plugin::users-permissions.permission')
          .findOne({
            where: {
              action: perm.action,
              role: publicRole.id,
            },
          });

        if (!existingPermission) {
          await strapi.query('plugin::users-permissions.permission').create({
            data: {
              action: perm.action,
              role: publicRole.id,
            },
          });
          strapi.log.info(`✅ Permissão criada: ${perm.action} (Public)`);
        }
      }

      strapi.log.info('✅ Permissões públicas configuradas com sucesso!');
    }

    // Configurar permissões para role "Authenticated"
    const authenticatedRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'authenticated' } });

    if (authenticatedRole) {
      // Definir permissões autenticadas (CRUD completo)
      const authenticatedPermissions = [
        // Posts - CRUD completo
        { action: 'api::post.post.find' },
        { action: 'api::post.post.findOne' },
        { action: 'api::post.post.create' },
        { action: 'api::post.post.update' },
        { action: 'api::post.post.delete' },
        // Authors - CRUD completo
        { action: 'api::author.author.find' },
        { action: 'api::author.author.findOne' },
        { action: 'api::author.author.create' },
        { action: 'api::author.author.update' },
        { action: 'api::author.author.delete' },
        // Categories - CRUD completo
        { action: 'api::category.category.find' },
        { action: 'api::category.category.findOne' },
        { action: 'api::category.category.create' },
        { action: 'api::category.category.update' },
        { action: 'api::category.category.delete' },
        // Tags - CRUD completo
        { action: 'api::tag.tag.find' },
        { action: 'api::tag.tag.findOne' },
        { action: 'api::tag.tag.create' },
        { action: 'api::tag.tag.update' },
        { action: 'api::tag.tag.delete' },
        // Projects - CRUD completo
        { action: 'api::project.project.find' },
        { action: 'api::project.project.findOne' },
        { action: 'api::project.project.create' },
        { action: 'api::project.project.update' },
        { action: 'api::project.project.delete' },
      ];

      // Verificar e criar permissões que não existem
      for (const perm of authenticatedPermissions) {
        const existingPermission = await strapi
          .query('plugin::users-permissions.permission')
          .findOne({
            where: {
              action: perm.action,
              role: authenticatedRole.id,
            },
          });

        if (!existingPermission) {
          await strapi.query('plugin::users-permissions.permission').create({
            data: {
              action: perm.action,
              role: authenticatedRole.id,
            },
          });
          strapi.log.info(`✅ Permissão criada: ${perm.action} (Authenticated)`);
        }
      }

      strapi.log.info('✅ Permissões autenticadas configuradas com sucesso!');
    }

    // Criar categorias padrão se não existirem
    await createDefaultCategories(strapi);
    
    // Criar projetos padrão se não existirem
    await createDefaultProjects(strapi);
    
    // Criar tags padrão se não existirem
    await createDefaultTags(strapi);

    // Criar autores padrão se não existirem
    await createDefaultAuthors(strapi);
  },
};

/**
 * Criar categorias padrão do GIFLABS
 */
async function createDefaultCategories(strapi) {
  const categories = [
    { name: 'Artigos Acadêmicos', slug: 'artigos-academicos', description: 'Artigos e pesquisas acadêmicas', color: '#3B82F6' },
    { name: 'Notícias', slug: 'noticias', description: 'Novidades e atualizações do GIFLABS', color: '#10B981' },
    { name: 'Traduções', slug: 'traducoes', description: 'Traduções de textos filosóficos', color: '#8B5CF6' },
    { name: 'Tutoriais', slug: 'tutoriais', description: 'Guias e tutoriais práticos', color: '#F59E0B' },
    { name: 'Eventos', slug: 'eventos', description: 'Eventos e palestras', color: '#EF4444' },
    { name: 'Opinião', slug: 'opiniao', description: 'Artigos de opinião e reflexões', color: '#6366F1' },
  ];

  for (const cat of categories) {
    const existing = await strapi.query('api::category.category').findOne({
      where: { slug: cat.slug },
    });

    if (!existing) {
      await strapi.query('api::category.category').create({
        data: {
          ...cat,
          locale: 'pt-BR',
          publishedAt: new Date(),
        },
      });
      strapi.log.info(`📂 Categoria criada: ${cat.name}`);
    }
  }
}

/**
 * Criar projetos padrão do GIFLABS
 */
async function createDefaultProjects(strapi) {
  const projects = [
    { name: 'Digital Education App', slug: 'digital-education-app', description: 'Aplicativo de educação gamificada', color: '#3B82F6', icon: 'graduation-cap' },
    { name: 'Série IF', slug: 'serie-if', description: 'Traduções da Stanford Encyclopedia', color: '#8B5CF6', icon: 'book-open' },
    { name: 'Virtualia', slug: 'virtualia', description: 'Revista acadêmica digital', color: '#10B981', icon: 'newspaper' },
    { name: 'Literatura', slug: 'literatura', description: 'Experiências literárias imersivas', color: '#F59E0B', icon: 'pen-tool' },
    { name: 'Youtube GIFLABS', slug: 'youtube-giflabs', description: 'Canal de conteúdo filosófico', color: '#EF4444', icon: 'youtube' },
    { name: 'Metaverso', slug: 'metaverso', description: 'Exploração de ambientes digitais', color: '#6366F1', icon: 'globe' },
    { name: 'Arquivologia Digital', slug: 'arquivologia-digital', description: 'Preservação digital de periódicos', color: '#EC4899', icon: 'archive' },
  ];

  for (const proj of projects) {
    const existing = await strapi.query('api::project.project').findOne({
      where: { slug: proj.slug },
    });

    if (!existing) {
      await strapi.query('api::project.project').create({
        data: {
          ...proj,
          locale: 'pt-BR',
          publishedAt: new Date(),
        },
      });
      strapi.log.info(`🔬 Projeto criado: ${proj.name}`);
    }
  }
}

/**
 * Criar tags padrão do GIFLABS
 */
async function createDefaultTags(strapi) {
  const tags = [
    { name: 'Filosofia', slug: 'filosofia' },
    { name: 'Blockchain', slug: 'blockchain' },
    { name: 'Web3', slug: 'web3' },
    { name: 'Educação', slug: 'educacao' },
    { name: 'Arte Digital', slug: 'arte-digital' },
    { name: 'Metaverso', slug: 'metaverso' },
    { name: 'Ética', slug: 'etica' },
    { name: 'Tecnologia', slug: 'tecnologia' },
    { name: 'Literatura', slug: 'literatura' },
    { name: 'Inteligência Artificial', slug: 'inteligencia-artificial' },
  ];

  for (const tag of tags) {
    const existing = await strapi.query('api::tag.tag').findOne({
      where: { slug: tag.slug },
    });

    if (!existing) {
      await strapi.query('api::tag.tag').create({
        data: {
          ...tag,
          locale: 'pt-BR',
          publishedAt: new Date(),
        },
      });
      strapi.log.info(`🏷️ Tag criada: ${tag.name}`);
    }
  }
}

/**
 * Criar autores padrão do GIFLABS (equipe principal)
 */
async function createDefaultAuthors(strapi) {
  const authors = [
    {
      name: 'Prof. Dr. Rodrigo Cid',
      slug: 'rodrigo-cid',
      role: 'Líder da Equipe',
      bio: 'Pesquisador em metafísica da ciência, filosofia das leis da natureza, e tecnologias digitais e editoriais para a educação e a governança. Responsável pela definição estratégica do GIFLABS.',
      email: 'rodrigorlcid@gmail.com',
      social_links: {
        lattes: 'http://lattes.cnpq.br/0847832636263404',
        twitter: null,
        linkedin: null,
      },
    },
    {
      name: 'Prof. Dr. Rafael Martins',
      slug: 'rafael-martins',
      role: 'Coordenador de Internacionalização',
      bio: 'Professor de Filosofia na UNIMAX e UNIFAJ, pesquisador em ética, filosofia política e filosofia aplicada. Editor da Virtualia Journal e co-coordenador da Série Investigação Filosófica.',
      email: null,
      social_links: {
        lattes: null,
        twitter: null,
        linkedin: null,
      },
    },
    {
      name: 'Roseline Crippa',
      slug: 'roseline-crippa',
      role: 'Secretária Executiva',
      bio: 'Vice-diretora escolar, formada em Letras e estudante de Especialização em Educação a Distância pela UFF. Responsável pelas funções administrativas e organizacionais do GIFLABS.',
      email: null,
      social_links: {
        lattes: null,
        twitter: null,
        linkedin: null,
      },
    },
    {
      name: 'Mateus Rodrigues',
      slug: 'mateus-rodrigues',
      role: 'Responsável pela Infraestrutura Tecnológica',
      bio: 'Pesquisador em arte digital e modelos educacionais descentralizados, responsável pelo desenvolvimento de projetos experimentais do GIFLABS na interface entre Web3, educação e arte.',
      email: null,
      social_links: {
        twitter: 'https://x.com/mikifriki',
        github: 'https://github.com/mateusrodriguesxyz',
        linkedin: null,
      },
    },
    {
      name: 'Vitor Emanuel Gripp',
      slug: 'vitor-gripp',
      role: 'Estrategista de Comunicação e Inovação Digital',
      bio: 'Mestre em Psicologia, integrando filosofia, arte e tecnologia. No GIF Labs, desenvolve estratégias de comunicação e inovação, unindo experiência em tecnologias emergentes e visão crítica sobre cultura digital.',
      email: null,
      social_links: {
        lattes: null,
        twitter: null,
        linkedin: null,
      },
    },
  ];

  for (const author of authors) {
    const existing = await strapi.query('api::author.author').findOne({
      where: { slug: author.slug },
    });

    if (!existing) {
      await strapi.query('api::author.author').create({
        data: {
          ...author,
          locale: 'pt-BR',
          publishedAt: new Date(),
        },
      });
      strapi.log.info(`👤 Autor criado: ${author.name}`);
    }
  }
}
