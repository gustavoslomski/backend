import { Request, Response } from 'express';
import { GetFeedbackService } from '../services/GetFeedbackService';

class GetFeedbackController {
  async handle(request: Request, response: Response) {

    const { id } = request.query;

    const service = new GetFeedbackService();

    const result = await service.execute(id.toString());

    return response.json(result);
  }
}

export { GetFeedbackController }