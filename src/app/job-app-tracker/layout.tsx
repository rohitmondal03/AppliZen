import type { TLayout } from 'types'
import { JobApplicationTrackerPageMetadata } from '~/lib/config/metadata.config'


export const metadata = JobApplicationTrackerPageMetadata


export default function JobApplicationTrackerPageLayout({ children }: TLayout) {
  return (
    <>{children}</>
  )
}
