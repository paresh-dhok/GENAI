import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { prompt } = body;

    // Validate the prompt
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { message: 'Invalid prompt. Please provide a non-empty string.' },
        { status: 400 }
      );
    }

    // Get environment variables
    const apiKey = process.env.OPENAI_API_KEY;

    // Validate environment variables
    if (!apiKey) {
      console.error('Missing OpenAI API configuration');
      return NextResponse.json(
        { message: 'Server configuration error. Please check API settings.' },
        { status: 500 }
      );
    }

    // Initialize OpenAI client
    const openai = new OpenAI({ apiKey });

    // Generate code using OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful programming assistant. Generate only code without explanations unless specifically asked for comments."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    // Extract the generated code
    const generatedCode = completion.choices[0]?.message?.content || '';
    
    return NextResponse.json({
      generatedCode
    });
  } catch (error) {
    console.error('Unexpected error in generate route:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}