"use client";

import { useEffect, useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

export default function Promises() {
  const [output, setOutput] = useState<string[]>([]);

  const add = (line: string) => setOutput((prev) => [...prev, line]);

  useEffect(() => {
    // TODO: Create a Promise.resolve("Hello!") and use .then() to add the result to output.
    //       add(`resolve → ${value}`)

    // TODO: Create a Promise.reject(new Error("Oops")) and use .catch() to handle it.
    //       add(`catch → ${err.message}`)

    // TODO: Create two Promises that resolve after a short delay (use setTimeout inside new Promise).
    //       Use Promise.all() to wait for both and add the combined result to output.
    //       add(`all → [${a}, ${b}]`)
  }, []);

  return (
    <ExerciseCard
      title="Promises"
      description={`
        Create a resolved Promise and handle its value with .then().
        Create a rejected Promise and catch the error with .catch().
        Run two Promises in parallel with Promise.all() and display both results.
      `}
    >
      <div className="bg-muted rounded-md p-3 font-mono text-sm min-h-20 space-y-1">
        {output.length === 0 ? (
          <span className="text-muted-foreground italic">Implement the TODOs to see output…</span>
        ) : (
          output.map((line, i) => <div key={i}>{line}</div>)
        )}
      </div>
    </ExerciseCard>
  );
}
