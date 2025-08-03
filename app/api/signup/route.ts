import { NextRequest, NextResponse } from 'next/server'
import { insertEmailSignup, initializeDatabase } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    // Initialize database on first request
    await initializeDatabase()

    // Parse request body
    const body = await request.json()
    const { firstName, email, clientIP, referrer, userAgent: clientUserAgent } = body

    // Basic validation
    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'First name and email are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Extract client info for logging
    const fallbackUserAgent = request.headers.get('user-agent') || ''
    const clientInfo = {
      firstName: firstName.trim(),
      email: email.toLowerCase().trim(),
      userAgent: clientUserAgent || fallbackUserAgent || 'unknown',
      ipAddress: clientIP || request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      referrer: referrer || null
    }

    // Insert into database
    const result = await insertEmailSignup(clientInfo)

    console.log('New email signup:', {
      id: Number(result.id),
      email: clientInfo.email,
      firstName: clientInfo.firstName,
      ip: clientInfo.ipAddress
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined the campfire!',
        id: Number(result.id) 
      },
      { status: 201 }
    )

  } catch (error: any) {
    console.error('Email signup error:', {
      error: error.message,
      stack: error.stack,
      body: await request.text().catch(() => 'Could not read body')
    })

    if (error.message === 'EMAIL_ALREADY_EXISTS') {
      return NextResponse.json(
        { error: 'This email is already signed up!' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}