import PostService from "../services/post.service";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default class PostController {
  constructor(private postService = new PostService ) {} // segunda forma de fazer o mesmo do model e service
  // ao usar as palavras public, private, etc... ele já faz as duas coisas (define e propriedade e inicializa)

  getAll = async (req: Request, res: Response) => { // Pq só funciona com arraw function? Assim é uma propriedade
    const posts = await this.postService.getAll();
    res.status(StatusCodes.OK).json(posts);
  }
  // como método o express tenta executar na definição, não qdo vc chama na requisição e não aceita o this
  // para funcionar é preciso chamar callback e parâmetros na rota:router.get('/', (req, res) => postController.getAll(req, res))
  // ao criar propriedade o express consegue fazr o bind
  // especificidade de algumas libs com estruturas mais robustas como express

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await this.postService.getById(Number(id));
    res.status(StatusCodes.OK).json(post);
  }

  create = async (req: Request, res: Response) => {
    const post = await this.postService.create(req.body);
    res.status(StatusCodes.CREATED).json(post);
  }

  update =async (req: Request, res: Response) => {
    await this.postService.update(Number(req.params.id), req.body);
    res.status(StatusCodes.NO_CONTENT).end();
  }

  delete =async (req: Request, res: Response) => {
    await this.postService.delete(Number(req.params.id));
    res.status(StatusCodes.OK).json({ message: 'Post deleted successfully' });
  }

  search =async (req: Request, res: Response) => {
    const query = req.query.q as string;
    const result = await this.postService.search(query);
    res.status(StatusCodes.OK).json(result);
  }
}