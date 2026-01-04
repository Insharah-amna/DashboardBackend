import { Test, TestingModule } from '@nestjs/testing';
import { CrinkleController } from './crinkle.controller';
import { CrinkleService } from './crinkle.service';

describe('CrinkleController', () => {
  let controller: CrinkleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrinkleController],
      providers: [CrinkleService],
    }).compile();

    controller = module.get<CrinkleController>(CrinkleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
