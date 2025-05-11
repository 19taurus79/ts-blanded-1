interface User {
  username: string;
  age: number;
  city?: string;
}

type Role = "user" | "admin" | "guest";

export function createUserCard(user: User, role: Role) {
  return `${user.username} (${user.age}) - ${role} from ${
    user.city ? user.city : "Unknown"
  }`;
}

export type { User };
export type { Role };
