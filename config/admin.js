module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a74f8d7d9a5d60f0eec3b797b939e3f0'),
  },
});
