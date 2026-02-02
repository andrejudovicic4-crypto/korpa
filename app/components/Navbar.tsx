"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/proizvodi", label: "Proizvodi" },
  { href: "/proizvodjaci", label: "Proizvođači" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/30 bg-[#efe1d0]/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-transparent shadow-md shadow-black/20">
            <Image
              src="/Logoseka.jpg"
              alt="Korpa na Pragu logo"
              width={96}
              height={96}
              className="h-20 w-20 rounded-full object-cover"
              priority
            />
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[#5a4a3f] md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 transition hover:bg-[#fff2c5]/60 hover:text-[#2f5d2a] hover:font-semibold ${
                  active ? "bg-[#fff2c5]/70 font-semibold text-[#2f5d2a]" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/kontakt"
          className="rounded-full bg-[#f08a3e] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[#f08a3e]/30 transition hover:-translate-y-0.5 hover:bg-[#e27a2f]"
        >
          Naruči odmah
        </Link>
      </div>
    </header>
  );
}
