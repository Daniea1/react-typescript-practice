"use client";

import { useEffect, useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  const addLog = (msg: string) => setLog((prev) => [...prev.slice(-4), msg]);

  // TODO: Add a useEffect with an empty dependency array [].
  //       Call addLog("Mounted") inside it.
  //       Return a cleanup function that calls addLog("Cleanup on unmount").

  // TODO: Add a useEffect that depends on [count].
  //       Call addLog(`count changed → ${count}`) inside it.
  //       Only log when count > 0 to avoid logging on mount.

  return (
    <ExerciseCard
      title="useEffect"
      description={`
        Add a useEffect with [] that logs on mount and returns a cleanup function.
        Add a useEffect with [count] that logs whenever count changes.
        Use an increment button to trigger the count-dep effect.
      `}
    >
      <div className="space-y-3 text-sm">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 rounded border bg-muted hover:bg-muted/80 text-sm"
        >
          Increment count ({count})
        </button>

        <div className="bg-muted rounded p-2 space-y-1 font-mono text-xs min-h-[80px]">
          <div className="text-muted-foreground">Effect log:</div>
          {log.length === 0 ? (
            <div className="text-muted-foreground italic">Implement useEffects to see log entries</div>
          ) : (
            log.map((entry, i) => <div key={i}>{entry}</div>)
          )}
        </div>

        <div className="text-xs text-muted-foreground space-y-0.5">
          <div><code className="bg-muted px-1 rounded">useEffect(fn, [])</code> — mount only</div>
          <div><code className="bg-muted px-1 rounded">useEffect(fn, [dep])</code> — on dep change</div>
          <div><code className="bg-muted px-1 rounded">return () =&gt; {"{ ... }"}</code> — cleanup</div>
        </div>
      </div>
    </ExerciseCard>
  );
}
