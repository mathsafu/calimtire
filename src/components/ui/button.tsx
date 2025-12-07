import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glossy-light" | "glossy-dark" | "outline" | "ghost"
  size?: "xs" | "sm" | "md" | "lg"
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles = "rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent relative"

    const variants = {
      // Primary: Simple glass with sharp border (header navigation)
      primary: cn(
        "bg-white/10 backdrop-blur-sm",
        "border border-white/25",
        "text-white font-light",
        "hover:bg-white/15 hover:border-white/30",
        "active:scale-95"
      ),

      // Secondary: Gradient CTA with sharp border (hero primary + form submit)
      secondary: cn(
        "bg-gradient-to-r from-primary-600 to-primary-500",
        "border border-white/20",
        "text-white font-medium",
        "hover:from-primary-500 hover:to-primary-400 hover:border-white/25",
        "active:scale-95"
      ),

      // Glossy Light: Simple white with sharp border (hero secondary)
      "glossy-light": cn(
        "bg-white/90 backdrop-blur-sm",
        "border border-gray-300/40",
        "text-gray-900 font-light",
        "hover:bg-white hover:border-gray-300/50",
        "active:scale-95"
      ),

      // Glossy Dark: Alternative dark style
      "glossy-dark": cn(
        "bg-gray-900/90 backdrop-blur-sm",
        "border border-white/20",
        "text-white font-light",
        "hover:bg-gray-900 hover:border-white/25",
        "active:scale-95"
      ),

      // Outline: Simple bordered style
      outline: "bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white active:scale-95",

      // Ghost: Minimal style
      ghost: "bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200"
    }

    const sizes = {
      xs: "px-3 py-1.5 text-xs",
      sm: "px-6 py-2.5 text-sm",
      md: "px-8 py-3 text-base",
      lg: "px-12 py-4 text-xl"
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Chargement...
          </span>
        ) : children}
      </button>
    )
  }
)

Button.displayName = "Button"
export { Button }
