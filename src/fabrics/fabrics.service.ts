import { Injectable } from '@nestjs/common';
import { CreateFabricDto } from './dto/create-fabric.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Fabric, FabricDocument } from './fabric.schema';
import { Model } from 'mongoose';

@Injectable()
export class FabricsService {
  constructor(
    @InjectModel(Fabric.name) private fabricModel: Model<FabricDocument>,
  ) {}
  async create(createFabricDto: CreateFabricDto) {
    const newFabric = new this.fabricModel(createFabricDto);
    return newFabric.save();
  }

  async findAll(): Promise<Fabric[]> {
    return this.fabricModel.find().sort({ _id: 1 }).exec();
  }

  async findOne(id: string) {
    const fabric = await this.fabricModel.findById(id).exec();
    if (!fabric) return { message: `Fabricwith id ${id} not found` };

    return fabric;
  }

  async update(id: string, updateFabricDto: Partial<Fabric>) {
    const fabric = await this.fabricModel
      .findByIdAndUpdate(id, updateFabricDto, { new: true })
      .exec();
    if (!fabric) return `Fabric with this id ${id} not found`;
    return fabric;
  }

  async remove(id: string) {
    await this.fabricModel.findOneAndDelete({ _id: id });
    return { message: `This action removes a #${id} Fabric` };
  }
}
