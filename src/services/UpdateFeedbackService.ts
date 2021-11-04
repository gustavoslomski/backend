import prismaClient from "../prisma"

class UpdateFeedbackService {
  async execute(id: string, improvement: string, maintain: string, suggestion: string, message: string, date: string) {
    const feedback = await prismaClient.feedback.update({
      where: {
        id: id
      },
      data: {
        improvement: improvement,
        maintain: maintain,
        suggestion: suggestion,
        message: message,
        date: date
      }
    })

    return feedback;
  }
}

export { UpdateFeedbackService }