import { PlusCircledIcon } from "@radix-ui/react-icons";
import classNames from "classnames"

import { db } from "~/server/db"
import { getServerAuthSession } from "~/lib/server-session"
import NewJobStatusForm from "./_components/new-job-status-form"
import JobStatusCard from "./_components/job-status-card";
import { Button } from "~/components/ui/button"
import { Dialog, DialogTrigger } from "~/components/ui/dialog"


export default async function JobApplicationTracker() {
  const session = await getServerAuthSession();
  const userId = session?.user.id;


  // get user's all job form status
  const getJobStatusOfUser = await db.jobStatus?.findMany({
    where: {
      userId: userId
    },
    select: {
      title: true,
      companyName: true,
      offerType: true,
      applicationSubmissionDate: true,
      interviewDate: true,
      jobStatusId: true,
    }
  })


  return (
    <section className="page_container">
      <div className="head_div">
        <h1>
          Stay Organized with AppliZen
        </h1>

        <p>
          Tell us more about your recent job application. Update the status, add interview details, and stay on top of your career journey.
        </p>
      </div>

      {getJobStatusOfUser?.length > 0 ? (
        <div className={classNames({
          "grid grid-cols-3 gap-5": true,
        })}>
          {getJobStatusOfUser.map((det) => (
            <JobStatusCard
              key={det.jobStatusId}
              companyName={det.companyName}
              jobStatusId={det.jobStatusId}
              offerType={det.offerType}
              title={det.title}
            />
          ))}
        </div>
      ) : (
        <p className="text-lg text-rose-500">No job status added yet...!!</p>
      )}

      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"default"} className="font-bold">
            Add new Status <PlusCircledIcon className="ml-3" />
          </Button>
        </DialogTrigger>

        <NewJobStatusForm />
      </Dialog>
    </section>
  )
}
