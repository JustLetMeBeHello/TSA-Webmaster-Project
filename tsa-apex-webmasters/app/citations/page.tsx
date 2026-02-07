import React from "react";
import Card from "@/Components/Card";
export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Citations</h1>

      <a
        href="/documents/plan-of-work-log.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-600 underline"
      >
        View Team Work Log (PDF)
      </a>

      <p className="mt-4">
        Frontend: React + NextJS
        <br />
        Styling: CSS / Tailwind
        <br />
        Logic: JavaScript (ES Modules)
        <br />
        Hosting: Vercel
      </p>
    </main>
  );
}
