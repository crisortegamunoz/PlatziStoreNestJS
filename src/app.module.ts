import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { environments } from './commons/config/environments';

const env = process.env.NODE_ENV ?? '.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[env],
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required()
      })
    }),
    HttpModule,
    UsersModule,
    ProductsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const request = http.get('https://jsonplaceholder.typicode.com/todos');
        const tasks = await lastValueFrom(request);
        return tasks ? tasks.data : tasks;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule { }