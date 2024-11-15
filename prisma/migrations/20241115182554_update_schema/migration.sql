/*
  Warnings:

  - You are about to drop the column `musicLinks` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "musicLinks";

-- CreateTable
CREATE TABLE "Music" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Music" ADD CONSTRAINT "Music_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
