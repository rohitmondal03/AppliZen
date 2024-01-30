"use server"

import { revalidatePath } from "next/cache";

import type { TNewJobStatus } from "types";
import { db } from "~/server/db";


export async function submitJobStatus(data: TNewJobStatus) {
  console.log(data);
  // revalidatePath("/job-app-tracker", "page")

  await db.jobStatus.create({
    data: {
      title: data.title,
      companyName: data.companyName,
    },
    include: {

    }
  })
}