import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/lib/server-session"

export default async function AuthPage() {
  const {userId}= await getServerAuthSession();

  // if(userId) {
  //   redirect("/dashboard", )
  // }

  return (
    <div>AuthPage</div>
  )
}
