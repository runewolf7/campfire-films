# Email Signup Feature Setup Guide

## Overview

This implementation provides a robust email signup system with:

- ✅ Persistent storage using Turso (Serverless SQLite)
- ✅ Simple and reliable form submission
- ✅ Proper error handling and user feedback
- ✅ Server-side logging for monitoring
- ✅ Duplicate email prevention

## Implementation Files

**Core Files:**

- `next.config.ts` - Next.js configuration
- `app/api/signup/route.ts` - Server-side signup handling and validation
- `lib/db.ts` - Turso database operations
- `components/email-signup.tsx` - Frontend form component with analytics

**Database:**

- Turso (Serverless SQLite) for persistent storage
- Auto-initializing schema with proper indexing

## Setup Instructions

### 1. Set up Turso Database

1. Go to [turso.tech](https://turso.tech) and create an account
2. Create a new database (name it something like `campfire-signups`)
3. Get your database URL and auth token from the dashboard

### 2. Configure Environment Variables

Create a `.env.local` file in your project root with:

```bash
# Turso Database Configuration
TURSO_DATABASE_URL=libsql://your-database-name-your-org.turso.io
TURSO_AUTH_TOKEN=your-auth-token-here

# Optional: Admin panel secret (for production)
ADMIN_SECRET_KEY=your-random-secret-key-here
```

### 3. Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the environment variables in Vercel dashboard:
   - `TURSO_DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
   - `ADMIN_SECRET_KEY` (optional)

### 4. BotID Implementation (Next.js 15.3+)

The system uses the latest Next.js 15.3+ BotID implementation pattern:

**Next.js Config Integration:**

- `next.config.ts` wrapped with `withBotId()`
- Automatic middleware setup for protected routes

**Client-side Protection:**

- `instrumentation.ts` with `initBotId()` for Next.js 15.3+ optimal performance
- Automatic challenge generation for protected endpoints

**Server-side Verification:**

- API routes use `checkBotId()` from `botid/server`
- Real-time bot detection with machine learning

### 5. Enable BotID Protection in Vercel Dashboard

1. Go to your Vercel project dashboard
2. Navigate to the **Firewall** tab
3. Click **Configure**
4. Enable **Vercel BotID Deep Analysis** (recommended for Pro/Enterprise plans)

### 6. Bot Protection Features

The system uses Vercel's official BotID package with multiple layers of protection:

- **BotID Client Protection**: Automatic challenge generation for protected endpoints
- **BotID Server Verification**: Real-time bot detection using machine learning
- **Email Validation**: Server-side email format validation
- **Duplicate Prevention**: Database unique constraint on email addresses
- **Request Logging**: Full audit trail for security monitoring

**Key Benefits:**

- **No CAPTCHA needed**: Seamless user experience with invisible protection
- **Machine Learning**: Advanced behavioral analysis to distinguish humans from bots
- **Real-time Detection**: Instant verification without user friction
- **Enterprise Grade**: Used by major applications for robust protection
- **Accurate IP Tracking**: Client-side IP detection for reliable geolocation data

## API Endpoints

### POST /api/signup

Handles email signups with validation and bot protection.

**Request:**

```json
{
  "firstName": "John",
  "email": "john@example.com",
  "clientIP": "192.168.1.1",
  "referrer": "https://google.com/search?q=campfire+films",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36..."
}
```

**Notes:**

- `clientIP` is automatically fetched client-side using the ipify.org service for accurate IP detection
- `referrer` is captured from `document.referrer` to track where users came from
- `userAgent` is captured from `navigator.userAgent` for accurate browser/device detection
- All analytics data is optional and won't block form submission if unavailable

**Responses:**

- `201`: Success
- `400`: Validation error
- `403`: Bot detected
- `409`: Email already exists
- `500`: Server error

### GET /api/admin/signups

View all signups (development only or with secret key).

**Local Development:**

```
http://localhost:3000/api/admin/signups
```

**Production:**

```
https://yoursite.com/api/admin/signups?key=your-secret-key
```

## Database Schema

The system automatically creates this table on first use:

```sql
CREATE TABLE email_signups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  user_agent TEXT,
  ip_address TEXT,
  referrer TEXT
)
```

## Features

### Error Handling

- Friendly user messages for common errors
- Server-side logging for debugging
- Graceful fallbacks for network issues

### Spam Protection

- Vercel's Bot ID detection
- User agent analysis
- Duplicate email prevention
- IP and user agent logging for analysis

### User Experience

- Loading states during submission
- Success confirmation with auto-dismiss
- Clear error messages with retry option
- Form validation and sanitization

## Monitoring

### Server Logs

Check server logs in Vercel dashboard for:

- Successful signups
- Bot attempts blocked by BotID
- Errors and debugging info

### BotID Monitoring

- View BotID metrics in Vercel dashboard under **Firewall > BotID**
- Monitor blocked requests and detection accuracy
- Available in Observability Plus for advanced analytics

## BotID Pricing & Behavior

### Pricing

- **Basic Mode**: Free on all plans
- **Deep Analysis**: $1 per 1,000 `checkBotId()` calls (Pro/Enterprise only)

### Local Development

- In development, `checkBotId()` returns `{ isBot: false }` by default
- No charges incurred during local development
- Real bot detection only happens in production

## Scaling Considerations

Current setup handles ~1-2k signups over 6 months easily. For higher volume:

- Monitor BotID Deep Analysis usage and costs
- Add email verification workflow if needed
- Consider additional rate limiting for high-traffic scenarios
- Monitor bot detection patterns in Vercel dashboard

## Backup

Turso automatically handles backups, but you can export data via:

1. Admin endpoint to view/export signups
2. Turso CLI for database dumps
3. Custom export scripts if needed
