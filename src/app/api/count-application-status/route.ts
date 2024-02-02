import { NextResponse, type NextRequest } from "next/server";
import type { applicationStatus } from "@prisma/client"

import { db } from "~/server/db";


type TReq = {
  userId: string;
  applicationStatus: applicationStatus
}


export async function POST(req: NextRequest) {
  const { userId, applicationStatus } = await req.json() as TReq;

  const count = await db.jobStatus.count({
    where: {
      userId: userId,
      applicationStatus: applicationStatus
    }
  })

  return NextResponse.json(count)
}