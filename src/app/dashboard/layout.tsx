import { redirect } from 'next/navigation';

import { TLayout } from 'types'
import { getServerAuthSession } from '~/lib/server-session'


export default async function DashboardLayout({ children }: TLayout) {
  !(await getServerAuthSession()) ? redirect("/auth") : null;

  return (
    <>
      {children}
    </>
  )
}
