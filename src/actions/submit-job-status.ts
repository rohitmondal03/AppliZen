"use server"

import type { TNewJobStatus } from "types"

export async function submitJobStatus(values: TNewJobStatus) {
  console.log(values.title);
}