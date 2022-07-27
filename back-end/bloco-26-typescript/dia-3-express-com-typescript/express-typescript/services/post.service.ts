
import Post from "../interfaces/post.interface";
import connection from "../models/connection";
import PostModel from "../models/post.model";
import { NotFoundError } from 'restify-errors';
import {schemas, validateSchema} from './validation';

export default class PostService {
  public model: PostModel;

  constructor() {
    this.model = new PostModel(connection);
  }

  async getAll(): Promise<Post[]> {
    const posts = await this.model.getAll();
    return posts;
  }

  async getById(id:number): Promise<Post> {
    const Post = this.model.getById(id);
    return Post;
  }

  async create(post: Post): Promise<Post> {
    validateSchema(schemas.post, post)

    const createdPost = this.model.create(post);
    return createdPost;
  }

  async checkIfExist(id: number): Promise<void> {
    const PostId = await this.model.getById(id);

    if (!PostId) {
      throw new NotFoundError('Post not found')
    }
  }

  async update(id: number, post: Post): Promise<void> {
    await this.checkIfExist(id);
    validateSchema(schemas.post, post);

    await this.model.update({id, ...post});
  }

  async delete(id: number): Promise<void> {
    await this.checkIfExist(id);

    await this.model.delete(id);
  }

  async search(query: string | undefined) {
    const result = await this.model.search(query);
    return result;
  }
}
