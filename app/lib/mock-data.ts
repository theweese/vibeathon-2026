import { faker } from '@faker-js/faker'

/**
 * Generic Mock Data Generator
 * Ensure you NEVER use real PHI/PII during the Vibeathon demo.
 * Use these functions to populate your data tables safely.
 */

export const generateMockUser = () => {
    return {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        role: faker.helpers.arrayElement(['Admin', 'User', 'Manager']),
        status: faker.helpers.arrayElement(['Active', 'Pending', 'Inactive']),
        lastLogin: faker.date.recent().toISOString(),
    }
}

export const generateMockUsers = (count: number = 5) => {
    return Array.from({ length: count }, generateMockUser)
}

// A generic metric generator for dashboard charts
export const generateMockMetrics = () => {
    return {
        revenue: faker.finance.amount({ min: 1000, max: 50000, dec: 0 }),
        growth: faker.number.int({ min: -15, max: 45 }),
        activeUsers: faker.number.int({ min: 100, max: 5000 }),
        healthScore: faker.number.int({ min: 65, max: 99 })
    }
}
