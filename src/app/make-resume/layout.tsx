import type { TLayout } from "types";
import { MakeResumePageMetadata } from "~/lib/config/metadata.config";


export const metadata = MakeResumePageMetadata;


export default function MakeResumeLayout({ children }: TLayout) {
  return (
    <>{children}</>
  )
}