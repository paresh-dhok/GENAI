# Code Generator App

A web application that generates code based on text prompts using the OpenAI API. This project is built with Next.js, React, and shadcn/ui.

## Features

- Input text prompts to generate code
- Clean, modern UI built with shadcn/ui components
- Syntax highlighting for code output
- Copy-to-clipboard functionality
- Responsive design for all device sizes

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn
- OpenAI API key

### Environment Variables

Create a `.env.local` file in the root of the project with the following variables:

```
OPENAI_API_KEY=your_openai_api_key
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/code-generator-app.git
cd code-generator-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment on Vercel

The easiest way to deploy this application is to use the [Vercel Platform](https://vercel.com/).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket).
2. Import the project to Vercel.
3. Add the environment variable (OPENAI_API_KEY) in the Vercel project settings.
4. Deploy.

## API Reference

The application uses a single API endpoint:

- `POST /api/generate` - Accepts a prompt and returns generated code.

Example request body:
```json
{
  "prompt": "Create a React component that displays a counter"
}
```

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [OpenAI API](https://platform.openai.com/)