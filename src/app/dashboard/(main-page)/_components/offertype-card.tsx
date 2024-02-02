"use client"

import { useEffect, useState } from "react"
import type { offerType } from "@prisma/client"

import LoadingState from "~/app/loading"
import { Card, CardHeader, CardFooter, CardTitle } from "~/components/ui/card"
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "~/components/ui/select"


export default function OfferTypeCard({ userId }: { userId: string }) {
  const [offerType, setOfferType] = useState<offerType>("Full_Time");
  const [offerCount, setOfferCount] = useState<number>();
  const [isLoading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    async function countOfferType() {
      setLoading(true);

      await fetch("/api/count-offer-type", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, offerType })
      })
        .then(res => res.json())
        .then(val => setOfferCount(val))

      setLoading(false);
    }

    countOfferType();
  }, [offerType])


  return (
    <Card className="w-fit border-gray-500">
      <CardHeader>
        <CardTitle className="text-xl font-thin">
          {offerType === "Full_Time" ? "Full Time" : offerType} {" "}
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
