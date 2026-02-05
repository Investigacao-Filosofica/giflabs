export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'fallback-secret-change-in-production'),
    },
  },
});
