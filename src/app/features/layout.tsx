import type { TLayout } from 'types'
import { FeaturesPageMetadata } from '~/lib/config/metadata.config'


export const metadata= FeaturesPageMetadata


export default function FeaturesPageLayout({children}: TLayout) {
  return (
    <>{children}</>
  )
}
