import { getServerSession } from "next-auth";

import { authOptions } from "../server/auth";


export const getServerAuthSession = async () => {
  const session = await getServerSession(authOptions)
  return session?.user;
}
