"use client";

import { useEffect, useState } from "react";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function DataFetching() {
  // TODO: Declare `users` state (User[], starts as []).
  // TODO: Declare `loading` state (boolean, starts as true).
  // TODO: Declare `error` state (string | null, starts as null).
  // TODO: Declare a `trigger` state (number, starts at 0) — increment to refetch.

  useEffect(() => {
    // TODO: Create an AbortController.
    // TODO: Set loading to true and error to null.
    // TODO: Fetch "https://jsonplaceholder.typicode.com/users?_limit=5"
    //       passing { signal: controller.signal }.
    // TODO: On success, set users and set loading to false.
    // TODO: On error, check for AbortError (ignore it), otherwise set error and loading to false.
    // TODO: Return a cleanup function that calls controller.abort().
  }, [/* TODO: add trigger here once you declare it */]);

  return (
    <ExerciseCard
      title="Data Fetching"
      description={`
        Fetch users from JSONPlaceholder inside useEffect.
        Show a loading state while the request is in flight.
        Show an error state if the request fails.
        Show the user list on success. Add a Refetch button that re-triggers the effect.
        Use AbortController in the cleanup to cancel in-flight requests.
      `}
    >
      <div className="space-y-3 text-sm">
        {/* TODO: Refetch button — onClick increments trigger */}
        <button className="text-xs px-3 py-1.5 rounded border bg-muted hover:bg-muted/80 opacity-50 cursor-not-allowed" disabled>
          🔄 Refetch (implement trigger state)
        </button>

        {/* TODO: Show loading indicator when loading is true */}
        {/* TODO: Show error message when error is not null */}
        {/* TODO: Show user list when not loading and no error */}

        <p className="text-muted-foreground italic text-xs">Implement the useEffect and state above.</p>
      </div>
    </ExerciseCard>
  );
}
