import authConfig from "./auth.config";
import NextAuth from "next-auth";
export const { auth } = NextAuth(authConfig);
import {
  DEFAUTL_LOGIN_REDIRECT,
  publicRoutes,
  apiAuthPrefix,
  authRoutes,
} from "./route";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiRouteAuth = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiRouteAuth) return null;

  if (isAuthRoute) {
    if (isLoggedIn)
      return Response.redirect(new URL(DEFAUTL_LOGIN_REDIRECT, nextUrl));
    return null;
  }

  if (!isLoggedIn && !isPublicRoute)
    return Response.redirect(new URL("/auth/login", nextUrl));

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
