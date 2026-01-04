import { Injectable } from '@nestjs/common';
import { CreatePackingDto } from './dto/create-packing.dto';
import { Packing, PackingDocument } from './packing.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PackingService {
  constructor(
    @InjectModel(Packing.name) private packingModel: Model<PackingDocument>,
  ) {}
  async create(createPackingDto: CreatePackingDto) {
    const newPacking = new this.packingModel(createPackingDto);
    return newPacking.save();
  }

  async findAll(): Promise<Packing[]> {
    return this.packingModel.find().sort({ _id: 1 }).exec();
  }

  async findOne(id: string) {
    const packing = await this.packingModel.findById(id).exec();
    if (!packing) return { message: `packing with id ${id} not found` };

    return packing;
  }

  async update(id: string, updatePackingDto: Partial<Packing>) {
    const packing = await this.packingModel
      .findByIdAndUpdate(id, updatePackingDto, { new: true })
      .exec();
    if (!packing) return `packing with this id ${id} not found`;
    return packing;
  }

  async remove(id: string) {
    await this.packingModel.findOneAndDelete({ _id: id });
    return { message: `This action removes a #${id} packing` };
  }
}
