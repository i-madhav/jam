/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `owner` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "owner" TEXT NOT NULL,
ADD COLUMN     "shareWith" TEXT[];

-- DropTable
DROP TABLE "User";
