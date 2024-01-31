/*
  Warnings:

  - The primary key for the `JobStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "JobStatus" DROP CONSTRAINT "JobStatus_pkey",
ADD CONSTRAINT "JobStatus_pkey" PRIMARY KEY ("jobStatusId");
