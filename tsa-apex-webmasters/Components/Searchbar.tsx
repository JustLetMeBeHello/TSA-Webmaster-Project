"use client"
import React from "react";
import Card from "@/Components/Card";
import { communityResources } from "@/data/resources";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredResources = communityResources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <input
        type="text"
        placeholder="Search resources..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      {filteredResources.map((resource) => (
        <Card
          key={resource.title}
          title={resource.title}
          category={resource.category}
          description={resource.description}
          location={resource.location}
            link={resource.link}
        />
      ))}
    </div>
  );
}