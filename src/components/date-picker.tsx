"use client"

import type { Dispatch, SetStateAction } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "@radix-ui/react-icons"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Calendar } from "~/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"


type TProps = {
  placeholder: string;
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
}


export function DatePicker(
  { date, setDate, placeholder }: TProps
) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[400px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
