"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

const slideCount = 28;
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

        <section className="slide conceptSlide conceptGenerative" aria-labelledby="generative-title">
          <div className="conceptGlow" aria-hidden="true" />
          <header className="topbar conceptTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Conceptos esenciales</p></header>
          <div className="conceptContent">
            <div className="conceptLead"><p className="eyebrow"><span />Diapositiva 13</p><h2 id="generative-title">¿Qué es la IA<br /><em>generativa?</em></h2><p>Es una tecnología capaz de crear contenido nuevo a partir de nuestras indicaciones: texto, código, imágenes y más.</p></div>
            <div className="conceptCards threeCards">
              <article><span>01</span><h3>Vos aportás la intención</h3><p>Explicás qué necesitás, para quién y con qué condiciones.</p></article>
              <article><span>02</span><h3>La IA propone</h3><p>Genera una respuesta o un primer borrador basado en ese contexto.</p></article>
              <article><span>03</span><h3>Vos revisás y decidís</h3><p>Comprobás el resultado, pedís ajustes y mantenés el control.</p></article>
            </div>
          </div>
          <footer className="footer conceptFooter"><p>Indicar · Generar · Revisar</p><div className="slideNumber" aria-label="Diapositiva 13 de 15"><span>13</span><i /></div></footer>
        </section>

        <section className="slide conceptSlide conceptModels" aria-labelledby="models-title">
          <div className="conceptGlow" aria-hidden="true" />
          <header className="topbar conceptTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Conceptos esenciales</p></header>
          <div className="conceptContent">
            <div className="conceptLead"><p className="eyebrow"><span />Diapositiva 14</p><h2 id="models-title">LLM, modelos<br />y <em>proveedores.</em></h2><p>Son piezas diferentes de la misma experiencia. Entenderlas ayuda a elegir mejor cómo trabajar con IA.</p></div>
            <div className="conceptFlow" aria-label="Relación entre proveedor, modelo, LLM y OpenCode">
              <article><span className="flowTag">Proveedor</span><h3>La organización que da acceso</h3><p>Ofrece una plataforma y permite usar uno o varios modelos.</p><small>Ej.: OpenAI, Anthropic, Google</small></article><i aria-hidden="true">→</i>
              <article><span className="flowTag">Modelo / LLM</span><h3>El sistema que procesa lenguaje</h3><p>Un LLM es un modelo grande de lenguaje: interpreta texto y genera respuestas o código.</p><small>Ej.: GPT, Claude, Gemini</small></article><i aria-hidden="true">→</i>
              <article><span className="flowTag">Aplicación</span><h3>La herramienta que usamos</h3><p>Nos permite conversar, dar contexto y aplicar el resultado en nuestros proyectos.</p><small>En este curso: OpenCode</small></article>
            </div>
          </div>
          <footer className="footer conceptFooter"><p>Acceso · Capacidad · Experiencia</p><div className="slideNumber" aria-label="Diapositiva 14 de 15"><span>14</span><i /></div></footer>
        </section>

        <section className="slide conceptSlide conceptAgent" aria-labelledby="agent-title">
          <div className="conceptGlow" aria-hidden="true" />
          <header className="topbar conceptTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Conceptos esenciales</p></header>
          <div className="conceptContent">
            <div className="conceptLead"><p className="eyebrow"><span />Diapositiva 15</p><h2 id="agent-title">OpenCode como<br /><em>agente.</em></h2><p>OpenCode no es el modelo: es la aplicación que coordina la interacción entre vos, el proyecto y el modelo de IA elegido.</p></div>
            <div className="agentCycle" aria-label="Ciclo de trabajo con OpenCode">
              <article><span>Vos</span><p>Definís el objetivo y el contexto.</p></article><i aria-hidden="true">→</i>
              <article><span>OpenCode</span><p>Organiza la conversación y puede usar herramientas del proyecto.</p></article><i aria-hidden="true">→</i>
              <article><span>Modelo LLM</span><p>Analiza la solicitud y genera propuestas o acciones.</p></article><i aria-hidden="true">→</i>
              <article><span>Vos</span><p>Revisás, aprobás o pedís cambios.</p></article>
              <p className="agentReminder">Un agente acelera el trabajo, pero las decisiones y la revisión siguen siendo tuyas.</p>
            </div>
          </div>
          <footer className="footer conceptFooter"><p>Objetivo · Acción · Revisión</p><div className="slideNumber" aria-label="Diapositiva 15 de 15"><span>15</span><i /></div></footer>
        </section>

        <section className="slide practiceSlide promptSlide" aria-labelledby="prompt-title">
          <div className="practiceGlow" aria-hidden="true" />
          <header className="topbar practiceTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Cómo conversar con IA</p></header>
          <div className="practiceContent">
            <div className="practiceLead"><p className="eyebrow"><span />Diapositiva 16</p><h2 id="prompt-title">Prompt, contexto<br />y <em>tokens.</em></h2><p>Tres ideas para pedir mejor y entender qué información usa el modelo al responder.</p></div>
            <div className="promptGrid">
              <article><span>Prompt</span><h3>La instrucción</h3><p>Es lo que escribís para indicar una tarea.</p><code>“Creá una página de bienvenida para una biblioteca.”</code></article>
              <article><span>Contexto</span><h3>La información que acompaña</h3><p>Son los datos, archivos, reglas y conversación que ayudan a responder mejor.</p><code>“Usá HTML, CSS y estos colores: azul y blanco.”</code></article>
              <article><span>Tokens</span><h3>Las unidades de texto</h3><p>El modelo procesa el texto en partes pequeñas llamadas tokens; el contexto disponible tiene un límite.</p><code>Más detalles útiles ≠ repetir información sin necesidad.</code></article>
            </div>
          </div>
          <footer className="footer practiceFooter"><p>Instrucción · Información · Capacidad</p><div className="slideNumber" aria-label="Diapositiva 16 de 18"><span>16</span><i /></div></footer>
        </section>

        <section className="slide practiceSlide chatAgentSlide" aria-labelledby="chat-agent-title">
          <div className="practiceGlow" aria-hidden="true" />
          <header className="topbar practiceTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Cómo conversar con IA</p></header>
          <div className="practiceContent">
            <div className="practiceLead"><p className="eyebrow"><span />Diapositiva 17</p><h2 id="chat-agent-title">¿Chat o <em>agente?</em></h2><p>Ambos usan modelos de IA, pero la diferencia está en lo que pueden hacer después de responder.</p></div>
            <div className="comparisonCards">
              <article><span className="comparisonTag">Chat</span><h3>Conversación y respuesta</h3><p>Recibe tu consulta y devuelve texto, ideas, explicaciones o código como propuesta.</p><div className="comparisonExample">“Explicame cómo crear un botón en HTML.”</div><small>Resultado: una respuesta para que la uses o adaptes.</small></article>
              <article className="agentCard"><span className="comparisonTag">Agente con herramientas</span><h3>Conversación, contexto y acción</h3><p>Además de responder, puede consultar archivos, proponer cambios o ejecutar acciones autorizadas.</p><div className="comparisonExample">“Revisá los archivos de este proyecto y proponé el botón.”</div><small>Resultado: una propuesta conectada con el proyecto, siempre bajo tu revisión.</small></article>
            </div>
          </div>
          <footer className="footer practiceFooter"><p>Responder · Usar contexto · Actuar</p><div className="slideNumber" aria-label="Diapositiva 17 de 18"><span>17</span><i /></div></footer>
        </section>

        <section className="slide practiceSlide verificationSlide" aria-labelledby="verification-title">
          <div className="practiceGlow" aria-hidden="true" />
          <header className="topbar practiceTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Uso responsable</p></header>
          <div className="practiceContent">
            <div className="practiceLead"><p className="eyebrow"><span />Diapositiva 18</p><h2 id="verification-title">La IA ayuda;<br />vos <em>verificás.</em></h2><p>Una respuesta puede sonar convincente y aun así contener errores, omisiones o decisiones que no se ajustan a tu proyecto.</p></div>
            <div className="verificationPanel"><p className="verificationIntro">Antes de aceptar un resultado, hacé estas comprobaciones:</p><ol><li><span>01</span><p><strong>Entendé</strong> qué propone y por qué.</p></li><li><span>02</span><p><strong>Probalo</strong> en tu proyecto y observá el resultado.</p></li><li><span>03</span><p><strong>Revisá</strong> el código, los datos sensibles y las consecuencias de los cambios.</p></li><li><span>04</span><p><strong>Pedí ajustes</strong> cuando algo no cumple tu objetivo.</p></li></ol><p className="verificationClosing">La responsabilidad final sobre lo que se construye es humana.</p></div>
          </div>
          <footer className="footer practiceFooter"><p>Entender · Probar · Revisar</p><div className="slideNumber" aria-label="Diapositiva 18 de 18"><span>18</span><i /></div></footer>
        </section>

        <section className="slide labSlide applicationSlide" aria-labelledby="application-title">
          <div className="labGlow" aria-hidden="true" />
          <header className="topbar labTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Práctica inicial</p></header>
          <div className="labContent">
            <div className="labLead"><p className="eyebrow"><span />Diapositiva 19</p><h2 id="application-title">OpenCode es la<br /><em>aplicación.</em></h2><p>Usamos OpenCode como entorno de trabajo y agente de desarrollo; no es el modelo de IA que genera las respuestas.</p></div>
            <div className="applicationMap"><article><span>OpenCode</span><h3>Aplicación y agente</h3><p>Es la herramienta que abrís en tu computadora: organiza el proyecto, la conversación y las acciones autorizadas.</p></article><i aria-hidden="true">↔</i><article><span>Modelo de IA</span><h3>Capacidad de lenguaje</h3><p>Es el LLM elegido para interpretar la solicitud y generar texto, código o propuestas.</p></article><p className="applicationNote">OpenCode puede conectarse con distintos modelos y proveedores; por eso conviene separar la aplicación del modelo.</p></div>
          </div>
          <footer className="footer labFooter"><p>Aplicación · Agente · Modelo</p><div className="slideNumber" aria-label="Diapositiva 19 de 21"><span>19</span><i /></div></footer>
        </section>

        <section className="slide labSlide folderCheckSlide" aria-labelledby="folder-check-title">
          <div className="labGlow" aria-hidden="true" />
          <header className="topbar labTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Práctica inicial</p></header>
          <div className="labContent">
            <div className="labLead"><p className="eyebrow"><span />Diapositiva 20</p><h2 id="folder-check-title">Primero, confirmá<br />la carpeta <em>activa.</em></h2><p>Antes de pedir una acción, verificá que OpenCode esté trabajando en el proyecto correcto.</p></div>
            <div className="folderCheckPanel"><div className="folderCheckPath"><span>Proyecto activo</span><code>curso-desarrollo-web-ia › proyecto-0-primer-ejemplo</code></div><ol><li><span>01</span><p>Buscá el nombre o ruta del proyecto visible en OpenCode.</p></li><li><span>02</span><p>Confirmá que termina en <strong>proyecto-0-primer-ejemplo</strong>.</p></li><li><span>03</span><p>Si no es esa carpeta, abrila antes de continuar.</p></li></ol><p className="folderCheckWarning">La carpeta activa define qué archivos puede leer o modificar el agente.</p></div>
          </div>
          <footer className="footer labFooter"><p>Carpeta correcta · Acción segura</p><div className="slideNumber" aria-label="Diapositiva 20 de 21"><span>20</span><i /></div></footer>
        </section>

        <section className="slide labSlide fileDemoSlide" aria-labelledby="file-demo-title">
          <div className="labGlow" aria-hidden="true" />
          <header className="topbar labTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Práctica inicial</p></header>
          <div className="labContent">
            <div className="labLead"><p className="eyebrow"><span />Diapositiva 21</p><h2 id="file-demo-title">Proyecto 0:<br /><em>un cuento.</em></h2><p>Usaremos prompts encadenados: primero creamos el cuento, luego lo analizamos y finalmente obtenemos sus métricas.</p></div>
            <ol className="fileFlow"><li><span>01</span><div><h3>Confirmá y leé</h3><p>Pedí: “Confirmá que la carpeta activa es <code>proyecto-0-primer-ejemplo</code> y mostrame los archivos que contiene.”</p></div></li><li><span>02</span><div><h3>Creá el cuento</h3><p>Pedí: “Creá el archivo <code>cuento-infantil.txt</code> con un cuento corto para niños, con un título y un final amable.”</p></div></li><li><span>03</span><div><h3>Generá el resumen</h3><p>Pedí: “Leé <code>cuento-infantil.txt</code> y creá <code>resumen-y-personajes.txt</code> con un resumen breve y la lista de personajes.”</p></div></li><li><span>04</span><div><h3>Consultá las métricas</h3><p>Pedí: “¿Cuántas palabras y cuántos caracteres tiene <code>cuento-infantil.txt</code>? Mostrá ambos resultados.”</p></div></li></ol>
          </div>
          <footer className="footer labFooter"><p>Crear · Resumir · Analizar</p><div className="slideNumber" aria-label="Diapositiva 21 de 21"><span>21</span><i /></div></footer>
        </section>

        <section className="slide reflectionSlide journeySlide" aria-labelledby="journey-title">
          <div className="reflectionGlow" aria-hidden="true" />
          <header className="topbar reflectionTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Cierre del Proyecto 0</p></header>
          <div className="reflectionContent"><div className="reflectionLead"><p className="eyebrow"><span />Diapositiva 22</p><h2 id="journey-title">Reconstruyamos<br />el <em>recorrido.</em></h2><p>El resultado no apareció solo: cada participante del ciclo aportó algo distinto.</p></div><div className="journeyFlow"><article><span>Alumno/a</span><p>Eligió el objetivo, abrió la carpeta y formuló los prompts.</p></article><i>→</i><article><span>Documento fuente</span><p>Aportó el cuento como contenido y contexto.</p></article><i>→</i><article><span>Modelo</span><p>Generó propuestas a partir de las instrucciones.</p></article><i>→</i><article><span>OpenCode + herramientas</span><p>Leyeron y crearon archivos dentro del proyecto.</p></article><i>→</i><article><span>Verificación</span><p>Revisó que el resultado fuera el esperado.</p></article></div></div>
          <footer className="footer reflectionFooter"><p>Objetivo · Contexto · Acción · Revisión</p><div className="slideNumber" aria-label="Diapositiva 22 de 24"><span>22</span><i /></div></footer>
        </section>

        <section className="slide reflectionSlide evidenceSlide" aria-labelledby="evidence-title">
          <div className="reflectionGlow" aria-hidden="true" />
          <header className="topbar reflectionTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Cierre del Proyecto 0</p></header>
          <div className="reflectionContent"><div className="reflectionLead"><p className="eyebrow"><span />Diapositiva 23</p><h2 id="evidence-title">Respuesta no es<br />igual a <em>archivo.</em></h2><p>Una explicación en la conversación no garantiza que el cambio se haya realizado. La evidencia está en los archivos del proyecto.</p></div><div className="evidenceCards"><article><span>Conversación</span><h3>Propuesta del agente</h3><p>“Creé un cuento y preparé un resumen con personajes.”</p><small>Es una afirmación: todavía hay que comprobarla.</small></article><article><span>Carpeta activa</span><h3>Evidencia verificable</h3><p><code>cuento-infantil.txt</code><br /><code>resumen-y-personajes.txt</code></p><small>Abrí ambos archivos y verificá que el contenido esté allí.</small></article></div></div>
          <footer className="footer reflectionFooter"><p>Escuchar · Abrir · Comprobar</p><div className="slideNumber" aria-label="Diapositiva 23 de 24"><span>23</span><i /></div></footer>
        </section>

        <section className="slide reflectionSlide correctionSlide" aria-labelledby="correction-title">
          <div className="reflectionGlow" aria-hidden="true" />
          <header className="topbar reflectionTopbar"><div className="brand" aria-label="Desarrollo web e inteligencia artificial"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Cierre del Proyecto 0</p></header>
          <div className="reflectionContent"><div className="reflectionLead"><p className="eyebrow"><span />Diapositiva 24</p><h2 id="correction-title">Mejorá y<br /><em>comprobá.</em></h2><p>Elegí una afirmación o aspecto mejorable, pedí una corrección concreta y verificá el efecto directamente en el archivo.</p></div><div className="correctionPanel"><ol><li><span>01</span><p><strong>Detectá:</strong> ¿el resumen menciona a todos los personajes? ¿el cuento tiene un final claro?</p></li><li><span>02</span><p><strong>Pedí:</strong> “Actualizá <code>resumen-y-personajes.txt</code> para incluir todos los personajes que aparecen en <code>cuento-infantil.txt</code>.”</p></li><li><span>03</span><p><strong>Comprobá:</strong> abrí el archivo actualizado y contrastalo con el cuento fuente.</p></li></ol><p className="correctionClosing">Corregir no es repetir el pedido: es indicar qué mejorar, dónde y cómo comprobarlo.</p></div></div>
          <footer className="footer reflectionFooter"><p>Detectar · Corregir · Verificar</p><div className="slideNumber" aria-label="Diapositiva 24 de 24"><span>24</span><i /></div></footer>
        </section>

        <section className="slide conceptSlide conceptModels" aria-labelledby="project-one-title">
          <div className="conceptGlow" aria-hidden="true" />
          <header className="topbar conceptTopbar"><div className="brand"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Proyecto 1</p></header>
          <div className="conceptContent"><div className="conceptLead"><p className="eyebrow"><span />Diapositiva 25</p><h2 id="project-one-title">Gestor personal<br />de <em>tareas.</em></h2><p>Crearás una aplicación individual para administrar tareas mediante un recorrido claro y demostrable.</p></div><div className="conceptCards threeCards"><article><span>01 · Crear</span><h3>Agregar una tarea</h3><p>La tarea aparece en la lista con su título, descripción y estado.</p></article><article><span>02 · Actualizar</span><h3>Editar o completar</h3><p>La persona modifica los datos o marca el avance de la tarea.</p></article><article><span>03 · Eliminar</span><h3>Limpiar la lista</h3><p>Una tarea que ya no se necesita puede eliminarse.</p></article></div></div>
          <footer className="footer conceptFooter"><p>Crear · Listar · Actualizar · Eliminar</p><div className="slideNumber" aria-label="Diapositiva 25 de 28"><span>25</span><i /></div></footer>
        </section>

        <section className="slide conceptSlide conceptAgent" aria-labelledby="task-model-title">
          <div className="conceptGlow" aria-hidden="true" />
          <header className="topbar conceptTopbar"><div className="brand"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Proyecto 1</p></header>
          <div className="conceptContent"><div className="conceptLead"><p className="eyebrow"><span />Diapositiva 26</p><h2 id="task-model-title">Modelo mínimo<br />de una <em>tarea.</em></h2><p>El núcleo es deliberadamente simple; debe alcanzar para demostrar las cuatro operaciones.</p></div><div className="agentCycle"><article><span>Identificador</span><p>Permite reconocer una tarea.</p></article><i>→</i><article><span>Título</span><p>Indica qué hay que hacer.</p></article><i>→</i><article><span>Descripción</span><p>Aporta detalle cuando hace falta.</p></article><i>→</i><article><span>Estado</span><p>Señala si está pendiente o completada.</p></article><p className="agentReminder">Recorrido demostrable: crear, visualizar, actualizar y eliminar una tarea.</p></div></div>
          <footer className="footer conceptFooter"><p>Datos mínimos · Operaciones completas</p><div className="slideNumber" aria-label="Diapositiva 26 de 28"><span>26</span><i /></div></footer>
        </section>

        <section className="slide conceptSlide conceptGenerative" aria-labelledby="limits-title">
          <div className="conceptGlow" aria-hidden="true" />
          <header className="topbar conceptTopbar"><div className="brand"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Proyecto 1</p></header>
          <div className="conceptContent"><div className="conceptLead"><p className="eyebrow"><span />Diapositiva 27</p><h2 id="limits-title">Límites claros,<br />diseño <em>propio.</em></h2><p>Hay condiciones que no cambian y decisiones que pueden evolucionar durante el desarrollo.</p></div><div className="comparisonCards"><article><span className="comparisonTag">Restricciones estables</span><h3>Lo obligatorio</h3><p>Experiencia individual, sin cuentas, sin privacidad ni aislamiento por usuario, con CRUD demostrable.</p><small>El gestor no será multiusuario en esta etapa.</small></article><article className="agentCard"><span className="comparisonTag">Decisiones evolutivas</span><h3>Lo que podés diseñar</h3><p>Colores, layout, campos extra, categorías, filtros, orden y detalles de interacción.</p><small>La creatividad aparece dentro de los límites del problema.</small></article></div></div>
          <footer className="footer conceptFooter"><p>Condiciones comunes · Decisiones propias</p><div className="slideNumber" aria-label="Diapositiva 27 de 28"><span>27</span><i /></div></footer>
        </section>

        <section className="slide conceptSlide conceptModels" aria-labelledby="stack-title">
          <div className="conceptGlow" aria-hidden="true" />
          <header className="topbar conceptTopbar"><div className="brand"><span className="brandMark" aria-hidden="true"><span>&lt;</span><i /><span>/&gt;</span></span><span className="brandText">WEB · IA</span></div><p className="edition">Proyecto 1</p></header>
          <div className="conceptContent"><div className="conceptLead"><p className="eyebrow"><span />Diapositiva 28</p><h2 id="stack-title">Primero local;<br />después <em>conectado.</em></h2><p>Avanzaremos por etapas para validar la experiencia antes de incorporar persistencia en la nube.</p></div><div className="conceptFlow"><article><span className="flowTag">Etapa 1</span><h3>localStorage</h3><p>Las tareas se guardan en el navegador para construir y probar el flujo completo.</p></article><i>→</i><article><span className="flowTag">Etapa 2</span><h3>Supabase</h3><p>Luego migraremos la persistencia a una base de datos.</p></article><i>→</i><article><span className="flowTag">Durante el desarrollo</span><h3>MCP</h3><p>Usaremos MCP para conectar herramientas y acompañar el proceso de desarrollo.</p></article></div></div>
          <footer className="footer conceptFooter"><p>Probar · Persistir · Evolucionar</p><div className="slideNumber" aria-label="Diapositiva 28 de 28"><span>28</span><i /></div></footer>
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
