import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get(':id/products/:productId')
    getCategory(@Param('id') id: number,
        @Param('productId') productId: number): string {
        return `Category ID: ${id} and Product ID: ${productId}`;
    }

}
