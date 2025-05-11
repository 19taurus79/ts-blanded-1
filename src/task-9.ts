interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T;
}
// const numberContainer: number[] = [1, 2, 3, 4, 5];
// const stringContainer: string[] = ["a", "b", "c", "d", "e"];
export function getLastElement<T>(container: Container<T>): T {
  return container.items[container.items.length - 1];
}

const numberContainer: Container<number> = {
  items: [1, 2, 3, 4],
  addItem(number) {
    this.items.push(number);
  },
  getItem(index) {
    return this.items[index];
  },
};

console.log(numberContainer.getItem(2));

export type { Container };
export default numberContainer;
