"use client";

const categories = [
  "Sezona",
  "Recepti",
  "Zemlja i klima",
  "Pčelarstvo",
  "Porodične priče",
];

const featured = {
  title: "Kako izgleda berba koja miriše na avgust",
  excerpt:
    "Od rose u zoru do sanduka punih plodova, prenosimo atmosferu iz malinjaka i savjete koji čuvaju kvalitet.",
  tag: "Sezona",
  date: "11. februar 2026.",
  read: "6 min",
};

const posts = [
  {
    title: "Pet sitnih navika koje podižu ukus domaćeg sira",
    excerpt:
      "Detalji u ishrani i miru stada prave razliku. Šta smo naučili od porodice Petrović.",
    tag: "Porodične priče",
    date: "9. februar 2026.",
    read: "5 min",
  },
  {
    title: "Med, bagrem i livada: prirodni ritam pčelinjaka",
    excerpt:
      "Kada je pravo vrijeme za vrcanje i kako se čuva aroma livadskog meda.",
    tag: "Pčelarstvo",
    date: "6. februar 2026.",
    read: "7 min",
  },
  {
    title: "Zimnica bez žurbe: ajvar koji pamti jesen",
    excerpt:
      "Polagano pečenje, blaga dimljenost i prava paprika iz Šipova.",
    tag: "Recepti",
    date: "3. februar 2026.",
    read: "4 min",
  },
  {
    title: "Tlo kao dom: šta nam sezona govori o narednoj sadnji",
    excerpt:
      "Jednostavan vodič za čitanje zemlje i planiranje plodoreda.",
    tag: "Zemlja i klima",
    date: "31. januar 2026.",
    read: "8 min",
  },
];

export default function BlogPage() {
  return (
    <div className="relative overflow-hidden mx-auto max-w-6xl px-6 py-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(240,154,62,0.22)_0%,transparent_45%),radial-gradient(circle_at_85%_15%,rgba(246,195,91,0.2)_0%,transparent_40%),radial-gradient(circle_at_15%_85%,rgba(127,176,105,0.2)_0%,transparent_45%),radial-gradient(circle_at_85%_85%,rgba(240,154,62,0.16)_0%,transparent_45%)]" />
        <div className="absolute -top-24 right-[-6rem] h-64 w-64 rounded-full bg-[#f6c35b]/25 blur-3xl" />
        <div className="absolute top-[35%] left-[-5rem] h-56 w-56 rounded-full bg-[#7fb069]/22 blur-3xl" />
        <div className="absolute -bottom-24 right-[20%] h-72 w-72 rounded-full bg-[#f09a3e]/25 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.22] mix-blend-soft-light bg-[radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:9px_9px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      <div className="relative">
        <div className="rounded-3xl bg-black/40 p-6 backdrop-blur-md sm:p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-white">
            Blog
          </p>
          <h1 className="mt-2 text-4xl font-bold text-[#f08a3e] sm:text-5xl">
            Poljoprivredni magazin sa dušom sela
          </h1>
          <p className="mt-3 max-w-2xl text-base text-[#f3eadc]">
            Priče sa gazdinstava, savjeti iz sezone i recepti koji spajaju
            porodicu oko stola.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((c, index) => {
              const active = index === 0;
              return (
                <span
                  key={c}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    active
                      ? "bg-[#f08a3e] text-white"
                      : "bg-[#f6ead8] text-[#3f2f22] hover:bg-[#f1dcc1]"
                  }`}
                >
                  {c}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <section className="relative mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <article className="relative overflow-hidden rounded-3xl border border-white/50 bg-[#f8efe2] p-8 shadow-lg shadow-[#d7b78a]/35">
          <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.3)_0,rgba(255,255,255,0.3)_1px,rgba(0,0,0,0)_1px,rgba(0,0,0,0)_4px)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f08a3e] px-3 py-1 text-xs font-semibold text-white">
              {featured.tag}
            </span>
            <h2 className="mt-4 text-2xl font-bold text-[#2f241b]">
              {featured.title}
            </h2>
            <p className="mt-3 text-base text-[#5b4636]">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-[#8a7766]">
              <span>{featured.date}</span>
              <span>•</span>
              <span>{featured.read}</span>
            </div>
          </div>
        </article>

        <aside className="relative overflow-hidden rounded-3xl border border-white/50 bg-[#fff7ea] p-6 shadow-lg shadow-[#d7b78a]/25">
          <div className="absolute -top-12 -right-10 h-32 w-32 rounded-full bg-[#f09a3e]/25 blur-2xl" />
          <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-[#7fb069]/25 blur-2xl" />
          <h3 className="text-lg font-semibold text-[#2f241b]">
            Nedeljni izbor urednika
          </h3>
          <p className="mt-3 text-sm text-[#5b4636]">
            Kratke preporuke: sezonsko povrće, plan sadnje i ideje za brzu
            zimnicu.
          </p>
          <div className="mt-5 rounded-2xl border border-[#f1dbb6] bg-white/70 p-4">
            <p className="text-sm font-semibold text-[#f08a3e]">
              Savjet sedmice
            </p>
            <p className="mt-2 text-sm text-[#5b4636]">
              Prelistaj stare bilješke iz prošle sezone i uporedi berbu po
              danima.
            </p>
          </div>
        </aside>
      </section>

      <section className="relative mt-10 grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.title}
            className="relative overflow-hidden rounded-2xl border border-white/50 bg-[#fdf7ee] p-6 shadow-md shadow-[#d7b78a]/30"
          >
            <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.25)_0,rgba(255,255,255,0.25)_1px,rgba(0,0,0,0)_1px,rgba(0,0,0,0)_6px)]" />
            <div className="relative">
              <span className="inline-flex items-center rounded-full bg-[#f08a3e] px-3 py-1 text-xs font-semibold text-white">
                {post.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-[#2a2018]">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-[#5b4636]">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-[#8a7766]">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.read}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
