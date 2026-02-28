import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LayoutDashboard, User } from 'lucide-react'

// Premium Typography setup
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Vibeathon Project',
  description: 'Built at St. Joseph Vibeathon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-slate-50 text-slate-900 flex flex-col`}>
        {/* Generic Navigation Bar */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-800">
              <LayoutDashboard className="w-6 h-6 text-blue-600" />
              <span>[App Name]</span>
            </div>
            <nav className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                <User className="w-4 h-4" />
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Generic Footer */}
        <footer className="border-t border-slate-200 bg-white py-6">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>Built for the 2026 St. Joseph Vibeathon</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
