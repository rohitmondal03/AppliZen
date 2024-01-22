import { useSession } from "next-auth/react";

export const useAuth = () => {
  const s = useSession();

  return {
    isAuthenticated: s.status,
    userName: s.data?.user.name || undefined,
    userEmail: s.data?.user.email || undefined,
    userId: s.data?.user.id || undefined,
    userProfilePic: s.data?.user.image || undefined
  }
}