import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function MapFilterReduce2() {
  const employees = [
    { name: "Alice", dept: "Engineering" },
    { name: "Bob", dept: "Design" },
    { name: "Carol", dept: "Engineering" },
    { name: "Dave", dept: "Marketing" },
    { name: "Eve", dept: "Engineering" },
    { name: "Frank", dept: "Design" },
  ];

  const nested = [[1, 2], [3, 4], [5]];

  // TODO: Use .filter() to get only employees in the "Engineering" department.

  const engineeringEmployees = employees.filter(emp => emp.dept === "Engineering");

  // TODO: Use .map() on the filtered result to extract just the names.
  //       Expected: ["Alice", "Carol", "Eve"]
  const engineeringEmployeesname = engineeringEmployees.map(emp => emp.name);

  // TODO: Use .reduce() on `employees` to build a frequency map:
  //         Record<string, number>  — how many employees are in each dept.
  //       Expected: { Engineering: 3, Design: 2, Marketing: 1 }
  //       Hint: start with {} as the accumulator, check if the key exists before incrementing.

  const employeesFrequencyMap = employees.reduce((acc, emp) => {
    acc[emp.dept] = (acc[emp.dept] || 0) + 1;
    return acc;
  },
    {} as Record<string, number>);

  // TODO: Use .flatMap() on `nested` to flatten it into a single array in one step.
  //       Expected: [1, 2, 3, 4, 5]
  //       (Compare to .map().flat() — flatMap does both in one pass.)

  const flatMap = nested.flatMap(arr => arr);

  // TODO: Use .some() to check if any employee is in "Marketing".

  const marketingEmployee = employees.some(emp => emp.dept === "Marketing");

  // TODO: Use .every() to check if all employees have a non-empty name.

  const allHaveNames = employees.every(emp => emp.name !== "");

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
          { label: "engineering employees", value: engineeringEmployees.map(e => e.name).join(", ") },
          { label: "engineering names", value: `${engineeringEmployeesname}` },
          { label: "dept frequency map", value: JSON.stringify(employeesFrequencyMap) },
          { label: "flatMap nested", value: `${flatMap}` },
          { label: "some in Marketing", value: marketingEmployee },
          { label: "every has name", value: allHaveNames },
        ]}
      />
    </ExerciseCard>
  );
}
