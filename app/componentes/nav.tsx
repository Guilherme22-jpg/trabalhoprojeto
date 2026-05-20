"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiFolder, FiHome, FiPlusSquare } from "react-icons/fi";

const links = [
  { label: "Inicio", href: "/", icon: FiHome },
  { label: "Curriculos", href: "/sistema/paginas/curriculos", icon: FiFolder },
  { label: "Novo cadastro", href: "/sistema/paginas/curriculos/novo", icon: FiPlusSquare },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="app-nav" aria-label="Navegacao principal">
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
        const Icon = link.icon;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${isActive ? "active" : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
