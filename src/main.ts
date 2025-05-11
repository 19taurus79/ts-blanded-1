import users, { toUserObjects } from "./task-10";
import { createUserCard } from "./task-11";
import { reducer } from "./task-13";
import { fetchProducts } from "./task-15";
import { fetchProfile } from "./task-16";
import fetchUsers from "./task-17";
import getUsers from "./task-18";
import fetchUser from "./task-19";
import getUserName from "./task-19";
import fetchPosts, { logThreePosts } from "./task-20";
import user from "./task-6";
import Role from "./task-8";
import { getPermissions } from "./task-8";
import numberContainer from "./task-9";
const val = user;
console.log(val);

console.log(getPermissions(Role.User));

console.log(numberContainer.getItem(1));
numberContainer.addItem(100);
console.log(numberContainer);

console.log(toUserObjects(users));
console.log(
  createUserCard({ username: "Serhii", age: 25, city: "Kharkiv" }, "admin")
);

console.log(reducer(5, { type: "increment" }));
console.log(fetchProducts());
console.log(fetchProfile());
console.log(fetchUsers());
console.log("task-18", getUsers());
console.log("task-19", fetchUser(1));
console.log("task-20", fetchPosts());
console.log(logThreePosts());
