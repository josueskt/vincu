import { Test, TestingModule } from '@nestjs/testing';
import { MicroProyectoController } from './micro_proyecto.controller';

describe('MicroProyectoController', () => {
  let controller: MicroProyectoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroProyectoController],
    }).compile();

    controller = module.get<MicroProyectoController>(MicroProyectoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
