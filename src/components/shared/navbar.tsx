"use client"

import Link from "next/link";
import classNames from "classnames";

import { mainNavContent } from "~/lib/config/main-nav";
import { cn } from "~/lib/utils";
import { useAuth } from "~/hooks/use-auth";
import Logo from "./logo";
import { ModeToggle } from "../buttons/mode-toggle-button";
import { buttonVariants } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


export default function Navbar() {
  const { isAuthenticated, userName, userProfilePic } = useAuth();


  return (
    <nav className={classNames({
      "flex flex-row items-center justify-around": true,
      "py-8": true,
    })}>
      <section className={classNames({
        "flex items-center justify-center gap-10": true,
      })}>
        <Logo />

        <div className="space-x-7">
          {mainNavContent.map((data) => (
            <Link
              key={data.href}
              href={data.href}
              className={classNames({
                "text-muted-foreground": true,
                "hover:text-black dark:hover:text-white hover:underline": true,
                "transition-all duration-300 ease-out": true,
              })}
            >
              {data.label}
            </Link>
          ))}
        </div>
      </section>

      <div className={classNames({
        "flex items-center justify-center gap-16": true,
      })}>
        {isAuthenticated === "authenticated" ? (
          <Link href={"/dashboard"} className="cursor-pointer hover:scale-110 transition ease-out">
            <Avatar>
              <AvatarFallback>{userName?.charAt(0)}</AvatarFallback>
              <AvatarImage
                src={(userProfilePic)}
                alt="profile-pic of applizen user"
              />
            </Avatar>
          </Link>
        ) : (
          <Link
            href={"/auth"}
            className={cn(buttonVariants({
              variant: "secondary",
              size: "lg",
            }))}
          >
            Login
          </Link>
        )}

        <ModeToggle />
      </div>
    </nav>
  )
}