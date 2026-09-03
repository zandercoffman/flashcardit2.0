import { NextResponse } from "next/server"

import { MCPAction, MCP_READINESS } from "@/lib/mcp/readiness"

export const runtime = "nodejs"

function isAuthorized(request: Request) {
  const token = process.env.FLASHCARDIT_MCP_API_TOKEN
  if (!token) return false

  const authHeader = request.headers.get("authorization")
  if (!authHeader?.startsWith("Bearer ")) return false

  return authHeader.slice(7) === token
}

export async function GET() {
  return NextResponse.json(
    {
      ...MCP_READINESS,
      endpoint: "/api/mcp",
      implementedActions: [] as MCPAction[],
      note: "This endpoint currently reports MCP readiness and blocks mutation actions until secure server-side storage is implemented.",
    },
    { status: 200 },
  )
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      {
        error:
          "Unauthorized MCP request. Configure FLASHCARDIT_MCP_API_TOKEN and send a matching Authorization header.",
      },
      { status: 401 },
    )
  }

  const body = (await request.json().catch(() => null)) as
    | { action?: MCPAction; payload?: unknown }
    | null

  if (!body?.action) {
    return NextResponse.json({ error: "Missing action." }, { status: 400 })
  }

  return NextResponse.json(
    {
      error: `Action '${body.action}' is not enabled yet.`,
      readiness: MCP_READINESS,
    },
    { status: 501 },
  )
}
