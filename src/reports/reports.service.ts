import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { Model } from 'mongoose';
import { Report, ReportDocument } from './reports.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name) private reportModel: Model<ReportDocument>,
  ) {}
  async create(createReportDto: CreateReportDto) {
    const newReport = new this.reportModel(createReportDto);
    return newReport.save();
  }

  async findAll() {
    return this.reportModel.find().sort({ _id: 1 }).exec();
  }

  async findOne(id: string) {
    const report = await this.reportModel.findById(id).exec();
    if (!report) return { message: `id ${id} not found` };
    return report;
  }

  async update(id: string, updateReportDto: Partial<Report>) {
    const report = await this.reportModel
      .findByIdAndUpdate(id, updateReportDto, { new: true })
      .exec();
    if (!report) return { message: `id ${id} not found` };
    return report;
  }

  async remove(id: string) {
    await this.reportModel.findByIdAndDelete({ _id: id });
    return `This action removes a #${id} report`;
  }
}
