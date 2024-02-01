import type { NextRequest } from "next/server";

import { db } from "~/server/db";

type TReq = {
  id: string;
}

export async function POST(req: NextRequest) {
  const { id } = await req.json() as TReq;

  await db.jobStatus.delete({
    where: {
      jobStatusId: id
    },
  })
}