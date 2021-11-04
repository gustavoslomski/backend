import { Request, Response } from 'express';
import { CreateFeedbackService } from '../services/CreateFeedbackService';
import { UpdateFeedbackService } from '../services/UpdateFeedbackService';

class UpdateFeedbackController {
  async handle(request: Request, response: Response) {

    const { id, improvement, maintain, suggestion, message, date } = request.body;

    const service = new UpdateFeedbackService();

    const result = await service.execute(id, improvement, maintain, suggestion, message, date)

    return response.json(result);
  }
}

export { UpdateFeedbackController }