"use client";

import { useEffect, useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

// Helper — feel free to use this in your TODOs
function delay<T>(value: T, ms: number): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function delayReject(ms: number): Promise<never> {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Network timeout")), ms)
  );
}

export default function AsyncAwait() {
  const [output, setOutput] = useState<string[]>([]);

  const add = (line: string) => setOutput((prev) => [...prev, line]);

  useEffect(() => {
    // TODO: Write an async function that awaits delay("Hello!", 300).
    //       Add the resolved value to output. Call it.

    // TODO: Write an async function that uses try/catch to await delayReject(400).
    //       In the catch block, add the error message to output. Call it.

    // TODO: Write an async function that awaits two delay() calls sequentially.
    //       Add a string showing both results: "step1 → step2". Call it.
  }, []);

  return (
    <ExerciseCard
      title="async / await"
      description={`
        Write an async function that awaits a resolved Promise and logs the result.
        Use try/catch to handle an awaited rejection.
        Await two Promises sequentially and show both results.
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
