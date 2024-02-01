import { db } from "~/server/db";
import UserDetailsForm from "./_components/user-details-form";
import { getServerAuthSession } from "~/lib/server-session";


export default async function SettingPage() {
  const session = await getServerAuthSession();
  const user = session?.user;

  const userDetails = await db.user.findFirst({
    where: {
      id: user?.id
    },
    select: {
      name: true,
      email: true,
    }
  })

  return (
    <section className="page_container">
      <div className="head_div">
        <h1>
          Welcome to Your Account Settings
        </h1>

        <p>
          Manage your experience by customizing your account settings. From personal information to notification preferences, tailor your profile to suit your needs. Take control of your account and make it uniquely yours.
        </p>
      </div>

      <UserDetailsForm
        email={String(userDetails?.email)}
        name={String(userDetails?.name)}
      />
    </section>
  )
}
