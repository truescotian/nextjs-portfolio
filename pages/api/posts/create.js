import prisma from "../../../lib/prisma";

const handler = async (req, res) => {
  const post = await prisma.post.create({
    data: {
      content: req.body.content,
      published: req.body.published,
      subTitle: req.body.subTitle,
      title: req.body.title,
      authorId: req.body.authorId,
      tags: {
        create: req.body.tagIds,
      },
      categoryId: req.body.categoryId
    }
  })

  res.status(201).json(post)
}

export default handler;