import prisma from "../../../lib/prisma";

const handler = async (req, res) => {
  let categories = await prisma.category.findMany()
  const posts = await prisma.post.findMany()

  for (let i = 0; i < categories.length; i++) {
    categories[i].posts = [];
    // attach posts to their category
    for (let j = 0; j < posts.length; j++) {
      if (posts[j].categoryId === categories[i].id) {
        categories[i].posts = [...categories[i].posts, posts[j]];
      }
    }
  }

  res.status(200).json({categories, posts});
}

export default handler;