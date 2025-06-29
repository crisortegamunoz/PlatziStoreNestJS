import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { parse } from 'path';

@Injectable()
export class ParseIntPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException(`${value} is not a number`);
    }
    return value;
  }

}
