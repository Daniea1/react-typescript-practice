import { ExerciseCard } from "@/components/exercises/ExerciseCard";

export default function Scope() {
  // TODO: Create a for loop using `var`. Inside, push a closure (() => i) into an array.
  //       After the loop, call each closure and collect the results.
  //       Expected: all closures return the SAME value (the final value of i).
  const varFns: (() => number)[] = [];

  // TODO: Create the same for loop using `let` instead of `var`.
  //       After the loop, call each closure and collect the results.
  //       Expected: each closure returns its own captured value (0, 1, 2).
  const letFns: (() => number)[] = [];

  // TODO: After the var loop, check what value `i` has outside the loop block.
  //       (var leaks out — let would give a compile error here)

  return (
    <ExerciseCard
      title="Scope"
      description={`
        Create closures inside a for loop using var — all closures will share the same variable.
        Repeat with let — each closure captures its own block-scoped binding.
        Show that var leaks out of the loop block while let does not.
      `}
    >
      <div className="bg-muted rounded-md p-3 space-y-3 font-mono text-sm">
        <div>
          <div className="text-muted-foreground text-xs mb-1">for (var i) closures — expected: all same</div>
          {/* TODO: Render varFns[0](), varFns[1](), varFns[2]() */}
          <div className="text-muted-foreground italic text-xs">implement to see results</div>
        </div>
        <div>
          <div className="text-muted-foreground text-xs mb-1">for (let j) closures — expected: 0, 1, 2</div>
          {/* TODO: Render letFns[0](), letFns[1](), letFns[2]() */}
          <div className="text-muted-foreground italic text-xs">implement to see results</div>
        </div>
      </div>
    </ExerciseCard>
  );
}
