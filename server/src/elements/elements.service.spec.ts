import { Test, TestingModule } from '@nestjs/testing';
import { ElementsService } from './elements.service';

describe('ElementsService', () => {
  let service: ElementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElementsService],
    }).compile();

    service = module.get<ElementsService>(ElementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
