import { Montserrat } from "next/font/google";
import classNames from "classnames";

import type { TLayout } from "types";
import { RootMetadata } from "~/lib/config/metadata.config";
import AuthSessionProvider from "~/components/providers/auth-session-provider";
import { ThemeProvider } from "~/components/providers/theme-provider";
import Navbar from "~/components/shared/navbar";
import Footer from "~/components/shared/footer";
import "~/styles/globals.css";


const fontMont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
})


// Root metadata
export const metadata = RootMetadata;


export default function RootLayout({ children }: TLayout) {
  return (
    <html lang="en">
      <body className={`${fontMont.className}`}>
        <AuthSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className={classNames({
              "py-20 px-32": true,
              "min-h-screen w-full": true,
            })}>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
