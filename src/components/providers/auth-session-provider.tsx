"use client"

import { SessionProvider } from "next-auth/react";

import { TLayout } from "types";


export default function AuthSessionProvider({children}: TLayout) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
