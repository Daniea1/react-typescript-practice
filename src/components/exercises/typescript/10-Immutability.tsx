import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function Immutability() {
  // --- Mutation (the wrong way) ---
  const original = { name: "Alice", score: 10 };

  // TODO: Assign `original` directly to `mutated` (no copy).
  //       Change `mutated.score` to 99.
  //       Check whether `mutated === original` (same reference).

  // --- Spread copy (the right way) ---
  const base = { name: "Alice", score: 10 };

  // TODO: Create `updated` by spreading `base` and overriding `score` to 99.
  //       Check whether `updated === base` (different reference).
  //       Confirm `base.score` is still 10.

  // --- Immutable array operations ---
  const arr = [1, 2, 3];

  // TODO: Add 4 to the array WITHOUT using .push(). Store result in `withFour`.
  // TODO: Remove the first element WITHOUT using .splice(). Store result in `withoutFirst`.
  // TODO: Double each element WITHOUT mutating. Store result in `doubled`.

  return (
    <ExerciseCard
      title="Object & Array Immutability"
      description={`
        Show that assigning an object to a new variable gives the same reference (mutation affects both).
        Use spread to create a new copy — original is untouched and references differ.
        Use non-mutating array methods instead of push/splice.
      `}
    >
      <OutputBox
        entries={[
          // TODO: { label: "❌ mutated === original (same ref)", value: ??? },
          // TODO: { label: "❌ original.score after mutation", value: ??? },
          // TODO: { label: "✅ updated === base (spread copy)", value: ??? },
          // TODO: { label: "✅ base.score unchanged", value: ??? },
          // TODO: { label: "arr (original)", value: arr },
          // TODO: { label: "[...arr, 4] — no push", value: ??? },
          // TODO: { label: "arr.slice(1) — no splice", value: ??? },
          // TODO: { label: "arr.map(n => n*2) — no mutation", value: ??? },
        ]}
      />
    </ExerciseCard>
  );
}
