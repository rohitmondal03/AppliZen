"use server"

import { revalidatePath } from "next/cache";
import uuid from 'uuid-wand'

import type { TNewJobStatus } from "types";
import { getServerAuthSession } from "~/lib/server-session";
import { db } from "~/server/db";


export async function submitJobStatus(data: TNewJobStatus) {
  const session = await getServerAuthSession();

  const userId = session?.user.id;

  //  generate job status ID
  const randomJobStatusId= uuid.shortUuid();

  await db.jobStatus.create({
    data: {
      userId: String(userId),
      jobStatusId: randomJobStatusId,
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
    },
  })

  revalidatePath("/job-app-tracker")
}