"use client"

import { useFormStatus } from "react-dom";

import { Button } from "../ui/button";


export default function SubmiNewJobStatusButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit">
      {pending ? "Submitting..." : "Submit new form"}
    </Button>
  )
}
