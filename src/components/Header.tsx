"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sprout } from "lucide-react";
import Logo from "@/components/Logo";
import { navigation } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={`main-nav ${open ? "main-nav-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-mobile-cta" href="/join" onClick={() => setOpen(false)}>
            Join our network <Sprout size={16} />
          </Link>
        </nav>
        <Link className="button button-small header-cta" href="/join">
          Join our network <Sprout size={16} />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
