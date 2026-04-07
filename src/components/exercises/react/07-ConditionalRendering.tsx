"use client";

import { useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

export default function ConditionalRendering() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [notifCount, setNotifCount] = useState(0);
  const [showContent, setShowContent] = useState(false);

  return (
    <ExerciseCard
      title="Conditional Rendering"
      description={`
        Ternary: show "Logged in" or "Logged out" based on loggedIn state.
        &&: show a notification badge only when notifCount > 0.
        null / early return: render nothing when showContent is false.
      `}
    >
      <div className="space-y-4 text-sm">
        {/* --- Ternary --- */}
        <div className="border rounded-md p-3 space-y-2">
          <p className="text-xs text-muted-foreground font-mono">condition ? A : B</p>
          <div className="flex items-center justify-between">
            {/* TODO: Use a ternary to show "✅ Logged in" or "🔒 Logged out" */}
            <span className="text-muted-foreground italic text-xs">implement ternary</span>
            <button
              onClick={() => setLoggedIn((v) => !v)}
              className="text-xs px-2 py-1 rounded border bg-muted hover:bg-muted/80"
            >
              Toggle
            </button>
          </div>
        </div>

        {/* --- && --- */}
        <div className="border rounded-md p-3 space-y-2">
          <p className="text-xs text-muted-foreground font-mono">condition && {"<Badge />"}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>Notifications</span>
              {/* TODO: Use && to show a badge only when notifCount > 0 */}
            </div>
            <div className="flex gap-1">
              <button onClick={() => setNotifCount((n) => n + 1)} className="text-xs px-2 py-1 rounded border bg-muted hover:bg-muted/80">+1</button>
              <button onClick={() => setNotifCount(0)} className="text-xs px-2 py-1 rounded border bg-muted hover:bg-muted/80">Clear</button>
            </div>
          </div>
        </div>

        {/* --- null / early return --- */}
        <div className="border rounded-md p-3 space-y-2">
          <p className="text-xs text-muted-foreground font-mono">return null</p>
          <button onClick={() => setShowContent((v) => !v)} className="text-xs px-2 py-1 rounded border bg-muted hover:bg-muted/80">
            {showContent ? "Hide" : "Show"} content
          </button>
          {/* TODO: Render a content box when showContent is true, otherwise render null (or nothing) */}
        </div>
      </div>
    </ExerciseCard>
  );
}
