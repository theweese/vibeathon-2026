'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Button, PageHeader, Card, CardContent } from '@/components/ui'
import { AlertOctagon, RotateCcw } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service if available
        console.error(error)
    }, [error])

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
            <Card className="max-w-md w-full text-center p-8 border-red-200 bg-red-50">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-red-100 rounded-full">
                        <AlertOctagon className="w-12 h-12 text-red-600" />
                    </div>
                </div>

                <h2 className="text-xl font-bold text-red-900 mb-2">Something went wrong!</h2>
                <p className="text-red-700 mb-8 max-h-32 overflow-auto text-sm text-left px-4">
                    {error.message || "An unexpected error occurred in this module."}
                </p>

                <Button
                    variant="danger"
                    className="w-full gap-2"
                    onClick={() => reset()}
                >
                    <RotateCcw className="w-4 h-4" />
                    <span>Try again</span>
                </Button>
            </Card>
        </div>
    )
}
