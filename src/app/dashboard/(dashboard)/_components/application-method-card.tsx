"use client"

import { useEffect, useMemo, useState } from "react"
import useSWR from "swr"
import type { applicationMethod } from "@prisma/client"

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


export default function ApplicationMethodCard({ userId }: { userId: string }) {
  const [applicationMethod, setApplicationMethod] = useState<applicationMethod>("Career_Portal");
  const [applicationMethodCount, setApplicationMethodCount] = useState<number>();
  const [isLoading, setLoading]= useState<boolean>(false);


  useEffect(() => {
    async function countApplicationMethod() {
      setLoading(true);

      await fetch("/api/count-application-method", {
        cache: "force-cache",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          applicationMethod,
        })
      })
        .then(res => res.json())
        .then((val: number) => setApplicationMethodCount(val))

      setLoading(false);
    }

    void countApplicationMethod();
  }, [applicationMethod, userId])


  const method = useMemo(() => {
    if (
      applicationMethod === "LinkedIn" ||
      applicationMethod === "Twitter" ||
      applicationMethod === "Referral" ||
      applicationMethod === "Other"
    ) {
      return applicationMethod;
    } else if (applicationMethod === "Career_Portal") {
      return "Careers Portal of company"
    } else if (applicationMethod === "Cold_Emailing") {
      return "Cold Emailing (e.g., CV sending)";
    } else if (applicationMethod === "Job_Posting_Sites") {
      return "Job Posting Sites (e.g., AngelList, RemoteOK, etc.)";
    } else {
      return "Networking Event";
    }
  }, [applicationMethod])


  return (
    <Card className="dashboard_card">
      <CardHeader>
        <CardTitle className="text-xl font-thin">
          Applied through {method} : {" "}
          <span className="font-bold">{isLoading ? "..." : applicationMethodCount}</span>
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <Select
          value={applicationMethod}
          onValueChange={(val) => setApplicationMethod(val as applicationMethod)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select offer-type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Career_Portal">Career Portal</SelectItem>
            <SelectItem value="Cold_Emailing">Cold Emailing</SelectItem>
            <SelectItem value="LinkedIn">LinkedIn</SelectItem>
            <SelectItem value="Twitter">Twitter</SelectItem>
            <SelectItem value="Referral">Referral</SelectItem>
            <SelectItem value="Job_Posting_Sites">Job Posting Sites</SelectItem>
            <SelectItem value="Networking_Event">Networking Event</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </CardFooter>
    </Card>
  )
}
