"use client"

import { ChangeEvent, useState } from "react";

import { uploadResume } from "~/actions/upload-resume";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";


export default function MakeResumePage() {
  const [file, setFile]= useState<FormData | null>(null)

  return (
    <section>
      ResumePage

      
    </section>
  )
}
