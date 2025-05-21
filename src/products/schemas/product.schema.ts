import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  cat: string;

  @Prop()
  price: string;

  @Prop()
  desc: string;

  @Prop()
  pimg: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
