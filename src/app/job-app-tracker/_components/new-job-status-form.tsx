"use client"

import { useState } from "react";
import classNames from "classnames";
import type { applicationMethod, applicationStatus, offerType } from "@prisma/client"


import type { TNewJobStatus } from "types";
import { submitJobStatus } from "~/actions/submit-job-status";
import { DatePicker } from "~/components/date-picker";
import { useAuth } from "~/hooks/use-auth";
import SubmiNewJobStatusButton from "~/components/buttons/submit-job-status-button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Separator } from "~/components/ui/separator";
import { DialogContent, DialogFooter } from "~/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"


export default function NewJobStatusForm() {
  const { userId } = useAuth()

  const [submissionDate, setSubmissionDate] = useState<Date>(new Date());
  const [interviewDate, setInterviewDate] = useState<Date | null>(null);

  const [jobStatus, setJobStatus] = useState<Pick<TNewJobStatus, "title" | "companyName" | "applicationMethod" | "companyContact" | "applicationStatus" | "notes" | "expectedCTCorSTIPEND" | "offerType">>({
    notes: "",
    title: "",
    companyName: "",
    expectedCTCorSTIPEND: 0,
    companyContact: "",
    applicationMethod: "Career_Portal",
    applicationStatus: "Rejected",
    offerType: "Full_Time",
  });


  return (
    <DialogContent>
      <form
        action={() => submitJobStatus({
          title: jobStatus.title,
          companyName: jobStatus.companyName,
          applicationMethod: jobStatus.applicationMethod,
          applicationStatus: jobStatus.applicationStatus,
          interviewDate: interviewDate,
          applicationSubmissionDate: submissionDate,
          companyContact: jobStatus.companyContact,
          expectedCTCorSTIPEND: jobStatus.expectedCTCorSTIPEND,
          notes: jobStatus.notes,
          offerType: jobStatus.offerType,
          userId: userId,
        })}
        className={classNames({
          "space-y-7": true,
          "h-[70vh]": true,
          "overflow-y-scroll": true,
          "py-3": true,
        })}
      >
        <div>
          <Label>Title</Label>
          <Input
            placeholder="Title..."
            autoComplete="off"
            autoCapitalize="on"
            autoFocus={true}
            className="mx-auto w-[99%]"
            value={jobStatus.title}
            onChange={(e) => setJobStatus(prev => ({ ...prev, title: e.target.value }))}
            required
          />
        </div>


        <div>
          <Label>Company&apos;s name</Label>
          <Input
            placeholder="Company's name..."
            autoComplete="off"
            autoCapitalize="on"
            className="mx-auto w-[99%]"
            value={jobStatus.companyName}
            onChange={(e) => setJobStatus((prev) => ({ ...prev, companyName: e.target.value }))}
            required
          />
        </div>

        <Separator />

        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <DatePicker
              date={submissionDate}
              setDate={setSubmissionDate}
              placeholder="Application submission deadline (optional)"
            />
          </div>

          <div className="flex items-center justify-between">
            <DatePicker
              date={interviewDate}
              setDate={setInterviewDate}
              placeholder="Interview date (if applicable)"
            />
          </div>
        </section>

        <Separator />

        <section className="grid grid-cols-2 gap-5">
          <div className="flex items-center justify-between mx-auto w-[99%]">
            <Select
              value={jobStatus.applicationMethod}
              onValueChange={(val) => setJobStatus((prev) => ({ ...prev, applicationMethod: val as applicationMethod }))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="How you got offer ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Career_Portal">Career Portal</SelectItem>
                <SelectItem value="Cold_Emailing">Cold Emailing</SelectItem>
                <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                <SelectItem value="Twitter">Twitter</SelectItem>
                <SelectItem value="Referral">Referral</SelectItem>
                <SelectItem value="Job_Posting_Sites">Job Posting Sites</SelectItem>
                <SelectItem value="Networking_Event">Networking Event</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mx-auto w-[99%]">
            <Select
              value={jobStatus.applicationStatus}
              onValueChange={(val) => setJobStatus((prev) => ({ ...prev, applicationStatus: val as applicationStatus }))}
              required
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Application status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Rejected">Rejected</SelectItem>
                <SelectItem value="On_Progress">On Progress</SelectItem>
                <SelectItem value="Selected">Selected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mx-auto w-[99%]">
            <Select
              value={jobStatus.offerType}
              onValueChange={(val) => setJobStatus(prev => ({ ...prev, offerType: val as offerType }))}
              required
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Offer Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Full_Time">Full Time</SelectItem>
                <SelectItem value="Intern">Intern</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <Separator />

        <div>
          <Label>Expecetd CTC or Stipend/month</Label>
          <Input
            placeholder="Expecetd CTC or Stipend/month (You can leave it empty !!)"
            autoComplete="off"
            autoCapitalize="on"
            className="mx-auto w-[99%]"
            value={Number(jobStatus.expectedCTCorSTIPEND)}
            onChange={(e) => setJobStatus(prev => ({ ...prev, expectedCTCorSTIPEND: Number(e.target.value) }))}
          />
        </div>

        <div>
          <Label>Company Contact</Label>
          <Textarea
            placeholder="Enter company's contact, email or phn number, or anything else..."
            className="mx-auto w-[99%]"
            rows={10}
            cols={10}
            value={String(jobStatus.companyContact)}
            onChange={(e) => setJobStatus((prev => ({ ...prev, companyContact: e.target.value })))}
          />
        </div>

        <div>
          <Label>Enter any important notes</Label>
          <Textarea
            placeholder="Write required notes..."
            rows={10}
            cols={10}
            className="mx-auto w-[99%]"
            value={String(jobStatus.notes)}
            onChange={(e) => setJobStatus((prev) => ({ ...prev, notes: e.target.value }))}
          />
        </div>

        <DialogFooter>
          <SubmiNewJobStatusButton />
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
