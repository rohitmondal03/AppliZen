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


export default function NewJobStatusForm() {
  const [applDate, setApplDate] = useState<Date>();
  const [submissionDate, setSubmissionDate] = useState<Date>();

  return (
    <DialogContent>
      <form className={classNames({
        "space-y-7": true,
        "h-[70vh]": true,
        "overflow-y-scroll": true,
        "py-3": true,
      })}>
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
          <Label>Company's name</Label>
          <Input
            placeholder="Company's name..."
            autoComplete="off"
            autoCapitalize="on"
            className="mx-auto w-[99%]"
          />
        </div>


        <div className="flex items-center justify-between">
          {/* <Label>Application Date:</Label> */}
          <DatePicker
            date={applDate}
            setDate={setApplDate}
            placeholder="Pick application date"
          />
        </div>


        <div className="flex items-center justify-between">
          {/* <Label>Submission deadline:</Label> */}
          <DatePicker
            date={submissionDate}
            setDate={setSubmissionDate}
            placeholder="Pick submission deadline"
          />
        </div>


        <Separator />
        <section className="grid grid-cols-2 gap-5">
          <div className="flex items-center justify-between">
            {/* <Label>Application Method</Label> */}
            <Select onValueChange={(val) => console.log(val)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a method..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Career's Portal">Career's Portal</SelectItem>
                <SelectItem value="Cold-Emailing">Cold-Emailing</SelectItem>
                <SelectItem value="Twitter">Twitter</SelectItem>
              </SelectContent>
            </Select>
          </div>


          <div className="flex items-center justify-between">
            {/* <Label>Application Status</Label> */}
            <Select onValueChange={(val) => console.log(val)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status of application" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Rejected">Rejected</SelectItem>
                <SelectItem value="On Progress">On Progress</SelectItem>
                <SelectItem value="Selected">Selected</SelectItem>
              </SelectContent>
            </Select>
          </div>


          <div className="flex items-center justify-between">
            {/* <Label>Offer Type</Label> */}
            <Select onValueChange={(val) => console.log(val)}>
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
        <Separator />


        <div>
          <Label>Company Contact</Label>
          <Input
            placeholder="Enter any company's contact, email or phn number, etc"
            autoComplete="off"
            autoCapitalize="on"
            className="mx-auto w-[99%]"
          />
        </div>


        <div>
          <Label>Expecetd CTC or Stipend/month</Label>
          <Input
            placeholder="Expecetd CTC or Stipend/month.."
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
      </form>
    </DialogContent>
  )
}


{/* <Form {...newJobStatusForm}>
        <form
          onSubmit={newJobStatusForm.handleSubmit(submitJobStatus)}
          className="space-y-6"
        >
          <FormField
            control={newJobStatusForm.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-red-500">Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter title..."
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="dark:text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={newJobStatusForm.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter company's name"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}>
          </FormField>

          <FormField
            control={newJobStatusForm.control}
            name="applicationSubmissionDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Application submission date</FormLabel>
                <FormControl>
                  <DatePicker  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}>
          </FormField>

          <DialogFooter>
            <SubmiNewJobStatusButton />
          </DialogFooter>
        </form>
</Form> */}


// const newJobStatusForm = useForm<TNewJobStatus>({
//   resolver: zodResolver(newJobStatusSchema),
//   defaultValues: {
//     title: "",
//     companyName: "",
//     companyContact: "",
//     notes: "",
//     applicatioMethod: "Job boarding websites",
//     applicationStatus: "ON PROGRESS",
//     interviewDate: new Date(),
//     applicationSubmissionDate: new Date(),
//     offerType: "FULL-TIME",
//     expectedCTCorSTIPEND: 200000,
//   },
// })

