import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { profile } from "../../data/profile";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold">{profile.name}</h1>
        <AnimatedThemeToggler />
      </div>
    </header>
  );
}