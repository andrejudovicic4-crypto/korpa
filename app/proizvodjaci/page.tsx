export default function HomePage() {
  return (
    <main style={{ padding: "4rem", textAlign: "center" }}>
      <h1>Korpa na pragu</h1>
      <p>Dobrodošli na platformu domaćih proizvođača.</p>

      <nav style={{ marginTop: "2rem" }}>
        <a href="/proizvodi" style={{ marginRight: "1rem" }}>
          Proizvodi
        </a>
        <a href="/proizvodjaci">
          Proizvođači
        </a>
      </nav>
    </main>
  );
}
