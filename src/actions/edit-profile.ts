"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getServerAuthSession } from "~/lib/server-session";
import { db } from "~/server/db"


type TParams = {
  name: string;
  email: string;
}


export async function editProfile(
  { name, email }: TParams
) {
  const session= await getServerAuthSession();
  const user= session?.user;

  await db.user.update({
    where: {
      id:  user?.id
    },
    data: {
      name: name.trim(),
      email: email.trim(),
    }
  })

  revalidatePath("/dashboard/setting");
  redirect("/dashboard")
}