"use client";

import Image from "next/image";
import Reveal from "../components/Reveal";

const producers = [
  {
    name: "Doma?instvo Jovanovi?",
    location: "Ribnik",
    image: "/dom1.png",
    story:
      "Porodi?na tradicija malinara koja traje preko 30 godina. Poznati po mirisnom vo?u i doma?im sokovima.",
  },
  {
    name: "Gazdinstvo Petrovi?",
    location: "Vrbljani",
    image: "/dom4.png",
    imageFit: "object-contain p-4",
    story:
      "Mlije?ni proizvodi od krava koje pasu na ?istim planinskim pa?njacima. Sir i kajmak su njihov ponos.",
  },
  {
    name: "P?elarstvo Ili?",
    location: "Drvar",
    image: "/dom3.png",
    story:
      "Med koji sti?e direktno iz ?ume, bez dodataka i kompromisa. Ukusi livade i bagrema.",
  },
  {
    name: "Doma?instvo Mili?",
    location: "?ipovo",
    image: "/dom2.png",
    story:
      "Ru?no pravljena zimnica, ajvari i doma?i sokovi. Sve po receptima koji se prenose generacijama.",
  },
];

export default function ProducersPage() {
  return (
    <div className="bg-transparent text-[#f3eadc]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <Reveal>
          <div className="rounded-3xl bg-[#efe1d0] p-10 shadow-lg shadow-[#d2b896]/40">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#7a6a5c]">
              Proizvo?a?i
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-[#2e241f]">
              Lica koja stoje iza svake korpe
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5a4a3f]">
              Upoznajte doma?instva koja svakodnevno rade na zemlji i ?uvaju
              kvalitet na?ih proizvoda. Svaka pri?a je posebna i svaka korpa
              nosi njihove vrijednosti.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-10 sm:px-10">
        <div className="rounded-3xl bg-[#f6ede1] p-8 shadow-md shadow-[#d2b896]/40">
          <h2 className="text-xl font-semibold text-[#2e241f]">
            Lista proizvo?a?a
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-[#5a4a3f] sm:grid-cols-2">
            {producers.map((producer) => (
              <li key={producer.name} className="rounded-xl bg-white/70 px-4 py-2">
                {producer.name}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#7a6a5c]">
            Logotipi proizvo?a?a
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {producers.map((producer) => (
              <div
                key={`${producer.name}-logo`}
                className="flex h-28 items-center justify-center rounded-2xl border border-dashed border-[#d9c4a7] bg-white/70"
              >
                {producer.image ? (
                  <Image
                    src={producer.image}
                    alt={`${producer.name} logo`}
                    width={240}
                    height={160}
                    className={`h-full w-full ${producer.imageFit ?? "object-contain p-4"}`}
                  />
                ) : (
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#7a6a5c]">
                    Logo
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {producers.map((producer, index) => (
            <Reveal key={producer.name} delay={index * 100}>
              <div className="rounded-3xl bg-[#f6ede1] p-6 shadow-md shadow-[#d2b896]/40 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0edd6] text-xl">
                    ??
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2e241f]">
                      {producer.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wide text-[#7a6a5c]">
                      {producer.location}
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-44 w-full overflow-hidden rounded-2xl border border-dashed border-[#d9c4a7] bg-white/60">
                  {producer.image ? (
                    <Image
                      src={producer.image}
                      alt={producer.name}
                      width={600}
                      height={240}
                      className={`h-full w-full ${producer.imageFit ?? "object-cover"}`}
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-[#7a6a5c]">
                      <span>Prostor za fotografiju</span>
                      <span>Proizvo?a? / gazdinstvo</span>
                    </div>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-[#5a4a3f]">
                  {producer.story}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
