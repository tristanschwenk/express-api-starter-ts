import { User } from "../types/user.type";
import { users } from "../data/user";
export const userService = {
  find: () => {
    return users;
  },

  findByEmail: (email: string) => {
    return users.find((user) => user.email === email);
  },
  get: (id: number) => {
    return users.find((user) => user.id === id);
  },
  create: (user: User) => {
    users.push({ ...user, id: users.length + 1 });
    return user;
  },
  update: (id: number, user: User) => {
    const userIndex = users.findIndex((user) => user.id === id);
    users[userIndex] = user;
    return user;
  },
  delete: (id: number) => {
    const userIndex = users.findIndex((user) => user.id === id);
    users.splice(userIndex, 1);
  },
};
