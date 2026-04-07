"use client";

import { useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

export default function EventHandling() {
  // TODO: Declare a `clickCount` state (number, starts at 0).
  // TODO: Declare an `inputValue` state (string, starts at "").
  // TODO: Declare a `submitted` state (string | null, starts at null).
  // TODO: Declare a `lastKey` state (string | null, starts at null).

  return (
    <ExerciseCard
      title="Event Handling"
      description={`
        onClick: count how many times a button is clicked.
        onChange: mirror an input's value into state as the user types.
        onSubmit: prevent the default form reload and capture the submitted value.
        onKeyDown: display the last key pressed in a focusable div.
      `}
    >
      <div className="space-y-4 text-sm">
        {/* TODO: Button with onClick that increments clickCount. Show the count. */}

        {/* TODO: Input with value={inputValue} and onChange that updates inputValue.
                  Show the current value below. */}

        {/* TODO: Form with onSubmit (prevent default). Capture and display submitted value. */}

        {/* TODO: Div with tabIndex={0} and onKeyDown. Display lastKey. */}

        <p className="text-muted-foreground italic text-xs">Implement state and handlers above.</p>
      </div>
    </ExerciseCard>
  );
}
