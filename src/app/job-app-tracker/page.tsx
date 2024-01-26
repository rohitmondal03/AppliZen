import { PlusCircledIcon } from "@radix-ui/react-icons"

import NewJobStatusForm from "./_components/new-job-status-form"
import { Button } from "~/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog"


export default function JobApplicationTracker() {
  return (
    <section>
      <h1>your job status</h1>

      <div>
        <h1>Add new Job Staus</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button>New <PlusCircledIcon /></Button>
          </DialogTrigger>

          <NewJobStatusForm />
        </Dialog>
      </div>
    </section>
  )
}
