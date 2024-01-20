"use client"

import { signIn } from "next-auth/react";

export default function HomePage() {
  return (
    <section>
      <button onClick={() => signIn("github", {callbackUrl: "/dashboard"})}>Github</button>
      <button onClick={() => signIn("discord", {callbackUrl: "/dashboard"})}>Discord</button>
    </section>
  );
}
