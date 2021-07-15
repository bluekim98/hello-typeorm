import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './database.providers';

const node_env = process.env.NODE_ENV === 'production' ? 'app' : 'dev';

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [`src/database/dotenv/.${node_env}.env`]
          }),
    ],
    providers: [
        databaseProviders.connectionOption
    ],
    exports: ['DATABASE_CONNECTION']
})
export class DatabaseModule { }
