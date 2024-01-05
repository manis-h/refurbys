import next from "next";
import { NextResponse } from "next/server";

export default async function GET(req, res) {
  return NextResponse("Hi");
}
