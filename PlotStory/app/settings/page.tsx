"use client"

import { useState } from 'react'
import { PageHeader, Card, CardHeader, CardTitle, CardContent, Button } from '@/components/ui'
import { Settings, UploadCloud, Globe, CheckCircle2, FileArchive, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SettingsPage() {
    const [isPublishing, setIsPublishing] = useState(false)
    const [isPublished, setIsPublished] = useState(false)
    const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'done'>('idle')

    const handleUpload = () => {
        setUploadState('uploading')
        setTimeout(() => {
            setUploadState('done')
        }, 2000)
    }

    const handlePublish = () => {
        setIsPublishing(true)
        setTimeout(() => {
            setIsPublishing(false)
            setIsPublished(true)
        }, 1500)
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <PageHeader
                title="City Planner Settings"
                description="Manage municipal historical archives and public portal access."
                icon={Settings}
            />

            <div className="grid gap-6">
                {/* Archive Upload Section */}
                <Card className="border-slate-200">
                    <CardHeader className="border-b bg-slate-50/50">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <FileArchive className="w-5 h-5 text-indigo-500" />
                            Ingest Historical Archives
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <p className="text-slate-600 mb-4 text-sm">
                            Upload scanned microfilm, raw TIFF photos, or unstructured PDF logs. Our AI will automatically extract the addresses, estimate dates, and index them against the civic zoning database.
                        </p>

                        <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                            {uploadState === 'idle' && (
                                <>
                                    <div className="p-4 bg-white rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                        <UploadCloud className="w-8 h-8 text-indigo-500" />
                                    </div>
                                    <h4 className="font-semibold text-slate-900 mb-1">Click to upload or drag and drop</h4>
                                    <p className="text-xs text-slate-500">ZIP, PDF, TIFF, or JPG (max. 10GB per batch)</p>
                                    <Button variant="outline" className="mt-4" onClick={handleUpload}>Select Files</Button>
                                </>
                            )}
                            {uploadState === 'uploading' && (
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full border-4 border-indigo-200 border-t-indigo-500 animate-spin mb-4" />
                                    <p className="font-medium text-slate-900">AI Processing Archive...</p>
                                    <p className="text-xs text-slate-500 mt-1">Extracting architectural data and running OCR.</p>
                                </div>
                            )}
                            {uploadState === 'done' && (
                                <div className="flex flex-col items-center">
                                    <div className="p-4 bg-green-100 rounded-full mb-4">
                                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <p className="font-medium text-slate-900">Archive Indexed Successfully</p>
                                    <p className="text-xs text-slate-500 mt-1">Found 4,192 new historical data points.</p>
                                    <Button variant="outline" className="mt-4" onClick={() => setUploadState('idle')}>Upload Another Batch</Button>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Public Portal Section */}
                <Card className="border-slate-200 border-l-4 border-l-blue-500">
                    <CardHeader className="border-b bg-slate-50/50">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Globe className="w-5 h-5 text-blue-500" />
                            Public "Memory Lane" Portal
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-2">
                                <h4 className="font-semibold text-slate-900">Publish to Citizens</h4>
                                <p className="text-sm text-slate-600 max-w-md">
                                    Enable the public-facing portal for residents. This automatically strips sensitive developer data (like hazard maps and permits) and only displays the historical timelines and AI chat assistant.
                                </p>
                            </div>

                            <div className="flex flex-col items-end gap-3 shrink-0">
                                {!isPublished ? (
                                    <Button
                                        variant="primary"
                                        className="min-w-[140px] bg-blue-600 hover:bg-blue-700"
                                        onClick={handlePublish}
                                        disabled={isPublishing}
                                    >
                                        {isPublishing ? 'Publishing...' : 'Publish Portal'}
                                    </Button>
                                ) : (
                                    <div className="flex flex-col items-end gap-3">
                                        <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-200 text-sm font-medium">
                                            <CheckCircle2 className="w-4 h-4" />
                                            Live & Accessible
                                        </div>
                                        <Link href="/public">
                                            <Button variant="outline" className="gap-2 text-blue-600 hover:text-blue-700">
                                                View Public Site <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
