import { Injectable, InternalServerErrorException, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddProductDto } from './dto/add-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { File as MulterFile } from 'multer';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>
    ) { }
    async addProduct(dto: AddProductDto, file: MulterFile) {
        try {
            const newProduct = new this.productModel({
                ...dto,
                pimg: file?.filename || '',
            });

            await newProduct.save();
            return { msg: 'prod added' };
        } catch (err) {
            console.error('Error saving product:', err);
            throw new InternalServerErrorException('Could not save product');
        }
    }

}
