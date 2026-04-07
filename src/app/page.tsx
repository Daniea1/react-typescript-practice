import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">React & TypeScript Practice</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Interactive exercises for front-end interview prep
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
        <Link
          href="/typescript"
          className="flex-1 border rounded-xl p-8 hover:shadow-md transition-shadow cursor-pointer bg-card group"
        >
          <h2 className="text-xl font-semibold group-hover:text-foreground">
            TypeScript Exercises
          </h2>
          <p className="text-muted-foreground text-sm mt-1">10 topics</p>
          <ul className="mt-4 text-xs text-muted-foreground space-y-1">
            <li>let vs const</li>
            <li>Arrow functions</li>
            <li>Destructuring &amp; Spread</li>
            <li>map / filter / reduce</li>
            <li>Promises &amp; async/await</li>
            <li>Scope, Closures, Immutability</li>
          </ul>
        </Link>

        <Link
          href="/react"
          className="flex-1 border rounded-xl p-8 hover:shadow-md transition-shadow cursor-pointer bg-card group"
        >
          <h2 className="text-xl font-semibold group-hover:text-foreground">
            React Exercises
          </h2>
          <p className="text-muted-foreground text-sm mt-1">14 topics</p>
          <ul className="mt-4 text-xs text-muted-foreground space-y-1">
            <li>Components, JSX, Props</li>
            <li>useState &amp; useEffect</li>
            <li>Event handling &amp; Forms</li>
            <li>Conditional &amp; List rendering</li>
            <li>Lifting state &amp; Data flow</li>
            <li>Data fetching &amp; Custom hooks</li>
          </ul>
        </Link>
      </div>
    </div>
  );
}
