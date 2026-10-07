import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    const name = data.name || 'Unknown';
    const email = data.email || 'Unknown';
    const phone = data.phone || 'Not provided';
    const message = data.message || '';

    const res = await fetch('https://formsubmit.co/ajax/marketing@smrkonova.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Lead: ${name} (Website Contact)`,
        _template: 'table',
        _captcha: 'false',
        'Full Name': name,
        'Email': email,
        'Phone Number': phone,
        'Message': message,
      }),
    });

    const result = await res.json().catch(() => ({}));
    return NextResponse.json({ success: true, details: result }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
