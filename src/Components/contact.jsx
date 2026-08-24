import { useEffect, useRef, useState } from "react";
import girlSprite from "../assets/girl.png";

const channels = [
  {
    label: "WhatsApp",
    value: "0330 2726254",
    href: "https://wa.me/923302726254",
    action: "Start a chat",
  },
  {
    label: "Email",
    value: "hello@tawakkul.com",
    href: "mailto:hello@tawakkul.com",
    action: "Send an email",
  },
  {
    label: "Instagram",
    value: "@tawakkul_trust_tranquility",
    href: "https://www.instagram.com/tawakkul_trust_tranquility",
    action: "Follow us",
  },
  {
    label: "LinkedIn",
    value: "Syeda Namira",
    href: "https://www.linkedin.com/in/syeda-namira-14b81b38b",
    action: "Connect",
  },
];

const PULL_THRESHOLD = 72;
const MAX_PULL = 132;
const ANIMATION_TIME = 1250;

export default function Contact() {
  const timerRef = useRef(null);
  const pullStartRef = useRef(0);
  const pullRef = useRef(0);

  const [opened, setOpened] = useState(false);
  const [pulling, setPulling] = useState(false);
  const [pull, setPull] = useState(0);
  const [moving, setMoving] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "General enquiry",
    message: "",
  });

  useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);

  const animateTo = (nextOpened) => {
    window.clearTimeout(timerRef.current);
    setOpened(nextOpened);
    setMoving(true);

    timerRef.current = window.setTimeout(() => {
      setMoving(false);
    }, ANIMATION_TIME);
  };

  const handlePointerDown = (event) => {
    if (moving) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    pullStartRef.current = event.clientY;
    pullRef.current = 0;
    setPull(0);
    setPulling(true);
  };

  const handlePointerMove = (event) => {
    if (!pulling || moving) return;

    const nextPull = Math.max(
      0,
      Math.min(MAX_PULL, event.clientY - pullStartRef.current)
    );

    pullRef.current = nextPull;
    setPull(nextPull);
  };

  const handlePointerUp = () => {
    if (!pulling || moving) return;

    const completed = pullRef.current >= PULL_THRESHOLD;
    setPulling(false);
    setPull(0);
    pullRef.current = 0;

    if (completed) animateTo(!opened);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    if (!moving) animateTo(!opened);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  const pullProgress = `${Math.min(100, (pull / PULL_THRESHOLD) * 100)}%`;

  return (
    <main className={`contact-page ${opened ? "is-open" : ""}`}>
      <style>{`
        .contact-page {
          --ink: #17232a;
          --ink-soft: #24343b;
          --paper: #f4f0e7;
          --line: rgba(23, 35, 42, 0.16);
          --muted: #747a75;
          --gold: #c39a48;
          --gold-light: #e2bf70;
          min-height: 100vh;
          overflow: hidden;
          background: var(--paper);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .contact-page *,
        .contact-page *::before,
        .contact-page *::after { box-sizing: border-box; }
        .contact-page a { color: inherit; text-decoration: none; }
        .contact-page button,
        .contact-page input,
        .contact-page select,
        .contact-page textarea { font: inherit; }

        .contact-container {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
        }

        .contact-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 82px;
          border-bottom: 1px solid var(--line);
        }

        .contact-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.24em;
        }

        .contact-brand-mark {
          display: grid;
          width: 26px;
          height: 26px;
          place-items: center;
          border: 1px solid var(--gold);
          border-radius: 50%;
          color: var(--gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0;
        }

        .contact-header-meta,
        .contact-eyebrow,
        .contact-label {
          color: var(--muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.27em;
          text-transform: uppercase;
        }

        .contact-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
          align-items: end;
          gap: 48px;
          padding: 72px 0 64px;
        }

        .contact-eyebrow,
        .contact-label { margin: 0; }

        .contact-title {
          max-width: 770px;
          margin: 22px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(3.5rem, 8vw, 7.5rem);
          font-weight: 400;
          letter-spacing: -0.075em;
          line-height: 0.88;
        }

        .contact-title em,
        .contact-details-title em,
        .contact-form-title em {
          color: var(--gold);
          font-style: italic;
        }

        .contact-description {
          max-width: 430px;
          margin: 27px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .contact-hero-note {
          align-self: end;
          border-top: 1px solid var(--line);
          padding-top: 16px;
          color: var(--muted);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
          line-height: 1.8;
          text-transform: uppercase;
        }

        .contact-stage {
          position: relative;
          min-height: 590px;
          overflow: hidden;
          background: var(--ink);
          isolation: isolate;
        }

        .contact-stage::before {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(circle at 50% 28%, rgba(195, 154, 72, 0.16), transparent 31%),
            linear-gradient(105deg, rgba(255,255,255,0.04), transparent 30%, rgba(255,255,255,0.025) 70%, transparent);
          content: "";
        }

        .contact-stage-grid {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.24;
          background-image: linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 68px 68px;
          mask-image: linear-gradient(to bottom, black, transparent 82%);
          pointer-events: none;
        }

        .contact-stage-topline,
        .contact-stage-bottomline {
          position: absolute;
          left: 28px;
          right: 28px;
          z-index: 90;
          display: flex;
          justify-content: space-between;
          color: rgba(244, 240, 231, 0.44);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .contact-stage-topline { top: 25px; }
        .contact-stage-bottomline { bottom: 24px; }

        .contact-details {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: grid;
          align-items: center;
          padding: 82px clamp(28px, 7vw, 96px);
          opacity: 0;
          pointer-events: none;
          transform: translateY(24px);
          transition: opacity 480ms ease 160ms, transform 650ms cubic-bezier(0.23, 1, 0.32, 1) 160ms;
        }

        .contact-page.is-open .contact-details {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
          transition-delay: 410ms;
        }

        .contact-details-grid {
          display: grid;
          grid-template-columns: minmax(180px, 0.72fr) minmax(112px, 0.42fr) minmax(0, 1.35fr);
          align-items: center;
          gap: clamp(22px, 3vw, 48px);
        }

        .contact-details-copy-panel {
          min-width: 0;
        }

        .contact-details-girl-gap {
          min-height: 315px;
        }

        .contact-girl-stage {
          --girl-open-x: clamp(245px, 34vw, 430px);
          position: absolute;
          bottom: 36px;
          left: 0;
          z-index: 45;
          width: 260px;
          height: 390px;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-118%);
          transition: opacity 340ms ease 160ms, transform 1150ms cubic-bezier(0.23, 1, 0.32, 1) 160ms;
        }

        .contact-page.is-open .contact-girl-stage {
          opacity: 1;
          transform: translateX(var(--girl-open-x));
          transition-delay: 520ms;
        }

        .contact-girl-quote {
          position: absolute;
          top: 28px;
          left: 50%;
          z-index: 1;
          width: 230px;
          margin: 0;
          color: rgba(226, 191, 112, 0.58);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.05rem, 2vw, 1.45rem);
          font-style: italic;
          letter-spacing: -0.035em;
          line-height: 1.04;
          text-align: center;
          transform: translateX(-50%) rotate(-5deg);
          pointer-events: none;
          animation: floatingQuote 4.8s ease-in-out infinite;
        }

        .contact-girl-quote::before {
          position: absolute;
          top: -34px;
          left: 50%;
          color: rgba(226, 191, 112, 0.2);
          content: "“";
          font-family: Georgia, "Times New Roman", serif;
          font-size: 78px;
          font-style: normal;
          line-height: 1;
          transform: translateX(-50%);
        }

        .contact-girl-quote-label {
          position: absolute;
          right: -56px;
          bottom: 44px;
          z-index: 1;
          color: rgba(244, 240, 231, 0.32);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          transform: rotate(-90deg);
          transform-origin: center;
          pointer-events: none;
        }

        @keyframes floatingQuote {
          0%, 100% { margin-top: 0; opacity: 0.72; }
          50% { margin-top: -7px; opacity: 1; }
        }

        .contact-details-title {
          max-width: 380px;
          margin: 18px 0 0;
          color: var(--paper);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 400;
          letter-spacing: -0.07em;
          line-height: 0.92;
        }

        .contact-details-copy {
          max-width: 330px;
          margin: 22px 0 0;
          color: rgba(244, 240, 231, 0.64);
          font-size: 12px;
          line-height: 1.8;
        }

        .contact-channel-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .contact-channel {
          display: block;
          min-height: 138px;
          border: 1px solid rgba(244, 240, 231, 0.16);
          padding: 20px;
          background: rgba(244, 240, 231, 0.06);
          color: var(--paper);
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
        }

        .contact-channel:hover {
          border-color: var(--gold-light);
          background: rgba(195, 154, 72, 0.13);
          transform: translateY(-4px);
        }

        .contact-channel-label {
          color: var(--gold-light);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .contact-channel-value {
          display: block;
          margin-top: 16px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1rem, 2vw, 1.35rem);
          line-height: 1.12;
          overflow-wrap: anywhere;
        }

        .contact-channel-action {
          display: block;
          margin-top: 18px;
          color: rgba(244, 240, 231, 0.52);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .contact-curtain {
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 30;
          width: 50%;
          background: var(--ink-soft);
          box-shadow: inset 0 0 70px rgba(0,0,0,0.22);
          transition: transform 900ms cubic-bezier(0.77, 0, 0.175, 1);
        }

        .contact-curtain::after {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(transparent, var(--gold), transparent);
          content: "";
          opacity: 0.52;
        }

        .contact-curtain-left { left: 0; }
        .contact-curtain-left::after { right: 0; }
        .contact-curtain-right { right: 0; }
        .contact-curtain-right::after { left: 0; }
        .contact-page.is-open .contact-curtain-left { transform: translateX(-103%); }
        .contact-page.is-open .contact-curtain-right { transform: translateX(103%); }

        .contact-curtain-word {
          position: absolute;
          bottom: 24px;
          color: rgba(244, 240, 231, 0.34);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .contact-curtain-left .contact-curtain-word { left: 28px; }
        .contact-curtain-right .contact-curtain-word { right: 28px; }

        .contact-rope-visual {
          position: absolute;
          top: 0;
          left: 50%;
          z-index: 70;
          width: 90px;
          height: 300px;
          pointer-events: none;
          transform: translateX(-50%) translateY(var(--pull-distance, 0px));
          transform-origin: top center;
          transition: transform 240ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .contact-rope-visual.is-pulling { transition: none; }

        .contact-rope-line {
          position: absolute;
          top: 0;
          left: 50%;
          width: 3px;
          height: 238px;
          border-radius: 999px;
          background: repeating-linear-gradient(165deg, #806039 0, #806039 3px, #d9bd7b 3px, #d9bd7b 6px, #a07e4d 6px, #a07e4d 9px);
          box-shadow: 0 0 16px rgba(195, 154, 72, 0.26);
          transform: translateX(-50%);
        }

        .contact-rope-handle {
          position: absolute;
          top: 226px;
          left: 50%;
          display: grid;
          width: 58px;
          height: 58px;
          place-items: center;
          border: 1px solid var(--gold-light);
          border-radius: 50%;
          background: radial-gradient(circle at 32% 25%, #f2d790 0, var(--gold) 50%, #86602d 100%);
          box-shadow: 0 11px 28px rgba(0,0,0,0.38), 0 0 0 8px rgba(195,154,72,0.09);
          transform: translateX(-50%);
        }

        .contact-rope-handle::before {
          width: 12px;
          height: 12px;
          border: 1px solid rgba(23,35,42,0.52);
          border-radius: 50%;
          content: "";
        }

        .contact-rope-button {
          position: absolute;
          top: 219px;
          left: 50%;
          z-index: 80;
          width: 74px;
          height: 74px;
          border: 0;
          border-radius: 50%;
          background: transparent;
          cursor: ns-resize;
          transform: translateX(-50%);
          touch-action: none;
        }

        .contact-rope-button:focus-visible {
          outline: 2px solid var(--gold-light);
          outline-offset: 7px;
        }

        .contact-rope-button:disabled { cursor: wait; }

        .contact-rope-instruction {
          position: absolute;
          top: 303px;
          left: 50%;
          z-index: 81;
          width: max-content;
          color: rgba(244, 240, 231, 0.54);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transform: translateX(-50%);
        }

        .contact-rope-button:hover + .contact-rope-instruction { color: var(--gold-light); }

        .contact-girl-shell {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 50%;
          z-index: 20;
          width: 112px;
          height: 315px;
          transform: translateX(-50%);
          transform-origin: bottom center;
        }

        .contact-girl-sprite {
          width: 100%;
          height: 100%;
          background-color: transparent;
          background-image: url(${girlSprite});
          background-position: 0 0;
          background-repeat: no-repeat;
          background-size: 500% 100%;
          filter: drop-shadow(0 18px 20px rgba(0,0,0,0.36)) drop-shadow(0 0 5px rgba(226,191,112,0.38));
        }

        .contact-girl-shell::after {
          position: absolute;
          right: 8px;
          bottom: -7px;
          left: 8px;
          height: 10px;
          border-radius: 50%;
          background: rgba(0,0,0,0.35);
          content: "";
          filter: blur(5px);
          transform: translateY(50%);
        }

        .contact-girl-shell.is-moving { animation: girlBounce 0.55s ease-in-out infinite alternate; }
        .contact-girl-shell.is-moving .contact-girl-sprite { animation: girlWalk 1s steps(1, end) infinite; }
        .contact-page.is-open .contact-girl-shell:not(.is-moving) .contact-girl-sprite { background-position: 75% 0; }

        @keyframes girlWalk {
          0%, 19% { background-position: 0 0; }
          20%, 39% { background-position: 25% 0; }
          40%, 59% { background-position: 50% 0; }
          60%, 79% { background-position: 25% 0; }
          80%, 100% { background-position: 0 0; }
        }

        @keyframes girlBounce {
          from { margin-bottom: 0; }
          to { margin-bottom: 4px; }
        }

        .contact-form-section {
          border-bottom: 1px solid var(--line);
          padding: 92px 0 106px;
        }

        .contact-form-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
          gap: 70px;
        }

        .contact-form-title {
          margin: 17px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 400;
          letter-spacing: -0.065em;
          line-height: 0.93;
        }

        .contact-form-aside-copy {
          max-width: 310px;
          margin: 21px 0 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .contact-form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px 22px;
          padding: 30px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.22);
        }

        .contact-field { display: grid; gap: 10px; }
        .contact-field-wide { grid-column: 1 / -1; }

        .contact-field label {
          color: var(--muted);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .contact-field input,
        .contact-field select,
        .contact-field textarea {
          width: 100%;
          border: 0;
          border-bottom: 1px solid rgba(23,35,42,0.24);
          border-radius: 0;
          padding: 12px 0;
          outline: 0;
          background: transparent;
          color: var(--ink);
          font-size: 12px;
          transition: border-color 180ms ease;
        }

        .contact-field textarea { min-height: 108px; resize: vertical; }
        .contact-field input::placeholder,
        .contact-field textarea::placeholder { color: #a5a59e; }
        .contact-field input:focus,
        .contact-field select:focus,
        .contact-field textarea:focus { border-color: var(--gold); }

        .contact-submit {
          grid-column: 1 / -1;
          justify-self: start;
          border: 0;
          border-radius: 999px;
          padding: 14px 24px;
          background: var(--ink);
          color: var(--paper);
          cursor: pointer;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.17em;
          text-transform: uppercase;
          transition: transform 180ms ease, background 180ms ease;
        }

        .contact-submit:hover { background: var(--gold); color: var(--ink); transform: translateY(-2px); }
        .contact-submit:active { transform: scale(0.97); }

        .contact-success {
          grid-column: 1 / -1;
          margin: -8px 0 0;
          color: #6f7d5a;
          font-size: 11px;
        }

        .contact-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 28px 0;
          color: var(--muted);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.18em;
          line-height: 1.7;
          text-transform: uppercase;
        }

        .contact-footer-brand { color: var(--ink); }
        .contact-footer-copy { text-align: center; }

        @media (max-width: 800px) {
          .contact-container { width: min(100% - 32px, 620px); }
          .contact-hero,
          .contact-details-grid,
          .contact-form-grid { grid-template-columns: 1fr; }
          .contact-hero { gap: 30px; padding: 68px 0 56px; }
          .contact-hero-note { max-width: 260px; }
          .contact-stage { min-height: 720px; }
          .contact-details { padding: 94px 24px 52px; align-items: start; }
          .contact-channel-grid { margin-top: 12px; }
          .contact-details-girl-gap { min-height: 270px; order: 2; }
          .contact-details-copy-panel { order: 1; }
          .contact-channel-grid { order: 3; }
          .contact-girl-stage { --girl-open-x: calc(50vw - 130px); bottom: 30px; width: 220px; height: 300px; }
          .contact-girl-shell { width: 96px; height: 270px; }
          .contact-form-section { padding: 72px 0 80px; }
          .contact-form-grid { gap: 38px; }
        }

        @media (max-width: 520px) {
          .contact-header-meta { display: none; }
          .contact-stage-topline,
          .contact-stage-bottomline { left: 18px; right: 18px; }
          .contact-channel-grid,
          .contact-form { grid-template-columns: 1fr; }
          .contact-field-wide,
          .contact-submit,
          .contact-success { grid-column: auto; }
          .contact-form { padding: 22px; }
          .contact-footer { align-items: flex-start; flex-direction: column; gap: 10px; }
          .contact-footer-copy { text-align: left; }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-page *,
          .contact-page *::before,
          .contact-page *::after {
            animation: none !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <section className="contact-hero contact-container" aria-labelledby="contact-title">
        <div>
          <p className="contact-eyebrow">A thoughtful beginning</p>
          <h1 id="contact-title" className="contact-title">
            Let&apos;s have a <em>meaningful conversation.</em>
          </h1>
          <p className="contact-description">
            Questions about learning, modesty, meaningful media, digital work, or simply want to say hello? We would love to hear from you.
          </p>
        </div>
        <p className="contact-hero-note">
          Pull the golden rope<br />
          to open the conversation.
        </p>
      </section>

      <section className="contact-container" aria-label="Interactive contact reveal">
        <div className="contact-stage">
          <div className="contact-stage-grid" aria-hidden="true" />
          <div className="contact-stage-topline">
            <span>TAWAKKUL</span>
            <span>{opened ? "OPEN / 02" : "A LITTLE DOOR AWAITS"}</span>
          </div>

          <div id="contact-details" className="contact-details" aria-hidden={!opened}>
            <div className="contact-details-grid">
              <div className="contact-details-copy-panel">
                <p className="contact-label">Contact details</p>
                <h2 className="contact-details-title">
                  A simple message <em>is always welcome.</em>
                </h2>
                <p className="contact-details-copy">
                  Reach out whenever you need guidance, have an idea to share, or simply want to connect with Tawakkul.
                </p>
              </div>

              <div className="contact-details-girl-gap" aria-hidden="true" />

              <div className="contact-channel-grid">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    className="contact-channel"
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    tabIndex={opened ? 0 : -1}
                  >
                    <span className="contact-channel-label">{channel.label}</span>
                    <span className="contact-channel-value">{channel.value}</span>
                    <span className="contact-channel-action">{channel.action} →</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-girl-stage" role="img" aria-label="Elegant girl entering from the side, walking, then pointing toward the contact links">
            <p className="contact-girl-quote">A thoughtful hello<br />can open a door.</p>
            <span className="contact-girl-quote-label">Contact us</span>
            <div className={`contact-girl-shell ${moving ? "is-moving" : ""}`}>
              <div className="contact-girl-sprite" />
            </div>
          </div>

          <div className="contact-curtain contact-curtain-left" aria-hidden="true">
            <span className="contact-curtain-word">A door</span>
          </div>
          <div className="contact-curtain contact-curtain-right" aria-hidden="true">
            <span className="contact-curtain-word">Awaits</span>
          </div>

          <div
            className={`contact-rope-visual ${pulling ? "is-pulling" : ""}`}
            style={{ "--pull-distance": `${pull}px` }}
            aria-hidden="true"
          >
            <div className="contact-rope-line" />
            <div className="contact-rope-handle" />
          </div>

          <button
            type="button"
            className="contact-rope-button"
            aria-expanded={opened}
            aria-controls="contact-details"
            aria-label={opened ? "Pull the rope down to hide contact details" : "Pull the rope down to reveal contact details"}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onKeyDown={handleKeyDown}
            disabled={moving}
          />

          <span className="contact-rope-instruction" aria-hidden="true">
            {pulling ? "Keep pulling" : opened ? "Pull again to reset" : "Drag downward to reveal"}
          </span>

          <div className="contact-stage-bottomline">
            <span>Side view / graceful motion</span>
            <span>{Math.round((pullProgress === "100%" ? 100 : Number.parseFloat(pullProgress)) || 0)}%</span>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-container contact-form-grid">
          <div>
            <p className="contact-label">Send a message</p>
            <h2 className="contact-form-title">
              Tell us what&apos;s <em>on your mind.</em>
            </h2>
            <p className="contact-form-aside-copy">
              Whether it is a question, suggestion, collaboration, or simply a hello — there is space for it here.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="contact-field contact-field-wide">
              <label htmlFor="contact-topic">What can we help with?</label>
              <select id="contact-topic" name="topic" value={form.topic} onChange={handleChange}>
                <option>General enquiry</option>
                <option>Islamic Learning</option>
                <option>Modesty &amp; Identity</option>
                <option>Meaningful Media</option>
                <option>Digital Building</option>
                <option>Collaboration</option>
              </select>
            </div>
            <div className="contact-field contact-field-wide">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="5" placeholder="Write your message..." value={form.message} onChange={handleChange} required />
            </div>
            <button className="contact-submit" type="submit">Send message →</button>
            {sent && <p className="contact-success" role="status">Thank you — your message has been received.</p>}
          </form>
        </div>
      </section>

    </main>
  );
}

export { channels, PULL_THRESHOLD, MAX_PULL };

/*
  Put this component at src/pages/Contact.jsx and the transparent sprite at src/assets/girl.png.
  This version intentionally uses only React and CSS; GSAP is not required.
*/
