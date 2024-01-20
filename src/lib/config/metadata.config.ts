import { type Metadata } from "next";

import { WEBSITE_DESC, WEBSITE_KEYWORDS, WEBSITE_LINK, WEBSITE_TITLE } from "./website-data.config";
import { TWITTER_USERNAME } from "./personal-data.config"


export const RootMetadata: Metadata = {
  title: WEBSITE_TITLE,
  description: WEBSITE_DESC,
  applicationName: WEBSITE_TITLE,
  robots: "index, follow,",
  generator: "Next.js",
  metadataBase: new URL(WEBSITE_LINK),
  keywords: WEBSITE_KEYWORDS,
  twitter: {
    card: "summary_large_image",
    title: WEBSITE_TITLE,
    description: WEBSITE_DESC,
    creator: `@${TWITTER_USERNAME}`,
  }
};