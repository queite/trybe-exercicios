import UserService from "../services/user.service";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default class UserController {
  constructor(private userService = new UserService ) {}

  getAll = async (req: Request, res: Response) => { // Pq só funciona com arraw function?
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users);
  }

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userService.getById(Number(id));
    res.status(StatusCodes.OK).json(user);
  }

  create = async (req: Request, res: Response) => {
    const user = await this.userService.create(req.body);
    res.status(StatusCodes.CREATED).json(user);
  }

  update =async (req: Request, res: Response) => {
    await this.userService.update(Number(req.params.id), req.body);
    res.status(StatusCodes.NO_CONTENT).end();
  }

  delete =async (req: Request, res: Response) => {
    await this.userService.delete(Number(req.params.id));
    res.status(StatusCodes.OK).json({ message: 'User deleted successfully' });
  }
}