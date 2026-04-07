import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function MapFilterReduce2() {
  const employees = [
    { name: "Alice",   dept: "Engineering" },
    { name: "Bob",     dept: "Design" },
    { name: "Carol",   dept: "Engineering" },
    { name: "Dave",    dept: "Marketing" },
    { name: "Eve",     dept: "Engineering" },
    { name: "Frank",   dept: "Design" },
  ];

  const nested = [[1, 2], [3, 4], [5]];

  // TODO: Use .filter() to get only employees in the "Engineering" department.

  // TODO: Use .map() on the filtered result to extract just the names.
  //       Expected: ["Alice", "Carol", "Eve"]

  // TODO: Use .reduce() on `employees` to build a frequency map:
  //         Record<string, number>  — how many employees are in each dept.
  //       Expected: { Engineering: 3, Design: 2, Marketing: 1 }
  //       Hint: start with {} as the accumulator, check if the key exists before incrementing.

  // TODO: Use .flatMap() on `nested` to flatten it into a single array in one step.
  //       Expected: [1, 2, 3, 4, 5]
  //       (Compare to .map().flat() — flatMap does both in one pass.)

  // TODO: Use .some() to check if any employee is in "Marketing".
  // TODO: Use .every() to check if all employees have a non-empty name.

  return (
    <ExerciseCard
      title="map / filter / reduce — Round 2"
      description={`
        Filter an object array by a property. Map the filtered result to extract names.
        Use reduce to build a frequency map (dept → count).
        Use flatMap to flatten a nested array. Use some() and every() for boolean checks.
      `}
    >
      <OutputBox
        entries={[
          // TODO: { label: "engineering employees", value: ??? },
          // TODO: { label: "engineering names", value: ??? },
          // TODO: { label: "dept frequency map", value: ??? },
          // TODO: { label: "flatMap nested", value: ??? },
          // TODO: { label: "some in Marketing", value: ??? },
          // TODO: { label: "every has name", value: ??? },
        ]}
      />
    </ExerciseCard>
  );
}
