"use client"

import { uploadResume } from '~/actions/upload-resume'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'


export default function UploadResumeForm() {
  return (
    <form>
      <Input 
        type='file'
        accept='.pdf, .docx, .doc'
        onChange={(e) => uploadResume(e)}
      />

      <Button type='submit'>
        Submit
      </Button>
    </form>
  )
}
