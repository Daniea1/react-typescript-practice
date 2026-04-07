import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function ArrowFunctions2() {
  // TODO: Write a `clock` object with:
  //         seconds: 0
  //         tick(): void  — a regular method that increments this.seconds by 1
  //
  //       Inside `tick`, also call a helper callback that logs the current time.
  //       Define that helper as an arrow function (so it captures `this` from `tick`).
  //       Call tick() twice, then read clock.seconds.
  //
  //       Hint: the arrow function inside tick can safely use `this.seconds`
  //             because it inherits `this` from the enclosing method.

  const clock = {
    seconds: 0,
    tick() {
      this.seconds++;
      const helper = () => `current time: ${this.seconds}s`;
      helper();
    }
  };

  clock.tick();
  clock.tick();

  // TODO: Write a `transform` function with this signature:
  //         transform(arr: number[], fn: (n: number) => number): number[]
  //       It should apply `fn` to every element and return the new array.
  //       Write it using arrow function syntax for the function body.

  const transform = (arr: number[], fn: (n: number) => number): number[] => arr.map(fn);

  // TODO: Call transform([1, 2, 3], n => n ** 2)  — squares each element.
  // TODO: Call transform([1, 2, 3], n => n + 10)  — adds 10 to each element.

  const squares = transform([1, 2, 3], n => n ** 2);
  const addTen = transform([1, 2, 3], n => n + 10);

  return (
    <ExerciseCard
      title="Arrow Functions — Round 2"
      description={`
        Write an object method that uses an arrow function internally to safely access this.
        Write a typed higher-order function (transform) that accepts a callback typed as (n: number) => number.
        Call transform with two different arrow function callbacks.
      `}
    >
      <OutputBox
        entries={[
          { label: "clock.seconds after tick() x2", value: clock.seconds },
          { label: "transform([1,2,3], n => n ** 2)", value: `${squares}` },
          { label: "transform([1,2,3], n => n + 10)", value: `${addTen}` },
        ]}
      />
    </ExerciseCard>
  );
}
