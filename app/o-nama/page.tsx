"use client";

import Image from "next/image";
import Reveal from "../components/Reveal";

const sections = [
  {
    title: "Naša priča",
    content:
      "Korpa na pragu nastala je iz želje da domaći proizvodi dobiju mjesto koje zaslužuju. Grad i selo su često daleko, ali povjerenje i kvalitet mogu da ih spoje.",
  },
  {
    title: "Misija",
    content:
      "Želimo da porodicama omogućimo da naručuju provjerenu domaću hranu, a proizvođačima da bezbjedno prodaju svoje proizvode. Sve na jednom mjestu, uz moderan i jednostavan proces.",
  },
  {
    title: "Vizija",
    content:
      "Da budemo prva asocijacija na domaće proizvode u regionu i da očuvamo ruralne zajednice kroz dugoročne, fer odnose.",
  },
  {
    title: "Vrijednosti",
    content:
      "Povjerenje, transparentnost, tradicija i poštovanje rada domaćina. Te vrijednosti gradimo modernom tehnologijom i pažljivom selekcijom.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-transparent text-[#f3eadc]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.2]">
        <div className="absolute -top-28 right-[-7rem] h-64 w-64 rounded-full bg-[#f6c35b]/20 blur-3xl" />
        <div className="absolute top-[40%] left-[-5rem] h-56 w-56 rounded-full bg-[#7fb069]/15 blur-3xl" />
      </div>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <Reveal>
          <div className="grid gap-8 relative overflow-hidden rounded-3xl border border-white/50 bg-[#efe1d0] p-10 shadow-lg shadow-[#d2b896]/40 lg:grid-cols-[1.1fr_0.9fr]">
            <p className="inline-flex w-fit items-center rounded-full bg-white/70 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-[#7a6a5c] shadow-sm">
              O nama
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-[#2e241f]">
              Tradicija i tehnologija na istoj strani
            </h1>
            <div className="mt-3 h-1 w-14 rounded-full bg-[#f6c35b]/70" />
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5a4a3f]">
              Korpa na pragu nastala je iz potrebe da se tradicionalna proizvodnja
              prilagodi savremenom načinu života, bez gubitka kvaliteta i
              autentičnosti. Naša platforma omogućava direktnu saradnju sa lokalnim
              proizvođačima, čime se obezbjeđuje transparentnost, povjerenje i fer
              odnos prema svima uključenima. Poseban fokus stavljamo na porijeklo
              proizvoda, održivost i podršku lokalnoj ekonomiji. Kroz digitalna
              rješenja stvaramo prostor u kojem tradicija ne nestaje, već dobija novu
              vrijednost i šansu za razvoj.
            </p>
            <div className="relative h-[220px] w-full overflow-hidden rounded-3xl shadow-lg shadow-[#d2b896]/40 lg:col-start-2 lg:row-span-3">
              <Image
                src="/trad.jpg"
                alt="Domaćinstvo i tradicija"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1915]/50 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
        <div className="grid gap-8">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 120}>
              <div
                className={`relative overflow-hidden rounded-3xl border border-white/40 p-8 shadow-md shadow-[#d2b896]/40 ${
                  index % 2 === 0 ? "bg-[#f6ede1]" : "bg-[#efe1d0]"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.22)_0,rgba(255,255,255,0.22)_1px,rgba(0,0,0,0)_1px,rgba(0,0,0,0)_3px)]" />
                <h2 className="text-2xl font-semibold text-[#2e241f]">
                  {section.title}
                </h2>
                <div className="mt-3 h-1 w-10 rounded-full bg-[#7fb069]/60" />
                <p className="mt-3 text-base leading-7 text-[#5a4a3f]">
                  {section.content}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
