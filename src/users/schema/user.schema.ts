import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema({timestamps: true})
export class User {
  @Prop({ required: true, unique: true })
  emailid: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phno: string;

  @Prop({ required: true })
  pwd: string;

  @Prop({ 
    type: String, 
    enum: ['user', 'admin'], 
    default: 'user' 
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User)