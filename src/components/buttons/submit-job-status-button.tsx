"use client"

import { useFormStatus } from "react-dom";

import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";


export default function SubmiNewJobStatusButton() {
  const { pending } = useFormStatus();

  return (
    <DialogClose>
      <Button type="submit">
        {pending ? "Submitting..." : "Submit new form"}
        </Button>
    </DialogClose>
  )
}
