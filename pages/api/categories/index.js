import prisma from "../../../lib/prisma";

const handler = async (req, res) => {
  const categories = await prisma.category.findMany({
    include: {
      topics: {
        select: { id: true, title: true, },
      },
    },
  })

  res.status(200).json(categories);
}

export default handler;