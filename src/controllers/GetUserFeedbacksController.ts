import { Request, Response } from 'express';
import { GetUserFeedbacksService } from '../services/GetUserFeedbacksService';

class GetUserFeedbacksController {
  async handle(request: Request, response: Response) {

    const { user_id } = request;

    const service = new GetUserFeedbacksService();

    const result = await service.execute(user_id);

    return response.json(result);
  }
}

export { GetUserFeedbacksController }