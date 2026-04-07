"use client";

import { useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

const COLORS = [
  { id: "red",    label: "Red",    bg: "bg-red-400" },
  { id: "green",  label: "Green",  bg: "bg-green-400" },
  { id: "blue",   label: "Blue",   bg: "bg-blue-400" },
  { id: "yellow", label: "Yellow", bg: "bg-yellow-400" },
];

// TODO: Define a `ColorSwatch` component with these props:
//         color: (typeof COLORS)[number]
//         selected: boolean
//         onSelect: (id: string) => void    ← event flows UP via this callback
//       Render a coloured button. When clicked, call onSelect(color.id).
//       Apply a visible ring/scale when selected.

export default function OneWayDataFlow() {
  // TODO: Declare `selectedColor` state (string, start with "blue").

  return (
    <ExerciseCard
      title="One-Way Data Flow"
      description={`
        Data flows DOWN via props (selected, color). Events flow UP via callbacks (onSelect).
        The parent owns selectedColor state. ColorSwatch children fire onSelect when clicked.
        The parent updates state, which flows back down to highlight the selected swatch.
      `}
    >
      <div className="space-y-4 text-sm">
        <div className="flex gap-3 justify-center py-2">
          {/* TODO: Map over COLORS and render <ColorSwatch> for each.
                    Pass color, selected (selectedColor === color.id), and onSelect. */}
          <p className="text-muted-foreground italic text-xs">Implement ColorSwatch and map above.</p>
        </div>

        {/* TODO: Show which color is currently selected */}
      </div>
    </ExerciseCard>
  );
}
