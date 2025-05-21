import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body('cat') cat: string, @Body('desc') desc: string) {
    return await this.categoryService.create(cat, desc);
  }

  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categoryService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body('cat') cat: string,
    @Body('desc') desc: string,
  ) {
    return await this.categoryService.update(id, cat, desc);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.categoryService.delete(id);
  }
}
