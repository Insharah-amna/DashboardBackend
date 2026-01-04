import { PartialType } from '@nestjs/mapped-types';
import { CreateCrinkleDto } from './create-crinkle.dto';

export class UpdateCrinkleDto extends PartialType(CreateCrinkleDto) {}
