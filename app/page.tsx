"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

const slideCount = 12;
const virtualCampusUrl = "https://www.epixum.com";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [qrCode, setQrCode] = useState("");
  const goToSlide = (index: number) => setCurrentSlide(Math.max(0, Math.min(index, slideCount - 1)));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") goToSlide(currentSlide + 1);
      if (event.key === "ArrowLeft" || event.key === "PageUp") goToSlide(currentSlide - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentSlide]);

  useEffect(() => {
    QRCode.toDataURL(virtualCampusUrl, {
      errorCorrectionLevel: "M",
      margin: 1,
      width: 480,
      color: { dark: "#10283a", light: "#fffaf1" },
    }).then(setQrCode);
  }, []);

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
            <div className="slideNumber" aria-label="Diapositiva 1 de 9"><span>01</span><i /></div>
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
            <div className="slideNumber" aria-label="Diapositiva 2 de 9"><span>02</span><i /></div>
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
            <div className="slideNumber" aria-label="Diapositiva 3 de 9"><span>03</span><i /></div>
          </footer>
        </section>

        <section className="slide virtualClassroom" aria-labelledby="classroom-title">
          <div className="classroomGlow" aria-hidden="true" />
          <header className="topbar classroomTopbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">Aula virtual</p>
          </header>
          <div className="classroomContent">
            <div className="classroomIntro">
              <p className="eyebrow"><span />Diapositiva 04</p>
              <h2 id="classroom-title">El aula virtual<br />nos acompaña.</h2>
              <p>Allí encontrarás los contenidos, materiales y novedades del curso.</p>
              <a className="classroomUrl" href={virtualCampusUrl} target="_blank" rel="noreferrer">https://www.epixum.com</a>
            </div>
            <div className="accessPanel">
              <div className="qrBlock">
                {qrCode ? <img src={qrCode} alt="Código QR para acceder al aula virtual" /> : <div className="qrPlaceholder" aria-hidden="true" />}
                <span>Escaneá para acceder</span>
              </div>
              <ol className="accessSteps">
                <li><span>01</span><p>Ingresá con tu <strong>cuenta de Google</strong>.</p></li>
                <li><span>02</span><p>Hacé click en <strong>“Sumarme a un curso”</strong>.</p></li>
                <li><span>03</span><p>Ingresá la clave de inscripción:</p><code>nodo-ia-2026</code></li>
              </ol>
            </div>
          </div>
          <footer className="footer classroomFooter">
            <p>Contenidos · Materiales · Novedades</p>
            <div className="slideNumber" aria-label="Diapositiva 4 de 9"><span>04</span><i /></div>
          </footer>
        </section>

        <section className="slide setupSlide visualStudio" aria-labelledby="visual-studio-title">
          <div className="setupGlow" aria-hidden="true" />
          <header className="topbar setupTopbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">Preparación</p>
          </header>
          <div className="setupContent">
            <div className="setupLead">
              <p className="eyebrow"><span />Diapositiva 05</p>
              <p className="setupKicker">Comprobación de herramientas</p>
              <h2 id="visual-studio-title">¿Tenés instalado<br /><em>Visual Studio Code?</em></h2>
              <p>Verifiquémoslo antes de comenzar el curso.</p>
            </div>
            <ol className="setupChecklist">
              <li><span>01</span><div><h3>Buscalo en Inicio</h3><p>Abrí el menú de inicio de Windows y escribí <strong>Visual Studio Code</strong>.</p></div></li>
              <li><span>02</span><div><h3>Abrilo</h3><p>Confirmá que podés llegar a la pantalla de inicio sin errores.</p></div></li>
              <li><span>03</span><div><h3>Revisá la versión</h3><p>En <strong>Ayuda › Acerca de Visual Studio Code</strong> podés comprobar que está instalado.</p></div></li>
            </ol>
            <p className="setupHelp">¿No aparece o no abre? Descargá el instalador: <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">https://code.visualstudio.com/download</a></p>
          </div>
          <footer className="footer setupFooter"><p>Chequeo previo · Visual Studio Code</p><div className="slideNumber" aria-label="Diapositiva 5 de 9"><span>05</span><i /></div></footer>
        </section>

        <section className="slide setupSlide openCode" aria-labelledby="opencode-title">
          <div className="setupGlow" aria-hidden="true" />
          <header className="topbar setupTopbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">Preparación</p>
          </header>
          <div className="setupContent">
            <div className="setupLead">
              <p className="eyebrow"><span />Diapositiva 06</p>
              <p className="setupKicker">Comprobación de herramientas</p>
              <h2 id="opencode-title">¿Tenés instalado<br /><em>OpenCode?</em></h2>
              <p>Verifiquemos que tenés instalada la aplicación de escritorio antes de comenzar.</p>
            </div>
            <ol className="setupChecklist">
              <li><span>01</span><div><h3>Buscalo en Inicio</h3><p>Abrí el menú de inicio de Windows y escribí <strong>OpenCode</strong>.</p></div></li>
              <li><span>02</span><div><h3>Abrí la aplicación</h3><p>Seleccioná OpenCode para iniciar su versión de escritorio.</p></div></li>
              <li><span>03</span><div><h3>Confirmá la pantalla inicial</h3><p>Si se abre la ventana de OpenCode, ya está listo para usar durante el curso.</p></div></li>
            </ol>
            <p className="setupHelp">Si OpenCode no aparece o no abre, descargá el instalador: <a href="https://dev.opencode.ai/download" target="_blank" rel="noreferrer">https://dev.opencode.ai/download</a></p>
          </div>
          <footer className="footer setupFooter"><p>Chequeo previo · OpenCode</p><div className="slideNumber" aria-label="Diapositiva 6 de 9"><span>06</span><i /></div></footer>
        </section>

        <section className="slide setupSlide nodeJs" aria-labelledby="nodejs-title">
          <div className="setupGlow" aria-hidden="true" />
          <header className="topbar setupTopbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">Preparación</p>
          </header>
          <div className="setupContent">
            <div className="setupLead">
              <p className="eyebrow"><span />Diapositiva 07</p>
              <p className="setupKicker">Comprobación de herramientas</p>
              <h2 id="nodejs-title">¿Tenés instalado<br /><em>Node.js?</em></h2>
              <p>Podés verificar Node.js y npm desde la terminal integrada de Visual Studio Code o de OpenCode.</p>
            </div>
            <ol className="setupChecklist">
              <li><span>01</span><div><h3>Abrí una terminal integrada</h3><p>Usá la terminal de <strong>Visual Studio Code</strong> o la de <strong>OpenCode</strong>.</p></div></li>
              <li><span>02</span><div><h3>Comprobá Node.js</h3><code>node --version</code></div></li>
              <li><span>03</span><div><h3>Comprobá npm</h3><code>npm --version</code></div></li>
              <li><span>04</span><div><h3>Confirmá ambos resultados</h3><p>Si cada comando muestra un número de versión, Node.js y npm están listos para usar.</p></div></li>
            </ol>
            <p className="setupHelp">Si alguno de los comandos no se reconoce, descargá el instalador: <a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">https://nodejs.org/en/download</a>. Incluye npm.</p>
          </div>
          <footer className="footer setupFooter"><p>Chequeo previo · Node.js</p><div className="slideNumber" aria-label="Diapositiva 7 de 9"><span>07</span><i /></div></footer>
        </section>

        <section className="slide diagnostic" aria-labelledby="diagnostic-title">
          <div className="diagnosticGlow" aria-hidden="true" />
          <header className="topbar diagnosticTopbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">Punto de partida</p>
          </header>
          <div className="diagnosticContent">
            <div className="diagnosticLead">
              <p className="eyebrow"><span />Diapositiva 08</p>
              <h2 id="diagnostic-title">Antes de comenzar,<br /><em>conozcámonos.</em></h2>
              <p>No es una evaluación: estas preguntas nos ayudan a acompañarte mejor durante el curso.</p>
            </div>
            <ol className="diagnosticQuestions">
              <li><span>01</span><p>¿Tuviste alguna experiencia previa programando? ¿Con qué lenguaje o herramienta?</p></li>
              <li><span>02</span><p>¿Creaste alguna vez una página web, una app o un proyecto digital?</p></li>
              <li><span>03</span><p>¿Qué tan cómodo/a te sentís usando Visual Studio Code, OpenCode o una terminal?</p></li>
              <li><span>04</span><p>¿Ya usaste herramientas de inteligencia artificial para estudiar, trabajar o programar?</p></li>
              <li><span>05</span><p>¿Qué te gustaría poder crear o resolver cuando termine el curso?</p></li>
            </ol>
          </div>
          <footer className="footer diagnosticFooter"><p>Tu experiencia también construye el curso</p><div className="slideNumber" aria-label="Diapositiva 8 de 9"><span>08</span><i /></div></footer>
        </section>

        <section className="slide workspace" aria-labelledby="workspace-title">
          <div className="workspaceGlow" aria-hidden="true" />
          <header className="topbar workspaceTopbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">Preparación</p>
          </header>
          <div className="workspaceContent">
            <div className="workspaceLead">
              <p className="eyebrow"><span />Diapositiva 09</p>
              <p className="setupKicker">Organización del curso</p>
              <h2 id="workspace-title">Creá tu carpeta<br />de <em>trabajo.</em></h2>
              <p>La usaremos para guardar todos los proyectos, ejercicios y archivos que construyamos durante el curso.</p>
            </div>
            <div className="workspacePanel">
              <p className="workspacePrompt">En un lugar fácil de encontrar de tu disco, por ejemplo <strong>Documentos</strong>, creá una carpeta con este nombre:</p>
              <code>curso-desarrollo-web-ia</code>
              <div className="workspaceSteps">
                <span>01</span><p>Abrí el Explorador de archivos.</p>
                <span>02</span><p>Elegí la ubicación donde guardarás tus prácticas.</p>
                <span>03</span><p>Creá la carpeta y conservá este nombre para seguir las indicaciones del curso.</p>
              </div>
            </div>
          </div>
          <footer className="footer workspaceFooter"><p>Un lugar para cada proyecto</p><div className="slideNumber" aria-label="Diapositiva 9 de 9"><span>09</span><i /></div></footer>
        </section>

        <section className="slide firstProject" aria-labelledby="first-project-title">
          <div className="projectGlow" aria-hidden="true" />
          <header className="topbar projectTopbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">Primer proyecto</p>
          </header>
          <div className="projectContent">
            <div className="projectLead">
              <p className="eyebrow"><span />Diapositiva 10</p>
              <p className="setupKicker">Organización del curso</p>
              <h2 id="first-project-title">Creá tu primer<br /><em>proyecto.</em></h2>
              <p>Dentro de la carpeta del curso, prepararemos el espacio para nuestro primer ejemplo.</p>
            </div>
            <div className="projectPanel">
              <p>En el Explorador de archivos, abrí la carpeta del curso y creá dentro una nueva carpeta con este nombre:</p>
              <div className="folderPath" aria-label="Ruta de carpetas">
                <code>curso-desarrollo-web-ia</code><span>›</span><code className="newFolder">proyecto-0-primer-ejemplo</code>
              </div>
              <ol className="projectSteps">
                <li><span>01</span><p>Abrí <strong>curso-desarrollo-web-ia</strong>.</p></li>
                <li><span>02</span><p>Hacé click derecho y elegí <strong>Nuevo › Carpeta</strong>.</p></li>
                <li><span>03</span><p>Escribí <strong>proyecto-0-primer-ejemplo</strong> y presioná Enter.</p></li>
              </ol>
            </div>
          </div>
          <footer className="footer projectFooter"><p>Proyecto 0 · Primer ejemplo</p><div className="slideNumber" aria-label="Diapositiva 10 de 10"><span>10</span><i /></div></footer>
        </section>

        <section className="slide opencodeGuide" aria-labelledby="opencode-guide-title">
          <div className="guideGlow" aria-hidden="true" />
          <header className="topbar guideTopbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">OpenCode</p>
          </header>
          <div className="guideContent">
            <div className="guideLead">
              <p className="eyebrow"><span />Diapositiva 11</p>
              <p className="setupKicker">Conozcamos la herramienta</p>
              <h2 id="opencode-guide-title">Abrí <em>OpenCode.</em></h2>
              <p>Vamos a familiarizarnos con sus espacios principales antes de empezar a trabajar con nuestro proyecto.</p>
              <figure className="opencodeGui">
                <img src="/opencode-gui.webp" alt="Captura de la interfaz de OpenCode con una sesión, panel de navegación y área de conversación" />
                <figcaption>Referencia visual de la interfaz de OpenCode.</figcaption>
              </figure>
            </div>
            <div className="interfaceMap" aria-label="Partes principales de la interfaz de OpenCode">
              <article><span>01</span><div><h3>Proyectos y sesiones</h3><p>Desde el lateral podés acceder a tus proyectos y organizar las conversaciones de trabajo.</p></div></article>
              <article><span>02</span><div><h3>Área de conversación</h3><p>En el panel central escribís tus pedidos, leés las respuestas y revisás las acciones propuestas.</p></div></article>
              <article><span>03</span><div><h3>Archivos y contexto</h3><p>OpenCode puede trabajar con los archivos de la carpeta que abriste; indicá lo que necesitás con claridad.</p></div></article>
              <article><span>04</span><div><h3>Terminal y permisos</h3><p>Cuando sea necesario, verás la terminal o una solicitud de permiso. Leela antes de confirmar.</p></div></article>
            </div>
          </div>
          <footer className="footer guideFooter"><p>Explorar · Pedir · Revisar</p><div className="slideNumber" aria-label="Diapositiva 11 de 12"><span>11</span><i /></div></footer>
        </section>

        <section className="slide openProject" aria-labelledby="open-project-title">
          <div className="openProjectGlow" aria-hidden="true" />
          <header className="topbar openProjectTopbar">
            <div className="brand" aria-label="Desarrollo web e inteligencia artificial">
              <span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span>
              <span className="brandText">WEB · IA</span>
            </div>
            <p className="edition">Primer proyecto</p>
          </header>
          <div className="openProjectContent">
            <div className="openProjectLead">
              <p className="eyebrow"><span />Diapositiva 12</p>
              <p className="setupKicker">Preparar el espacio de trabajo</p>
              <h2 id="open-project-title">Abrí la carpeta<br />en <em>OpenCode.</em></h2>
              <p>Así OpenCode podrá usar los archivos de nuestro primer proyecto como contexto de trabajo.</p>
            </div>
            <div className="openProjectPanel">
              <ol className="openProjectSteps">
                <li><span>01</span><p>En la pantalla inicial de OpenCode, elegí <strong>Abrir carpeta</strong>.</p></li>
                <li><span>02</span><p>Buscá la carpeta del curso en tu disco.</p></li>
                <li><span>03</span><p>Seleccioná <strong>proyecto-0-primer-ejemplo</strong> y confirmá la apertura.</p></li>
                <li><span>04</span><p>Verificá que el nombre de la carpeta aparezca como proyecto activo en OpenCode.</p></li>
              </ol>
              <div className="openProjectPath"><code>curso-desarrollo-web-ia</code><span>›</span><code>proyecto-0-primer-ejemplo</code></div>
            </div>
          </div>
          <footer className="footer openProjectFooter"><p>Carpeta abierta · Contexto listo</p><div className="slideNumber" aria-label="Diapositiva 12 de 12"><span>12</span><i /></div></footer>
        </section>
      </div>
      <nav className="slideNavigation" aria-label="Navegación de diapositivas">
        <button type="button" onClick={() => goToSlide(currentSlide - 1)} disabled={currentSlide === 0} aria-label="Diapositiva anterior">←</button>
        <div className="slideDots" aria-label={`Diapositiva ${currentSlide + 1} de ${slideCount}`}>
          {Array.from({ length: slideCount }, (_, index) => <button type="button" className={index === currentSlide ? "active" : ""} onClick={() => goToSlide(index)} aria-label={`Ir a la diapositiva ${index + 1}`} aria-current={index === currentSlide ? "true" : undefined} key={index} />)}
        </div>
        <button type="button" onClick={() => goToSlide(currentSlide + 1)} disabled={currentSlide === slideCount - 1} aria-label="Diapositiva siguiente">→</button>
      </nav>
    </main>
  );
}
