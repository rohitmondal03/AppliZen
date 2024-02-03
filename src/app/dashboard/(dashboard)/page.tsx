import Link from "next/link";

import { cn } from "~/lib/utils";
import { getServerAuthSession } from "~/lib/server-session"
import SignOutButton from "~/components/buttons/sign-out-button"
import OfferTypeCard from "./_components/offertype-card";
import JobStatusCountCard from "./_components/job-status-count-card";
import ApplicationStatusCard from "./_components/application-status-card";
import { buttonVariants } from "~/components/ui/button";
import ApplicationMethodCard from "./_components/application-method-card";
import classNames from "classnames";


export default async function DashboardPage() {
  const session = await getServerAuthSession();
  const user = session?.user;
  const userName = user?.name;
  const userEmail = user?.email;
  const userId = user?.id


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

      <div className={classNames({
        "grid grid-cols-2 items-center justify-center gap-5": true,
      })}>
        <JobStatusCountCard userId={String(userId)} />
        <OfferTypeCard userId={String(userId)} />
        <ApplicationStatusCard userId={String(userId)} />
        <ApplicationMethodCard userId={String(userId)} />
      </div>
    </section>
  )
}
