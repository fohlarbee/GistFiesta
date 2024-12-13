import { NextResponse } from 'next/server';

export async function POST() {
    const endpoint = 'api/news';    
    const options = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
    }
    const response = await fetch(`${process.env.SERVER_URL}/api/news`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
    });
    const data = await response.json();
    return NextResponse.json(data);
}