import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

// --- Button Component ---
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost"
}

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline: "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "hover:bg-slate-100 hover:text-slate-900",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

// --- Input Component ---
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && (
          <label className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:ring-red-400",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    )
  }
)
Input.displayName = "Input"

// --- Card Component ---
export function Card({ className = "", children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ className = "", children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ className = "", children }: { className?: string, children: React.ReactNode }) {
  return (
    <h3 className={`font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>
  )
}

export function CardContent({ className = "", children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`p-6 pt-0 flex-grow ${className}`}>
      {children}
    </div>
  )
}

// --- Page Header Component ---
export function PageHeader({
  title,
  description,
  icon: Icon,
  action
}: {
  title: string,
  description?: string,
  icon?: LucideIcon,
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="p-2 bg-slate-100 rounded-lg">
            <Icon className="w-6 h-6 text-slate-600" />
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
          {description && (
            <p className="text-slate-500 mt-1">{description}</p>
          )}
        </div>
      </div>
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  )
}
