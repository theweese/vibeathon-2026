import { NextResponse } from 'next/server'

// Sample GET endpoint for tomorrow's data flow
export async function GET() {
    return NextResponse.json(
        {
            status: 'success',
            message: 'Mock API is online.',
            data: [
                { id: 1, name: 'Sample Item A', metric: 85 },
                { id: 2, name: 'Sample Item B', metric: 92 },
            ]
        },
        { status: 200 }
    )
}

// Sample POST endpoint for tomorrow's mutations
export async function POST(request: Request) {
    try {
        const body = await request.json()

        // Echo the data back to simulate a successful save
        return NextResponse.json(
            {
                status: 'success',
                message: 'Data received successfully',
                received: body
            },
            { status: 201 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid request format' },
            { status: 400 }
        )
    }
}
