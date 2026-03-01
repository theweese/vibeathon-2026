import OpenAI from 'openai'

/**
 * Generic AI Utility for Vibeathon
 * Configured specifically for OpenRouter (which is API-compatible with OpenAI).
 * 
 * Tomorrow, simply uncomment the model you want to use, or paste in a new one.
 */

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY || '',
    defaultHeaders: {
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Vibeathon 2026 App',
    },
})

export async function generateAIResponse(
    systemPrompt: string,
    userMessage: string,
    model = "google/gemini-2.5-flash" // Good default for speed/vibe coding
) {
    if (!process.env.OPENROUTER_API_KEY) {
        console.warn("Missing OPENROUTER_API_KEY. AI responses will fail.")
        return "Error: Missing OpenRouter API Key. Please check your .env.local file."
    }

    try {
        const completion = await openai.chat.completions.create({
            model: model,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userMessage }
            ],
            // Adjust depending on if the problem needs fast text or creative writing
            temperature: 0.7,
        })

        return completion.choices[0].message.content
    } catch (error) {
        console.error("AI Generation Error:", error)
        throw new Error("Failed to generate AI response.")
    }
}
