import { Request, Response } from 'express';
import { CreateFeedbackService } from '../services/CreateFeedbackService';

class CreateFeedbackController {
  async handle(request: Request, response: Response) {

    const { user_id } = request;
    const { author, target, improvement, maintain, suggestion, message, date } = request.body;

    const service = new CreateFeedbackService();

    const result = await service.execute(user_id, author, target, improvement, suggestion, maintain, message, date)

    return response.json(result);
  }
}

export { CreateFeedbackController }