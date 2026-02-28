import { AlertCircle } from "lucide-react"

/**
 * Generic Accessible Form Error State
 * 
 * Tomorrow, use this anywhere a Zod schema or API fetch fails. 
 * It automatically announces itself to screen readers via aria-live="polite".
 */

export function FormError({ message }: { message?: string }) {
    if (!message) return null

    return (
        <div
            className="bg-red-50/50 text-red-600 border border-red-200 p-3 rounded-md flex items-center gap-x-2 text-sm mt-2"
            role="alert"
            aria-live="polite"
        >
            <AlertCircle className="h-4 w-4 shrink-0" />
            <p>{message}</p>
        </div>
    )
}
