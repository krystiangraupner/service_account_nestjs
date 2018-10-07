import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/account/user.module';
import { ConfigModule } from 'config/config.module';
// import { configDatabaseModules } from 'database.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';


dotenv.config();
const ENV : any = process.env
console.log(ENV);
@Module({
  imports: [/*configDatabaseModules*/
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: ENV.DB_HOST,
      port: ENV.DB_PORT,
      username: ENV.DB_USER,
      password: ENV.DB_PASSWORD,
      database: ENV.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
    , ConfigModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
