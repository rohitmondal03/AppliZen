import Link from 'next/link'
import classNames from 'classnames'

import Logo from './logo'


export default function Footer() {
  return (
    <footer className={classNames({
      "flex items-center justify-start gap-x-8": true,
      "py-10 px-20": true,
      "text-[0.9rem]": true,
    })}>
      <Logo />

      <p>
        Built by {" "}
        <Link href={"/r"} className='underline font-bold'>@rohit</Link>.
        Authetication by {" "}
        <Link href={"https://next-auth.js.org"} className='underline font-bold'>next-auth</Link>.
        Hosted on {" "}
        <Link href={"https://vercel.com"} className='underline font-bold'>Vercel</Link>.
        Database ORM- {" "}
        <Link href={"https://prisma.io"} className='underline font-bold'>Prisma</Link>.
        Components by {" "}
        <Link href={"https://ui.shadcn.com/"} className='underline font-bold'>shadcnUI</Link>.
        Illustrations by {" "}
        <Link href={"https://undraw.co/illustrations"} className='underline font-bold'>undraw</Link>.
      </p>
    </footer>
  )
}
