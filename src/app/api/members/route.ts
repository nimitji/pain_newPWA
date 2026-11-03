import { NextResponse } from "next/server";
import { getFilteredMembers } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword") || undefined;
  const sort = searchParams.get("sort") || undefined;
  const direction = (searchParams.get("direction") || "asc") as "asc" | "desc";
  const page = parseInt(searchParams.get("page") || "1", 10) || 1;
  const pageSize = parseInt(searchParams.get("pageSize") || "20", 10) || 20;

  const result = getFilteredMembers({
    keyword,
    sort,
    direction,
    page,
    pageSize,
  });

  return NextResponse.json(result);
}
