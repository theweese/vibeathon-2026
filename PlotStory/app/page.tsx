"use client"

import { useState } from 'react'
import { PageHeader, Card, CardHeader, CardTitle, CardContent, Button, Input } from '@/components/ui'
import { Search, MapPin, Building2, AlertTriangle, FileText, History, Calendar, FileBadge, Image as ImageIcon } from 'lucide-react'
import propertiesData from '../public/properties.json'

export default function DeveloperDashboard() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null)

  const filteredProperties = propertiesData.filter(p =>
    p.address.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const selectedProperty = propertiesData.find(p => p.id === selectedPropertyId)

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <PageHeader
        title="Developer Dashboard"
        description="Search civic data, due diligence, and historical context for St. Joseph parcels."
        icon={Building2}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Search & List */}
        <div className="lg:col-span-4 space-y-4 flex flex-col h-[calc(100vh-12rem)]">
          <Card className="shadow-sm border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <CardContent className="p-4 pt-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400 dark:text-slate-500" />
                <Input
                  placeholder="Search by street address..."
                  className="pl-9 bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-800"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {filteredProperties.length === 0 ? (
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center py-8">No properties found matching "{searchQuery}"</p>
            ) : (
              filteredProperties.slice(0, 25).map((property) => (
                <div
                  key={property.id}
                  onClick={() => setSelectedPropertyId(property.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 hover:shadow-md ${selectedPropertyId === property.id
                    ? 'border-blue-500 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-800'
                    }`}
                >
                  <div className="flex gap-3">
                    <div className="mt-1">
                      <MapPin className={`w-5 h-5 ${selectedPropertyId === property.id ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 leading-tight">{property.address}</h4>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {property.civicData.zoning.split(' ')[0]}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/50">
                          EST. {property.historicalData.estimatedYear}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Side: Property Detail View (Plot Report) */}
        <div className="lg:col-span-8 h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar pr-2">
          {selectedProperty ? (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 fade-in">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                    Plot Report: {selectedProperty.address}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                    <FileBadge className="w-4 h-4" />
                    Parcel ID: {selectedProperty.id.replace('ml_', '11-04-').toUpperCase()}
                    &nbsp;&bull;&nbsp;
                    {selectedProperty.civicData.lotSizeSqFt.toLocaleString()} sq ft
                  </p>
                </div>
                <Button variant="primary" className="gap-2 shrink-0 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white">
                  <FileText className="w-4 h-4" /> Export PDF
                </Button>
              </div>

              {/* Data Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 shadow-sm">
                  <CardHeader className="pb-2 flex flex-row items-center space-y-0 gap-2">
                    <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/50">
                      <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-300">Zoning Designation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{selectedProperty.civicData.zoning}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Check local ordinances.</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 shadow-sm">
                  <CardHeader className="pb-2 flex flex-row items-center space-y-0 gap-2">
                    <div className="p-1.5 rounded-md bg-amber-100 dark:bg-amber-900/50">
                      <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-500" />
                    </div>
                    <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-300">Hazards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{selectedProperty.civicData.floodZone}</p>
                    <p className="text-xs text-amber-600 dark:text-amber-500 mt-1">Insurance requirements apply.</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 shadow-sm">
                  <CardHeader className="pb-2 flex flex-row items-center space-y-0 gap-2">
                    <div className="p-1.5 rounded-md bg-purple-100 dark:bg-purple-900/50">
                      <History className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-300">Historic Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{selectedProperty.civicData.historicRegistry}</p>
                    <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">Tax credits may be available.</p>
                  </CardContent>
                </Card>
              </div>

              {/* History & Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">

                {/* Image Section */}
                <Card className="overflow-hidden border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                  <CardHeader className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 pb-3 py-4">
                    <CardTitle className="flex items-center gap-2 text-base text-slate-900 dark:text-slate-100">
                      <ImageIcon className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                      Archive Photo (est. {selectedProperty.historicalData.estimatedYear})
                    </CardTitle>
                  </CardHeader>
                  <div className="relative aspect-video flex-1 bg-slate-900 dark:bg-black/80 flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedProperty.historicalData.imageUrl}
                      alt="Historical Archive"
                      className="object-contain w-full h-full opacity-90 transition-opacity hover:opacity-100"
                    />
                  </div>
                  <CardContent className="p-4 bg-slate-50 dark:bg-slate-900/80">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                      <span className="not-italic font-semibold block mb-1 text-slate-900 dark:text-slate-300">Extracted OCR Text:</span>
                      "{selectedProperty.historicalData.caption}"
                    </p>
                  </CardContent>
                </Card>

                {/* Permits Section */}
                <Card className="border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                  <CardHeader className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 pb-3 py-4">
                    <CardTitle className="flex items-center gap-2 text-base text-slate-900 dark:text-slate-100">
                      <FileText className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                      Permit History
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-1 overflow-y-auto custom-scrollbar max-h-[300px]">
                    {selectedProperty.permits.length === 0 ? (
                      <div className="p-6 text-center text-sm text-slate-500 dark:text-slate-400">No permit history found.</div>
                    ) : (
                      <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {selectedProperty.permits.map((permit, i) => (
                          <div key={i} className="flex justify-between items-center p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className="flex items-start gap-3">
                              <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{permit.type}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{permit.date}</p>
                              </div>
                            </div>
                            <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider border ${permit.status === 'Approved' ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-900/50' :
                              permit.status === 'Closed' ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700' :
                                'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/50'
                              }`}>
                              {permit.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center h-full border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20">
              <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm mb-6 border border-slate-200 dark:border-slate-700 transform scale-100 hover:scale-105 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-slate-300 dark:text-slate-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">No Property Selected</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                Select an address from the directory on the left to instantly generate a comprehensive Plot Report.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
