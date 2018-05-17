module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'labCMS',
    user: process.env.DB_USER || 'labCMS',
    password: process.env.DB_PASS || 'labCMS',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './labCMS.sqlite'
    }
  }
}
