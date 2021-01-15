interface ElementItemInterface {
  id: string;
  name: string;
}

interface ElementInterface {
  id: string;
  name: string;
  items: Array<ElementItemInterface>;
  // Количество совпадений с поисковой строкой
  occurrences: number;
}

export { ElementInterface };
