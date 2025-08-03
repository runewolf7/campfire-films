import { createClient } from '@libsql/client'

// Initialize Turso client
export const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

// Initialize database schema
export async function initializeDatabase() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS email_signups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      user_agent TEXT,
      ip_address TEXT,
      referrer TEXT,
      source TEXT DEFAULT 'website'
    )
  `)
}

// Insert new email signup
export async function insertEmailSignup(data: {
  firstName: string
  email: string
  userAgent?: string
  ipAddress?: string
  referrer?: string
}) {
  try {
    const result = await db.execute({
      sql: `
        INSERT INTO email_signups (first_name, email, user_agent, ip_address, referrer)
        VALUES (?, ?, ?, ?, ?)
      `,
      args: [data.firstName, data.email, data.userAgent || null, data.ipAddress || null, data.referrer || null]
    })
    
    return { success: true, id: Number(result.lastInsertRowid) }
  } catch (error: any) {
    if (error.message?.includes('UNIQUE constraint failed')) {
      throw new Error('EMAIL_ALREADY_EXISTS')
    }
    throw error
  }
}

// Get all email signups (for future admin use)
export async function getEmailSignups() {
  const result = await db.execute('SELECT * FROM email_signups ORDER BY created_at DESC')
  return result.rows
}