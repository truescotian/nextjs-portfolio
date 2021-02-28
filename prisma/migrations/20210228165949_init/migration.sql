/*
  Warnings:

  - You are about to drop the `_PostToTopic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PostToTopic" DROP CONSTRAINT "_PostToTopic_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostToTopic" DROP CONSTRAINT "_PostToTopic_B_fkey";

-- CreateTable
CREATE TABLE "PostTopics" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER,
    "topicId" INTEGER,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "_PostToTopic";

-- AddForeignKey
ALTER TABLE "PostTopics" ADD FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostTopics" ADD FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
