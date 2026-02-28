import { SearchX } from "lucide-react"
import { Button } from "./index"

/**
 * Generic "Data Not Found" Component
 * 
 * Tomorrow, when the user searches for a farmer, a medical record, or an event
 * and the database returns 0 results, render this instead of a blank table.
 */

export function NoResults({
    query,
    resetSearch
}: {
    query?: string,
    resetSearch?: () => void
}) {
    return (
        <div className="flex flex-col items-center justify-center p-12 text-center border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm w-full">
            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
                <SearchX className="w-8 h-8 text-slate-400 dark:text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                No results found
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
                {query
                    ? `We couldn't find anything matching "${query}". Try adjusting your filters or checking for typos.`
                    : "We couldn't find any data matching your request."}
            </p>

            {resetSearch && (
                <Button onClick={resetSearch} variant="secondary">
                    Clear Search Filters
                </Button>
            )}
        </div>
    )
}
