import { Request, Response } from 'express';
import { GetUserFeedbackForOtherService } from '../services/GetUserFeedbackForOtherService';

class GetUserFeedbackForOtherController {
  async handle(request: Request, response: Response) {

    const { user_id } = request;

    const service = new GetUserFeedbackForOtherService();

    const result = await service.execute(user_id);

    return response.json(result);
  }
}

export { GetUserFeedbackForOtherController }