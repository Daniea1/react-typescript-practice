import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function LetVsConst() {
  // TODO: Declare a `let` variable with a number. Reassign it. Store both values.

  // TODO: Declare a `const` variable. Add a comment explaining why reassigning it throws.

  // TODO: Declare a `const` object. Mutate one of its properties.
  //       Store the value before and after the mutation.

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
          // TODO: { label: "let x (initial)", value: ??? },
          // TODO: { label: "let x (after reassign)", value: ??? },
          // TODO: { label: "const obj.name (before)", value: ??? },
          // TODO: { label: "const obj.name (after mutation)", value: ??? },
        ]}
      />
    </ExerciseCard>
  );
}
