import { Pool, ResultSetHeader } from "mysql2/promise";
import Post from '../interfaces/post.interface';

export default class PostModel {
  public connection: Pool; //Because public is already the default visibility modifier, you don’t ever need to write it on a class member, but might choose to do so for style/readability reasons.

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Post[]> {
    const [rows] = await this.connection.execute('SELECT * FROM Posts');
    return rows as Post[]; // as = Type Assertions https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
  }

  async getById(id: number): Promise<Post> {
    const [rows] = await this.connection.execute('SELECT * FROM Posts WHERE id=?', [id]) ;
    const [post] = rows as Post[];
    return post;
  }

  async create(post: Post): Promise<Post> {
    const { title, author, category } = post;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Posts (title, author, category, publicationDate) VALUES (?, ?, ?, NOW())',
      [title, author, category],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...post };
  }

  async update(post: Post) {
    const {id, title, author, category } = post;
    await this.connection.execute(
      'UPDATE Posts SET title=?, author=?, category=? WHERE id=?',
         [title, author, category, id]
    );
  }

  async delete(id: number) {
    await this.connection.execute(
      'DELETE FROM Posts WHERE id=?',
        [id],
    );
  }

  async search(query: string | undefined) {
    const [result] = await this.connection.execute(
      `SELECT * FROM Posts
      WHERE author LIKE ?
      OR category LIKE ?
      OR publicationDate LIKE ?`,
      [`%${query}%`, `%${query}%`, `%${query}%`]
      );
    return result
  }
}

// const [result] = await this.connection.execute(
//   `SELECT * FROM Posts
//   WHERE author LIKE ?
//   AND category LIKE ?
//   AND publicationDate LIKE ?`,
//   [`%${query}%`, `%${query}%`, `%${query}%`]
//   );