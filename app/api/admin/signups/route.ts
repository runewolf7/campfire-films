import { NextRequest, NextResponse } from 'next/server'
import { getEmailSignups } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    // Simple protection - only allow on localhost or with a secret key
    const isLocal = request.headers.get('host')?.includes('localhost')
    const authKey = request.nextUrl.searchParams.get('key')
    const expectedKey = process.env.ADMIN_SECRET_KEY

    if (!isLocal && (!expectedKey || authKey !== expectedKey)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const signups = await getEmailSignups()
    
    return NextResponse.json({
      success: true,
      count: signups.length,
      signups: signups.map(signup => ({
        id: signup.id,
        firstName: signup.first_name,
        email: signup.email,
        createdAt: signup.created_at,
        userAgent: signup.user_agent,
        ipAddress: signup.ip_address,
        referrer: signup.referrer
      }))
    })

  } catch (error: any) {
    console.error('Admin signups error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch signups' },
      { status: 500 }
    )
  }
}