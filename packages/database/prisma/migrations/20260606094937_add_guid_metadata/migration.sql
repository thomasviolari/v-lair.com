/*
  Warnings:

  - A unique constraint covering the columns `[guid]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - The required column `guid` was added to the `Contact` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "guid" TEXT NOT NULL,
ADD COLUMN     "metadata" JSONB;

-- CreateIndex
CREATE UNIQUE INDEX "Contact_guid_key" ON "Contact"("guid");
