"use client";

import { ExerciseCard } from "@/components/exercises/ExerciseCard";

// TODO: Define a `Greeting` component that accepts a `name: string` prop
//       and renders: "👋 Hello, <name>!" inside a styled div.

// TODO: Define a `StatusBadge` component that accepts an `active: boolean` prop.
//       When active, render a green badge with "Active".
//       When inactive, render a red/muted badge with "Inactive".

export default function Components() {
  return (
    <ExerciseCard
      title="Components"
      description={`
        Create a Greeting component that accepts a name prop and renders a greeting.
        Create a StatusBadge component that accepts an active boolean and renders a coloured badge.
        Render each component at least twice with different props.
      `}
    >
      <div className="space-y-3 text-sm">
        {/* TODO: Render <Greeting name="Alice" /> */}
        {/* TODO: Render <Greeting name="World" /> */}
        {/* TODO: Render <StatusBadge active={true} /> */}
        {/* TODO: Render <StatusBadge active={false} /> */}
        <p className="text-muted-foreground italic text-xs">Implement the components above to see them here.</p>
      </div>
    </ExerciseCard>
  );
}
