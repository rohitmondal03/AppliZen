"use client"

import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import classNames from "classnames";


import type { TNewJobStatus } from "types";
import { DatePicker } from "~/components/date-picker";
import SubmiNewJobStatusButton from "~/components/buttons/submit-job-status-button";
import { Input } from "~/components/ui/input";
import { DialogContent, DialogFooter } from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { Separator } from "~/components/ui/separator";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Textarea } from "~/components/ui/textarea";
import { submitJobStatus } from "~/actions/submit-job-status";


export default function NewJobStatusForm() {
  const [applDate, setApplDate] = useState<Date>();
  const [submissionDate, setSubmissionDate] = useState<Date>();
  const [interviewDate, setInterviewDate] = useState<Date>();

  return (
    <DialogContent>
      <form
        // action={() => submitJobStatus()}
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
          />
        </div>


        <div>
          <Label>Company&apos;s name</Label>
          <Input
            placeholder="Company's name..."
            autoComplete="off"
            autoCapitalize="on"
            className="mx-auto w-[99%]"
            required
          />
        </div>


        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <DatePicker
              date={applDate}
              setDate={setApplDate}
              placeholder="Pick application date"
            />
          </div>

          <div className="flex items-center justify-between">
            <DatePicker
              date={submissionDate}
              setDate={setSubmissionDate}
              placeholder="Pick submission deadline"
            />
          </div>

          <div className="flex items-center justify-between">
            <DatePicker
              date={interviewDate}
              setDate={setInterviewDate}
              placeholder="Pick interview date"
            />
          </div>
        </section>


        <section className="grid grid-cols-2 gap-5">
          <div className="flex items-center justify-between mx-auto w-[99%]">
            <Select onValueChange={(val) => console.log(val)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="How you got offer ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Career's Portal">Career&apos;s Portal</SelectItem>
                <SelectItem value="Cold-Emailing">Cold-Emailing</SelectItem>
                <SelectItem value="Twitter">Twitter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mx-auto w-[99%]">
            <Select onValueChange={(val) => console.log(val)} required>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Application status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Rejected">Rejected</SelectItem>
                <SelectItem value="On Progress">On Progress</SelectItem>
                <SelectItem value="Selected">Selected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mx-auto w-[99%]">
            <Select onValueChange={(val) => console.log(val)} required>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Offer Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Intern">Intern</SelectItem>
                <SelectItem value="Full Time">Full Time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>


        <div>
          <Label>Company Contact</Label>
          <Textarea
            placeholder="Enter any company's contact, email or phn number, etc"
            className="mx-auto w-[99%]"
            rows={10}
            cols={10}
          />
        </div>


        <div>
          <Label>Expecetd CTC or Stipend/month</Label>
          <Input
            placeholder="Expecetd CTC or Stipend/month (You can leave it empty !!)"
            autoComplete="off"
            autoCapitalize="on"
            className="mx-auto w-[99%]"
          />
        </div>

        <div>
          <Label>Enter any important notes</Label>
          <Textarea
            placeholder="Write required notes..."
            rows={10}
            cols={10}
            className="mx-auto w-[99%]"
          />
        </div>

        <DialogFooter>
          <SubmiNewJobStatusButton />
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
