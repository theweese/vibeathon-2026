"use client"

import { useState } from 'react'
import { Card, CardContent, Input, Button } from '@/components/ui'
import { Search, MapPin, Beer, History, Info } from 'lucide-react'
import propertiesData from '../../public/properties.json'
import Link from 'next/link'

export default function PublicPortal() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedProperty, setSelectedProperty] = useState<any | null>(null)

    // Chat state
    const [chatMessage, setChatMessage] = useState('')
    const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'ai', content: string }[]>([])
    const [isChatLoading, setIsChatLoading] = useState(false)

    const handleAskAI = async () => {
        if (!chatMessage.trim()) return

        const userMsg = chatMessage
        setChatHistory(prev => [...prev, { role: 'user', content: userMsg }])
        setChatMessage('')
        setIsChatLoading(true)

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg, propertyAddress: selectedProperty?.address })
            })
            const data = await res.json()
            setChatHistory(prev => [...prev, { role: 'ai', content: data.reply }])
        } catch (e) {
            setChatHistory(prev => [...prev, { role: 'ai', content: "I'm sorry, I'm having trouble accessing the municipal archives right now." }])
        } finally {
            setIsChatLoading(false)
        }
    }

    // Clear chat when a new property is selected
    const handleSelectProperty = (property: any) => {
        setSelectedProperty(property)
        setChatHistory([])
        setChatMessage('')
    }

    const filteredProperties = propertiesData.filter(p =>
        p.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.historicalData.caption.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-12">

            {/* Sponsor Banner */}
            <div className="bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500 dark:bg-amber-600 rounded-lg text-white">
                        <Beer className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-amber-900 dark:text-amber-400">Sponsored by River Bluff Brewing</h3>
                        <p className="text-sm text-amber-700 dark:text-amber-500/90">Keeping downtown St. Joseph history alive. Show this page for 10% off a pint!</p>
                    </div>
                </div>
                <Button variant="outline" className="mt-4 md:mt-0 bg-white dark:bg-slate-900 border-amber-300 dark:border-amber-700/50 text-amber-800 dark:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/40">
                    Visit Sponsor
                </Button>
            </div>

            {/* Header and Search */}
            <div className="text-center space-y-6 max-w-2xl mx-auto py-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 font-serif">
                    St. Joseph Memory Lane
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Explore the rich history of our town. Search any street to see what it looked like a century ago.
                </p>

                <div className="relative max-w-lg mx-auto shadow-sm">
                    <Search className="absolute left-4 top-3.5 h-6 w-6 text-slate-400 dark:text-slate-500" />
                    <Input
                        placeholder="Search for an address or keyword (e.g. 'Felix St')..."
                        className="pl-14 h-14 text-lg rounded-full border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-inner"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Property Modal View */}
            {selectedProperty && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedProperty(null)}>
                    <div className="bg-white dark:bg-slate-950 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800 custom-scrollbar" onClick={e => e.stopPropagation()}>
                        <div className="p-6 md:p-8 space-y-6">
                            <div className="flex justify-between items-start border-b border-slate-200 dark:border-slate-800 pb-4">
                                <div>
                                    <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100">{selectedProperty.address}</h2>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">Estimated Year: {selectedProperty.historicalData.estimatedYear}</p>
                                </div>
                                <Button variant="ghost" onClick={() => setSelectedProperty(null)} className="dark:text-slate-300 dark:hover:bg-slate-800">Close X</Button>
                            </div>

                            <div className="relative aspect-video bg-slate-100 dark:bg-black/60 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                                <img
                                    src={selectedProperty.historicalData.imageUrl}
                                    alt="Historic St. Joseph"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="bg-blue-50/80 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-xl p-6 shadow-inner">
                                <h4 className="flex items-center gap-2 font-semibold text-blue-900 dark:text-blue-400 mb-2">
                                    <History className="w-5 h-5" />
                                    Historical Notes
                                </h4>
                                <p className="text-blue-800 dark:text-blue-200/90 leading-relaxed text-lg italic">
                                    "{selectedProperty.historicalData.caption}"
                                </p>
                            </div>

                            {/* Chatbot Functional UI */}
                            <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 relative overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
                                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] tracking-wider font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                                    AI ARCHIVIST
                                </div>
                                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                    Talk to the Town
                                </h4>

                                <div className="space-y-4 mb-4 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl rounded-tl-none inline-block max-w-[85%]">
                                        <p className="text-sm text-slate-700 dark:text-slate-300">What would you like to know about {selectedProperty.address}?</p>
                                    </div>

                                    {chatHistory.map((msg, i) => (
                                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`p-3 rounded-xl max-w-[85%] text-sm ${msg.role === 'user'
                                                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-sm'
                                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-tl-none shadow-sm'
                                                }`}>
                                                {msg.content}
                                            </div>
                                        </div>
                                    ))}

                                    {isChatLoading && (
                                        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl rounded-tl-none inline-block shadow-sm">
                                            <div className="flex gap-1.5 items-center h-4 px-2">
                                                <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                                <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                                <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <Input
                                        placeholder="E.g. What businesses used to be here?"
                                        className="bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-700"
                                        value={chatMessage}
                                        onChange={(e) => setChatMessage(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                                    />
                                    <Button
                                        variant="primary"
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 shrink-0 shadow-sm"
                                        onClick={handleAskAI}
                                        disabled={isChatLoading || !chatMessage.trim()}
                                    >
                                        Ask
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Grid Layout of Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.length === 0 ? (
                    <div className="col-span-full py-12 text-center text-slate-500 dark:text-slate-400">
                        No memories found matching that search.
                    </div>
                ) : (
                    filteredProperties.slice(0, 50).map((property, idx) => (
                        <Card
                            key={property.id}
                            className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800"
                            onClick={() => handleSelectProperty(property)}
                        >
                            <div className="aspect-[4/3] bg-slate-100 dark:bg-black/60 relative overflow-hidden">
                                <img
                                    src={property.historicalData.imageUrl}
                                    alt={property.address}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    loading="lazy"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pt-20">
                                    <p className="text-white font-medium flex items-center gap-1.5 text-sm drop-shadow-md">
                                        <MapPin className="w-4 h-4 text-white/80" />
                                        {property.address}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>

        </div>
    )
}
