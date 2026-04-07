import LetVsConst2 from "@/components/exercises/typescript2/01-LetVsConst2";
import ArrowFunctions2 from "@/components/exercises/typescript2/02-ArrowFunctions2";
import Destructuring2 from "@/components/exercises/typescript2/03-Destructuring2";
import SpreadOperator2 from "@/components/exercises/typescript2/04-SpreadOperator2";
import MapFilterReduce2 from "@/components/exercises/typescript2/05-MapFilterReduce2";
import Link from "next/link";

export default function TypeScript2Page() {
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
          <h1 className="text-3xl font-bold">TypeScript — Round 2</h1>
          <p className="text-muted-foreground mt-1">
            5 retests on topics 01–05 from a different angle
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LetVsConst2 />
          <ArrowFunctions2 />
          <Destructuring2 />
          <SpreadOperator2 />
          <MapFilterReduce2 />
        </div>
      </div>
    </div>
  );
}
