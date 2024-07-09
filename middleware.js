import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "fr"],
  // defaultLocale: "en",
});

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/dashboard/settings/profile(.*)",
  "/en/dashboard(.*)",
  "/en/dashboard/settings/profile(.*)",
  "/fr/dashboard(.*)",
  "/fr/dashboard/settings/profile(.*)",
  "/en/pay(.*)",
  "/fr/pay(.*)",
]);

const isPublicRoute = createRouteMatcher([
  "/",
  "/blog(.*)",
  "/api(.*)",
  "/en/api/webhook(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

const apiRoutes = createRouteMatcher([
  "/api(.*)",
  "/api/Articles(.*)",
  "/en/api/webhook(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req) && !apiRoutes(req) && isProtectedRoute(req)) {
    auth().protect(); // Protect all routes except public routes
  }

  return intlMiddleware(req);
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/(fr|en)/:path*",
  ],
};
