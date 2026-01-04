import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmboridoryService } from './emboridory.service';
import { CreateEmboridoryDto } from './dto/create-emboridory.dto';
import { UpdateEmboridoryDto } from './dto/update-emboridory.dto';

@Controller('emboridory')
export class EmboridoryController {
  constructor(private readonly emboridoryService: EmboridoryService) {}

  @Post()
  create(@Body() createEmboridoryDto: CreateEmboridoryDto) {
    return this.emboridoryService.create(createEmboridoryDto);
  }

  @Get()
  findAll() {
    return this.emboridoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emboridoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmboridoryDto: UpdateEmboridoryDto,
  ) {
    return this.emboridoryService.update(id, updateEmboridoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emboridoryService.remove(id);
  }
}
