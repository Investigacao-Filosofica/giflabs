// Strapi espera origin como string (comma-separated). Array/função causa "originList.split is not a function"
// CORS_ORIGINS: adicione URLs extras separadas por vírgula (ex.: previews do Vercel)
const defaultOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://giflabs.xyz',
  'https://giflabs.vercel.app',
].join(',');

const originString =
  typeof process.env.CORS_ORIGINS === 'string' && process.env.CORS_ORIGINS.trim()
    ? `${defaultOrigins},${process.env.CORS_ORIGINS.trim()}`
    : defaultOrigins;

export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: originString,
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
