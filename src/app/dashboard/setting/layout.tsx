import type { TLayout } from 'types'
import { SettingPageMetadata } from '~/lib/config/metadata.config'


export const metadata= SettingPageMetadata;


export default async function SettingPageLayout({ children }: TLayout) {
  return (
    <>
      {children}
    </>
  )
}
