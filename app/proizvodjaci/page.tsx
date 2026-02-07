"use client";

import Image from "next/image";
import Reveal from "../components/Reveal";

const producers = [
  {
    name: "Domaćinstvo Jovanović",
    location: "Ribnik",
    image: "/dom1.png",
    story: "Porodična tradicija malinara preko 30 godina.",
  },
  {
    name: "Gazdinstvo Petrović",
    location: "Vrbljani",
    image: "/dom4.png",
    story: "Mliječni proizvodi sa planinskih pašnjaka.",
  },
  {
    name: "Pčelarstvo Ilić",
    location: "Drvar",
    image: "/dom3.png",
    story: "Prirodni med bez dodataka i kompromisa.",
  },
  {
    name: "Domaćinstvo Milić",
    location: "Šipovo",
    image: "/dom2.png",
    story: "Domaća zimnica po porodičnim receptima.",
  },
];

export default function ProducersPage() {
  return (
    <div className="bg-transparent">
      {/* HEADER */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <Reveal>
          <h1 className="text-3xl font-semibold text-[#2e241f]">
            Proizvođači
          </h1>
          <p className="mt-2 max-w-2xl text-[#5a4a3f]">
            Lica koja stoje iza svake korpe.
          </p>
        </Reveal>
      </section>

      {/* GRID */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {producers.map((producer, index) => (
            <Reveal key={producer.name} delay={index * 100}>
              <div className="rounded-3xl bg-[#f6ede1] p-6 shadow-md">
                <h3 className="text-lg font-semibold text-[#2e241f]">
                  {producer.name}
                </h3>
                <p className="text-xs uppercase text-[#7a6a5c]">
                  {producer.location}
                </p>

                <div className="mt-4 h-44 w-full overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={producer.image}
                    alt={producer.name}
                    width={600}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-4 text-sm text-[#5a4a3f]">
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
