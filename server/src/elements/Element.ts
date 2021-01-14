import { nanoid } from 'nanoid';
import { loremIpsum } from 'lorem-ipsum';

class Item {
  id: string;
  name: string;

  constructor() {
    this.id = nanoid();
    this.name = loremIpsum();
  }
}

class Element extends Item {
  items: Array<Item>;

  constructor() {
    super();
    const itemsAmount = Math.floor(Math.random() * 4 + 1);
    this.items = Array.from({ length: itemsAmount }, () => new Item);
  }
}

export { Element };
