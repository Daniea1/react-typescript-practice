import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function ArrowFunctions() {
  // TODO: Write a regular function `add(a, b)` that returns a + b.
  function add(a: number, b: number): number {
    return a + b;
  }

  // TODO: Rewrite it as an arrow function with an explicit body { return ... }.
  const add_v2 = (a: number, b: number): number => {
    return a + b;
  }

  // TODO: Rewrite it again as an arrow function with an implicit return (no braces, no return keyword).
  const add_v3 = (a: number, b: number): number => a + b;

  // TODO: Write an arrow function `double` that takes one number and doubles it.

  const double = (a: number): number => {
    return a * 2;
  }

  // TODO: Create an object `timer` with a `label` property and a `getLabel()` method.
  //       Inside getLabel, use an arrow function that returns `this.label`.
  //       Call getLabel() and store the result.

  const timer = {
    label: "hey",
    getLabel() {
      const arrow = () => this.label;
      return arrow();
    }
  }

  const timerResult = timer.getLabel();

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
          { label: "regular add(3, 4)", value: add(3, 4) },
          { label: "arrow add(3, 4)", value: add_v2(3, 4) },
          { label: "implicit add(3, 4)", value: add_v3(3, 4) },
          { label: "double(5)", value: double(5) },
          { label: "timer.getLabel() [lexical this]", value: timerResult },
        ]}
      />
    </ExerciseCard>
  );
}
