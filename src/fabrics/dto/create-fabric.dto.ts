import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFabricDto {
  @IsNotEmpty()
  @IsDateString()
  FabricDate?: Date;

  @IsNotEmpty()
  @IsNumber()
  Item: string;

  @IsNotEmpty()
  @IsNumber()
  party: string;

  @IsNotEmpty()
  @IsNumber()
  Biliti_No: number;

  @IsNotEmpty()
  @IsNumber()
  Total: number;

  @IsNotEmpty()
  @IsNumber()
  Base: string;
}
