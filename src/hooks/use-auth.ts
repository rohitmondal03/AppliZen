import { useSession } from "next-auth/react";

export const useAuth = () => {
  const s = useSession();

  return {
    isAuthenticated: s.status,
    userName: String(s.data?.user.name),
    userEmail: String(s.data?.user.email),
    userId: String(s.data?.user.id),
    userProfilePic: String(s.data?.user.image)
  }
}