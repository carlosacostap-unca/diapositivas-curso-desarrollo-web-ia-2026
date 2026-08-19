export default function Home() {
  return (
    <main className="cover">
      <div className="ambient ambientOne" aria-hidden="true" />
      <div className="ambient ambientTwo" aria-hidden="true" />
      <div className="grid" aria-hidden="true" />

      <header className="topbar">
        <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
          <span className="brandMark" aria-hidden="true">
            <span>&lt;</span>
            <i />
            <span>/&gt;</span>
          </span>
          <span className="brandText">WEB · IA</span>
        </div>
        <p className="edition">2026</p>
      </header>

      <section className="hero" aria-labelledby="course-title">
        <p className="eyebrow">
          <span />
          Curso de
        </p>
        <h1 id="course-title">
          Desarrollo de
          <br />
          Aplicaciones <span className="accent">Web</span>
          <br />
          <span className="assisted">Asistido por</span>
          <br />
          Inteligencia Artificial
        </h1>
        <p className="subtitle">
          Del concepto al producto digital, potenciado por IA.
        </p>
      </section>

      <footer className="footer">
        <p>Diseñar · Construir · Aprender</p>
        <div className="slideNumber" aria-label="Diapositiva 1">
          <span>01</span>
          <i />
        </div>
      </footer>
    </main>
  );
}
