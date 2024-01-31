"use server"

import { revalidatePath } from "next/cache";

import type { TNewJobStatus } from "types";
import { db } from "~/server/db";


export async function submitJobStatus(data: TNewJobStatus) {
  await db.jobStatus.create({
    data: {
      title: data.title,
      companyName: data.companyName,
      applicationMethod: data.applicationMethod,
      applicationStatus: data.applicationStatus,
      interviewDate: data.interviewDate,
      applicationSubmissionDate: data.applicationSubmissionDate,
      offerType: data.offerType,
      companyContact: data.companyContact,
      expectedCTCorSTIPEND: data.expectedCTCorSTIPEND,
      notes: data.notes,
      userId: data.userId
    },
  })

  revalidatePath("/job-app-tracker")
}