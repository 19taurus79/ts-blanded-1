enum Role {
  Admin,
  User,
  Guest,
}

export function getPermissions(role: Role): string[] {
  if (role === Role.Admin) {
    return ["create", "read", "update", "delete"];
  } else if (role === Role.Guest) {
    return ["read", "update"];
  } else if (role === Role.User) {
    return ["read"];
  } else return [];
}

console.log(getPermissions(Role.User));

export default Role;
