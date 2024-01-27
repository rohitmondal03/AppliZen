import { revalidatePath } from "next/cache";

import type { TNewJobStatus } from "types";


export function submitJobStatus(values: TNewJobStatus) {
  // revalidatePath("/job-app-tracker", "page")
  console.log(values);
}