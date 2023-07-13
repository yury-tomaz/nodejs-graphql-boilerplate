import { User } from "../../../domain/entities/user";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";

export class UserRepository implements IUserRepository {
 private user: User[] = [];

 async create(user: User): Promise<User> {
  this.user.push(user);

  return user;
 }

 async findByEmail(email: string) {
  const findUser = this.user.find(user => user.email === email);

  return findUser;
 }

 async update(updatedUserData: User): Promise<void> {
  const userIndex = this.user.findIndex(user => user.email === updatedUserData.email);

  if (userIndex === -1) throw new Error('User not found');
  this.user[userIndex] = updatedUserData;
 }

 async delete(email: string): Promise<void> {
  this.user = this.user.filter(user => user.email !== email);
 }
}