import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { message, propertyAddress } = await req.json()

        // Simulate AI thinking delay for the demo effect (1.5 seconds)
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // Hackathon trick: return canned but smart-sounding responses based on the property address
        const mockResponse = `Based on the historical civic archives and retrieved document OCR for ${propertyAddress}, it appears this location served as a central commercial hub in the early 1900s. The property frequently changed ownership between local merchants before zoning laws formalized it as a C-2 district. Let me know if you would like me to extract more details about the specific families that operated here.`

        return NextResponse.json({ reply: mockResponse })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to generate AI response' }, { status: 500 })
    }
}
