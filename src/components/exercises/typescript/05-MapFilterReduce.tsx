import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function MapFilterReduce() {
  const source = [1, 2, 3, 4, 5, 6];

  // TODO: Use .map() to double every number in `source`.
  const doubled = source.map(n => n * 2);

  // TODO: Use .filter() to keep only even numbers from `source`.
  const evenNumbers = source.filter(n => n % 2 === 0)

  // TODO: Use .reduce() to sum all numbers in `source`. Start the accumulator at 0.
  const sum = source.reduce((acc, n) => acc + n, 0);

  // TODO: Chain all three — map(double) → filter(>5) → reduce(sum).
  const chain = source.map(n => n * 2).filter(n => n > 5).reduce((acc, n) => acc + n, 0);

  // TODO: Map over this array to extract just the names:
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  const names = users.map(u => u.name);

  // TODO: Use .find() to get the first even number from `source`.
  const firstevenNumber = source.find(n => n % 2 === 0);

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
          { label: "source", value: `${source}` },
          { label: ".map(n => n * 2)", value: `${doubled}` },
          { label: ".filter(n => n % 2 === 0)", value: `${evenNumbers}` },
          { label: ".reduce((acc, n) => acc + n, 0)", value: sum },
          { label: "chain: map → filter → reduce", value: chain },
          { label: "users.map(u => u.name)", value: `${names}` },
          { label: ".find(n => n % 2 === 0)", value: firstevenNumber },
        ]}
      />
    </ExerciseCard>
  );
}
