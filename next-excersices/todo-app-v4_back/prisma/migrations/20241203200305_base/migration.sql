-- CreateEnum
CREATE TYPE "Status" AS ENUM ('notStarted', 'inProgress', 'paused', 'done');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('low', 'medium', 'high');

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagsOnTodos" (
    "todoId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "TagsOnTodos_pkey" PRIMARY KEY ("todoId","tagId")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnTodos" ADD CONSTRAINT "TagsOnTodos_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "Todo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnTodos" ADD CONSTRAINT "TagsOnTodos_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
