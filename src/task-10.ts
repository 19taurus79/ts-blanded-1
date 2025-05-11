const users = ["alice", "bob", "charlie"];
interface User {
  id: number;
  name: string;
}
export function toUserObjects(usersArr: string[]) {
  let id = 1;

  let returnArr: User[] = [];
  usersArr.map((user) => {
    returnArr.push({ id: id, name: user });
    id += 1;
  });
  return returnArr;
}

export default users;
