import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LayoutDashboard, User, Settings as SettingsIcon } from 'lucide-react'
import Link from 'next/link'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { MobileMenu } from '@/components/ui/mobile-menu'

// Premium Typography setup
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Vibeathon Project',
  description: 'Built at St. Joseph Vibeathon',
  openGraph: {
    title: 'Vibeathon 2026 Solution',
    description: 'An AI-powered solution built in 48 hours for the Codefi Vibeathon.',
    url: 'https://github.com/theweese/vibeathon-2026',
    siteName: 'Vibeathon App',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibeathon 2026 Solution',
    description: 'An AI-powered solution built in 48 hours for the Codefi Vibeathon.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Generic Navigation Bar */}
          <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

              <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-800 dark:text-slate-100">
                <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span>PlotStory Pro</span>
              </div>

              <div className="flex items-center gap-4">
                <nav className="hidden md:flex items-center gap-4">
                  <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/settings" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                    <span className="flex items-center gap-1.5"><SettingsIcon className="w-4 h-4" /> Settings</span>
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 ml-4">
                    <User className="w-4 h-4" />
                  </div>
                </nav>
                <MobileMenu />
              </div>

            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>

          {/* Generic Footer */}
          <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6">
            <div className="container mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
              <p>Built for the 2026 St. Joseph Vibeathon</p>
            </div>
          </footer>

          <Toaster
            position="top-right"
            toastOptions={{
              className: '',
              style: {
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                color: '#0f172a',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              },
              success: { iconTheme: { primary: '#10b981', secondary: '#fff' } },
              error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
            }}
          />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html >
  )
}
