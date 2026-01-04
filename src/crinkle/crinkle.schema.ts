import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CrinkleDocument = Crinkle & Document;
@Schema({ timestamps: true })
export class Crinkle {
  @Prop({ required: true })
  CrinkleDate: Date;

  @Prop({ required: true })
  Than: string;

  @Prop({ required: true })
  Ghazana: string;

  @Prop({ required: true })
  Quantity: number;

  @Prop({ required: true })
  Total: number;

  @Prop({ required: true })
  payment: number;
}

export const CrinkleSchema = SchemaFactory.createForClass(Crinkle);
