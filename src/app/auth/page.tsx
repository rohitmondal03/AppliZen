"use client"

import { signIn } from "next-auth/react";

import { Button } from "~/components/ui/button";


export default function AuthPage() {
  return (
    <section>
      <h1>Auth Page</h1>

      <Button onClick={() => signIn("github", { callbackUrl: "/dashboard" })}>
        Signin with Github
      </Button>

      <Button onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}>
        Signin with Discord
      </Button>

    </section>
  )
}
