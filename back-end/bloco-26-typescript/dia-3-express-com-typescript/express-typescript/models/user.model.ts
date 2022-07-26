import { Pool, ResultSetHeader } from "mysql2/promise";
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool; //Because public is already the default visibility modifier, you don’t ever need to write it on a class member, but might choose to do so for style/readability reasons.

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<User[]> {
    const [rows] = await this.connection.execute('SELECT * FROM Users');
    return rows as User[]; // as = Type Assertions https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
  }

  async getById(id: number): Promise<User> {
    const [rows] = await this.connection.execute('SELECT * FROM Users WHERE id=?', [id]) ;
    const [user] = rows as User[];
    return user;
  }

  async create(user: User): Promise<User> {
    const { name, email, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  async update(user: User) {
    const {id, name, email, password } = user;
    await this.connection.execute(
      'UPDATE Users SET name=?, email=?, password=? WHERE id=?',
         [name, email, password, id]
    );
  }

  async delete(id: number) {
    await this.connection.execute(
      'DELETE FROM Users WHERE id=?',
        [id],
    );
  }
}