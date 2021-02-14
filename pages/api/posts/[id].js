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
    default:
      res.status(405).end() // Method not allowed
      break;
  }

  res.status(200).end();
}

export default handler;