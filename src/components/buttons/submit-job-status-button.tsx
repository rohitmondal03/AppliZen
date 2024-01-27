"use client"

import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";


export default function SubmiNewJobStatusButton() {
  return (
    <DialogClose>
      <Button type="submit">Submit new form</Button>
    </DialogClose>
  )
}
