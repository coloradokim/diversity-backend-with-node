module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/diversity_app'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
