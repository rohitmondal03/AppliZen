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
  appleWebApp: {
    title: WEBSITE_TITLE,
    statusBarStyle: "default",
    capable: true,
  },
  twitter: {
    card: "summary_large_image",
    title: WEBSITE_TITLE,
    description: WEBSITE_DESC,
    creator: `@${TWITTER_USERNAME}`,
  },
  openGraph: {
    title: WEBSITE_TITLE,
    description: WEBSITE_DESC,
    siteName: WEBSITE_TITLE,
    url: WEBSITE_LINK,
    type: "website",
  }
};


export const MakeResumePageMetadata: Metadata= {
  title: "Make Resume || AppliZen",
  description: "Make new Resume with AppliZen and share it with a single link.",
}


export const PricingPageMetadata: Metadata= {
  title: "Pricing",
  description: "Pay a very minimal one-time subsription and get access to all services of AppliZen"
}


export const FeaturesPageMetadata: Metadata= {
  title: "Features",
  description: "Explore features of our website AppliZen."
}