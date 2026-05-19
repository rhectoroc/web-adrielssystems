import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_API_BASE_URL || 'https://app.adrielssystems.com';

export async function GET() {
    try {
        const response = await fetch(`${BACKEND_URL}/api/availability`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            next: { revalidate: 60 } // Cache 60 seconds
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Error consultando disponibilidad' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('[Proxy] Error fetching availability:', error);
        return NextResponse.json({ error: 'Error interno' }, { status: 500 });
    }
}
