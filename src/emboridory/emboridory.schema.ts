import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmboridoryDocumnent = Emboridory & Document;
@Schema({ timestamps: true })
export class Emboridory {
  @Prop({ required: true })
  EmbroideryName: string;

  @Prop({ required: true })
  last_No: number;

  @Prop({ required: true })
  Base: string;

  @Prop({ required: true })
  SendingDate: Date;

  @Prop({ required: true })
  ReceivingDate: Date;

  @Prop({ required: true })
  Quantity: number;

  @Prop({ required: true })
  Fresh: string;
}

export const emboridorySchema = SchemaFactory.createForClass(Emboridory);
