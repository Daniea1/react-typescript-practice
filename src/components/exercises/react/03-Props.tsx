"use client";

import { ExerciseCard } from "@/components/exercises/ExerciseCard";

// TODO: Define a `UserCardProps` interface with:
//         name: string          (required)
//         role: string          (required)
//         active?: boolean      (optional — default true)
//         score?: number        (optional — default 0)

// TODO: Define a `UserCard` component that uses the interface above.
//       Use default values in destructuring for the optional props.
//       Display name, role, a coloured active/inactive badge, and the score.

export default function Props() {
  return (
    <ExerciseCard
      title="Props"
      description={`
        Define a UserCardProps interface with required and optional props.
        Implement UserCard using that interface with defaults for optional props.
        Render it three times: all props provided, only required props, active set to false.
      `}
    >
      <div className="space-y-2 text-sm">
        {/* TODO: <UserCard name="Alice" role="Admin" active={true} score={95} /> */}
        {/* TODO: <UserCard name="Bob" role="Developer" /> — uses defaults */}
        {/* TODO: <UserCard name="Charlie" role="Viewer" active={false} score={42} /> */}
        <p className="text-muted-foreground italic text-xs">Implement UserCard above to see it here.</p>
      </div>
    </ExerciseCard>
  );
}
