import { User } from "../../../domain/entities/user";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { CreateUserDTO } from "../../../domain/shared/dtos";


export class CreateUserUseCase {
 constructor(
  private repository: IUserRepository
 ) { }

 async execute(data: CreateUserDTO) {

  const user = new User(data);

  const createdUser = await this.repository.create(user);
  return createdUser;
 }
}