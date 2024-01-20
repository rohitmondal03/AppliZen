import { getToken } from "next-auth/jwt"
import { type NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

// export { default } from "next-auth/middleware"

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const token = await getToken({ req })
    const isAuth = !!token
    const dashboardPath = req.nextUrl.pathname === "/dashboard";
    const isAuthPage =
      req.nextUrl.pathname === "/auth/login" ||
      req.nextUrl.pathname === "/auth/register"


    if (isAuth && isAuthPage) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    if (!isAuth && dashboardPath) {
      return NextResponse.redirect(new URL(`/auth`, req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true
      },
    },
  }
)

export const config = {
  matcher: ["/dashboard/:path*", "/auth/register/", "/auth/login/"],
}