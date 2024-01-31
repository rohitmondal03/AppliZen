/*
  Warnings:

  - A unique constraint covering the columns `[id,jobStatusId]` on the table `JobStatus` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jobStatusId` to the `JobStatus` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "JobStatus_id_key";

-- AlterTable
ALTER TABLE "JobStatus" ADD COLUMN     "jobStatusId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "JobStatus_id_jobStatusId_key" ON "JobStatus"("id", "jobStatusId");
