// "use server"

import { ChangeEvent } from "react"
import UuidGenerator from "uuid-wand"

import { getServerAuthSession } from "~/lib/server-session"
import { supabaseClient } from "~/lib/supabase"


export async function uploadResume(e: File | undefined | null) {
  let file: File | undefined;

  if (e) {
    file = e;
  }

  const uuid = UuidGenerator.v1();
  // const session = await getServerAuthSession();
  // const user = session?.user;

  // const { data, error } = await supabaseClient
  //   .storage
  //   .from('resume')
  //   .upload(uuid + "/" + user?.id, file as File)

  // if (error) {
  //   console.log("Error", error.message)
  // } else {
  //   console.log(data)
  // }

  // try {
  //   console.log(file);
  // } catch (error) {
  //   console.log(error);
  // }
}
