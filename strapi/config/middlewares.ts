const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://giflabs.xyz',
  'https://giflabs.vercel.app',
];

function isOriginAllowed(origin: string | undefined): boolean {
  if (!origin) return false;
  if (allowedOrigins.includes(origin)) return true;
  if (origin.endsWith('.vercel.app') && origin.startsWith('https://')) return true;
  return false;
}

export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: (ctx: { get: (name: string) => string }) => {
        const origin = ctx.get('Origin');
        return isOriginAllowed(origin) ? origin : false;
      },
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
