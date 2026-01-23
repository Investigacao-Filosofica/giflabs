export default ({ env }) => ({
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'pt-BR',
      locales: ['pt-BR', 'en'],
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'fallback-secret-change-in-production'),
    },
  },
});
