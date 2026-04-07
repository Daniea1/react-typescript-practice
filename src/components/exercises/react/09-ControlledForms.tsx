"use client";

import { useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

interface FormState {
  username: string;
  role: string;
  agreed: boolean;
}

export default function ControlledForms() {
  // TODO: Declare a `form` state using useState<FormState> with these initial values:
  //       { username: "", role: "developer", agreed: false }

  // TODO: Write an `update` helper that merges a single key into form state.
  //       Signature: update<K extends keyof FormState>(key: K, value: FormState[K]) => void

  return (
    <ExerciseCard
      title="Controlled Forms"
      description={`
        Bind a text input's value to form.username with onChange.
        Bind a select's value to form.role with onChange.
        Bind a checkbox's checked to form.agreed with onChange.
        Show a live preview of the full form state below the inputs.
      `}
    >
      <div className="space-y-3 text-sm">
        {/* TODO: Text input — value={form.username}, onChange updates username */}

        {/* TODO: Select — value={form.role}, onChange updates role.
                  Options: developer, designer, admin */}

        {/* TODO: Checkbox — checked={form.agreed}, onChange updates agreed */}

        {/* TODO: Live preview showing all three state values */}

        <p className="text-muted-foreground italic text-xs">Implement state and inputs above.</p>
      </div>
    </ExerciseCard>
  );
}
