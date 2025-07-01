import { Module } from '@nestjs/common';
import { BrandsController } from './controllers/brands.controller';
import { BrandsService } from './services/brands.service';

@Module({
    imports: [],
    controllers: [BrandsController],
    providers: [BrandsService],
})
export class BrandsModule {}
