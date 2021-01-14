import { Injectable } from '@nestjs/common';
import { Element } from './Element';

@Injectable()
export class ElementsService {
  returnElements(elementsAmount = 100) {
    return Array.from({ length: elementsAmount }, () => new Element());
  }
}
