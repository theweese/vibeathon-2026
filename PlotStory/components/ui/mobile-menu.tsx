"use client"

import { useState } from "react"
import { Menu, X, User, Home, Settings } from "lucide-react"

/**
 * Responsive Mobile Menu Wrapper
 * 
 * Simply drop `<MobileMenu />` into tomorrow's Navbar.
 * It automatically handles open/close state and screen resizing.
 */

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="md:hidden">
            {/* Hamburger Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                aria-label="Toggle mobile menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Flyout Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg py-4 px-6 flex flex-col gap-4 z-40 animate-in slide-in-from-top-2">

                    <a href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400">
                        <Home className="w-5 h-5" /> Dashboard
                    </a>

                    <a href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400">
                        <Settings className="w-5 h-5" /> Settings
                    </a>

                    <hr className="border-slate-200 dark:border-slate-800 my-2" />

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <User className="w-5 h-5 text-slate-500" />
                        </div>
                        <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">Guest User</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">View Profile</p>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}
