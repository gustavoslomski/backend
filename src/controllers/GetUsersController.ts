import { Request, Response } from 'express';
import { ListUsersService } from '../services/ListUsersService';

class GetUsersController {
  async handle(request: Request, response: Response) {

    const service = new ListUsersService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { GetUsersController }