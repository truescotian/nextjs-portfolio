import prisma from "../../../lib/prisma";

const handler = async (req, res) => {
  const category = await prisma.category.create({
    data: {
      title: req.body.title
    }
  })

  res.status(201).json(category)
}

export default handler;