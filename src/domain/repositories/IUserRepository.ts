import { User } from "../entities/user";


export interface IUserRepository {
 create(user: User): Promise<User>;
 update(user: User): Promise<void>;
 delete(email: string): Promise<void>;
}