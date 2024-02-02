import { NextResponse, type NextRequest } from "next/server";
import { offerType } from "@prisma/client"

import { db } from "~/server/db";


type TReq = {
  userId: string;
  offerType: offerType
}


export async function POST(req: NextRequest) {
  const { userId, offerType } = await req.json() as TReq;

  const count= await db.jobStatus.count({
    where: {
      userId: userId,
      offerType: offerType
    },
  })

  return NextResponse.json(count);
}