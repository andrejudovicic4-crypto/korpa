"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

const filters = ["Sve", "Svježe", "Zimnica", "Bez šećera", "Organsko"];

const categories = [
  {
    title: "Povrće",
    description: "Sezonsko povrće sa porodičnih bašta.",
    image: "/povrce.jpeg",
    // TODO: Replace placeholder hrefs with real links.
    menu: [
      { label: "Zeleni Breg", href: "#" },
      { label: "DomaćePovrće", href: "#" },
      { label: "Etnoselo", href: "#" },
    ],
  },
  {
    title: "Voće",
    description: "Slatko i mirisno, ubrano na vrijeme.",
    image: "/voce.jpg",
    // TODO: Replace placeholder hrefs with real links.
    menu: [
      { label: "VoćarProm", href: "#" },
      { label: "Crvena Jabuka", href: "#" },
      { label: "Jagodica", href: "#" },
    ],
  },
  {
    title: "Mliječni proizvodi",
    description: "Sir, kajmak i jogurt iz malih mljekara.",
    image: "/seka3.jpg",
    // TODO: Replace placeholder hrefs with real links.
    menu: [
      { label: "Mljekara Gatarić", href: "#" },
      { label: "Kozaramlek", href: "#" },
      { label: "Gazdinstvo Džajić", href: "#" },
    ],
  },
  {
    title: "Med",
    description: "Pravi med, bez dodataka i miješanja.",
    image: "/med.jpg",
    // TODO: Replace placeholder hrefs with real links.
    menu: [
      { label: "Medarba", href: "#" },
      { label: "Pčelica", href: "#" },
      { label: "Polen", href: "#" },
    ],
  },
  {
    title: "Domaći džemovi",
    description: "Kuvano polako, po receptima naših baka.",
    image: "/seka4.jpg",
    // TODO: Replace placeholder hrefs with real links.
    menu: [
      { label: "Nektar", href: "#" },
      { label: "Gazidnstvo Šarić", href: "#" },
      { label: "Kajsija", href: "#" },
    ],
  },
  {
    title: "Zimnica",
    description: "Ajvar, turšija i sokovi u tegli.",
    image: "/zima.jpeg",
    // TODO: Replace placeholder hrefs with real links.
    menu: [
      { label: "KiseloBA", href: "#" },
      { label: "Turšija.com", href: "#" },
      { label: "Zimnica", href: "#" },
    ],
  },
  {
    title: "Pekarski proizvodi",
    description: "Hljeb, pogače i pite iz domaćih rerni.",
    image: "/brasno.jpeg",
    // TODO: Replace placeholder hrefs with real links.
    menu: [
      { label: "Žitar", href: "#" },
      { label: "Klas", href: "#" },
      { label: "Polje", href: "#" },
    ],
  },
  {
    title: "Tradicionalni specijaliteti",
    description: "Suvo meso, kobasice i domaće delicije.",
    image: "/suvo.jpeg",
    // TODO: Replace placeholder hrefs with real links.
    menu: [
      { label: "Gazdinstvo Udovičić", href: "#" },
      { label: "Kočić", href: "#" },
      { label: "Sitnica", href: "#" },
    ],
  },
];

const placeholderMenu = [
  { label: "Item 1", href: "#" },
  { label: "Item 2", href: "#" },
  { label: "Item 3", href: "#" },
];

export default function ProductsPage() {
  return (
    <div className="bg-transparent text-[#f3eadc]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#efe1d0] p-10 shadow-lg shadow-[#d2b896]/40">
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.25)_0,rgba(255,255,255,0.25)_1px,rgba(0,0,0,0)_1px,rgba(0,0,0,0)_3px)]" />
            <p className="inline-flex w-fit items-center rounded-full bg-white/70 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-[#7a6a5c] shadow-sm">
              Proizvodi
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-[#2e241f]">
              Istražite domaće kategorije
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5a4a3f]">
              Sve kategorije su pažljivo birane i provjerene. Pronađite ukus koji
              vam najviše prija i naručite direktno od proizvođača.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className="rounded-full border border-[#f6c35b] bg-white/70 px-4 py-2 text-xs font-semibold text-[#6a4b1f] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fff2c5]"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="group rounded-3xl bg-[#efe1d0] p-5 shadow-md shadow-[#d2b896]/40 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="group relative h-36 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#f6c35b]/40 via-[#fff2c5] to-[#e0edd6]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-x-0 -top-3 h-6 bg-gradient-to-b from-transparent via-[#efe1d0]/70 to-[#efe1d0]" />
                  <div className="pointer-events-none translate-y-2 rounded-2xl border border-transparent bg-[#efe1d0]/90 p-3 opacity-0 shadow-[0_12px_30px_rgba(210,184,150,0.45)] transition duration-300 group-hover:pointer-events-auto group-focus-within:pointer-events-auto group-hover:translate-y-0 group-focus-within:translate-y-0 group-hover:opacity-100 group-focus-within:opacity-100">
                    {item.menu ? null : (
                      // TODO: Replace placeholder hrefs with real category links.
                      <span className="sr-only">Placeholder links</span>
                    )}
                    <div className="grid gap-2">
                      {(item.menu ?? placeholderMenu).map((menuItem) => (
                        <Link
                          key={menuItem.label}
                          href={menuItem.href}
                          className="rounded-xl bg-white/85 px-3 py-2 text-xs font-semibold text-[#5a4a3f] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fff2c5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c35b]"
                        >
                          {menuItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#2e241f] group-hover:font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5a4a3f]">
                  {item.description}
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#2f5d2a] transition group-hover:gap-3"
                >
                  Pogledaj ponudu →
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
