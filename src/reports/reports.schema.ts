import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportDocument = Report & Document;
@Schema({ timestamps: true })
export class Report {
  @Prop({ required: true })
  Embroidery_remaining: string;

  @Prop({ required: true })
  Fresh: string;

  @Prop({ required: true })
  Bgrade: string;

  @Prop({ required: true })
  Base_Wise: string;
}
export const ReportSchema = SchemaFactory.createForClass(Report);
