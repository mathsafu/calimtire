import { cn } from "@/lib/utils"

interface DiagonalDividerProps {
  reverse?: boolean
  className?: string
}

export function DiagonalDivider({ reverse = false, className }: DiagonalDividerProps) {
  return (
    <div
      className={cn(
        "diagonal-divider",
        reverse && "diagonal-divider-reverse",
        className
      )}
      aria-hidden="true"
    />
  )
}
