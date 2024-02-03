"use client"

import { useEffect, useMemo, useState } from "react"
import type { applicationStatus } from "@prisma/client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";


export default function ApplciationStatusCard({ userId }: { userId: string }) {
  const [applicationStatus, setApplicationStatus] = useState<applicationStatus>("Accepted");
  const [applicationStatusCount, setApplicationStatusCount] = useState<number>();
  const [isLoading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    async function countApplicationStatus() {
      setLoading(true);

      await fetch("/api/count-application-status", {
        cache: "force-cache",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          applicationStatus,
        }),
      })
        .then((resp) => resp.json())
        .then((count: number) => setApplicationStatusCount(count))

      setLoading(false);
    }

    void countApplicationStatus();
  }, [applicationStatus, userId])


  const status = useMemo(() => {
    if (applicationStatus === "On_Progress") {
      return "On Progress";
    } else {
      return applicationStatus;
    }
  }, [applicationStatus])


  return (
    <Card className="dashboard_card">
      <CardHeader>
        <CardTitle className="text-xl font-thin">
          Applications {status} : {" "}
          <span className="font-bold">{isLoading ? "..." : applicationStatusCount}</span>
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <Select
          value={applicationStatus}
          onValueChange={(val) => setApplicationStatus(val as applicationStatus)}
          required
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Application status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Rejected">Rejected</SelectItem>
            <SelectItem value="On_Progress">On Progress</SelectItem>
            <SelectItem value="Accepted">Selected</SelectItem>
          </SelectContent>
        </Select>
      </CardFooter>
    </Card>
  )
}
