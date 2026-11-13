import { useEffect, useState } from "react";

export const SECTIONS = ["about", "projects", "education", "certifications", "contact"];

const SECTION_ICONS = {
  about: <><circle cx="12" cy="8" r="3.5" /><path d="M5 20a7 7 0 0 1 14 0" /></>,
  projects: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></>,
  education: <><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M7 11v5c3 2 7 2 10 0v-5M21 9v6" /></>,
  certifications: <><circle cx="12" cy="9" r="6" /><path d="m8 14-1 7 5-3 5 3-1-7" /></>,
  contact: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
};

function useActiveSection() {
  const [current, setCurrent] = useState("");
  useEffect(() => {
    const updateCurrent = () => {
      const page = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= page.scrollHeight - 4;
      if (atBottom) {
        setCurrent(SECTIONS[SECTIONS.length - 1]);
        return;
      }

      const activationLine = window.innerHeight * 0.35;
      let active = "";
      SECTIONS.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) active = id;
      });
      setCurrent(active);
    };

    window.addEventListener("scroll", updateCurrent, { passive: true });
    window.addEventListener("resize", updateCurrent);
    updateCurrent();
    return () => {
      window.removeEventListener("scroll", updateCurrent);
      window.removeEventListener("resize", updateCurrent);
    };
  }, []);
  return [current, setCurrent];
}

export default function Sidebar({ me }) {
  const [current, setCurrent] = useActiveSection();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={collapsed ? "sidebar is-collapsed" : "sidebar"}>
      <button
        className="avatar sidebar-toggle"
        type="button"
        onClick={() => setCollapsed((value) => !value)}
        aria-expanded={!collapsed}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <img className="avatar-photo" src="/images/1x1%20Picture.png" alt="" />
      </button>
      <div className="sidebar-profile">
        <h2 style={{ marginTop: 14 }}>{me.name.split(" ").slice(0, 2).join(" ")}</h2>
        <p className="role">{me.role}</p>
      </div>
      <nav aria-label="Sections">
        {SECTIONS.map((s) => (
          <a key={s} href={`#${s}`} onClick={() => setCurrent(s)} className={current === s ? "on" : ""} title={s[0].toUpperCase() + s.slice(1)} aria-current={current === s ? "location" : undefined}>
            <svg className="sidebar-link-icon" aria-hidden="true" viewBox="0 0 24 24">{SECTION_ICONS[s]}</svg>
            <span className="sidebar-link-label">{s[0].toUpperCase() + s.slice(1)}</span>
          </a>
        ))}
      </nav>
      <div className="foot sidebar-foot">
        <div>{me.location}</div>
      </div>
    </aside>
  );
}
