'use client';

import { useState } from "react";
import { geistMono, geistSans } from "@/lib/fonts";
import { GiCrucifix } from "react-icons/gi";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const links = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`bg-neutral py-4 px-6 lg:px-30 ${geistSans.className}`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <GiCrucifix size={28} />
          <span className={`${geistMono.className} text-lg font-bold`}>
            Valdés &amp; Co.
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm hover:text-secondary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li className="bg-primary text-white px-4 py-2 text-sm">
            <a href="#contact">Contacto</a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <RiCloseLine size={26} /> : <RiMenuLine size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 pt-6 pb-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm block"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="bg-primary text-white px-4 py-2 text-sm text-center">
            <a href="#contact" onClick={() => setOpen(false)}>
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
