"use client"

import UuidGenerator from 'uuid-wand'

import { useAuth } from '~/hooks/use-auth'
import { supabaseClient } from '~/lib/supabase'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'


export default function UploadResumeForm() {
  const { userId } = useAuth();

  // For submitting resumes
  const submitFile = async (file: File | undefined) => {
    const uuid = UuidGenerator.v1();

    const { data, error } = await supabaseClient
      .storage
      .from('resume')
      .upload(uuid + "/" + userId, file)

    console.log(data);
  }


  return (
    <form>
      <Input
        type='file'
        accept='.pdf, .docx, .doc'
        onChange={(e) => {
          if (e.target.files) {
            submitFile(e.target.files[0])
          } else return;
        }}
      />

      <Button type='submit'>
        Submit
      </Button>
    </form>
  )
}
