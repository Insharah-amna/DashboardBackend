import { Test, TestingModule } from '@nestjs/testing';
import { EmboridoryController } from './emboridory.controller';
import { EmboridoryService } from './emboridory.service';

describe('EmboridoryController', () => {
  let controller: EmboridoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmboridoryController],
      providers: [EmboridoryService],
    }).compile();

    controller = module.get<EmboridoryController>(EmboridoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
