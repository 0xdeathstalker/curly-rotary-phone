import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/pricing") {
    const hasCompletedForm = request.cookies.get("form_completed");

    if (!hasCompletedForm) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/pricing"],
};
