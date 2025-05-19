import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

// @Schema({ _id: false })
// class Comment {
//   @Prop()
//   name: string;

//   @Prop()
//   text: string;

//   @Prop({ min: 0, max: 5 })
//   rt: number;
// }

@Schema({ timestamps: true })
export class Product {
//   @Prop({ required: true })
//   _id: string;

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

//   @Prop({ type: [Comment], default: [] })
//   comm: Comment[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
