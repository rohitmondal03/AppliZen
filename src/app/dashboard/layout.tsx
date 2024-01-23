import { redirect } from 'next/navigation';

import type { TLayout } from 'types'
import { DashboardPageMetadata } from '~/lib/config/metadata.config';
import { getServerAuthSession } from '~/lib/server-session'


export const generateMetadata = async () => await DashboardPageMetadata()


export default async function DashboardLayout({ children }: TLayout) {
  !(await getServerAuthSession()) ? redirect("/auth") : null;

  return (
    <>
      {children}
    </>
  )
}
