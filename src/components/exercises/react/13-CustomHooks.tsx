"use client";

import { ExerciseCard } from "@/components/exercises/ExerciseCard";

// TODO: Write a `useLocalStorage<T>(key: string, initialValue: T)` hook.
//       - Initialize state by reading from localStorage (JSON.parse).
//       - Guard against SSR: check `typeof window !== "undefined"` before accessing localStorage.
//       - Use a useEffect to write the value back to localStorage whenever it changes.
//       - Return [value, setValue] as const (same API as useState).

// TODO: Write a `useWindowSize()` hook.
//       - Return { width, height } state tracking the window dimensions.
//       - Initialize with { width: 0, height: 0 }.
//       - In a useEffect, set the initial size and add a "resize" event listener.
//       - Return a cleanup function that removes the listener.
//       - Guard against SSR: only access `window` inside useEffect.

export default function CustomHooks() {
  // TODO: Call useLocalStorage("exercise-note", "") and get [note, setNote].
  // TODO: Call useWindowSize() and destructure { width, height }.

  return (
    <ExerciseCard
      title="Custom Hooks"
      description={`
        Write useLocalStorage(key, init) — syncs state to localStorage so it persists on refresh.
        Write useWindowSize() — tracks window width and height, updating on resize.
        Both must use hooks internally and be named with the use prefix.
      `}
    >
      <div className="space-y-4 text-sm">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-mono">useLocalStorage("exercise-note", "")</p>
          {/* TODO: Input bound to note, onChange calls setNote. Show persistence hint. */}
          <p className="text-muted-foreground italic text-xs">Implement hook and bind input above.</p>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-mono">useWindowSize()</p>
          <div className="bg-muted rounded p-2 font-mono text-xs">
            {/* TODO: Display width and height */}
            <div className="text-muted-foreground italic">Implement hook to see dimensions</div>
          </div>
        </div>
      </div>
    </ExerciseCard>
  );
}
