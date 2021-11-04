import prismaClient from "../prisma";

class GetUserFeedbackForOtherService {
  async execute(user_id) {
    const feedbacks = await prismaClient.feedback.findMany({
      where: {
        creator_id: user_id,
        NOT: {
          author_id: user_id
        }
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

export { GetUserFeedbackForOtherService }