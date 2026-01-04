import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StockDocument = Stock & Document;
@Schema({ timestamps: true })
export class Stock {
  @Prop({ required: true })
  ShopStockDate: Date;

  @Prop({ required: true })
  Shop_No: number;

  @Prop({ required: true })
  Quantity: number;

  @Prop({ required: true })
  PandiName: number;

  @Prop({ required: true })
  Volume_No: number;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
