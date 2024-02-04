"use server"

import { ChangeEvent } from "react"
import UuidGenerator from "uuid-wand"

import { getServerAuthSession } from "~/lib/server-session"
import { supabaseClient } from "~/lib/supbase"
import { db } from "~/server/db"


export async function uploadResume(e: FormData) {
  const uuid = UuidGenerator.v1();
  const session = await getServerAuthSession();
  const user = session?.user;
  
  const file= e;

  const { data, error } = await supabaseClient
    .storage
    .from('bucket_name')
    .upload(uuid + "/" + user?.id, file)

  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
}
