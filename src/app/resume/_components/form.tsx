"use client"

import { type ChangeEvent, useState, useEffect } from 'react'

import { uploadResume } from '~/actions/upload-resume'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'


export default function UploadResumeForm() {
  const [inputEv, setInputEv] = useState<File>();


  return (
    <form action={() => {
      if (inputEv) {
        uploadResume(inputEv);
      }
    }}>
      <Input
        type='file'
        accept='.pdf, .docx, .doc'
        onChange={(e) => uploadResume(e.target.files[0])}
      />

      <Button type='submit'>
        Submit
      </Button>
    </form>
  )
}
