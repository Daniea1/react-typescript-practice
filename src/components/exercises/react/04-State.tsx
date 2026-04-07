"use client";

import { useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

export default function State() {
  // TODO: Declare a `count` state variable using useState, initialized to 0.
  //       Type it as number.

  // TODO: Declare an `isOn` state variable using useState, initialized to false.
  //       Type it as boolean.

  return (
    <ExerciseCard
      title="useState"
      description={`
        Declare a count state initialized to 0. Add increment, decrement, and reset buttons.
        Declare a boolean isOn state. Add a toggle button that switches between ON and OFF.
        Use the functional updater form: setCount(c => c + 1).
      `}
    >
      <div className="space-y-6 text-sm">
        {/* TODO: Render the counter UI with −, +, and Reset buttons */}
        {/* TODO: Render the toggle button showing "ON" or "OFF" */}
        <p className="text-muted-foreground italic text-xs">Implement state and UI above.</p>
      </div>
    </ExerciseCard>
  );
}
