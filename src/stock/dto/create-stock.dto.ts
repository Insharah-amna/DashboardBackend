import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStockDto {
  @IsNotEmpty()
  @IsDateString()
  ShopStockDate?: Date;

  @IsNotEmpty()
  @IsNumber()
  Shop_No?: number;

  @IsNotEmpty()
  @IsNumber()
  Quantity?: number;

  @IsNotEmpty()
  @IsNumber()
  PandiName?: number;

  @IsNotEmpty()
  @IsNumber()
  Volume_No?: number;
}
