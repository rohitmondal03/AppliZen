import { PlusCircledIcon, Share2Icon, TrashIcon } from "@radix-ui/react-icons";
import classNames from "classnames"

import { db } from "~/server/db"
import { getServerAuthSession } from "~/lib/server-session"
import NewJobStatusForm from "./_components/new-job-status-form"
import { Button } from "~/components/ui/button"
import { Dialog, DialogTrigger } from "~/components/ui/dialog"
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card"


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
    }
  })


  return (
    <section className={classNames({
      "space-y-16": true,
    })}>
      <div className="space-y-3">
        <h1 className={classNames({
          "text-4xl font-bold": true,
        })}>
          Stay Organized with AppliZen
        </h1>

        <p className="text-muted-foreground">Tell us more about your recent job application. Update the status, add interview details, and stay on top of your career journey.</p>
      </div>

      {getJobStatusOfUser?.length > 0 ? (
        <div className={classNames({
          "grid grid-cols-3 gap-5": true,
        })}>
          {getJobStatusOfUser.map((det) => (
            <Card>
              <CardHeader>{det.companyName}</CardHeader>
              <CardContent>
                <p>Title: {det.title}</p>
                <p>Application Submittion date: {String(det.applicationSubmissionDate)}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button>Share <Share2Icon className="ml-3" /></Button>
                <Button>Delete <TrashIcon className="ml-3" /></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-xl text-red-500">No job status added yet...!!</p>
      )}

      <Dialog>
        <DialogTrigger asChild>
          <Button className="font-bold">
            Add new Status <PlusCircledIcon className="ml-3" />
          </Button>
        </DialogTrigger>

        <NewJobStatusForm />
      </Dialog>
    </section>
  )
}
