import { redirect } from 'next/navigation';

import type { TLayout } from 'types'
import { getServerAuthSession } from '~/lib/server-session'
import { AuthPageMetadata } from '~/lib/config/metadata.config';


export const metadata= AuthPageMetadata;


export default async function AuthLayout({children}: TLayout) {
  (await getServerAuthSession()) ? redirect("/dashboard") : null;

  return (
    <>{children}</>
  )
}
