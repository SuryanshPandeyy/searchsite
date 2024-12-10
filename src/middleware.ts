import { NextRequest, NextResponse } from "next/server"

export const middleware = (req: NextRequest) => {
    const newUrl = req.nextUrl
    return NextResponse.rewrite(newUrl)
}