import prisma from "../../../lib/prisma";

const handler = async (req, res) => {
  const categories = await prisma.category.findMany({
    include: {
      posts: {
        include: {
          tags: {
            include: { tag: true }
          }
        },
      },
    },
  })

  res.status(200).json(categories);
}

export default handler;