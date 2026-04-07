import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function LetVsConst2() {
  // TODO: You have a counter that starts at 0 and needs to be incremented 3 times.
  //       Declare it with the CORRECT keyword, then increment it 3 times.
  //       Question: why can't you use `const` here?

  // TODO: You have an app config that never gets reassigned, but its properties do change.
  //       Declare it with the CORRECT keyword.
  //       Then change the `theme` property from "light" to "dark".
  //       Question: why can `const` work here even though a property changes?

  // TODO: Declare a `PI` constant (3.14159) that should never change.
  //       Add a comment explaining what would happen at runtime if you tried: PI = 3;

  // TODO: `const` in a block creates a NEW binding each time the block runs.
  //       Use a for loop with `const` to show this:
  //       Inside the loop body, declare `const message = \`item \${i}\`` and push it to an array.
  //       (This works because each iteration is a new block scope.)
  const messages: string[] = [];

  return (
    <ExerciseCard
      title="let vs const — Round 2"
      description={`
        Choose the right keyword for each variable based on whether it needs to be reassigned.
        Show that const objects allow property mutation but not rebinding.
        Demonstrate that const works inside a loop body (new block each iteration).
      `}
    >
      <OutputBox
        entries={[
          // TODO: { label: "counter after 3 increments", value: counter },
          // TODO: { label: "config.theme after change", value: config.theme },
          // TODO: { label: "PI", value: PI },
          // TODO: { label: "messages from const-in-loop", value: messages },
        ]}
      />
    </ExerciseCard>
  );
}
