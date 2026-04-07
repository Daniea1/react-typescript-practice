import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExerciseCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ExerciseCard({ title, description, children }: ExerciseCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex-1">{children}</CardContent>
    </Card>
  );
}

interface OutputEntry {
  label: string;
  value: unknown;
}

export function OutputBox({ entries }: { entries: OutputEntry[] }) {
  return (
    <div className="bg-muted rounded-md p-3 space-y-1 font-mono text-sm">
      {entries.map((entry, i) => (
        <div key={i} className="flex gap-2">
          <span className="text-muted-foreground shrink-0">{entry.label}:</span>
          <span className="text-foreground break-all">
            {JSON.stringify(entry.value)}
          </span>
        </div>
      ))}
    </div>
  );
}
