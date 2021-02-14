import prisma from "../../../lib/prisma";

const handler = async (req, res) => {
  const post = await prisma.post.create({ data: req.body })

  res.status(201).json(post)
}

export default handler;