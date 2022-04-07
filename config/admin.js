module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '98cd53f499bbebb98aec2e3e277be7e3'),
  },
});
