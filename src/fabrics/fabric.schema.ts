import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FabricDocument = Fabric & Document;
@Schema({ timestamps: true })
export class Fabric {
  @Prop({ required: true })
  FabricDate: Date;

  @Prop({ required: true })
  Item: string;

  @Prop({ required: true })
  party: string;

  @Prop({ required: true })
  Biliti_No: number;

  @Prop({ required: true })
  Total: number;

  @Prop({ required: true })
  Base: string;
}

export const FabricSchema = SchemaFactory.createForClass(Fabric);
