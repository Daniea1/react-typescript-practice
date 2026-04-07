import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function LetVsConst() {
  // TODO: Declare a `let` variable with a number. Reassign it. Store both values.
  let randomNum: number = 10;
  const initialNum = randomNum;
  randomNum = 42;

  // TODO: Declare a `const` variable. Add a comment explaining why reassigning it throws.

  // const binds the variable name to a fixed reference in memory.                               
  // Reassigning it (e.g. name = "Bob") throws a TypeError at runtime because the binding itself is immutable — you can't point `name` at a new value. 
  const name: string = "Alice"

  // TODO: Declare a `const` object. Mutate one of its properties. Store the value before and after the mutation.
  const obj = { name: "Alice" };
  const beforeMutation = obj.name;
  
  obj.name = "bob";
  const afterMutation = obj.name;

  return (
    <ExerciseCard
      title="let vs const"
      description={`
        Declare a let variable, reassign it, and capture both values.
        Declare a const variable and explain why reassigning throws a TypeError.
        Declare a const object and show that mutating a property is still allowed.
      `}
    >
      <OutputBox
        entries={[
          { label: "let x (initial)", value: initialNum },
          { label: "let x (after reassign)", value: randomNum },
          { label: "const obj.name (before)", value: beforeMutation },
          { label: "const obj.name (after mutation)", value: afterMutation },
        ]}
      />
    </ExerciseCard>
  );
}
