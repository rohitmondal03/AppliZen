import { Skeleton } from "~/components/ui/skeleton"


export default function LoadingState() {
  return (
    <div className="h-[60vh] mx-auto flex items-center justify-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
