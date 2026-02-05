// CORS: middleware customizado em src/middlewares/cors.ts (strapi::cors não funcionava em prod)
// global::cors roda primeiro para garantir que headers sejam definidos antes de security
export default [
  'strapi::logger',
  'strapi::errors',
  'global::cors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
