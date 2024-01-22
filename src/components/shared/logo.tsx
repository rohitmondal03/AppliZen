"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import classNames from "classnames"

// Route segment config
export const runtime = 'edge'

export default function Logo() {
  const { theme } = useTheme();
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true);
  }, [])

  if (!isLoading) {
    return null;
  }

  return (
    <Link
      href={"/"}
      className={classNames({
        "bg-black": theme === "light",
        "bg-white": theme === "dark",
        "rounded-lg": true,
        "h-12 w-12": true,
        "flex items-center justify-center": true,
        "cursor-pointer": true,
        "hover:scale-110 hover:rotate-[30deg]": true,
        "transition duration-300 ease-out": true,
      })}
    >
      <div className={classNames({
        "bg-white": theme === "light",
        "bg-black": theme === "dark",
        "rounded-full": true,
        "h-6 w-6": true,
      })} />
    </Link>

  )
}