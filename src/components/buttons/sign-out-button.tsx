"use client"

import dynamic from 'next/dynamic'
import { signOut } from 'next-auth/react'

import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'

const DialogContent= dynamic(() => import("../ui/dialog").then((mod) => mod.DialogContent))
const DialogFooter= dynamic(() => import("../ui/dialog").then((mod) => mod.DialogFooter))
const DialogHeader= dynamic(() => import("../ui/dialog").then((mod) => mod.DialogHeader))
const DialogTitle= dynamic(() => import("../ui/dialog").then((mod) => mod.DialogTitle))


export default function SignOutButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='font-bold'>Sign Out</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-lg'>
            Are you sure you want to sign out ?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={"destructive"}
            onClick={() => signOut({ callbackUrl: "/auth" })}
          >
            Sign Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
