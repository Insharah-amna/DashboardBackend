import { PartialType } from '@nestjs/mapped-types';
import { CreatePackingDto } from './create-packing.dto';

export class UpdatePackingDto extends PartialType(CreatePackingDto) {}
