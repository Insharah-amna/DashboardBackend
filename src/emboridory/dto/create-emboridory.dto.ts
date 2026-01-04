import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmboridoryDto {
  @IsNotEmpty()
  @IsString()
  EmbroideryName?: string;

  @IsNotEmpty()
  @IsNumber()
  Last_No?: number;

  @IsNotEmpty()
  @IsString()
  Base?: string;

  @IsNotEmpty()
  @IsDateString()
  SendingDate?: Date;

  @IsNotEmpty()
  @IsDateString()
  ReceivingDate?: Date;

  @IsNotEmpty()
  @IsNumber()
  Quantity?: number;

  @IsNotEmpty()
  @IsNumber()
  Fresh?: string;
}
