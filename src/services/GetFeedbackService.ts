import prismaClient from "../prisma";

class GetFeedbackService {
  async execute(id: string) {
    const feedback = await prismaClient.feedback.findFirst({
      where: {
        id: id
      },
      include: {
        author: true,
        target: true
      }
    })

    return feedback;
  }
}

export { GetFeedbackService }