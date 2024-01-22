"use client"

import { signOut } from 'next-auth/react'
import React from 'react'

import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

export default function SignOutButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign Out</Button>
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
