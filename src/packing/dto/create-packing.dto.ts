import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePackingDto {
  @IsNotEmpty()
  @IsDateString()
  PackingDate?: Date;

  @IsNotEmpty()
  @IsNumber()
  Lat_No?: number;

  @IsNotEmpty()
  @IsNumber()
  Volume_No?: number;

  @IsNotEmpty()
  @IsNumber()
  Quantity?: number;

  @IsNotEmpty()
  @IsNumber()
  A_Grade?: number;

  @IsNotEmpty()
  @IsNumber()
  B_Grade?: number;

  @IsNotEmpty()
  @IsString()
  Shirt_Fabric?: string;
}
