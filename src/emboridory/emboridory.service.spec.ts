import { Test, TestingModule } from '@nestjs/testing';
import { EmboridoryService } from './emboridory.service';

describe('EmboridoryService', () => {
  let service: EmboridoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmboridoryService],
    }).compile();

    service = module.get<EmboridoryService>(EmboridoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
