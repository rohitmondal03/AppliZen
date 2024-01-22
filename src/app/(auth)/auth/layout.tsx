import { redirect } from 'next/navigation';

import type { TLayout } from 'types'
import { getServerAuthSession } from '~/lib/server-session'


export default async function AuthLayout({children}: TLayout) {
  (await getServerAuthSession()) ? redirect("/dashboard") : null;

  return (
    <>{children}</>
  )
}
