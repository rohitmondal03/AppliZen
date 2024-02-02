"use server"

import { revalidatePath } from "next/cache"

import { db } from "~/server/db"


export async function deleteJobStatus(id: string) {
  await db.jobStatus.delete({
    where: {
      jobStatusId: id
    }
  })

  revalidatePath("/job-app-tracker")
}