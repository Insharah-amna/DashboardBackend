import { Module } from '@nestjs/common';
import { CrinkleService } from './crinkle.service';
import { CrinkleController } from './crinkle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Crinkle, CrinkleSchema } from './crinkle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Crinkle.name, schema: CrinkleSchema }]),
  ],
  controllers: [CrinkleController],
  providers: [CrinkleService],
})
export class CrinkleModule {}
