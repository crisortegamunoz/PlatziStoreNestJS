import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../products/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../../products/dtos/product.dto'

@Injectable()
export class ProductsService {

    private counterId = 1;
    private products: Product[] = [{
        id: 1,
        name: 'Product 1',
        description: 'bla bla bla',
        price: 4990,
        image: '',
        stock: 1
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'bla bla bla',
        price: 4990,
        image: '',
        stock: 3
    }];

    findAll(): Product[] {
        return this.products;
    }

    findOne(id: number) {
        const product = this.products.find((item) => item.id === id);
        if (!product) {
            throw new NotFoundException(`Product ${id} not found`);
        }
        return product;
    }

    create(payload: CreateProductDto) {
        this.counterId++;
        const newProduct = {
            id: this.counterId,
            ...payload
        }
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: UpdateProductDto) {
        const product = this.findOne(id);
        if (product) {
            const index = this.products.findIndex((item) => item.id === id);
            this.products[index] = {
                ...product,
                ...payload,
            };
            return this.products[index];
        }
        return null;
    }

    delete(id: number) {
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Product ${id} not found`);
        }
        this.products.splice(index, 1);
        return true;
    }


}
