import { Test, TestingModule } from '@nestjs/testing';
import { MicroProyectoService } from './micro_proyecto.service';

describe('MicroProyectoService', () => {
  let service: MicroProyectoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroProyectoService],
    }).compile();

    service = module.get<MicroProyectoService>(MicroProyectoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
