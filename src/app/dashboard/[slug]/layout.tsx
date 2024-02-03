import type { TLayout } from 'types'
import { getServerAuthSession } from '~/lib/server-session'


export default async function SingleJobStatusLayout({ children }: TLayout) {
  const session = await getServerAuthSession();
  const user = session?.user;
  const userId = user?.id;

  return (
    <>{children}</>
  )
}
