import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { type NextRequestWithAuth, withAuth } from "next-auth/middleware"


export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const token = await getToken({ req })
    const isAuth = !!token;
    const dashboardPath = req.nextUrl.pathname.startsWith("/dashboard");
    const authPagePath = req.nextUrl.pathname === "/auth";

    if(!isAuth) {
      if(dashboardPath){
        return NextResponse.redirect(new URL("/auth", req.url))
      }
    }
    // else {
    //   if(authPagePath) {
    //     return NextResponse.redirect(new URL("/dashboard", req.url))
    //   }
    // }
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true;
      },
    },
  },
)

export const config = {
  matcher: ["/dashboard/:path*"],
  // "/auth/:path*"
}