"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/proizvodi", label: "Proizvodi" },
  { href: "/blog", label: "Blog" },
  { href: "/proizvodjaci", label: "Proizvođači" },
  { href: "/kontakt", label: "Kontakt" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61587436415254",
    label: "Facebook",
    short: "FB",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-facebook-icon lucide-facebook"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    short: "IG",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-instagram-icon lucide-instagram"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/korpa-na-pragu-768ab23aa/",
    label: "LinkedIn",
    short: "IN",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-linkedin-icon lucide-linkedin"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/30 bg-[#efe1d0]/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#2e241f]/70 shadow-md shadow-black/30 backdrop-blur">
            <Image
              src="/Novilogo.png"
              alt="Korpa na pragu logo"
              width={112}
              height={112}
              className="h-24 w-24 rounded-full object-cover"
              priority
            />
          </div>
          <span className="hidden text-lg font-semibold text-[#2f5d2a] sm:block">
            Korpa na pragu
          </span>
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
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5a4a3f]/30 text-xs font-semibold text-[#5a4a3f] transition hover:-translate-y-0.5 hover:border-[#2f5d2a]/50 hover:bg-[#fff2c5]/70 hover:text-[#2f5d2a]"
              >
                {social.icon ?? social.short}
              </Link>
            ))}
          </div>
          <Link
            href="/kontakt"
            className="rounded-full bg-[#f08a3e] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[#f08a3e]/30 transition hover:-translate-y-0.5 hover:bg-[#e27a2f]"
          >
            Naruči odmah
          </Link>
        </div>
      </div>
    </header>
  );
}
