import Link from "next/link";
import { Share2Icon, TrashIcon } from "@radix-ui/react-icons"
import type { offerType } from "@prisma/client"

import { Button } from "~/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "~/components/ui/card"


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
    <Link href={`/dashboard/${jobStatusId}`} key={jobStatusId}>
      <Card className="border-2">
        <CardHeader className="font-bold text-xl">{companyName}</CardHeader>
        <CardContent>
          <p>Title: {title}</p>
          <p>Offer Type: {offerType == "Full_Time" ? "Full Time" : offerType}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button className="font-bold">Share <Share2Icon className="ml-2" /></Button>
          <Button variant={"destructive"} className="font-bold">Delete <TrashIcon className="ml-2" /></Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
