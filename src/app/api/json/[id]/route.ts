import { AllSets } from "@/lib/AllSets";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop();
  const foundSet = AllSets.find((set) => set.id === id);

  if (!id || !foundSet) {
    return NextResponse.json({ error: "Set not found" }, { status: 404 });
  }

  return NextResponse.json(foundSet);
}
