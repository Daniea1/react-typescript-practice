import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function Destructuring2() {
  // TODO: Swap these two variables using ONLY array destructuring — no temp variable.
  //       After the swap, `a` should be 99 and `b` should be 42.
  let a = 42;
  let b = 99;
  // [a, b] = ???

  // TODO: Write a function `getCoords` that returns { x: 10, y: 25 }.
  //       Then call it and destructure x and y directly from the return value in one line.

  // TODO: Use a for...of loop with destructuring to build a `summary` string array.
  //       Each entry should be `"${name}: ${score}"`.
  const players = [
    { name: "Alice", score: 95 },
    { name: "Bob",   score: 82 },
    { name: "Carol", score: 78 },
  ];
  const summary: string[] = [];
  // for (const { name, score } of players) { ... }

  // TODO: Write a function `formatPlayer` that accepts a `{ name, score }` parameter
  //       (destructured directly in the parameter list) and returns `"${name} scored ${score}"`.

  return (
    <ExerciseCard
      title="Destructuring — Round 2"
      description={`
        Swap two variables using array destructuring with no temp variable.
        Destructure a function's return value directly at the call site.
        Use for...of with destructuring to build a summary array.
        Destructure inside a function's parameter list.
      `}
    >
      <OutputBox
        entries={[
          // TODO: { label: "a after swap", value: a },
          // TODO: { label: "b after swap", value: b },
          // TODO: { label: "getCoords() → { x, y }", value: ??? },
          // TODO: { label: "summary from for...of", value: summary },
          // TODO: { label: "formatPlayer(players[0])", value: ??? },
        ]}
      />
    </ExerciseCard>
  );
}
