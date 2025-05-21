import { Injectable, InternalServerErrorException, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddProductDto } from './dto/add-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { File as MulterFile } from 'multer';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>, private categoryService: CategoryService
    ) { }
    async addProduct(dto: AddProductDto, file: MulterFile) {
        try {
            const newProduct = new this.productModel({
                ...dto,
                pimg: file?.filename || '',
            });

            await newProduct.save();

            const existingCat = await this.categoryService.findByName(dto.cat);
            if (!existingCat) {
                await this.categoryService.create(dto.cat, '');
            }

            return { msg: 'Product added successfully' };
        }

        catch (err) {
            console.error('Error saving product:', err);
            throw new InternalServerErrorException('Could not save product');
        }
    }

}
