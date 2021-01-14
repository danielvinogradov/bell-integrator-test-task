import { Test, TestingModule } from '@nestjs/testing';
import { ElementsController } from './elements.controller';

describe('ElementsController', () => {
  let controller: ElementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElementsController],
    }).compile();

    controller = module.get<ElementsController>(ElementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
