import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function SpreadOperator2() {
  const arr = [10, 20, 30, 40];
  const obj = { a: 1, b: 2, c: 3 };

  // TODO: Remove the item at index 1 (value: 20) from `arr` without mutating it.
  //       Result should be [10, 30, 40].
  //       Hint: use arr.slice() twice and spread the two halves together.

  // 1st solution
  // const start = arr.slice(0, 1);
  // const end = arr.slice(2);
  // const combined = [...start, ...end];

  // 2nd solution
  const removed = [...arr.slice(0, 1), ...arr.slice(2)];  

  // TODO: Update the item at index 2 (value: 30) to 99 without mutating `arr`.
  //       Result should be [10, 20, 99, 40].
  //       Hint: spread up to index 2, insert 99, spread the rest.

  const update = [...arr.slice(0, 2), 99, ...arr.slice(3)];

  // TODO: Remove the key `b` from `obj` without mutating it.
  //       Result should be { a: 1, c: 3 }.
  //       Hint: use rest destructuring — const { b, ...rest } = obj

  const { b, ...rest } = obj;

  // TODO: Confirm `arr` is still [10, 20, 30, 40] after all of the above (unchanged).
  

  return (
    <ExerciseCard
      title="Spread Operator — Round 2"
      description={`
        Remove an element at a specific index immutably using slice + spread.
        Update an element at a specific index immutably using slice + spread.
        Remove a key from an object immutably using rest destructuring.
        Verify the originals are unchanged throughout.
      `}
    >
      <OutputBox
        entries={[
          { label: "remove index 1 → [10, 30, 40]", value: `${removed}` },
          { label: "update index 2 to 99 → [10, 20, 99, 40]", value: `${update}` },
          { label: "remove key b → { a, c }", value: JSON.stringify(rest) },
          { label: "arr is unchanged", value: `${arr}` },
        ]}
      />
    </ExerciseCard>
  );
}
