import { createConnection } from 'typeorm';

export const databaseProviders = { 
  connectionOption: {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'typeorm',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      // logging: true,
      synchronize: Boolean(process.env.DB_SYNCHRONIZE || false)
    }),
  }
}
  
