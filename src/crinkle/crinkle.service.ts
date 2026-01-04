import { Injectable } from '@nestjs/common';
import { CreateCrinkleDto } from './dto/create-crinkle.dto';
import { UpdateCrinkleDto } from './dto/update-crinkle.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Crinkle, CrinkleDocument } from './crinkle.schema';

@Injectable()
export class CrinkleService {
  constructor(
    @InjectModel(Crinkle.name) private crinkleModel: Model<CrinkleDocument>,
  ) {}
  async create(createCrinkleDto: CreateCrinkleDto) {
    const newCrinkle = new this.crinkleModel(createCrinkleDto);
    return newCrinkle.save();
  }

  async findAll(): Promise<Crinkle[]> {
    return this.crinkleModel.find().sort({ _id: 1 }).exec();
  }

  async findOne(id: string) {
    const crinkle = await this.crinkleModel.findById(id).exec();
    if (!crinkle) return { message: `crinkle with id ${id} not found` };

    return crinkle;
  }

  async update(id: string, updateCrinkleDto: UpdateCrinkleDto) {
    const crinkle = await this.crinkleModel
      .findByIdAndUpdate(id, updateCrinkleDto, { new: true })
      .exec();
    if (!crinkle) return `crinkle with this id ${id} not found`;
    return crinkle;
  }

  async remove(id: string) {
    await this.crinkleModel.findOneAndDelete({ _id: id });
    return { message: `This action removes a #${id} crinkle` };
  }
}
