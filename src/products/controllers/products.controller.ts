import { Controller, Get, Param, Post, Query, Body, Put, Delete, HttpStatus, HttpCode, Res } from '@nestjs/common';
import { Response } from 'express'
import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../../commons/pipe/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto'

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService ) {

    }

    @Get('/')
    get(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string) {
        return this.productsService.findAll();
    }

    @Get('filter')
    getFilter(): string {
        return `Soy un filtro`;
    }

    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getById(@Res() response: Response, @Param('id', ParseIntPipe) id: string) {
        return this.productsService.findOne(+id);
    }

    @Post()
    create(@Body() payload: CreateProductDto) {
        return this.productsService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
        return this.productsService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productsService.delete(id);
    }

}
