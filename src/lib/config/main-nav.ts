import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { IconProps } from "@radix-ui/react-icons/dist/types";
import { PersonIcon, IdCardIcon, GearIcon } from "@radix-ui/react-icons"


type TAvatarNavDropdown = {
  label: string;
  path: string;
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}


export const mainNavContent = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing"
  },
  {
    label: "Make Resume",
    href: "/make-resume"
  },
  {
    label: " Job Application Tracker",
    href: "/job-app-tracker",
  },
]



export const avatarNavDropdown: TAvatarNavDropdown[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    Icon: PersonIcon,
  },
  {
    label: "Setting",
    path: "/dashboard/setting",
    Icon: GearIcon,
  },
  {
    label: "Billing",
    path: "/dashboard/billing",
    Icon: IdCardIcon
  },
]