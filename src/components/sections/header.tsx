import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-background font-sans h-[72px] w-full px-5 md:px-16 sticky top-0 flex items-center justify-between">
      <h1 className="text-2xl md:text-3xl font-bold">Logo</h1>

      <div className="hidden md:flex items-center gap-8">
        <Link href="#">Link1</Link>
        <Link href="#">Link2</Link>
        <Link href="#">Link3</Link>
        <Link href="#">Link4</Link>

        <div className="flex items-center gap-4">
          <Button variant="outline">Button</Button>
          <Button>Button</Button>
        </div>
      </div>

      <Button variant="ghost" className="md:hidden">
        <Menu />
      </Button>
    </header>
  );
}
