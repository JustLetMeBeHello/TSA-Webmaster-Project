import React from "react";
import Card from "@/Components/Card";
export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Page Title</h1>
      <p className="mt-4">Content coming soon for the TSA judges.</p>
      <Card
        title="Sample Resource"
        category="Category 1"
        description="This is a description of the resource. Content coming soon"
        location="Location 1"
      />
    </main>
  );
}
