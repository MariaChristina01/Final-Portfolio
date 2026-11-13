import { useEffect, useState } from "react";
import { ME } from "./data.js";
import Sidebar from "./components/Sidebar.jsx";
import Diagnostic from "./components/Diagnostic.jsx";
import Project from "./components/Project.jsx";

export default function App() {
  const types = ["All", ...new Set(ME.projects.map((p) => p.type))];
  const [filter, setFilter] = useState("All");
  const projects = ME.projects.filter((p) => filter === "All" || p.type === filter);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [projects]);

  return (
    <div className="layout">
      <Sidebar me={ME} />
      <main className="main-shell">
        <div className="wrap">
        <header className="hero" data-reveal>
          <div>
            <h1>{ME.name}</h1>
            <p>{ME.role}. {ME.intro}</p>
            <a className="btn" href="#projects">See my projects</a>
            <a className="btn ghost" href="#contact">Contact me</a>
          </div>
          <Diagnostic />
        </header>

        <section id="about" data-reveal>
          <h2>About me</h2>
          <div className="about">
            <div>
              {ME.about.map((t) => <p key={t}>{t}</p>)}
            </div>
            <div>
              {ME.skills.map((g) => (
                <div className="sg" key={g.group}>
                  <b>{g.group}</b>
                  <div className="skills">
                    {g.items.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" data-reveal>
          <h2>Projects</h2>
          <div className="filters">
            {types.map((t) => (
              <button key={t} aria-pressed={filter === t} onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
          <div className="grid">
            {projects.map((p) => <Project key={p.name} project={p} />)}
          </div>
        </section>

        <section id="education" data-reveal>
          <h2>Education</h2>
          <ul className="list">
            {ME.education.map((e) => (
              <li key={e.school}>
                <div><b>{e.school}</b><br /><span className="muted">{e.level}</span></div>
                <small>{e.years}</small>
              </li>
            ))}
          </ul>
        </section>

        <section id="certifications" data-reveal>
          <h2>Certifications</h2>
          <ul className="list">
            {ME.certifications.map((c) => (
              <li key={c.name}><span>{c.name}</span><small>{c.date}</small></li>
            ))}
          </ul>
        </section>

        <section id="contact" className="contact" data-reveal>
          <h2>Contact</h2>
          <p>Looking for a data analytics intern or junior, or need a system built? Send me a message.</p>
          <div className="contact-card">
            <div className="contact-email-block">
              <span className="contact-email-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
              </span>
              <div>
                <span className="contact-label">Email me</span>
                <a className="contact-email" href={`mailto:${ME.email}`}>{ME.email}</a>
              </div>
            </div>
            <div className="contact-actions">
              <a className="btn ghost" href={ME.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn ghost" href="https://github.com/MariaChristina01" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        <footer>© {new Date().getFullYear()} {ME.name} · {ME.location}</footer>
        </div>
      </main>
    </div>
  );
}
