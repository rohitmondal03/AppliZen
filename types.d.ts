import { type ReactNode } from "react"
import { z } from "zod"

import { newJobStatusSchema } from "~/schemas/new-job-status-schema"


type TLayout = {
  children: ReactNode
}

type TNewJobStatus = {
  title: string;
  companyName: string;
  interviewDate: Date;
  applicationSubmissionDate: Date;
  expectedCTCorSTIPEND: number;
  companyContact: string;
  notes: string;
  offerType: "INTERN" | "FULL-TIME" | "CONTRACT" | "Other";
  applicationStatus: "REJECTED", "ON PROGRESS", "ACCEPTED", "SELECTED";
  applicatioMethod: "LinkedIn", "Twitter", "Cold-emailing", "Referral", "Career Portal", "Networking event", "Job boarding websites", "Any other";
}