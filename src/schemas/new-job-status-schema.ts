import { z } from "zod";


export const newJobStatusSchema = z.object({
  title: z.string().min(5, {
    message: "Title should have minimum of 5 characters !!"
  }),
  companyName: z.string().min(1, {
    message: "Company's name cannot be empty !!"
  }),
  interviewDate: z.date({
    required_error: "Interview dates should be filled correctly !!",
  }),
  applicationSubmissionDate: z.date({
    required_error: "Application submission date must be specified !!",
  }),
  offerType: z.enum(["INTERN", "FULL-TIME", "CONTRACT", "Other"]),
  applicationStatus: z.enum(["REJECTED", "ON PROGRESS", "ACCEPTED", "SELECTED"]),
  applicatioMethod: z.enum(["LinkedIn", "Twitter", "Cold-emailing", "Referral", "Career Portal", "Networking event", "Job boarding websites", "Any other"]),
  expectedCTCorSTIPEND: z.number(),
  companyContact: z.string(),
  notes: z.string(),
})

