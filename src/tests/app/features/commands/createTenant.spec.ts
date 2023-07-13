import { faker } from '@faker-js/faker';
import { CreateUserUseCase } from '../../../../app/features/commands/CreateUser.useCase';
import { CreateUserDTO } from '../../../../domain/shared/dtos';
import { UserRepository } from '../../../../infra/persistence/repositories/userRepository';

describe("User creation", () => {
 let useCase: CreateUserUseCase;
 let repository: UserRepository;

 beforeAll(() => {
  repository = new UserRepository();
  useCase = new CreateUserUseCase(repository);
 })

 it("Should create a new user successfully", async () => {
  const data: CreateUserDTO = {
   name: faker.internet.userName(),
   email: faker.internet.email(),
   password: faker.internet.password()
  }
  const user = await useCase.execute(data);

  expect(user).toHaveProperty('id')
 })
})