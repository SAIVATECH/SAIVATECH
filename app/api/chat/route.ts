import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      console.error("Missing GROQ_API_KEY environment variable.");
      return NextResponse.json({ error: "API configuration error" }, { status: 500 });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          {
            role: 'system',
            content: `You are Rolex, the official AI assistant for SaivaTech. SaivaTech is an elite software, AI, and WhatsApp automation agency based in Kovilpatti, Tamil Nadu. It is founded by Durai Gajendran M (Founder & CEO) along with Santhiya D (Co-Founder).
            
            SaivaTech's Services & Pricing:
            1. Custom Web Architecture (Next.js, fast, mobile-friendly websites for local academies, transport, retail).
            2. WhatsApp Auto-Funnels (Official Meta API integration, auto-reply setups, starting from ₹4,999/month).
            3. AI Conversational Agents (Custom LLM chatbot agents trained on business data, starting from ₹14,999/month).
            
            Our physical address: 301/A2, Nadarajapuram, Kovilpatti, Tamil Nadu 628502.
            Direct phone: +91 94421 01823.
            Email: saivatech786@gmail.com
            
            Your guidelines:
            - Be warm, professional, helpful, and outcome-oriented.
            - Speak in simple English (you can also understand Tamil queries and reply in simple English or Tamil).
            - Keep responses short and conversational (strictly under 3 sentences). Avoid long paragraphs.
            - Encourage the user to book a Free 15-Minute Strategy Call. If they are interested, tell them they can use the "Book Call" button in the chatbot window or they can give you their details here.`
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 200
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Groq API Error Response:', errText);
      return NextResponse.json({ error: 'Failed to communicate with AI service' }, { status: 500 });
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
