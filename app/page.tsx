"use client";

import { useEffect, useState } from "react";

const slideCount = 3;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToSlide = (index: number) => setCurrentSlide(Math.max(0, Math.min(index, slideCount - 1)));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") goToSlide(currentSlide + 1);
      if (event.key === "ArrowLeft" || event.key === "PageUp") goToSlide(currentSlide - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentSlide]);

  return (
    <main className="presentation">
      <div className="slideTrack" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <section className="slide cover" aria-labelledby="course-title">
          <div className="ambient ambientOne" aria-hidden="true" />
          <div className="ambient ambientTwo" aria-hidden="true" />
          <div className="grid" aria-hidden="true" />
          <header className="topbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">2026</p>
          </header>
          <div className="hero">
            <p className="eyebrow"><span />Curso de</p>
            <h1 id="course-title">Desarrollo de<br />Aplicaciones <span className="accent">Web</span><br /><span className="assisted">Asistido por</span><br />Inteligencia Artificial</h1>
            <p className="subtitle">Del concepto al producto digital, potenciado por IA.</p>
          </div>
          <footer className="footer">
            <p>Diseñar · Construir · Aprender</p>
            <div className="slideNumber" aria-label="Diapositiva 1 de 3"><span>01</span><i /></div>
          </footer>
        </section>

        <section className="slide overview" aria-labelledby="overview-title">
          <div className="overviewAura" aria-hidden="true" />
          <header className="topbar overviewTopbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">El curso</p>
          </header>
          <div className="overviewContent">
            <div className="overviewLead">
              <p className="eyebrow"><span />Diapositiva 02</p>
              <h2 id="overview-title">¿Sobre qué trata este curso?</h2>
              <p className="overviewIntro">Una experiencia intensamente práctica para transformar ideas en aplicaciones web funcionales, usando la inteligencia artificial como copiloto durante todo el proceso.</p>
            </div>
            <div className="overviewCards">
              <article className="overviewCard"><span className="cardNumber">01</span><h3>Crear con IA</h3><p>Aprenderás a dar contexto, formular pedidos precisos, revisar propuestas y verificar el código generado.</p></article>
              <article className="overviewCard featuredCard"><span className="cardNumber">02</span><h3>Dos proyectos reales</h3><p>Primero construirás una aplicación personal. Después, una solución multiusuario con cuentas, datos compartidos y roles.</p></article>
              <article className="overviewCard"><span className="cardNumber">03</span><h3>De principio a fin</h3><p>Planificarás, construirás, probarás y publicarás cada proyecto en hitos concretos y verificables.</p></article>
            </div>
            <div className="courseFacts" aria-label="Datos principales del curso"><span><b>4</b> semanas</span><span><b>8</b> clases presenciales</span><span><b>2</b> aplicaciones publicadas</span></div>
          </div>
          <footer className="footer overviewFooter">
            <p>Aprender haciendo</p>
            <div className="slideNumber" aria-label="Diapositiva 2 de 3"><span>02</span><i /></div>
          </footer>
        </section>

        <section className="slide instructors" aria-labelledby="instructors-title">
          <div className="instructorOrb orbOne" aria-hidden="true" />
          <div className="instructorOrb orbTwo" aria-hidden="true" />
          <header className="topbar instructorsTopbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">Equipo docente</p>
          </header>
          <div className="instructorsContent">
            <p className="eyebrow"><span />Diapositiva 03</p>
            <h2 id="instructors-title">¿Quiénes son los Instructores?</h2>
            <div className="instructorGrid">
              <article className="instructorCard">
                <div className="initials" aria-hidden="true">DM</div>
                <div>
                  <p className="instructorRole">Instructor</p>
                  <h3>Daniel Maldonado</h3>
                  <p className="credential">Ingeniero en Sistemas de Información <span>(UTN-FRC)</span></p>
                </div>
                <ul>
                  <li>Docente en el Instituto San Martín.</li>
                  <li>Agente Profesional Informático en ARCAT.</li>
                  <li>Instructor en la Diplomatura en Desarrollo Web Fullstack en Nodo Tecnológico y Facultad de Tecnología y Ciencias Aplicadas de la UNCA.</li>
                </ul>
              </article>
              <article className="instructorCard instructorCardAccent">
                <div className="initials" aria-hidden="true">CA</div>
                <div>
                  <p className="instructorRole">Instructor</p>
                  <h3>Carlos Acosta Parra</h3>
                  <p className="credential">Ingeniero en Informática <span>(UNCA)</span><br />Magister en Ingeniería de Software <span>(UNSL)</span></p>
                </div>
                <ul>
                  <li>Docente e Investigador en la Facultad de Tecnología y Ciencias Aplicadas de la UNCA.</li>
                  <li>Instructor en la Diplomatura en Desarrollo Web Fullstack en Nodo Tecnológico y Facultad de Tecnología y Ciencias Aplicadas de la UNCA.</li>
                </ul>
              </article>
            </div>
          </div>
          <footer className="footer instructorsFooter">
            <p>Experiencia · Formación · Acompañamiento</p>
            <div className="slideNumber" aria-label="Diapositiva 3 de 3"><span>03</span><i /></div>
          </footer>
        </section>
      </div>
      <nav className="slideNavigation" aria-label="Navegación de diapositivas">
        <button type="button" onClick={() => goToSlide(currentSlide - 1)} disabled={currentSlide === 0} aria-label="Diapositiva anterior">←</button>
        <div className="slideDots" aria-label={`Diapositiva ${currentSlide + 1} de ${slideCount}`}>
          {[0, 1, 2].map((index) => <button type="button" className={index === currentSlide ? "active" : ""} onClick={() => goToSlide(index)} aria-label={`Ir a la diapositiva ${index + 1}`} aria-current={index === currentSlide ? "true" : undefined} key={index} />)}
        </div>
        <button type="button" onClick={() => goToSlide(currentSlide + 1)} disabled={currentSlide === slideCount - 1} aria-label="Diapositiva siguiente">→</button>
      </nav>
    </main>
  );
}
