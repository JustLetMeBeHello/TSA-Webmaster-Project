import React from "react";
import Card from "@/Components/Card";
import {communityResources} from "@/data/resources";
import Searchbar from "@/Components/Searchbar";
export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Directory</h1>
      <p className="mt-4">This is a small list of community resources</p>
      <Searchbar />


    </main>
  );
}
