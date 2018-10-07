import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from 'config/config.service';
// import * as pdu from 'parse-database-url';
import { ConnectionOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

const config = new ConfigService();
// const dataBaseConfig = pdu(config.envConfig.DB_CONFIG);

// Log database query only for development
const DB_LOGGING = config.envConfig.NODE_ENV !== 'production';

// Entities path
const SOURCE_PATH = config.envConfig.NODE_ENV === 'production' ? './dist' : './src';

const dataBaseConfigObject: TypeOrmModuleOptions &
  Partial<ConnectionOptions> | any = {
  name: 'DB',
  type: 'mysql',
  host: config.envConfig.DB_HOST,
  port: config.envConfig.DB_PORT,
  username: config.envConfig.DB_USER,
  password: config.envConfig.DB_PASSWORD,
  database: config.envConfig.DB_DATABASE,
  entities: [SOURCE_PATH + '/**/*.entity{.ts,.js}'],
  synchronize: config.envConfig.NODE_ENV !== 'production',
  logging: DB_LOGGING
};

export const configDatabaseModules = TypeOrmModule.forRoot(dataBaseConfigObject)
