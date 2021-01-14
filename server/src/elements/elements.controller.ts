import { Controller, Get } from '@nestjs/common';
import { ElementsService } from './elements.service';

@Controller('elements')
export class ElementsController {
  constructor(private elementsService: ElementsService) {
  }

  @Get()
  returnElements() {
    return this.elementsService.returnElements();
  }
}
