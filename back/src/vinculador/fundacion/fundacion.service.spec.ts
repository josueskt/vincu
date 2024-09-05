import { Test, TestingModule } from '@nestjs/testing';
import { FundacionService } from './fundacion.service';

describe('FundacionService', () => {
  let service: FundacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundacionService],
    }).compile();

    service = module.get<FundacionService>(FundacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
