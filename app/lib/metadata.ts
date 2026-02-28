import { Metadata } from 'next'

/**
 * Dynamic Metadata SEO Helper
 * 
 * Tomorrow, when the AI generates a new page (e.g., /patient/[id]),
 * it can call `export async function generateMetadata(): Promise<Metadata> { return constructMetadata(...) }`
 * to instantly ensure perfect SEO and Twitter/Slack card unfurling.
 */

export function constructMetadata({
    title = 'Vibeathon 2026 Solution',
    description = 'An AI-powered application built in 48 hours for the Codefi Vibeathon.',
    image = '/og-image.png', // Add a generic og-image.png to the public folder tomorrow
    icons = '/favicon.ico',
    noIndex = false,
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: image }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@vibeathon',
        },
        icons,
        metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    }
}
