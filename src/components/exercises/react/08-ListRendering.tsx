"use client";

import { useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

interface Todo {
  id: number;
  text: string;
}

let nextId = 4;

export default function ListRendering() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Master TypeScript" },
    { id: 3, text: "Build something cool" },
  ]);
  const [newText, setNewText] = useState("");

  // TODO: Implement `addTodo` — append a new Todo to the list.
  //       Use `nextId++` for the id. Clear `newText` after adding.
  //       Tip: use the functional updater: setTodos(prev => [...])
  const addTodo = () => {};

  // TODO: Implement `removeTodo(id)` — remove the todo with the matching id.
  //       Tip: use .filter()
  const removeTodo = (id: number) => { void id; };

  return (
    <ExerciseCard
      title="List Rendering with Keys"
      description={`
        Render the todos array with .map(). Give each <li> a key using todo.id (not the array index).
        Implement addTodo to append a new item. Implement removeTodo to filter it out.
        Note: never use array index as key — it breaks reconciliation when items are reordered.
      `}
    >
      <div className="space-y-3 text-sm">
        <ul className="space-y-1">
          {/* TODO: Map over `todos` and render each as a <li> with a key prop.
                    Each item should show its text and a remove button. */}
          <li className="text-muted-foreground italic text-xs">Implement .map() above</li>
        </ul>

        <div className="flex gap-2">
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="New todo…"
            className="border rounded px-2 py-1 text-sm flex-1 bg-background"
          />
          <button onClick={addTodo} className="px-3 py-1 rounded border bg-muted hover:bg-muted/80 text-sm">Add</button>
        </div>

        <p className="text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 rounded p-2">
          ⚠️ Never use array index as key.
        </p>
      </div>
    </ExerciseCard>
  );
}
