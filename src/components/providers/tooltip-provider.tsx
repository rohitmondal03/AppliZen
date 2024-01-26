"use client"

import type { TLayout } from "types"
import { TooltipProvider } from "../ui/tooltip"


export default function ToolTipProvider({ children }: TLayout) {
  return (
    <TooltipProvider>
      {children}
    </TooltipProvider>
  )
}