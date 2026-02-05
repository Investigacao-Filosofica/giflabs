/**
 * Middleware CORS customizado - define headers manualmente para contornar
 * problemas com strapi::cors em produção.
 */
const defaultOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://giflabs.xyz",
  "https://www.giflabs.xyz",
  "https://giflabs.vercel.app",
];

const extraOrigins =
  typeof process.env.CORS_ORIGINS === "string" && process.env.CORS_ORIGINS.trim()
    ? process.env.CORS_ORIGINS.trim()
        .split(",")
        .map((o) => o.trim())
        .filter(Boolean)
    : [];

const allowedOrigins = new Set([...defaultOrigins, ...extraOrigins]);

const CORS_HEADERS = [
  "Content-Type",
  "Authorization",
  "Origin",
  "Accept",
  "X-Requested-With",
  "Accept-Language",
];

const CORS_METHODS = [
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "HEAD",
  "OPTIONS",
];

export default (_config: unknown, _ctx: { strapi: unknown }) => {
  return async (ctx: {
    request: { method: string; header: { origin?: string } };
    set: (name: string, value: string) => void;
    status: number;
    body: string;
  }, next: () => Promise<void>) => {
    const origin = ctx.request.header.origin;

    if (origin && allowedOrigins.has(origin)) {
      ctx.set("Access-Control-Allow-Origin", origin);
      ctx.set("Access-Control-Allow-Methods", CORS_METHODS.join(", "));
      ctx.set("Access-Control-Allow-Headers", CORS_HEADERS.join(", "));
      ctx.set("Access-Control-Max-Age", "86400");
    }

    if (ctx.request.method === "OPTIONS") {
      ctx.status = 204;
      ctx.body = "";
      return;
    }

    await next();
  };
};
