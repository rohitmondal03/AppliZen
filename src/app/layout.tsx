import { Montserrat as Inter } from "next/font/google";
import classNames from "classnames";

import type { TLayout } from "types";
import { RootMetadata } from "~/lib/config/metadata.config";
import AuthSessionProvider from "~/components/providers/auth-session-provider";
import { ThemeProvider } from "~/components/providers/theme-provider";
import ToolTipProvider from "~/components/providers/tooltip-provider";
import Navbar from "~/components/shared/navbar";
import Footer from "~/components/shared/footer";
import "~/styles/globals.css";


const fontSans = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
})


// Root metadata
export const metadata = RootMetadata;


export default function RootLayout({ children }: TLayout) {
  return (
    <html lang="en">
      <body className={`${fontSans.className}`}>
        <AuthSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToolTipProvider>
              <Navbar />
              <main className={classNames({
                "py-20 px-32": true,
                "min-h-screen w-full": true,
              })}>
                {children}
              </main>
              <Footer />
            </ToolTipProvider>
          </ThemeProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
