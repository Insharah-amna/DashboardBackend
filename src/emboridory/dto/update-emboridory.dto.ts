import { PartialType } from '@nestjs/mapped-types';
import { CreateEmboridoryDto } from './create-emboridory.dto';

export class UpdateEmboridoryDto extends PartialType(CreateEmboridoryDto) {}
