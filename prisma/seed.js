const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "category1",
      topics: {
        create: [
          {
            title: "topic1"
          }
        ]
      }
    },
  })
  await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: `bob@prisma.io`,
      name: 'Bob',
      posts: {
        create: [
          {
            title: "title",
            subTitle: "sub title",
            content: "",
            published: true,
          },
          {
            title: "title2",
            subTitle: "sub title2",
            content: "",
            published: true,
          },
        ],
      },
    },
  })
}
main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })