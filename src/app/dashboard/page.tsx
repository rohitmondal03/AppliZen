import { getServerAuthSession } from "~/lib/server-session"
import SignOutButton from "~/components/buttons/sign-out-button"


export default async function DashboardPage() {
  const session = await getServerAuthSession();
  const user = session?.user;
  const userName = user?.name;
  const userEmail = user?.email;


  return (
    <section className="page_container">
      <div className="head_div">
        <h1>Your Personal Dashboard</h1>

        <p>
          Your dashboard is the central hub for all your activities. Stay updated on recent actions, track your progress, and explore personalized insights. Navigate effortlessly to make the most of your experience.
        </p>
      </div>

      <div>
        <p>Name: {userName}</p>
        <p>Email: {userEmail}</p>
      </div>
    </section>
  )
}
