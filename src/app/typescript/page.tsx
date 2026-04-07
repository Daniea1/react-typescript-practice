import LetVsConst from "@/components/exercises/typescript/01-LetVsConst";
import ArrowFunctions from "@/components/exercises/typescript/02-ArrowFunctions";
import Destructuring from "@/components/exercises/typescript/03-Destructuring";
import SpreadOperator from "@/components/exercises/typescript/04-SpreadOperator";
import MapFilterReduce from "@/components/exercises/typescript/05-MapFilterReduce";
import Promises from "@/components/exercises/typescript/06-Promises";
import AsyncAwait from "@/components/exercises/typescript/07-AsyncAwait";
import Scope from "@/components/exercises/typescript/08-Scope";
import Closures from "@/components/exercises/typescript/09-Closures";
import Immutability from "@/components/exercises/typescript/10-Immutability";
import Link from "next/link";

export default function TypeScriptPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-2">
          <Link
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
        </div>
        <header className="mb-8">
          <h1 className="text-3xl font-bold">TypeScript Exercises</h1>
          <p className="text-muted-foreground mt-1">10 foundational topics for front-end interviews</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LetVsConst />
          <ArrowFunctions />
          <Destructuring />
          <SpreadOperator />
          <MapFilterReduce />
          <Promises />
          <AsyncAwait />
          <Scope />
          <Closures />
          <Immutability />
        </div>
      </div>
    </div>
  );
}
