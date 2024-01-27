"use client"

import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import classNames from "classnames";


import type { TNewJobStatus } from "types";
import { submitJobStatus } from "~/lib/functions/submit-job-status";
import { newJobStatusSchema } from "~/schemas/new-job-status-schema";
import SubmiNewJobStatusButton from "~/components/buttons/submit-job-status-button";
import { Input } from "~/components/ui/input";
import { DialogContent, DialogFooter } from "~/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";


export default function NewJobStatusForm() {
  const newJobStatusForm = useForm<TNewJobStatus>({
    resolver: zodResolver(newJobStatusSchema),
    defaultValues: {
      title: "",
      companyName: "",
      // companyContact: "",
      // notes: "",
      // applicatioMethod: "Job boarding websites",
      // applicationStatus: "ON PROGRESS",
      // interviewDate: new Date(),
      // applicationSubmissionDate: new Date(),
      // offerType: "FULL-TIME",
      // expectedCTCorSTIPEND: 200000,
    },
  })
  const [val, setVal] = useState<string>("")


  return (
    <DialogContent>
      <Form {...newJobStatusForm}>
        <form
          onSubmit={newJobStatusForm.handleSubmit(submitJobStatus)}
          className="space-y-6"
        >
          <FormField
            control={newJobStatusForm.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter title..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
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
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}>
          </FormField>

          <DialogFooter>
            <SubmiNewJobStatusButton />
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  )
}
