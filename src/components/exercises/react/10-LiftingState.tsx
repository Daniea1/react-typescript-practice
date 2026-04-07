"use client";

import { useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

// TODO: Define a `TemperatureInput` component with these props:
//         unit: "Celsius" | "Fahrenheit"
//         value: string
//         onChange: (value: string) => void
//       It should render a labelled number input that calls onChange on every keystroke.

export default function LiftingState() {
  // TODO: Declare `celsius` state (string, starts at "").
  //       This is the single source of truth — fahrenheit is derived from it.

  // TODO: Derive `fahrenheit` from celsius: (celsius * 9/5) + 32
  //       When celsius is empty, fahrenheit should also be "".

  // TODO: Write `handleCelsiusChange(val)` — sets celsius directly.

  // TODO: Write `handleFahrenheitChange(val)` — converts °F → °C and sets celsius.
  //       Formula: (fahrenheit - 32) * 5/9

  return (
    <ExerciseCard
      title="Lifting State Up"
      description={`
        Define TemperatureInput as a controlled child component.
        Hold celsius state in the parent only — fahrenheit is derived.
        Changing either input should update the other via the parent's handlers.
      `}
    >
      <div className="space-y-4 text-sm">
        {/* TODO: <TemperatureInput unit="Celsius" value={celsius} onChange={handleCelsiusChange} /> */}
        {/* TODO: <TemperatureInput unit="Fahrenheit" value={fahrenheit} onChange={handleFahrenheitChange} /> */}
        <p className="text-muted-foreground italic text-xs">Implement the component and handlers above.</p>
      </div>
    </ExerciseCard>
  );
}
