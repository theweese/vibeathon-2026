import Link from 'next/link'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import { Button, PageHeader, Card, CardContent } from '@/components/ui'

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
            <Card className="max-w-md w-full text-center p-8 border-slate-200">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-red-50 rounded-full">
                        <AlertCircle className="w-12 h-12 text-red-500" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-slate-900 mb-2">404</h1>
                <h2 className="text-xl font-semibold text-slate-700 mb-4">Page Not Found</h2>

                <p className="text-slate-500 mb-8">
                    The view or resource you are looking for doesn't exist or has been moved.
                </p>

                <Link href="/">
                    <Button variant="primary" className="w-full gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Return to Dashboard</span>
                    </Button>
                </Link>
            </Card>
        </div>
    )
}
