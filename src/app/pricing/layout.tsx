import type { TLayout } from "types";
import { PricingPageMetadata } from "~/lib/config/metadata.config";


export const metadata = PricingPageMetadata;


export default function PricingPageLayout({ children }: TLayout) {
  return (
    <>{children}</>
  )
}
