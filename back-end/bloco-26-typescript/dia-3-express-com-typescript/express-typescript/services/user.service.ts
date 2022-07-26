import User from "../interfaces/user.interface";
import connection from "../models/connection";
import UserModel from "../models/user.model"
import { NotFoundError } from 'restify-errors';
import {schemas, validateSchema} from './validation';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  async getById(id:number): Promise<User> {
    const user = this.model.getById(id);
    return user;
  }

  async create(user: User): Promise<User> {
    validateSchema(schemas.user, user);

    const createdUser = this.model.create(user);
    return createdUser;
  }

  async checkIfExist(id: number) {
    const userId = await this.model.getById(id);

    if (!userId) {
      throw new NotFoundError('User not found')
    }
  }

  async update(id: number, user: User): Promise<void> {
    await this.checkIfExist(id);
    validateSchema(schemas.user, user);

    await this.model.update({id, ...user});
  }

  async delete(id: number) {
    await this.checkIfExist(id);

    await this.model.delete(id);
  }
}
