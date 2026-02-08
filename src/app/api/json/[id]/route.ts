import { AllSets } from "@/lib/AllSets";
import { NextResponse } from "next/server";

interface RouteContext {
  params: {
    id: string;
  };
}

export async function GET(_request: Request, { params }: RouteContext) {
  const foundSet = AllSets.find((set) => set.id === params.id);

  if (!foundSet) {
    return NextResponse.json({ error: "Set not found" }, { status: 404 });
  }

  return NextResponse.json(foundSet);
}
