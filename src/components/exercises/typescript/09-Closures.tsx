import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function Closures() {
  // TODO: Write a `makeCounter(start: number)` factory function.
  //       It should return an object with three methods:
  //         - increment() — increases the internal count by 1
  //         - decrement() — decreases the internal count by 1
  //         - value()     — returns the current count
  //       The internal `count` variable should NOT be accessible from outside.

  // TODO: Create counterA starting at 0. Call increment() 3 times.

  // TODO: Create counterB starting at 10. Call decrement() once.

  // TODO: Write a `makeAdder(x: number)` function that returns a new function (y) => x + y.
  //       Create `add5` and `add10` from it.

  return (
    <ExerciseCard
      title="Closures"
      description={`
        Write a makeCounter(start) factory that returns increment, decrement, and value functions.
        Create two independent counters and show their state doesn't interfere.
        Write a makeAdder(x) that returns a function closing over x.
      `}
    >
      <OutputBox
        entries={[
          // TODO: { label: "counterA after 3 increments", value: counterA.value() },
          // TODO: { label: "counterB (start=10) after 1 decrement", value: counterB.value() },
          // TODO: { label: "counters are independent", value: ??? },
          // TODO: { label: "add5(3)", value: add5(3) },
          // TODO: { label: "add10(3)", value: add10(3) },
        ]}
      />
    </ExerciseCard>
  );
}
