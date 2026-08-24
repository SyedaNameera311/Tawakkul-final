/**
 * Design reminder — Browser Utility: tactile, compact mobile controls; warm off-white
 * surface; strong charcoal contrast; no decorative gradients; desktop expands the
 * same information hierarchy rather than becoming a separate navigation system.
 */
import { useEffect, useId, useRef, useState } from "react";

const defaultItems = [
  { label: "Library", href: "#library" },
  { label: "Guides", href: "#guides" },
  { label: "Principles", href: "#principles" },
  { label: "About", href: "#about" },
];

const defaultLogoSrc = "/manus-storage/atlas-mark_db2e3e05.png";

function Icon({ children, className = "", ...props }) {
  return (
    <svg
      aria-hidden="true"
      className={`reference-navbar__icon ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      {children}
    </svg>
  );
}

const HomeIcon = () => (
  <Icon>
    <path d="m3.5 10 8.5-7 8.5 7v10.5H15v-6H9v6H3.5V10Z" />
  </Icon>
);

const PlusIcon = () => (
  <Icon>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);

const MenuIcon = () => (
  <Icon>
    <path d="M5 7h14M5 12h14M5 17h14" />
  </Icon>
);

const CloseIcon = () => (
  <Icon>
    <path d="m6 6 12 12M18 6 6 18" />
  </Icon>
);

const ArrowUpRightIcon = () => (
  <Icon>
    <path d="M7 17 17 7M9 7h8v8" />
  </Icon>
);

const BookMark = ({ src }) => (
  <span className="reference-navbar__mark" aria-hidden="true">
    <img src={src} alt="" />
  </span>
);

/**
 * A dependency-free navigation component styled to evoke the supplied mobile
 * browser reference without duplicating the browser interface itself.
 *
 * @param {object} props
 * @param {string} [props.brand="Atlas"] - Brand text shown beside the mark.
 * @param {string} [props.brandHref="/"] - Destination of the logo/home control.
 * @param {string} [props.logoSrc] - Optional brand mark image URL.
 * @param {{label: string, href: string}[]} [props.items] - Main nav links.
 * @param {string} [props.destination="atlas.study"] - Text inside the mobile capsule.
 * @param {string} [props.utilityCount="36"] - Count displayed in the mobile utility button.
 * @param {(item: {label: string, href: string}) => void} [props.onNavigate] - Optional link callback.
 * @param {() => void} [props.onCreate] - Optional handler for the mobile plus button.
 */
export default function Navbar({
  brand = "Atlas",
  brandHref = "/",
  logoSrc = defaultLogoSrc,
  items = defaultItems,
  destination = "atlas.study",
  utilityCount = "36",
  onNavigate,
  onCreate,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const handleNavigate = (item) => {
    onNavigate?.(item);
    setIsOpen(false);
  };

  return (
    <header className="reference-navbar">
      <style>{navbarStyles}</style>

      <div className="reference-navbar__desktop-shell">
        <a className="reference-navbar__brand" href={brandHref} aria-label={`${brand} home`}>
          <BookMark src={logoSrc} />
          <span>{brand}</span>
        </a>

        <nav className="reference-navbar__links" aria-label="Primary navigation">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => handleNavigate(item)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="reference-navbar__desktop-cta" href="#open-library">
          <span className="reference-navbar__status-dot" />
          Open library
          <ArrowUpRightIcon />
        </a>
      </div>

      <div className="reference-navbar__mobile-shell">
        <a className="reference-navbar__home-button" href={brandHref} aria-label={`${brand} home`}>
          <HomeIcon />
        </a>

        <button
          className="reference-navbar__destination"
          type="button"
          aria-label={`Current destination: ${destination}`}
          onClick={() => setIsOpen((current) => !current)}>
          <span className="reference-navbar__destination-info">i</span>
          <span className="reference-navbar__destination-text">{destination}</span>
        </button>

        <button
          className="reference-navbar__utility-button"
          type="button"
          aria-label="Create a new item"
          onClick={onCreate}>
          <PlusIcon />
        </button>

        <button className="reference-navbar__count-button" type="button" aria-label={`${utilityCount} open items`}>
          {utilityCount}
        </button>

        <button
          ref={menuButtonRef}
          className="reference-navbar__utility-button"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls={menuId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <nav
        id={menuId}
        className={`reference-navbar__mobile-menu ${isOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}>
        <p className="reference-navbar__menu-label">Browse Atlas</p>
        {items.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => handleNavigate(item)}>
            <span className="reference-navbar__menu-index">0{index + 1}</span>
            <span>{item.label}</span>
            <ArrowUpRightIcon />
          </a>
        ))}
      </nav>
    </header>
  );
}

