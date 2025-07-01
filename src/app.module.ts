import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [UsersModule, ProductsModule, BrandsModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
