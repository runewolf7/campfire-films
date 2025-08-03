# Email Signup System - Simple Setup

## Overview

A clean, reliable email signup system with:

- ✅ Turso (SQLite) database storage
- ✅ Rich analytics (IP, referrer, user agent, source)
- ✅ Duplicate email prevention
- ✅ Proper error handling
- ✅ Non-blocking analytics collection

## Core Files

- `app/api/signup/route.ts` - API endpoint for form submissions
- `lib/db.ts` - Database operations and schema
- `components/email-signup.tsx` - Frontend form component

## Setup

1. **Create Turso Database**

   - Go to [turso.tech](https://turso.tech)
   - Create a new database
   - Get your database URL and auth token

2. **Environment Variables**

   ```bash
   # .env.local
   TURSO_DATABASE_URL=libsql://your-db-url
   TURSO_AUTH_TOKEN=your-auth-token
   ```

3. **Deploy to Vercel**
   - Add the same environment variables in Vercel dashboard
   - Deploy and test!

## Database Schema

```sql
CREATE TABLE email_signups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  user_agent TEXT,
  ip_address TEXT,
  referrer TEXT,
  source TEXT DEFAULT 'website'
)
```

## API Usage

**Endpoint:** `POST /api/signup`

**Request:**

```json
{
  "firstName": "John",
  "email": "john@example.com",
  "clientIP": "192.168.1.1",
  "referrer": "https://google.com",
  "userAgent": "Mozilla/5.0..."
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "Successfully joined the campfire!",
  "id": 123
}
```

## Admin Access

View signups: `http://localhost:3000/api/admin/signups`

## Features

- **Client-side Analytics**: IP, referrer, and user agent collected from browser
- **Non-blocking**: Form works even if analytics fail to load
- **Duplicate Prevention**: Unique email constraint
- **Error Handling**: User-friendly error messages
- **Migration Ready**: Easy to export to email marketing platforms

Perfect for collecting email signups with rich analytics data!
