import { GenerateService } from "@/services/generate.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const sync = await GenerateService.generateResponse(body);

  return NextResponse.json(sync);
}
