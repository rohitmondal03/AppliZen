"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { cn } from "~/lib/utils";
import { useAuth } from "~/hooks/use-auth";
import { avatarNavDropdown, mainNavContent } from "~/lib/config/main-nav";
import Logo from "./logo";
import { ModeToggle } from "../buttons/mode-toggle-button";
import { buttonVariants } from "../ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";


export default function Navbar() {
  const { isAuthenticated, userName, userProfilePic } = useAuth();
  const pathName = usePathname();


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
              key={data.label}
              href={data.href}
              className={cn(buttonVariants({
                variant: pathName === data.href ? "secondary" : "link"
              }))}
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Avatar>
                <AvatarFallback>{userName?.charAt(0)}</AvatarFallback>
                <AvatarImage
                  src={(userProfilePic)}
                  alt="profile-pic of applizen user"
                />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {avatarNavDropdown.map((items) => (
                <DropdownMenuItem>
                  <Link
                    className="flex items-center justify-between"
                    href={items.path}
                  >
                    <items.Icon className="mr-3" /> {items.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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