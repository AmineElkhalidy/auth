import authConfig from "./auth.config";
import NextAuth from "next-auth";

import {
  DEFAUTL_LOGIN_REDIRECT,
  publicRoutes,
  apiAuthPrefix,
  authRoutes,
} from "./route";
import { NextResponse } from "next/server";

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiRouteAuth = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiRouteAuth) return NextResponse.next();

  if (isAuthRoute) {
    if (isLoggedIn)
      return Response.redirect(new URL(DEFAUTL_LOGIN_REDIRECT, nextUrl));
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
