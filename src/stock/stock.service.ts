import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Stock, StockDocument } from './stock.schema';
import { Model } from 'mongoose';

@Injectable()
export class StockService {
  constructor(
    @InjectModel(Stock.name) private stockModel: Model<StockDocument>,
  ) {}
  async create(createStockDto: CreateStockDto) {
    const newStock = new this.stockModel(createStockDto);
    return newStock.save();
  }
  async findAll(): Promise<Stock[]> {
    return this.stockModel.find().sort({ _id: 1 }).exec();
  }

  async findOne(id: string) {
    const stock = await this.stockModel.findById(id).exec();
    if (!stock) return { message: `stock with id ${id} not found` };
    return stock;
  }

  async update(id: string, updateStockDto: Partial<Stock>) {
    const stock = await this.stockModel
      .findByIdAndUpdate(id, updateStockDto, { new: true })
      .exec();
    if (!stock) return { message: `stock with id ${id} not found` };
    return stock;
  }

  async remove(id: string) {
    await this.stockModel.findOneAndDelete({ _id: id });
    return { message: `This action removes a #${id} stock` };
  }
}
