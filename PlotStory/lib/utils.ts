import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function to intelligently merge Tailwind CSS classes.
 * It resolves conflicts (e.g., passing p-4 and p-8) and allows for conditional classes.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
