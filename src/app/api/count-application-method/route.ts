import { type NextRequest, NextResponse } from "next/server";
import type { applicationMethod } from "@prisma/client"

import { db } from "~/server/db";


type TReq = {
  userId: string;
  applicationMethod: applicationMethod;
}


export async function POST(req: NextRequest) {
  const { userId, applicationMethod } = await req.json() as TReq;

  const count = await db.jobStatus.count({
    where: {
      userId: userId,
      applicationMethod: applicationMethod,
    }
  })

  return NextResponse.json(count);
}