import { type ReactNode } from "react"
import type { offerType, applicationMethod, applicationStatus } from "@prisma/client"


type TLayout = {
  children: ReactNode
}

type TNewJobStatus = {
  title: string;
  companyName: string;
  applicationSubmissionDate: Date | undefined;
  interviewDate: Date | undefined
  offerType: offerType;
  applicationStatus: applicationStatus;
  applicationMethod: applicationMethod;
  expectedCTCorSTIPEND: number;
  companyContact: string;
  notes: string;
}