import prisma from "../../../lib/prisma";

const handler = async (req, res) => {
  const post = await prisma.post.create({
    data: {
      content: req.body.content,
      published: req.body.published,
      subTitle: req.body.subTitle,
      title: req.body.title,
      authorId: req.body.authorId,
      topics: {
        create: req.body.topicIds,
      }
    }
  })

  res.status(201).json(post)
}

export default handler;