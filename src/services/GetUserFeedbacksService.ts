import prismaClient from "../prisma";

class GetUserFeedbacksService {
  async execute(user_id) {
    const feedbacks = await prismaClient.feedback.findMany({
      where: {
        author_id: user_id
      },
      orderBy: {
        created_at: "desc"
      },
      include: {
        author: true,
        target: true
      }
    })

    return feedbacks;
  }
}

export { GetUserFeedbacksService }