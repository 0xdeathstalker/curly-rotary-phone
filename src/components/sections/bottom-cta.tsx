import { Button } from "@/components/ui/button";

export function BottomCTA() {
  return (
    <section className="bg-neutral-900 text-neutral-200 flex flex-col items-center justify-center py-12 md:py-28 px-5 md:px-16">
      <div className="flex items-center gap-2 mb-10 md:mb-20">
        <div className="flex items-center">
          <div className="bg-muted-foreground border rounded-full size-6" />
          <div className="bg-muted-foreground border rounded-full size-6 -ml-1.5" />
          <div className="bg-muted-foreground border rounded-full size-6 -ml-1.5" />
          <div className="bg-muted-foreground border rounded-full size-6 -ml-1.5" />
        </div>

        <span>4.8/5 (19K+ Reviews)</span>
      </div>

      <div className="space-y-6 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center leading-tight font-bold max-w-3xl">
          Ready to file, grow, and smile? Talk to our experts today!
        </h1>

        <p>India’s highest-rated legal tax and compliance platform.</p>

        <Button size="lg" className="text-lg bg-neutral-200 text-foreground">
          Get Started
        </Button>
      </div>
    </section>
  );
}
