"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Reveal from "./components/Reveal";

const categories = [
  {
    title: "Povrće",
    description: "Svježe ubrano, bez posrednika.",
  },
  {
    title: "Voće",
    description: "Sezonski ukusi iz domaćih voćnjaka.",
  },
  {
    title: "Mliječni proizvodi",
    description: "Sir, kajmak i jogurt iz malih mljekara.",
  },
  {
    title: "Med",
    description: "Čisto, aromatično, sa domaćih pčelinjaka.",
  },
  {
    title: "Domaći džemovi",
    description: "Stari recepti, spor proces, pravi ukus.",
  },
  {
    title: "Tradicionalni proizvodi",
    description: "Zimnica, sokovi i specijaliteti.",
  },
];

const benefits = [
  "Direktno od proizvođača",
  "Garantovano domaće porijeklo",
  "Svježina i kvalitet",
  "Podrška ruralnim domaćinstvima",
  "Povjerenje i tradicija",
  "Moderno i sigurno naručivanje",
];

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const progress = Math.min(Math.max(-rect.top / 600, 0), 1);
        hero.style.setProperty("--hero-shift", `${progress * 18}px`);
        rafId = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="bg-transparent text-[#f3eadc]">
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 translate-y-[var(--hero-shift,0px)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#2d241f_0%,#3a3326_45%,#2f3a26_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,226,140,0.15),rgba(0,0,0,0)_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(127,176,105,0.18),rgba(0,0,0,0)_60%)]" />
          <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.15)_0,rgba(255,255,255,0.15)_1px,rgba(0,0,0,0)_1px,rgba(0,0,0,0)_3px)]" />
          <div className="absolute -top-10 right-0 h-72 w-72 rounded-full bg-[#f6c35b]/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#7fb069]/20 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,226,140,0.22),rgba(0,0,0,0)_70%)] blur-2xl" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#f3eadc]/60 to-[#f3eadc]" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-20 text-[#f7efe5] sm:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="max-w-2xl">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-[#fff2c5] px-4 py-2 text-xs font-semibold text-[#6a4b1f] shadow-sm">
              100% domaće • Bez uvoza • Direktno sa sela
            </p>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight text-[#f7efe5] sm:text-5xl lg:text-6xl"
              style={{
                textShadow: "0 6px 18px rgba(20, 16, 12, 0.45)",
              }}
            >
              Korpa na Pragu
            </h1>
            <p
              className="mt-4 text-lg leading-8 text-[#efe3d6]"
              style={{
                textShadow: "0 4px 12px rgba(20, 16, 12, 0.35)",
              }}
            >
              Moderna platforma koja spaja domaćinstva i kupce. Kupujte provjerene
              domaće proizvode direktno od ljudi koji žive od zemlje i čuvaju
              tradiciju.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                label="Naruči odmah"
                onClick={() => setOpen(true)}
                variant="primary"
              />
              <Button
                label="Pogledaj proizvode"
                href="/proizvodi"
                variant="primary"
              />
            </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="h-[320px] w-full rounded-3xl border border-dashed border-[#d9c4a7] bg-white/60 shadow-lg shadow-[#d2b896]/40">
                <div className="flex h-full flex-col items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#7a6a5c]">
                  <span>Prostor za fotografiju</span>
                  <span>Hero vizual / korpa proizvoda</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="grid gap-4 rounded-3xl bg-white/70 p-6 shadow-lg shadow-[#d2b896]/40 backdrop-blur sm:grid-cols-3">
              {[
                { title: "Provjereni proizvođači", value: "120+ domaćinstava" },
                { title: "Svježina", value: "Isporuka do vrata" },
                { title: "Povjerenje", value: "Ocjene kupaca 4.9/5" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-[#efe1d0] p-5 text-sm shadow-md shadow-[#d2b896]/30 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs uppercase tracking-wide text-[#7a6a5c]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#2e241f]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <Reveal>
          <div className="grid gap-8 rounded-3xl bg-[#efe1d0] p-10 shadow-lg shadow-[#d2b896]/40 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#7a6a5c]">
                O platformi
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#2e241f]">
                Tradicija koja stiže na vaš prag
              </h2>
              <p className="mt-4 text-base leading-7 text-[#5a4a3f]">
                Korpa na Pragu je digitalna pijaca koja povezuje selo i grad.
                Naš cilj je da podržimo ruralne porodice, obezbijedimo sigurnu
                prodaju proizvođačima i omogućimo kupcima da dobiju autentične
                domaće proizvode.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card
                title="Direktna veza"
                description="Kupujete bez posrednika, direktno od domaćina."
                icon={<span>🤝</span>}
              />
              <Card
                title="Bez uvoza"
                description="Samo lokalno, provjereno i domaće."
                icon={<span>🌾</span>}
              />
              <Card
                title="Sigurno"
                description="Pouzdani proizvođači i jasne informacije."
                icon={<span>🛡️</span>}
              />
              <Card
                title="Toplina tradicije"
                description="Ukusi koji nas podsećaju na dom."
                icon={<span>🏡</span>}
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10">
        <Reveal>
          <div className="rounded-3xl bg-[#f6ede1] p-10 shadow-lg shadow-[#d2b896]/40">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#7a6a5c]">
                Izdvojene kategorije
              </p>
              <h2 className="text-3xl font-semibold text-[#2e241f]">
                Proizvodi koje porodice najviše vole
              </h2>
              <p className="text-base text-[#5a4a3f]">
                Pronađite sve što vam treba za svakodnevnu trpezu, uz provjereno
                porijeklo i ukus doma.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((item) => (
                <Card
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  className="bg-gradient-to-br from-[#fff7e6] via-[#fff0d6] to-[#ffe6bf] border border-[#f6c35b]/50 shadow-lg shadow-[#f6c35b]/20 hover:shadow-xl"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10">
        <Reveal>
          <div className="rounded-3xl bg-[#efe1d0] p-10 shadow-lg shadow-[#d2b896]/40">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#7a6a5c]">
                Zašto Korpa na Pragu
              </p>
              <h2 className="text-3xl font-semibold text-[#2e241f]">
                Povjerenje, svježina i podrška selu
              </h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-[#c1d3b7] bg-[#e0edd6] p-5 text-sm font-semibold text-[#2f5d2a] shadow-md shadow-[#88a66a]/20 transition hover:-translate-y-1 hover:shadow-lg hover:font-bold"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-r from-[#f08a3e] via-[#f6c35b] to-[#f3eadc] p-10 text-[#2e241f] shadow-lg shadow-[#f08a3e]/30">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold">
                  Naručite danas i podržite domaće proizvođače
                </h2>
                <p className="mt-3 text-base leading-7">
                  Svaka narudžbina direktno pomaže porodičnim gazdinstvima i
                  čuva našu tradiciju.
                </p>
              </div>
              <Button label="Naruči odmah" onClick={() => setOpen(true)} />
            </div>
          </div>
        </Reveal>
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Spremni za narudžbinu?"
        description="Pošaljite nam svoju listu ili izaberite proizvode iz ponude. Javljamo se brzo sa potvrdom i terminom isporuke."
        actionLabel="Razumijem"
      />
    </div>
  );
}
