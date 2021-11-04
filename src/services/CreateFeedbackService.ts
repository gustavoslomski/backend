import prismaClient from "../prisma"

class CreateFeedbackService {
  async execute(creator_id: string, author: string, target: string, improvement: string, maintain: string, suggestion: string, message: string) {
    const persisted_author = await prismaClient.user.findFirst({
      where: {
        github_id: Number(author),
      }
    })

    const persisted_target = await prismaClient.user.findFirst({
      where: {
        github_id: Number(target),
      }
    })

    const feedback = await prismaClient.feedback.create({
      data: {
        creator_id: creator_id,
        author_id: persisted_author?.id?.toString(),
        target_id: persisted_target?.id?.toString(),
        improvement: improvement,
        maintain: maintain,
        suggestion: suggestion,
        message: message
      }
    })

    return feedback;
  }
}

export { CreateFeedbackService }