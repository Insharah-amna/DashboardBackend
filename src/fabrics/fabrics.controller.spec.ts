import { Test, TestingModule } from '@nestjs/testing';
import { FabricsController } from './fabrics.controller';
import { FabricsService } from './fabrics.service';

describe('FabricsController', () => {
  let controller: FabricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FabricsController],
      providers: [FabricsService],
    }).compile();

    controller = module.get<FabricsController>(FabricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
