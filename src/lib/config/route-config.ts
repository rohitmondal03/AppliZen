import { createNavigationConfig } from "next-safe-navigation";
import { z } from "zod";


export const { routes, useSafeParams, useSafeSearchParams } = createNavigationConfig(
  (defineRoute) => ({
    homeRoute: defineRoute('/'),
    pricingRoute: defineRoute("/pricing"),
    authRoute: defineRoute("/auth"),
    feturesRoute: defineRoute("/features"),
    jobAppTrackerRoute: defineRoute("/job-app-tracker"),
    resumeRoute: defineRoute("/resume"),
    dashboardRoute: defineRoute("/dashboard/[slug]", {
      params: z.object({
        slug: z.string(),
      })
    }),
  }),
);