// add-product.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class AddProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  price: string; // Note: It comes as string from form-data

  @IsString()
  @IsNotEmpty()
  cat: string;

  @IsString()
  @IsNotEmpty()
  desc: string;
}
