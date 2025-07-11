import { IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateProductDto {

    @IsString({ message: 'El nombre del producto debe ser del tipo texto' })
    @IsNotEmpty({ message: 'El nombre del producto no puede estar vacio' })
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly stock: number;

    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) { }