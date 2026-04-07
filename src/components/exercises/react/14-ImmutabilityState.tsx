"use client";

import { useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface Profile {
  name: string;
  address: {
    city: string;
    country: string;
  };
}

export default function ImmutabilityState() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Read the docs", done: false },
    { id: 2, text: "Write tests", done: false },
    { id: 3, text: "Ship it", done: false },
  ]);

  const [profile, setProfile] = useState<Profile>({
    name: "Alice",
    address: { city: "Toronto", country: "Canada" },
  });

  // TODO: Implement `toggleTask(id)`.
  //       Find the task with the matching id and flip its `done` property.
  //       IMPORTANT: do NOT mutate the existing task object.
  //       Use: setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  //
  // ❌ Wrong (mutates state directly — React won't detect the change):
  //    const task = tasks.find(t => t.id === id);
  //    task.done = !task.done;
  //    setTasks(tasks);
  const toggleTask = (id: number) => { void id; };

  // TODO: Implement `updateCity(city)`.
  //       Update profile.address.city WITHOUT mutating the existing state.
  //       Spread at every level: { ...prev, address: { ...prev.address, city } }
  const updateCity = (city: string) => { void city; };

  return (
    <ExerciseCard
      title="Immutability in State"
      description={`
        Implement toggleTask using prev.map + spread to flip done without mutating the array.
        Implement updateCity using nested spread to update a deeply nested field.
        React requires a new object reference to detect changes and re-render.
      `}
    >
      <div className="space-y-4 text-sm">
        <div>
          <p className="text-xs text-muted-foreground font-mono mb-1">
            Click to toggle — use {"{ ...t, done: !t.done }"}
          </p>
          <ul className="space-y-1">
            {tasks.map((task) => (
              <li
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className="flex items-center gap-2 bg-muted rounded px-3 py-1.5 cursor-pointer"
              >
                <span className={`w-4 h-4 rounded border flex items-center justify-center text-xs ${task.done ? "bg-green-500 border-green-500 text-white" : "bg-background"}`}>
                  {task.done ? "✓" : ""}
                </span>
                <span className={task.done ? "line-through text-muted-foreground" : ""}>
                  {task.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs text-muted-foreground font-mono mb-1">
            Nested spread: {"{...prev, address: {...prev.address, city}}"}
          </p>
          <input
            value={profile.address.city}
            onChange={(e) => updateCity(e.target.value)}
            className="border rounded px-2 py-1 text-sm w-full bg-background"
            placeholder="Implement updateCity to edit"
          />
          <div className="font-mono text-xs bg-muted rounded p-2 mt-1 space-y-0.5">
            <div>city: &quot;{profile.address.city}&quot;</div>
            <div>country: &quot;{profile.address.country}&quot; (untouched)</div>
          </div>
        </div>
      </div>
    </ExerciseCard>
  );
}
