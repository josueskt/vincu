import { Test, TestingModule } from '@nestjs/testing';
import { FundacionController } from './fundacion.controller';

describe('FundacionController', () => {
  let controller: FundacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundacionController],
    }).compile();

    controller = module.get<FundacionController>(FundacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
