import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PackingDocument = Packing & Document;
@Schema({ timestamps: true })
export class Packing {
  @Prop({ required: true })
  PackingDate: Date;

  @Prop({ required: true })
  Lat_No: number;

  @Prop({ required: true })
  Volume_No: number;

  @Prop({ required: true })
  Quantity: number;

  @Prop({ required: true })
  A_Grade: number;

  @Prop({ required: true })
  B_Grade: number;

  @Prop({ required: true })
  Shirt_fabric: string;
}

export const PackingSchema = SchemaFactory.createForClass(Packing);
