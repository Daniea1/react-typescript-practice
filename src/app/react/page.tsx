import Components from "@/components/exercises/react/01-Components";
import JSX from "@/components/exercises/react/02-JSX";
import Props from "@/components/exercises/react/03-Props";
import State from "@/components/exercises/react/04-State";
import UseEffect from "@/components/exercises/react/05-UseEffect";
import EventHandling from "@/components/exercises/react/06-EventHandling";
import ConditionalRendering from "@/components/exercises/react/07-ConditionalRendering";
import ListRendering from "@/components/exercises/react/08-ListRendering";
import ControlledForms from "@/components/exercises/react/09-ControlledForms";
import LiftingState from "@/components/exercises/react/10-LiftingState";
import OneWayDataFlow from "@/components/exercises/react/11-OneWayDataFlow";
import DataFetching from "@/components/exercises/react/12-DataFetching";
import CustomHooks from "@/components/exercises/react/13-CustomHooks";
import ImmutabilityState from "@/components/exercises/react/14-ImmutabilityState";
import Link from "next/link";

export default function ReactPage() {
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
          <h1 className="text-3xl font-bold">React Exercises</h1>
          <p className="text-muted-foreground mt-1">14 foundational topics for front-end interviews</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Components />
          <JSX />
          <Props />
          <State />
          <UseEffect />
          <EventHandling />
          <ConditionalRendering />
          <ListRendering />
          <ControlledForms />
          <LiftingState />
          <OneWayDataFlow />
          <DataFetching />
          <CustomHooks />
          <ImmutabilityState />
        </div>
      </div>
    </div>
  );
}
