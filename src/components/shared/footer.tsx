import classNames from 'classnames'

import Logo from './logo'
import { ModeToggle } from '../buttons/mode-toggle-button'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className={classNames({
      "flex items-center justify-between": true,
      "py-10 px-20": true,
    })}>
      <div className={classNames({
        "flex items-center justify-center gap-x-8": true,
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
          <br />
          Database ORM - {" "}
          <Link href={"https://prisma.io"} className='underline font-bold'>Prisma</Link>.
          Components by {" "}
          <Link href={"https://ui.shadcn.com/"} className='underline font-bold'>shadcnUI</Link>.
          Illustrations by {" "}
          <Link href={"https://undraw.co/illustrations"} className='underline font-bold'>undraw</Link>.
        </p>
      </div>

      <ModeToggle />
    </footer>
  )
}
