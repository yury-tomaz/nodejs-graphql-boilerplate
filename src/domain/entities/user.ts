import { v4 as uuid_v4 } from 'uuid';

export class User {
 public readonly id: string;
 public name: string;
 public email: string;
 private createdAt = new Date();

 constructor(props: Omit<User, 'id'>, id?: string) {
  Object.assign(this, props);
  this.id = id ?? uuid_v4();
 }

}