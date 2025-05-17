/**
 * API client functions for the Code Generator application
 */

/**
 * Sends a prompt to the server to generate code using the Gemini AI model
 * 
 * @param prompt The text prompt describing the code to generate
 * @returns The generated code as a string
 * @throws Error if the API request fails
 */
export async function generateCode(prompt: string): Promise<string> {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Server error: ${response.status}`);
    }

    const data = await response.json();
    return data.generatedCode;
  } catch (error) {
    console.error('Error generating code:', error);
    throw error instanceof Error 
      ? error 
      : new Error('Failed to generate code. Please try again.');
  }
}