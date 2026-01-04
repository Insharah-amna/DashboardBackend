import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCrinkleDto {
  @IsNotEmpty()
  @IsDateString()
  CrinkleDate?: Date;

  @IsNotEmpty()
  @IsNumber()
  Than?: string;

  @IsNotEmpty()
  @IsNumber()
  Ghazana?: string;

  @IsNotEmpty()
  @IsNumber()
  Quantity?: number;

  @IsNotEmpty()
  @IsNumber()
  Total?: number;

  @IsNotEmpty()
  @IsNumber()
  Payment?: number;
}
