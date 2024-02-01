import { type Metadata } from "next";

import { getServerAuthSession } from "../server-session";
import {
  WEBSITE_DESC,
  WEBSITE_KEYWORDS,
  WEBSITE_LINK,
  WEBSITE_TITLE
} from "./website-data.config";
import {
  GITHUB_LINK,
  NAME,
  TWITTER_USERNAME,
} from "./personal-data.config"


export const RootMetadata: Metadata = {
  title: WEBSITE_TITLE,
  description: WEBSITE_DESC,
  applicationName: WEBSITE_TITLE,
  robots: "index, follow,",
  generator: "Next.js",
  metadataBase: new URL(WEBSITE_LINK),
  keywords: WEBSITE_KEYWORDS,
  authors: {
    name: NAME,
    url: GITHUB_LINK
  },
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


export const MakeResumePageMetadata: Metadata = {
  title: "Make Resume | AppliZen",
  description: "Make new Resume with AppliZen and share it with a single link.",
  keywords: [
    ...WEBSITE_KEYWORDS,
    "make resume",
    "new resume",
    "resume maker",
    "resume",
    "shareable link resume",
    "applizen resume maker",
  ]
}


export const PricingPageMetadata: Metadata = {
  title: "Pricing | AppliZen",
  description: "Pay a very minimal one-time subsription and get access to all services of AppliZen",
  keywords: [
    ...WEBSITE_KEYWORDS,
    "applizen pricing",
    "pricing",
  ]
}


export const FeaturesPageMetadata: Metadata = {
  title: "Features | AppliZen",
  description: "Explore features of our website AppliZen.",
  keywords: [
    ...WEBSITE_KEYWORDS,
    "features of applizen",
    "applizen feature",
    "features",
    "services of applizen",
    "services provided by applizen",
  ]
}


export const JobApplicationTrackerPageMetadata: Metadata = {
  title: "Job Status Application",
  description: "A very simple docs of AppliZen, to have a very good understanding of what the services offer.",
  keywords: [
    ...WEBSITE_KEYWORDS,
    "job application tracker",
    "applizen job application tracker",
    "job application status",
  ]
}


export async function DashboardPageMetadata(): Promise<Metadata> {
  const session = await getServerAuthSession();

  const user = session?.user;
  const userName = user?.name;

  return {
    title: `${userName}'s Dashboard`,
    description: "AppliZen's dashboard",
    keywords: [
      ...WEBSITE_KEYWORDS,
      "applizen dashboard",
      "dashboard of applizen",
      "my applizen dashboard",
      "dashboard",
      "track my application in applizen",
    ]
  }
}


export const AuthPageMetadata: Metadata = {
  title: "SignIn to AppliZen",
  description: "SignIn to applizen and have seamless experience in keeping track of all your job application.",
  keywords: [
    ...WEBSITE_KEYWORDS,
    "signin to applizen",
    "signup to applizen",
    "login to applizen",
    "make new ccount in applizen",
  ]
}


export const SettingPageMetadata: Metadata= {
  title: "Account Settings",
  description: "Edit your profile details of AppliZen account."
}