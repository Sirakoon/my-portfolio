import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border pt-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}