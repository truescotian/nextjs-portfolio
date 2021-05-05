import prisma from "../../../lib/prisma";

const handler = async (req, res) => {
  // Run cors
  switch(req.method) {
    case 'DELETE':
      await prisma.post.delete({ 
        where: {
          id: Number(req.query.id)
        }
       });
      break;
    case 'PUT':
      let { id, tags, ...rest} = req.body

      // update the post
      await prisma.post.update({
        where: {
          id: req.body.id,
        },
        data: {
          ...rest,
        }
      })

      const postTags = tags.map(tag => { 
        return {
          postId: req.body.id,
          tagId: tag
        }
      })

      // remove old post tags
      await prisma.postTags.deleteMany({
        where: { postId: req.body.id }
      })

      // create new post tags
      await prisma.postTags.createMany({
        data: postTags
      })
      break;
    default:
      res.status(405).end() // Method not allowed
      break;
  }

  res.status(200).end();
}

export default handler;

