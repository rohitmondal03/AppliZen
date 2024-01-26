import { type ReactNode } from "react"
import { z } from "zod"

import { newJobStatusSchema } from "~/schemas/new-job-status-schema"


type TLayout = {
  children: ReactNode
}

type TNewJobStatus = z.infer<typeof newJobStatusSchema>