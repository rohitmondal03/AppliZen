import Link from "next/link";
import { Link1Icon } from "@radix-ui/react-icons"

import { db } from "~/server/db";
import { cn } from "~/lib/utils";
import { getServerAuthSession } from "~/lib/server-session"
import SignOutButton from "~/components/buttons/sign-out-button"
import { buttonVariants } from "~/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import OfferTypeCard from "./_components/offertype-card";


export default async function DashboardPage() {
  const session = await getServerAuthSession();
  const user = session?.user;
  const userName = user?.name;
  const userEmail = user?.email;
  const userId = user?.id


  const jobStatusCount = await db.jobStatus.count({
    where: {
      userId: userId,
    },
  })


  return (
    <section className="page_container">
      <div className="head_div">
        <h1>Your Personal Dashboard</h1>

        <p>
          Your dashboard is the central hub for all your activities. Stay updated on recent actions, track your progress, and explore personalized insights. Navigate effortlessly to make the most of your experience.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-lg">
          <span className="text-muted-foreground">Name:</span> <span className="font-bold">{userName}</span>
        </p>

        <p className="text-lg">
          <span className="text-muted-foreground">Email:</span> <span className="font-bold">{userEmail}</span>
        </p>

        <Link
          href={"/dashboard/setting"}
          className={cn(buttonVariants({
            className: "font-bold",
            variant: "default"
          }))}
        >
          Edit profile
        </Link>
      </div>

      <div className="flex flex-row items-center justify-around">
        <Card className="w-fit border-gray-500">
          <CardHeader>
            <CardTitle className="text-xl font-thin">
              Total no. of job status : <span className="font-bold">{jobStatusCount}</span>
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

        <OfferTypeCard userId={String(userId)} />
      </div>
    </section>
  )
}
