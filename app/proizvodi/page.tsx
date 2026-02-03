"use client";

import Image from "next/image";
import Reveal from "../components/Reveal";

const filters = ["Sve", "Svježe", "Zimnica", "Bez šećera", "Organsko"];

const categories = [
  {
    title: "Povrće",
    description: "Sezonsko povrće sa porodičnih bašta.",
    image: "/povrce.jpeg",
  },
  {
    title: "Voće",
    description: "Slatko i mirisno, ubrano na vrijeme.",
    image: "/voce.jpg",
  },
  {
    title: "Mliječni proizvodi",
    description: "Sir, kajmak i jogurt iz malih mljekara.",
    image: "/seka3.jpg",
  },
  {
    title: "Med",
    description: "Pravi med, bez dodataka i miješanja.",
    image: "/med.jpg",
  },
  {
    title: "Domaći džemovi",
    description: "Kuvano polako, po receptima naših baka.",
    image: "/seka4.jpg",
  },
  {
    title: "Zimnica",
    description: "Ajvar, turšija i sokovi u tegli.",
    image: "/zima.jpeg",
  },
  {
    title: "Pekarski proizvodi",
    description: "Hljeb, pogače i pite iz domaćih rerni.",
    image: "/brasno.jpeg",
  },
  {
    title: "Tradicionalni specijaliteti",
    description: "Suvo meso, kobasice i domaće delicije.",
    image: "/suvo.jpeg",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-transparent text-[#f3eadc]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <Reveal>
          <div className="rounded-3xl bg-[#efe1d0] p-10 shadow-lg shadow-[#d2b896]/40">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#7a6a5c]">
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
                <div className="relative h-36 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#f6c35b]/40 via-[#fff2c5] to-[#e0edd6]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : null}
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
