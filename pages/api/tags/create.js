import prisma from "../../../lib/prisma";

const handler = async (req, res) => {
  const tag = await prisma.tag.create({
    data: {
      title: req.body.title
    }
  })

  res.status(201).json(tag)
}

export default handler;