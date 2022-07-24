import User from "../interfaces/user.interface";
import connection from "../models/connection";
import UserModel from "../models/user.model"

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
}
