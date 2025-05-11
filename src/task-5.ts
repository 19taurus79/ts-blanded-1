interface User {
  name: string;
  age: number;
}

function createUser({ name, age }: { name: string; age: number }): User {
  return { name, age };
}

createUser({ name: "Alice", age: 30 });
