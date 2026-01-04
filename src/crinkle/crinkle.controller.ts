import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CrinkleService } from './crinkle.service';
import { CreateCrinkleDto } from './dto/create-crinkle.dto';
import { UpdateCrinkleDto } from './dto/update-crinkle.dto';

@Controller('crinkle')
export class CrinkleController {
  constructor(private readonly crinkleService: CrinkleService) {}

  @Post()
  create(@Body() createCrinkleDto: CreateCrinkleDto) {
    return this.crinkleService.create(createCrinkleDto);
  }

  @Get()
  findAll() {
    return this.crinkleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crinkleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrinkleDto: UpdateCrinkleDto) {
    return this.crinkleService.update(id, updateCrinkleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crinkleService.remove(id);
  }
}
