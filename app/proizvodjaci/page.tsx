"use client";

import Reveal from "../components/Reveal";

const producers = [
  {
    name: "Domaćinstvo Jovanović",
    location: "Ribnik",
    story:
      "Porodična tradicija malinara koja traje preko 30 godina. Poznati po mirisnom voću i domaćim sokovima.",
  },
  {
    name: "Gazdinstvo Petrović",
    location: "Vrbljani",
    story:
      "Mliječni proizvodi od krava koje pasu na čistim planinskim pašnjacima. Sir i kajmak su njihov ponos.",
  },
  {
    name: "Pčelarstvo Ilić",
    location: "Drvar",
    story:
      "Med koji stiže direktno iz šume, bez dodataka i kompromisa. Ukusi livade i bagrema.",
  },
  {
    name: "Domaćinstvo Milić",
    location: "Šipovo",
    story:
      "Ručno pravljena zimnica, ajvari i domaći sokovi. Sve po receptima koji se prenose generacijama.",
  },
];

export default function ProducersPage() {
  return (
    <div className="bg-transparent text-[#f3eadc]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <Reveal>
          <div className="rounded-3xl bg-[#efe1d0] p-10 shadow-lg shadow-[#d2b896]/40">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#7a6a5c]">
              Proizvođači
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-[#2e241f]">
              Lica koja stoje iza svake korpe
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5a4a3f]">
              Upoznajte domaćinstva koja svakodnevno rade na zemlji i čuvaju
              kvalitet naših proizvoda. Svaka priča je posebna i svaka korpa
              nosi njihove vrednosti.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {producers.map((producer, index) => (
            <Reveal key={producer.name} delay={index * 100}>
              <div className="rounded-3xl bg-[#f6ede1] p-6 shadow-md shadow-[#d2b896]/40 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0edd6] text-xl">
                    🌿
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
                <div className="mt-4 h-36 w-full rounded-2xl border border-dashed border-[#d9c4a7] bg-white/60">
                  <div className="flex h-full flex-col items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-[#7a6a5c]">
                    <span>Prostor za fotografiju</span>
                    <span>Proizvođač / gazdinstvo</span>
                  </div>
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
