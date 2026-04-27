import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate data validation and database storage
    console.log('New Lead Received:', body);
    
    // In a real app, you might send this to a CRM or mailing list
    // e.g., await saveToDatabase(body);
    
    // Removed simulated delay for faster response times
    
    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured successfully' 
    }, { status: 200 });
    
  } catch {
    return NextResponse.json({ 
      success: false, 
      message: 'Error processing lead' 
    }, { status: 500 });
  }
}
