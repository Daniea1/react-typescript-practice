import { ExerciseCard, OutputBox } from "@/components/exercises/ExerciseCard";

export default function Destructuring() {
  // TODO: Destructure `name` and `age` from this object:
  const user = { name: "Alice", age: 30, role: "admin" };

  const { name, age } = user;

  // TODO: Destructure `name` again but rename it to `userName`.
  const { name: userName } = user;

  // TODO: Destructure `host` from this object. Also destructure `port` with a default of 3000.
  const config: { host: string; port?: number } = { host: "localhost" };

  const { host, port = 3000 } = config;


  // TODO: Destructure only the first and third elements from this array (skip index 1).
  const colors = ["red", "green", "blue", "yellow"];

  const [first, , third, ,] = colors;

  // TODO: Use nested destructuring to extract `city` from this object.
  const person = { address: { city: "Toronto", country: "Canada" } };

  const { address: { city } } = person;

  // TODO: Write a function `greet` that destructures `{ name, role }` from its parameter
  //       and returns the string `"${name} is a ${role}"`.

  const greet = ({ name, role }: { name: string, role: string }): string => {
    return `${name} is a ${role}`;
  };

  return (
    <ExerciseCard
      title="Destructuring"
      description={`
        Extract name and age from an object. Rename a property during destructuring.
        Provide a default value for a missing key. Skip an element in array destructuring.
        Use nested destructuring and destructure a function parameter.
      `}
    >
      <OutputBox
        entries={[
          { label: "{ name, age }", value: `${name}, ${age}` },
          { label: "{ name: userName }", value: `${userName}` },
          { label: "{ host, port = 3000 }", value: `${host}, ${port}`},
          { label: "array [first, , third]", value: `${first}, ${third}` },
          { label: "nested { address: { city } }", value: `${city}` },
          { label: "greet(user)", value: greet(user) },
        ]}
      />
    </ExerciseCard>
  );
}
