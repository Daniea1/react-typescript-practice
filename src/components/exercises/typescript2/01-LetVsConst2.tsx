import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function LetVsConst2() {
  // TODO: You have a counter that starts at 0 and needs to be incremented 3 times.
  //       Declare it with the CORRECT keyword, then increment it 3 times.
  //       Question: why can't you use `const` here?
  //       Answer: you can't point `name` at a new value. 

  let counter: number = 0;

  counter += 1;
  counter += 1;
  counter += 1;


  // TODO: You have an app config that never gets reassigned, but its properties do change.
  //       Declare it with the CORRECT keyword.
  //       Then change the `theme` property from "light" to "dark".
  //       Question: why can `const` work here even though a property changes?

  const config = { theme: "light" };
  config.theme = "dark";


  // TODO: Declare a `PI` constant (3.14159) that should never change.
  const PI: number = 3.14159;

  // TODO: `const` in a block creates a NEW binding each time the block runs.
  //       Use a for loop with `const` to show this:
  //       Inside the loop body, declare `const message = \`item \${i}\`` and push it to an array.
  //       (This works because each iteration is a new block scope.)

  const messages: string[] = [];

  for (let i = 0; i < 3; i++) {
    const message = `item ${i}`;
    messages.push(message);
  };

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
          { label: "counter after 3 increments", value: counter },
          { label: "config.theme after change", value: config.theme },
          { label: "PI", value: PI },
          { label: "messages from const-in-loop", value: `${messages}` },
        ]}
      />
    </ExerciseCard>
  );
}
