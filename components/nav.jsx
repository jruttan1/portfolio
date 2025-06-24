import { LiquidGlassNav } from "@/components/ui/liquid-glass"
import Link from "next/link"

export default function Nav() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#footer", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-6">
      <LiquidGlassNav items={navItems} />
    </nav>
  );
}
