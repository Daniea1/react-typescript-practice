"use client";

import { ExerciseCard } from "@/components/exercises/ExerciseCard";

export default function JSX() {
  const score = 87;

  return (
    <ExerciseCard
      title="JSX"
      description={`
        Embed a JavaScript expression (today's date) inside JSX using {}.
        Apply a className conditionally based on whether score >= 80.
        Wrap two sibling elements in a Fragment instead of a div.
        Include a self-closing input tag (all JSX tags must close).
      `}
    >
      <div className="space-y-4 text-sm">
        {/* TODO: Show today's date using new Date().toLocaleDateString() inside {} */}

        {/* TODO: Display `score` with a className that changes colour based on score >= 80 */}

        {/* TODO: Use a Fragment <></> to wrap two <p> elements without a wrapper div */}

        {/* TODO: Render a self-closing <input /> with a placeholder */}

        <p className="text-muted-foreground italic text-xs">Implement the TODOs above.</p>
      </div>
    </ExerciseCard>
  );
}
