import Link from "next/link";
import useSWR from "swr"
import { TrashIcon } from "@radix-ui/react-icons"
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
    <Card className="border-2 border-gray-500">
      <CardHeader className="font-bold text-xl">{companyName}</CardHeader>
      <Link href={`/dashboard/${jobStatusId}`} key={jobStatusId}>
        <CardContent>
          <p>Title: {title}</p>
          <p>Offer Type: {offerType == "Full_Time" ? "Full Time" : offerType}</p>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-end items-center">
        <Button
          variant={"destructive"}
          className="font-bold"
        >
          Delete <TrashIcon className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}
