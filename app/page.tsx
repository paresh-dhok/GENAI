import Header from "@/components/header";
import CodeGenerator from "@/components/code-generator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 md:py-12">
        <section className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Generate Code with AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter a description of the code you want to create, and our AI will generate it for you. 
            Be specific about language, frameworks, and functionality.
          </p>
        </section>
        
        <CodeGenerator />
      </main>
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Powered by Gemini AI API. Not for production use.</p>
        </div>
      </footer>
    </div>
  );
}