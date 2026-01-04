import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReportDto {
  @IsNotEmpty()
  @IsString()
  Embroidery_remaining?: string;

  @IsNotEmpty()
  @IsString()
  Fresh: string;

  @IsNotEmpty()
  @IsString()
  Bgrade: string;

  @IsNotEmpty()
  @IsString()
  Base_Wise: string;
}
