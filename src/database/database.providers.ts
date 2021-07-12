import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'typeorm',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      // logging: true,
      synchronize: true,
    }),
  },
];