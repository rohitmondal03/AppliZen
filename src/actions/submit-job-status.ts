"use server"

import { revalidatePath } from "next/cache";

import type { TNewJobStatus } from "types";


export async function submitJobStatus(data:  TNewJobStatus) {
  revalidatePath("/job-app-tracker", "page")
  console.log(data);
}