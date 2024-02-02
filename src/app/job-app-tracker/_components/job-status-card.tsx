"use client"

import Link from "next/link";
import { TrashIcon } from "@radix-ui/react-icons"
import type { offerType } from "@prisma/client"

import { Button } from "~/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "~/components/ui/card"
import { Dialog, DialogHeader, DialogClose, DialogTrigger, DialogContent, DialogFooter } from "~/components/ui/dialog";
import { deleteJobStatus } from "~/actions/delete-job-status";


type TProps = {
  jobStatusId: string;
  companyName: string;
  title: string;
  offerType: offerType;
}


export default function JobStatusCard(
  { jobStatusId, companyName, title, offerType }: TProps
) {
  return (
    <Card className="border-2 border-gray-500">
      <CardHeader className="font-bold text-xl">{companyName}</CardHeader>
      <Link href={`/dashboard/${jobStatusId}`} key={jobStatusId}>
        <CardContent>
          <p>Title: {title}</p>
          <p>Offer Type: {offerType == "Full_Time" ? "Full Time" : offerType}</p>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-end items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={"destructive"}
              className="font-bold"
            >
              Delete <TrashIcon className="ml-2" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="font-bold text-lg">
              Are you sure you want to delete this job status ?
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button
                  variant={"destructive"}
                  className="font-bold"
                  onClick={() => deleteJobStatus(jobStatusId)}
                >
                  Yes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
