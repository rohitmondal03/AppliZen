import { db } from "~/server/db"


type TProps = {
  params: {
    slug: string;
  }
}


export default async function JobStatusPage({ params }: TProps) {
  const jobStatus = await db.jobStatus.findFirst({
    where: {
      jobStatusId: params.slug
    }
  })


  return (
    <section>
      {jobStatus?.companyName}
    </section>
  )
}


export async function generateStaticParams() {
  const jobStatus = await db.jobStatus.findMany();

  return jobStatus.map(det => ({
    slug: det.jobStatusId
  }))
}
