/*
  Warnings:

  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Todo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `TagsOnTodos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagsOnTodos" DROP CONSTRAINT "TagsOnTodos_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnTodos" DROP CONSTRAINT "TagsOnTodos_todoId_fkey";

-- AlterTable
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tag_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tag_id_seq";

-- AlterTable
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_pkey",
ADD COLUMN     "tags" TEXT[],
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Todo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Todo_id_seq";

-- DropTable
DROP TABLE "TagsOnTodos";
