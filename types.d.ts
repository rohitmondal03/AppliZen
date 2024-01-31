import { type ReactNode } from "react"
import { z } from "zod"

import type { offerType, applicationMethod, applicationStatus, JobStatus } from "@prisma/client"

type TLayout = {
  children: ReactNode
}

// type TNewJobStatus = {
//   title: string;
//   companyName: string;
//   applicationFillingDate: Date;
//   applicationSubmissionDate: Date;
//   interviewDate: Date | undefined
//   expectedCTCorSTIPEND: number;
//   companyContact: string;
//   notes: string;
//   offerType: offerType;
//   applicationStatus: applicationStatus;
//   applicationMethod: applicationMethod;
// }


type TNewJobStatus = Omit<TNewJobStatus | "id">