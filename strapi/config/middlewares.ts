// Strapi 5 aceita origin como Array ou Function (docs: https://docs.strapi.io/dev-docs/configurations/middlewares)
// CORS_ORIGINS: URLs extras separadas por vírgula (ex.: previews do Vercel)
const defaultOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://giflabs.xyz',
  'https://www.giflabs.xyz',
  'https://giflabs.vercel.app',
];

const extraOrigins =
  typeof process.env.CORS_ORIGINS === 'string' && process.env.CORS_ORIGINS.trim()
    ? process.env.CORS_ORIGINS.trim().split(',').map((o) => o.trim()).filter(Boolean)
    : [];

const allowedOrigins = new Set([...defaultOrigins, ...extraOrigins]);

export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: (ctx: { request: { header: { origin?: string } } }) => {
        const origin = ctx.request.header.origin;
        if (origin && allowedOrigins.has(origin)) {
          return origin;
        }
        return '';
      },
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
