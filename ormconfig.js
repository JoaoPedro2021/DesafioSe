const devEnv = {
  "synchronize": true,
  "logging": false,
  entities: ['./src/entities/**/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations'
  },
  "name": "default",
  "type": "postgres",
  "host": "localhost",
  "port": "5432",
  "username": "postgres", //altere para o nome do seu usuario
  "password": "1234", //altere para sua senha de usuario
  "database": "desafio_bemol" //altere para o nome do seu banco de dados
}


module.exports = devEnv;