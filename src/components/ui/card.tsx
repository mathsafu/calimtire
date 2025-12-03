import { type HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "highlight" | "service"
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-white rounded-3xl p-6 shadow-sm",
      highlight: "bg-white rounded-3xl p-8 border-2 border-accent-500 shadow-lg",
      service: "bg-neutral-100 rounded-3xl p-8 flex flex-col items-center text-center min-h-[200px] hover:shadow-lg transition-shadow duration-300"
    }

    return (
      <div
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"
export { Card }
