"use client";

import Image from "next/image";

const producers = [
  {
    name: "Domaćinstvo Jovanović",
    location: "Ribnik",
    image: "/dom1.png",
    story:
      "Porodična tradicija malinara koja traje preko 30 godina. Poznati po mirisnom voću i domaćim sokovima.",
  },
  {
    name: "Gazdinstvo Petrović",
    location: "Vrbljani",
    image: "/dom4.png",
    imageFit: "object-contain p-4",
    story:
      "Mliječni proizvodi od krava koje pasu na čistim planinskim pašnjacima. Sir i kajmak su njihov ponos.",
  },
  {
    name: "Pčelarstvo Ilić",
    location: "Drvar",
    image: "/dom3.png",
    story:
      "Med koji stiže direktno iz šume, bez dodataka i kompromisa. Ukusi livade i bagrema.",
  },
  {
    name: "Domaćinstvo Milić",
    location: "Šipovo",
    image: "/dom2.png",
    story:
      "Ručno pravljena zimnica, ajvari i domaći sokovi. Sve po receptima koji se prenose generacijama.",
  },
];

export default function ProducersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Proizvođači</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {producers.map((p) => (
          <div key={p.name} className="rounded-2xl bg-[#f6ede1] p-6 shadow">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-600">{p.location}</p>

            <div className="mt-4 h-44 relative">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className={p.imageFit ?? "object-cover"}
              />
            </div>

            <p className="mt-4 text-sm">{p.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
