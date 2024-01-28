import { type ReactNode } from "react"
import { z } from "zod"


type TLayout = {
  children: ReactNode
}

type TNewJobStatus = {
  title: string;
  companyName: string;
  applicationFillingDate: Date;
  applicationSubmissionDate: Date;
  interviewDate: Date | undefined
  expectedCTCorSTIPEND: number;
  companyContact: string;
  notes: string;
  // offerType: offerType;
  // applicationStatus: applicationStatus;
  // applicatioMethod: appplicationMethod;
}