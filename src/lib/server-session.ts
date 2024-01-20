import { getServerSession } from "next-auth";

import { authOptions } from "../server/auth";


export const getServerAuthSession = async () => {
  const session = await getServerSession(authOptions)

  const user = session?.user;

  return {
    userId: user?.id,
    userName: user?.image,
    userEmail: user?.email,
    userProfilePic: user?.image,
  }
}