const navbarStyles = `
  .reference-navbar {
    --navbar-paper: #f7f5f0;
    --navbar-soft: #e9e6df;
    --navbar-ink: #292927;
    --navbar-muted: #77736c;
    --navbar-saffron: #c59633;
    --navbar-line: rgba(41, 41, 39, 0.12);
    position: relative;
    z-index: 50;
    width: 100%;
    color: var(--navbar-ink);
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .reference-navbar *,
  .reference-navbar *::before,
  .reference-navbar *::after {
    box-sizing: border-box;
  }

  .reference-navbar button,
  .reference-navbar a {
    -webkit-tap-highlight-color: transparent;
  }

  .reference-navbar button:focus-visible,
  .reference-navbar a:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--navbar-saffron) 78%, white);
    outline-offset: 3px;
  }

  .reference-navbar__desktop-shell {
    display: none;
  }

  .reference-navbar__mobile-shell {
    display: grid;
    grid-template-columns: 2.75rem minmax(0, 1fr) 2.5rem 2.5rem 2.5rem;
    align-items: center;
    gap: 0.35rem;
    min-height: 4.5rem;
    padding: 0.65rem 0.75rem;
    background: var(--navbar-paper);
    border-bottom: 1px solid var(--navbar-line);
    box-shadow: 0 8px 22px rgba(41, 41, 39, 0.06);
  }

  .reference-navbar__icon {
    width: 1.35rem;
    height: 1.35rem;
    flex: 0 0 auto;
  }

  .reference-navbar__home-button,
  .reference-navbar__utility-button,
  .reference-navbar__count-button {
    display: inline-grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border: 0;
    border-radius: 0.65rem;
    color: var(--navbar-ink);
    background: transparent;
    text-decoration: none;
    transition: background 160ms cubic-bezier(0.23, 1, 0.32, 1), transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .reference-navbar__home-button:hover,
  .reference-navbar__utility-button:hover,
  .reference-navbar__count-button:hover {
    background: rgba(41, 41, 39, 0.07);
  }

  .reference-navbar__home-button:active,
  .reference-navbar__utility-button:active,
  .reference-navbar__count-button:active,
  .reference-navbar__destination:active {
    transform: scale(0.97);
  }

  .reference-navbar__destination {
    display: flex;
    align-items: center;
    min-width: 0;
    height: 2.6rem;
    gap: 0.52rem;
    padding: 0 0.8rem;
    overflow: hidden;
    border: 1px solid rgba(41, 41, 39, 0.05);
    border-radius: 999px;
    color: var(--navbar-ink);
    background: var(--navbar-soft);
    font: inherit;
    text-align: left;
    transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1), background 160ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .reference-navbar__destination:hover {
    background: #e1ded6;
  }

  .reference-navbar__destination-info {
    display: inline-grid;
    place-items: center;
    width: 1.25rem;
    height: 1.25rem;
    flex: 0 0 auto;
    border: 1.5px solid currentColor;
    border-radius: 999px;
    font-family: Georgia, serif;
    font-size: 0.84rem;
    font-style: italic;
    font-weight: 700;
    line-height: 1;
  }

  .reference-navbar__destination-text {
    overflow: hidden;
    font-size: 0.88rem;
    font-weight: 650;
    letter-spacing: -0.01em;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .reference-navbar__count-button {
    width: 1.9rem;
    height: 1.9rem;
    justify-self: center;
    border: 1.5px solid currentColor;
    border-radius: 0.52rem;
    font-size: 0.71rem;
    font-weight: 750;
    letter-spacing: -0.03em;
  }

  .reference-navbar__mobile-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0.75rem;
    left: 0.75rem;
    display: grid;
    padding: 0.55rem;
    border: 1px solid var(--navbar-line);
    border-radius: 1rem;
    background: rgba(247, 245, 240, 0.98);
    box-shadow: 0 1.25rem 2.5rem rgba(41, 41, 39, 0.14);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-0.45rem);
    transition: opacity 180ms cubic-bezier(0.23, 1, 0.32, 1), transform 180ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .reference-navbar__mobile-menu.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .reference-navbar__menu-label {
    margin: 0;
    padding: 0.55rem 0.75rem 0.45rem;
    color: var(--navbar-muted);
    font-size: 0.68rem;
    font-weight: 750;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .reference-navbar__mobile-menu a {
    display: grid;
    grid-template-columns: 1.5rem 1fr 1.25rem;
    align-items: center;
    gap: 0.65rem;
    padding: 0.76rem 0.75rem;
    border-radius: 0.68rem;
    color: var(--navbar-ink);
    font-size: 0.98rem;
    font-weight: 700;
    text-decoration: none;
    transition: background 160ms cubic-bezier(0.23, 1, 0.32, 1), transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .reference-navbar__mobile-menu a:hover {
    background: rgba(41, 41, 39, 0.065);
    transform: translateX(0.14rem);
  }

  .reference-navbar__menu-index {
    color: var(--navbar-saffron);
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.04em;
  }

  .reference-navbar__mobile-menu .reference-navbar__icon {
    width: 1rem;
    height: 1rem;
    justify-self: end;
  }

  @media (min-width: 760px) {
    .reference-navbar__mobile-shell,
    .reference-navbar__mobile-menu {
      display: none;
    }

    .reference-navbar__desktop-shell {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 2rem;
      min-height: 5.1rem;
      padding: 0 5.5vw;
      background: var(--navbar-paper);
      border-bottom: 1px solid var(--navbar-line);
    }

    .reference-navbar__brand {
      display: inline-flex;
      align-items: center;
      gap: 0.7rem;
      color: var(--navbar-ink);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.32rem;
      font-weight: 700;
      letter-spacing: -0.05em;
      text-decoration: none;
    }

    .reference-navbar__mark {
      display: inline-flex;
      width: 1.55rem;
      height: 1.55rem;
      align-items: center;
      justify-content: center;
    }

    .reference-navbar__mark img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .reference-navbar__links {
      display: flex;
      justify-content: center;
      gap: clamp(1rem, 2.6vw, 2.35rem);
    }

    .reference-navbar__links a {
      position: relative;
      padding: 0.4rem 0;
      color: var(--navbar-muted);
      font-size: 0.88rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-decoration: none;
      transition: color 160ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .reference-navbar__links a::after {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      left: 0;
      height: 2px;
      background: var(--navbar-saffron);
      content: "";
      opacity: 0;
      transform: scaleX(0.45);
      transition: opacity 160ms cubic-bezier(0.23, 1, 0.32, 1), transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .reference-navbar__links a:hover {
      color: var(--navbar-ink);
    }

    .reference-navbar__links a:hover::after {
      opacity: 1;
      transform: scaleX(1);
    }

    .reference-navbar__desktop-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.52rem;
      padding: 0.75rem 0.95rem;
      border: 1px solid rgba(41, 41, 39, 0.16);
      border-radius: 0.55rem;
      color: var(--navbar-ink);
      font-size: 0.82rem;
      font-weight: 800;
      text-decoration: none;
      transition: background 160ms cubic-bezier(0.23, 1, 0.32, 1), border-color 160ms cubic-bezier(0.23, 1, 0.32, 1), transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .reference-navbar__desktop-cta:hover {
      border-color: var(--navbar-ink);
      background: #eeebe4;
    }

    .reference-navbar__desktop-cta:active {
      transform: scale(0.97);
    }

    .reference-navbar__desktop-cta .reference-navbar__icon {
      width: 1.05rem;
      height: 1.05rem;
    }

    .reference-navbar__status-dot {
      display: block;
      width: 0.42rem;
      height: 0.42rem;
      border-radius: 50%;
      background: var(--navbar-saffron);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .reference-navbar *,
    .reference-navbar *::before,
    .reference-navbar *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
