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
    <div className="bg-transparent text-[#f3eadc]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <Reveal>
          <div className="grid gap-8 rounded-3xl bg-[#efe1d0] p-10 shadow-lg shadow-[#d2b896]/40 lg:grid-cols-[1.1fr_0.9fr]">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#7a6a5c]">
              O nama
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-[#2e241f]">
              Tradicija i tehnologija na istoj strani
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5a4a3f]">
              Korpa na pragu nastala je iz potrebe da se tradicionalna proizvodnja
              prilagodi savremenom načinu života, bez gubitka kvaliteta i
              autentičnosti. Naša platforma omogućava direktnu saradnju sa lokalnim
              proizvođačima, čime se obezbjeđuje transparentnost, povjerenje i fer
              odnos prema svima uključenima. Poseban fokus stavljamo na porijeklo
              proizvoda, održivost i podršku lokalnoj ekonomiji. Kroz digitalna
              rješenja stvaramo prostor u kojem tradicija ne nestaje, već dobija novu
              vrijednost i šansu za razvoj
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
                className={`rounded-3xl p-8 shadow-md shadow-[#d2b896]/40 ${
                  index % 2 === 0 ? "bg-[#f6ede1]" : "bg-[#efe1d0]"
                }`}
              >
                <h2 className="text-2xl font-semibold text-[#2e241f]">
                  {section.title}
                </h2>
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
