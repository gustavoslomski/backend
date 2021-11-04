import prismaClient from "../prisma"

class UpdateFeedbackService {
  async execute(id: string, improvement: string, maintain: string, suggestion: string, message: string) {
    const feedback = await prismaClient.feedback.update({
      where: {
        id: id
      },
      data: {
        improvement: improvement,
        maintain: maintain,
        suggestion: suggestion,
        message: message
      }
    })

    return feedback;
  }
}

export { UpdateFeedbackService }