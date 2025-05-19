import { Controller,  Post,  Body,  UseInterceptors,  UploadedFile,} from '@nestjs/common';
import { ProductsService } from './products.service';
import { AddProductDto } from './dto/add-product.dto';
import { FileInterceptor} from '@nestjs/platform-express';
import { multerConfig } from './multer.config';
import { File as MulterFile } from 'multer';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
 
  @Post('add')
//   @UseInterceptors(FileInterceptor('file'))
  @UseInterceptors(FileInterceptor('pimg', multerConfig))
  addProduct(
    @Body() body: AddProductDto,
    @UploadedFile() file: MulterFile
  ) {
    console.log(body)
    return this.productsService.addProduct(body, file);
  }
  }
