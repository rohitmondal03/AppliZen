"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { cn } from "~/lib/utils"
import { buttonVariants } from "~/components/ui/button"
import { Card, CardHeader, CardFooter, CardTitle } from "~/components/ui/card"


export default function JobStatusCountCard({ userId }: { userId: string }) {
  const [jobStatusCount, setJobStatusCount] = useState<number>();
  const [isLoading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    async function countOfferType() {
      setLoading(true);

      await fetch("/api/count-total-job-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId })
      })
        .then(res => res.json())
        .then(val => setJobStatusCount(val))

      setLoading(false);
    }

    countOfferType();
  }, [])


  return (
    <Card className="dashboard_card">
      <CardHeader>
        <CardTitle className="text-xl font-thin">
          Total no. of job status : {" "}
          <span className="font-bold">{isLoading ? "..." : jobStatusCount}</span>
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <Link
          href={"/job-app-tracker"}
          className={cn(buttonVariants({
            variant: "secondary",
          }))}
        >
          See active status
        </Link>
      </CardFooter>
    </Card>
  )
}
