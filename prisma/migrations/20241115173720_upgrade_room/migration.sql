/*
  Warnings:

  - You are about to drop the `Music` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Music" DROP CONSTRAINT "Music_nextMusicId_fkey";

-- DropForeignKey
ALTER TABLE "Music" DROP CONSTRAINT "Music_prevMusicId_fkey";

-- DropForeignKey
ALTER TABLE "Music" DROP CONSTRAINT "Music_roomId_fkey";

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "musicLinks" TEXT[];

-- DropTable
DROP TABLE "Music";
