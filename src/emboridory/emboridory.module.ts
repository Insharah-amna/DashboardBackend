import { Module } from '@nestjs/common';
import { EmboridoryService } from './emboridory.service';
import { EmboridoryController } from './emboridory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Emboridory, emboridorySchema } from './emboridory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Emboridory.name, schema: emboridorySchema },
    ]),
  ],
  controllers: [EmboridoryController],
  providers: [EmboridoryService],
})
export class EmboridoryModule {}
