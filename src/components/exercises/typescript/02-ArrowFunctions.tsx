import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function ArrowFunctions() {
  // TODO: Write a regular function `add(a, b)` that returns a + b.

  // TODO: Rewrite it as an arrow function with an explicit body { return ... }.

  // TODO: Rewrite it again as an arrow function with an implicit return (no braces, no return keyword).

  // TODO: Write an arrow function `double` that takes one number and doubles it.

  // TODO: Create an object `timer` with a `label` property and a `getLabel()` method.
  //       Inside getLabel, use an arrow function that returns `this.label`.
  //       Call getLabel() and store the result.

  return (
    <ExerciseCard
      title="Arrow Functions"
      description={`
        Convert a regular function to arrow function syntax (explicit, then implicit return).
        Write a single-param arrow function.
        Show how an arrow function inside a method captures lexical this.
      `}
    >
      <OutputBox
        entries={[
          // TODO: { label: "regular add(3, 4)", value: ??? },
          // TODO: { label: "arrow add(3, 4)", value: ??? },
          // TODO: { label: "implicit add(3, 4)", value: ??? },
          // TODO: { label: "double(5)", value: ??? },
          // TODO: { label: "timer.getLabel() [lexical this]", value: ??? },
        ]}
      />
    </ExerciseCard>
  );
}
