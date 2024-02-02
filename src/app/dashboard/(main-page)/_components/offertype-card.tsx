"use client"

import { useEffect, useState } from "react"
import type { offerType } from "@prisma/client"

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


export default function OfferTypeCard({ userId }: { userId: string }) {
  const [offerType, setOfferType] = useState<offerType>("Full_Time");
  const [offerCount, setOfferCount] = useState<number>();
  const [isLoading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    async function countOfferType() {
      setLoading(true);

      await fetch("/api/count-offer-type", {
        cache: "force-cache",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          offerType
        })
      })
        .then(res => res.json())
        .then((val: number) => setOfferCount(val))

      setLoading(false);
    }

    void countOfferType();
  }, [offerType, userId])


  return (
    <Card className="dashboard_card">
      <CardHeader>
        <CardTitle className="text-xl font-thin">
          Applied for {offerType === "Full_Time" ? "Full Time" : offerType} {" "}
          <span>Offers</span> : {" "}
          <span className="font-bold">{isLoading ? "..." : offerCount}</span>
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <Select
          value={offerType}
          onValueChange={(val) => setOfferType(val as offerType)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select offer-type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"Full_Time"}>Full Time</SelectItem>
            <SelectItem value={"Intern"}>Intern</SelectItem>
            <SelectItem value={"Contract"}>Contract</SelectItem>
          </SelectContent>
        </Select>
      </CardFooter>
    </Card>
  )
}
