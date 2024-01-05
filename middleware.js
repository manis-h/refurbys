import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req, res, next) {
  return next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/uploadproduct",
};
