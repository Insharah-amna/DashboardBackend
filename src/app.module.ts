import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './stock/stock.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PackingModule } from './packing/packing.module';
import { EmboridoryModule } from './emboridory/emboridory.module';
import { CrinkleModule } from './crinkle/crinkle.module';
import { ReportsModule } from './reports/reports.module';
import { FabricsModule } from './fabrics/fabrics.module';

@Module({
  imports: [
    StockModule,
    MongooseModule.forRoot(
      'mongodb+srv://insharah:placeholder@cluster0.csp9w22.mongodb.net/DashboardDB?retryWrites=true&w=majority',
    ),
    PackingModule,
    EmboridoryModule,
    CrinkleModule,
    ReportsModule,
    FabricsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
