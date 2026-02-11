"use client";

import Image from "next/image";

const producers = [
  {
    name: "Domaćinstvo Jovanović",
    location: "Ribnik",
    caption: "Ribnik - Doma\u0107instvo Jovanovi\u0107",
    image: "/dom1.png",
    story:
      "Porodična tradicija malinara koja traje preko 30 godina. Poznati po mirisnom voću i domaćim sokovima.",
  },
  {
    name: "Gazdinstvo Petrović",
    location: "Vrbljani",
    caption: "Vrbljani - Doma\u0107instvo Petrovi\u0107",
    image: "/dom4.png",
    imageFit: "object-contain p-4",
    story:
      "Mliječni proizvodi od krava koje pasu na čistim planinskim pašnjacima. Sir i kajmak su njihov ponos.",
  },
  {
    name: "Pčelarstvo Ilić",
    location: "Drvar",
    caption: "Drvar - P\u010delarstvo Ili\u0107",
    image: "/dom3.png",
    story:
      "Med koji stiže direktno iz šume, bez dodataka i kompromisa. Ukusi livade i bagrema.",
  },
  {
    name: "Domaćinstvo Milić",
    location: "Šipovo",
    caption: "\u0160ipovo - Gazdinstvo Mili\u0107",
    image: "/dom2.png",
    story:
      "Ručno pravljena zimnica, ajvari i domaći sokovi. Sve po receptima koji se prenose generacijama.",
  },
];

export default function ProducersPage() {
  return (
    <div className="relative overflow-hidden mx-auto max-w-6xl px-6 py-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.32]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(240,154,62,0.22)_0%,transparent_45%),radial-gradient(circle_at_88%_16%,rgba(246,195,91,0.18)_0%,transparent_40%),radial-gradient(circle_at_18%_86%,rgba(127,176,105,0.2)_0%,transparent_45%),radial-gradient(circle_at_82%_82%,rgba(240,154,62,0.16)_0%,transparent_45%)]" />
        <div className="absolute -top-24 right-[-6rem] h-64 w-64 rounded-full bg-[#f6c35b]/25 blur-3xl" />
        <div className="absolute top-[35%] left-[-5rem] h-56 w-56 rounded-full bg-[#7fb069]/22 blur-3xl" />
        <div className="absolute -bottom-24 right-[20%] h-72 w-72 rounded-full bg-[#f09a3e]/25 blur-3xl" />
        <div className="absolute top-[-6rem] left-[20%] h-72 w-72 rounded-full bg-[#f09a3e]/18 blur-[90px]" />
        <div className="absolute bottom-[-8rem] left-[-4rem] h-80 w-80 rounded-full bg-[#f6c35b]/18 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.25] mix-blend-soft-light bg-[radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:9px_9px]" />
        <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(120deg,rgba(240,154,62,0.08)_0%,transparent_35%,rgba(127,176,105,0.08)_70%,transparent_100%)]" />
      </div>
      <h1 className="mb-8 text-3xl font-bold">Proizvođači</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {producers.map((p) => (
          <div
            key={p.name}
            className="relative overflow-hidden rounded-2xl border border-white/40 bg-[#f6ede1] p-6 shadow"
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.22)_0,rgba(255,255,255,0.22)_1px,rgba(0,0,0,0)_1px,rgba(0,0,0,0)_3px)]" />
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600">{p.location}</p>

            <figure className="mt-4">
              <div className="relative h-44 overflow-hidden rounded-2xl border border-white/60 bg-white/60 shadow-md shadow-[#d2b896]/30">
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#e9f5e0]/50 via-transparent to-[#c7e3b8]/30" />
                <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.18] mix-blend-soft-light bg-[radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:7px_7px]" />
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.15)_100%)]" />
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className={`${p.imageFit ?? "object-cover"} brightness-[1.07] contrast-[1.05] saturate-[1.12] hue-rotate-[-6deg]`}
                />
              </div>
              <figcaption className="mt-2 text-sm font-semibold text-center text-[#5b4636]">
                {p.caption}
              </figcaption>
            </figure>

            <p className="mt-4 text-sm">{p.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
