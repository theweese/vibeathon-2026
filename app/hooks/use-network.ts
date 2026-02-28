"use client"

import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

/**
 * Real-World Reliability Hook
 * 
 * If the wifi drops during the event or a user's connection fails, 
 * this hook automatically catches it and warns them.
 */

export function useNetworkStatus() {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        // Set initial state
        setIsOnline(navigator.onLine)

        const handleOnline = () => {
            setIsOnline(true)
            toast.success("Connection restored. You're back online.")
        }

        const handleOffline = () => {
            setIsOnline(false)
            toast.error("Network disconnected. Some features may be unavailable.", {
                duration: 5000,
                icon: '📡'
            })
        }

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    return isOnline
}
