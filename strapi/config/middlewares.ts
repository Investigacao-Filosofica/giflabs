// CORS: strapi::cors é obrigatório. global::cors adiciona headers manualmente (fallback para prod)
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://giflabs.xyz',
  'https://www.giflabs.xyz',
  'https://giflabs.vercel.app',
];

export default [
  'strapi::logger',
  'strapi::errors',
  'global::cors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: allowedOrigins,
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
