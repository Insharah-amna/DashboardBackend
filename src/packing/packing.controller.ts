import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PackingService } from './packing.service';
import { CreatePackingDto } from './dto/create-packing.dto';
import { UpdatePackingDto } from './dto/update-packing.dto';

@Controller('packing')
export class PackingController {
  constructor(private readonly packingService: PackingService) {}

  @Post()
  create(@Body() createPackingDto: CreatePackingDto) {
    return this.packingService.create(createPackingDto);
  }

  @Get()
  findAll() {
    return this.packingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePackingDto: UpdatePackingDto) {
    return this.packingService.update(id, updatePackingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packingService.remove(id);
  }
}
