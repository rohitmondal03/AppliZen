import type { TLayout } from "types";
import { ResumePageMetadata } from "~/lib/config/metadata.config";


export const metadata = ResumePageMetadata;


export default function ResumePageLayout({ children }: TLayout) {
  return (
    <>{children}</>
  )
}