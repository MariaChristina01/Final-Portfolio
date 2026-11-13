import { useEffect, useState } from "react";

function getImageNumber(src) {
  const match = src.match(/\((\d+)\)(?=\.[^.]+$)/);
  return match ? Number(match[1]) : 0;
}

export default function Project({ project }) {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = (project.images || (project.image ? [{ src: project.image, alt: `${project.name} screenshot` }] : []))
    .slice()
    .sort((a, b) => getImageNumber(a.src) - getImageNumber(b.src));

  useEffect(() => {
    if (images.length < 2 || !isHovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [images.length, isHovered]);

  const showImage = (index) => setActiveImage((index + images.length) % images.length);

  return (
    <article
      className="card"
      data-reveal
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImage(0);
      }}
    >
      {images.length > 0 && (
        <div className="project-gallery">
          <div
            className="project-image"
          >
            <img key={images[activeImage].src} src={images[activeImage].src} alt={images[activeImage].alt} loading="lazy" />
            {images.length > 1 && (
              <>
                <button className="slideshow-control previous" type="button" onClick={() => showImage(activeImage - 1)} aria-label="Previous project screenshot">
                  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button className="slideshow-control next" type="button" onClick={() => showImage(activeImage + 1)} aria-label="Next project screenshot">
                  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
                </button>
                <div className="slideshow-dots" aria-label="Choose project screenshot">
                  {images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      className={activeImage === index ? "selected" : ""}
                      onClick={() => showImage(index)}
                      aria-label={`Show screenshot ${index + 1}`}
                      aria-pressed={activeImage === index}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <h3>{project.name}</h3>
      <div className="date">{project.date}</div>
      {project.tags && <div className="tags">{project.tags}</div>}
      <p>{project.desc}</p>
      {open && (
        <ul>
          {project.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
      <button onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? "Hide details" : "Show details"}
      </button>
    </article>
  );
}
