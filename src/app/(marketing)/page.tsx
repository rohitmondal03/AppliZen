"use client"

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function HomePage() {
  const s = useSession();

  useEffect(() => {
    console.log(s.data?.user.name)
  }, [])

  return (
    <section>
      <button onClick={() => signIn("github", { callbackUrl: "/dashboard" })}>Github</button>
      <button onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}>Discord</button>
      <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>Google</button>

      {s.data?.user.id && (
        <button onClick={() => signOut({ callbackUrl: "/" })}>
          Sign out
        </button>
      )}
    </section>
  );
}
