import { Inter } from "next/font/google";

import type { TLayout } from "types";
import { RootMetadata } from "~/lib/config/metadata.config";
import AuthSessionProviders from "~/components/providers/AuthSessionProviders";
import "~/styles/globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = RootMetadata;


export default function RootLayout({ children }: TLayout) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <AuthSessionProviders>
          <main>{children}</main>
        </AuthSessionProviders>
      </body>
    </html>
  );
}
