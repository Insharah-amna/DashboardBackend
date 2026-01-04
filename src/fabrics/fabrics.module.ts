import { Module } from '@nestjs/common';
import { FabricsService } from './fabrics.service';
import { FabricsController } from './fabrics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fabric, FabricSchema } from './fabric.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Fabric.name, schema: FabricSchema }]),
  ],
  controllers: [FabricsController],
  providers: [FabricsService],
})
export class FabricsModule {}
