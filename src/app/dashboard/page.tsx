"use client"

import { signOut } from "next-auth/react"

export default function DashboardPabe() {
  return (
    <div>
      DashboardPage
      <button onClick={() => signOut({callbackUrl: "/"})}>
        Sign out
      </button>
    </div>
  )
}
