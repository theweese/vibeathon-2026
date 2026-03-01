'use server'

import { revalidatePath } from 'next/cache'

/**
 * Generic Server Actions Scaffold
 * The AI should place all backend mutations (POST/PUT/DELETE) in this file tomorrow.
 */

export async function submitFormData(prevState: any, formData: FormData) {
    // Simulate network latency for realistic testing
    await new Promise((resolve) => setTimeout(resolve, 800))

    try {
        const rawData = Object.fromEntries(formData.entries())

        // TODO: Add Zod validation here
        // TODO: Add Supabase/Database insertion here

        console.log("Received data:", rawData)

        // Automatically purge the Next.js router cache so the UI updates
        revalidatePath('/')

        return { success: true, message: "Data successfully processed by Server Action." }
    } catch (error) {
        console.error("Server Action Error:", error)
        return { success: false, message: "Failed to process data." }
    }
}
