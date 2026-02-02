"use client";

import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Reveal from "../components/Reveal";

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-transparent text-[#f3eadc]">
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <Reveal>
          <div className="rounded-3xl bg-[#efe1d0] p-10 shadow-lg shadow-[#d2b896]/40">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#7a6a5c]">
              Kontakt
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-[#2e241f]">
              Tu smo da odgovorimo brzo i srdačno
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5a4a3f]">
              Pošaljite nam poruku ili narudžbinu, a mi ćemo vas kontaktirati sa
              potvrdom i terminom isporuke.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <form className="rounded-3xl bg-[#f6ede1] p-8 shadow-md shadow-[#d2b896]/40">
              <h2 className="text-xl font-semibold text-[#2e241f]">
                Pošaljite upit
              </h2>
              <div className="mt-6 grid gap-4">
                <input
                  type="text"
                  placeholder="Ime i prezime"
                  className="w-full rounded-2xl border border-[#e0d0bf] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[#f6c35b]"
                />
                <input
                  type="email"
                  placeholder="Email adresa"
                  className="w-full rounded-2xl border border-[#e0d0bf] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[#f6c35b]"
                />
                <textarea
                  rows={4}
                  placeholder="Poruka ili lista proizvoda"
                  className="w-full rounded-2xl border border-[#e0d0bf] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[#f6c35b]"
                />
              </div>
              <div className="mt-6">
                <Button label="Pošalji poruku" />
              </div>
            </form>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex h-full flex-col gap-6 rounded-3xl bg-[#efe1d0] p-8 shadow-md shadow-[#d2b896]/40">
              <div className="h-40 w-full rounded-2xl border border-dashed border-[#d9c4a7] bg-white/60">
                <div className="flex h-full flex-col items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-[#7a6a5c]">
                  <span>Prostor za fotografiju</span>
                  <span>Domaćinstva / proizvodi</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2e241f]">
                  Postani proizvođač
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5a4a3f]">
                  Ako imate domaće proizvode i želite sigurnu prodaju, javite nam
                  se. Pomažemo u registraciji i predstavljanju vaše ponude.
                </p>
              </div>
              <Button
                label="Prijavi se"
                variant="secondary"
                onClick={() => setOpen(true)}
              />

              <div className="rounded-2xl bg-[#e0edd6] p-4 text-sm text-[#2f5d2a] shadow-sm shadow-[#88a66a]/20">
                Podržavamo lokalna domaćinstva i fer uslove saradnje.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Prijava za proizvođače"
        description="Hvala na interesovanju. Uskoro ćemo vas kontaktirati sa svim detaljima o saradnji i procesu priključivanja."
        actionLabel="Razumijem"
      />
    </div>
  );
}
