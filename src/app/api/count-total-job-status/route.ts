import { NextResponse, type NextRequest } from "next/server";

import { db } from "~/server/db";


type TReq = {
  userId: string;
}


export async function POST(req: NextRequest) {
  const { userId } = await req.json() as TReq;

  const count= await db.jobStatus.count({
    where: {
      userId: userId,
    },
  })

  return NextResponse.json(count);
}