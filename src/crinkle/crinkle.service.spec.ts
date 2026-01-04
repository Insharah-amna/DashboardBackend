import { Test, TestingModule } from '@nestjs/testing';
import { CrinkleService } from './crinkle.service';

describe('CrinkleService', () => {
  let service: CrinkleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrinkleService],
    }).compile();

    service = module.get<CrinkleService>(CrinkleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
