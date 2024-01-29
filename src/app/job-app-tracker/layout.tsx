import { redirect } from 'next/navigation';
import type { TLayout } from 'types'
import { JobApplicationTrackerPageMetadata } from '~/lib/config/metadata.config'
import { getServerAuthSession } from '~/lib/server-session'


export const metadata = JobApplicationTrackerPageMetadata


export default async function JobApplicationTrackerPageLayout({ children }: TLayout) {
  const session = await getServerAuthSession();

  if (!session) redirect("/auth")

  return (
    <>{children}</>
  )
}
