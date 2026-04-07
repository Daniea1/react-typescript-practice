import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function SpreadOperator() {
  const nums = [1, 2, 3];
  const letters = ["a", "b"];
  const more = ["c", "d"];
  const original = { x: 1, y: 2 };
  const defaults = { color: "blue", size: "md", visible: true };
  const overrides = { size: "lg" };

  // TODO: Copy `nums` into a new array using spread.

  // TODO: Merge `letters` and `more` into a single array using spread.

  // TODO: Copy `original` into a new object using spread.

  // TODO: Merge `defaults` and `overrides` into one object. Later keys should win.

  // TODO: Write a function `sum` that uses a rest parameter (...nums: number[])
  //       to accept any number of arguments and returns their sum.

  // TODO: Destructure the first element as `head` and collect the rest into `tail`.

  return (
    <ExerciseCard
      title="Spread Operator"
      description={`
        Copy and merge arrays with spread. Copy and merge objects with spread (later keys win).
        Write a function with a rest parameter that sums all its arguments.
        Use rest in array destructuring to collect the tail.
      `}
    >
      <OutputBox
        entries={[
          // TODO: { label: "[...nums] copy", value: ??? },
          // TODO: { label: "[...letters, ...more]", value: ??? },
          // TODO: { label: "{ ...original } copy", value: ??? },
          // TODO: { label: "{ ...defaults, ...overrides }", value: ??? },
          // TODO: { label: "sum(1, 2, 3, 4)", value: ??? },
          // TODO: { label: "[head, ...tail]", value: ??? },
        ]}
      />
    </ExerciseCard>
  );
}
