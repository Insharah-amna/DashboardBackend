import { Injectable } from '@nestjs/common';
import { CreateEmboridoryDto } from './dto/create-emboridory.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Emboridory, EmboridoryDocumnent } from './emboridory.schema';
import { Model } from 'mongoose';

@Injectable()
export class EmboridoryService {
  constructor(
    @InjectModel(Emboridory.name)
    private emboridoryModel: Model<EmboridoryDocumnent>,
  ) {}
  async create(createEmboridoryDto: CreateEmboridoryDto) {
    const newEmboridory = new this.emboridoryModel(createEmboridoryDto);
    return newEmboridory.save();
  }

  async findAll(): Promise<Emboridory[]> {
    return this.emboridoryModel.find().sort({ _id: 1 }).exec();
  }

  async findOne(id: string) {
    const emboridory = await this.emboridoryModel.findById(id).exec();
    if (!emboridory)
      return { message: `emoridory with the id ${id} not found` };
    return emboridory;
  }

  async update(id: string, updateEmboridoryDto: Partial<Emboridory>) {
    const emboridory = await this.emboridoryModel
      .findByIdAndUpdate(id, updateEmboridoryDto, { new: true })
      .exec();
    if (!emboridory)
      return { message: `emoridory with the id ${id} not found` };
    return emboridory;
  }

  async remove(id: string) {
    await this.emboridoryModel.findByIdAndDelete({
      _id: id,
    });
    return `This action removes a #${id} emboridory`;
  }
}
