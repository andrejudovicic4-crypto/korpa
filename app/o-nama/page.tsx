"use client";

import Image from "next/image";
import Reveal from "../components/Reveal";

const sections = [
  {
    title: "Na?a pri?a",
    content:
      "Korpa na pragu nastala je iz ?elje da doma?i proizvodi dobiju mjesto koje zaslu?uju. Grad i selo su ?esto daleko, ali povjerenje i kvalitet mogu da ih spoje.",
  },
  {
    title: "Misija",
    content:
      "?elimo da porodicama omogu?imo da naru?uju provjerenu doma?u hranu, a proizvo?a?ima da bezbjedno prodaju svoje proizvode. Sve na jednom mjestu, uz moderan i jednostavan proces.",
  },
  {
    title: "Vizija",
    content:
      "Da budemo prva asocijacija na doma?e proizvode u regionu i da o?uvamo ruralne zajednice kroz dugoro?ne, fer odnose.",
  },
  {
    title: "Vrijednosti",
    content:
      "Povjerenje, transparentnost, tradicija i po?tovanje rada doma?ina. Te vrijednosti gradimo modernom tehnologijom i pa?ljivom selekcijom.",
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
              prilagodi savremenom na?inu ?ivota, bez gubitka kvaliteta i
              autenti?nosti. Na?a platforma omogu?ava direktnu saradnju sa lokalnim
              proizvo?a?ima, ?ime se obezbje?uje transparentnost, povjerenje i fer
              odnos prema svima uklju?enima. Poseban fokus stavljamo na porijeklo
              proizvoda, odr?ivost i podr?ku lokalnoj ekonomiji. Kroz digitalna
              rje?enja stvaramo prostor u kojem tradicija ne nestaje, ve? dobija novu
              vrijednost i ?ansu za razvoj.
            </p>
            <div className="relative h-[220px] w-full overflow-hidden rounded-3xl shadow-lg shadow-[#d2b896]/40 lg:col-start-2 lg:row-span-3">
              <Image
                src="/trad.jpg"
                alt="Doma?instvo i tradicija"
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
