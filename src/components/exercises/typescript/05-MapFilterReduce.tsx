import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function MapFilterReduce() {
  const source = [1, 2, 3, 4, 5, 6];

  // TODO: Use .map() to double every number in `source`.

  // TODO: Use .filter() to keep only even numbers from `source`.

  // TODO: Use .reduce() to sum all numbers in `source`. Start the accumulator at 0.

  // TODO: Chain all three — map(double) → filter(>5) → reduce(sum).

  // TODO: Map over this array to extract just the names:
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  // TODO: Use .find() to get the first even number from `source`.

  return (
    <ExerciseCard
      title="map / filter / reduce"
      description={`
        Use .map() to transform, .filter() to keep matching elements, and .reduce() to accumulate.
        Chain all three in a pipeline. Map over an array of objects. Use .find() to get the first match.
      `}
    >
      <OutputBox
        entries={[
          // TODO: { label: "source", value: source },
          // TODO: { label: ".map(n => n * 2)", value: ??? },
          // TODO: { label: ".filter(n => n % 2 === 0)", value: ??? },
          // TODO: { label: ".reduce((acc, n) => acc + n, 0)", value: ??? },
          // TODO: { label: "chain: map → filter → reduce", value: ??? },
          // TODO: { label: "users.map(u => u.name)", value: ??? },
          // TODO: { label: ".find(n => n % 2 === 0)", value: ??? },
        ]}
      />
    </ExerciseCard>
  );
}
