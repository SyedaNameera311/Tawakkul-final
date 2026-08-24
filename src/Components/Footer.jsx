import { Link } from "react-router-dom";

const worlds = [
  { number: "01", label: "Knowledge", title: "Faith & Understanding", copy: "Explore the Qur'an, Tafseer, Arabic and Islamic knowledge from beginner to advanced levels.", link: "/course", action: "Explore courses" },
  { number: "02", label: "Modesty", title: "Modesty & Identity", copy: "Discover modest living, intentional dressing, haya and an identity shaped by faith.", link: "/modesty", action: "Discover modesty" },
  { number: "03", label: "Media", title: "Meaningful Media", copy: "Purposeful Islamic audio and creative resources for creators who want their content to carry meaning.", link: "/media", action: "Explore media" },
  { number: "04", label: "Digital", title: "Ethical Digital Building", copy: "Websites and digital experiences for people and businesses who want to build according to their values.", link: "/build", action: "Build with us" },
];

const quickLinks = [
  ["Home", "/"],
  ["About Tawakkul", "/about"],
  ["Courses", "/course"],
  ["Contact", "/contact"],
];

const socialLinks = ["Instagram", "YouTube", "Facebook", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="site-footer">
      <style>{`
        .site-footer { --footer-bg:#070605; --footer-panel:#0d0c0a; --footer-ink:#f4eee3; --footer-gold:#d7a84e; --footer-muted:rgba(244,238,227,.48); position:relative; overflow:hidden; background:var(--footer-bg); color:var(--footer-ink); font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
        .site-footer *, .site-footer *::before, .site-footer *::after { box-sizing:border-box; }
        .site-footer a { color:inherit; text-decoration:none; }
        .footer-curve { position:absolute; top:0; right:0; left:0; z-index:1; height:116px; overflow:hidden; pointer-events:none; }
        .footer-curve svg { display:block; width:100%; height:100%; }
        .footer-curve-fill { fill:var(--footer-bg); }
        .footer-curve-line { fill:none; stroke:var(--footer-gold); stroke-dasharray:7 15; stroke-linecap:round; opacity:.54; animation:footerCurveMove 18s linear infinite; }
        .footer-curve-line-soft { fill:none; stroke:rgba(244,238,227,.16); stroke-width:1; }
        @keyframes footerCurveMove { to { stroke-dashoffset:-440; } }
        .footer-atmosphere { position:absolute; top:0; left:50%; width:680px; height:460px; border-radius:50%; background:rgba(215,168,78,.08); filter:blur(115px); opacity:.75; transform:translateX(-50%); animation:footerGlow 8s ease-in-out infinite; pointer-events:none; }
        .footer-atmosphere-corner { position:absolute; right:-100px; bottom:-180px; width:420px; height:420px; border-radius:50%; background:rgba(255,255,255,.035); filter:blur(100px); pointer-events:none; }
        @keyframes footerGlow { 0%,100% { opacity:.52; transform:translateX(-50%) scale(.96); } 50% { opacity:.9; transform:translateX(-50%) scale(1.05); } }
        .footer-content { position:relative; z-index:2; width:min(1180px,calc(100% - 48px)); margin:0 auto; padding:158px 0 0; }
        .footer-opening { display:flex; align-items:flex-end; justify-content:space-between; gap:35px; padding-bottom:82px; }
        .footer-kicker { margin:0; color:var(--footer-gold); font-size:9px; font-weight:800; letter-spacing:.34em; text-transform:uppercase; }
        .footer-title { max-width:740px; margin:19px 0 0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(3rem,6.5vw,6.7rem); font-weight:400; letter-spacing:-.08em; line-height:.87; }
        .footer-title em { color:rgba(244,238,227,.24); font-style:italic; }
        .footer-description { max-width:560px; margin:25px 0 0; color:var(--footer-muted); font-size:13px; line-height:1.85; }
        .footer-contact-button { display:inline-flex; align-items:center; gap:17px; flex:none; border:1px solid rgba(215,168,78,.55); border-radius:999px; padding:15px 18px 15px 21px; color:var(--footer-gold); font-size:9px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; transition:background 220ms ease,color 220ms ease,transform 220ms ease,box-shadow 220ms ease; }
        .footer-contact-button span { display:grid; width:27px; height:27px; place-items:center; border:1px solid rgba(215,168,78,.45); border-radius:50%; font-size:15px; transition:transform 220ms ease,background 220ms ease; }
        .footer-contact-button:hover { background:var(--footer-gold); color:#181108; box-shadow:0 12px 35px rgba(215,168,78,.16); transform:translateY(-4px); }
        .footer-contact-button:hover span { border-color:transparent; background:#181108; color:var(--footer-gold); transform:rotate(45deg); }
        .footer-worlds { display:grid; grid-template-columns:repeat(4,1fr); gap:0; border-top:1px solid rgba(244,238,227,.12); border-bottom:1px solid rgba(244,238,227,.12); }
        .footer-world { min-height:250px; padding:28px 27px 30px 0; border-right:1px solid rgba(244,238,227,.1); transition:background 240ms ease,transform 240ms ease; }
        .footer-world + .footer-world { padding-left:27px; }
        .footer-world:last-child { border-right:0; }
        .footer-world:hover { background:linear-gradient(180deg,rgba(215,168,78,.08),transparent); transform:translateY(-2px); }
        .footer-world-top { display:flex; align-items:center; gap:11px; }
        .footer-world-number { display:grid; width:31px; height:31px; place-items:center; border:1px solid rgba(215,168,78,.35); border-radius:9px; color:var(--footer-gold); font-size:9px; font-weight:800; transition:background 220ms ease,transform 220ms ease; }
        .footer-world:hover .footer-world-number { background:var(--footer-gold); color:#181108; transform:rotate(7deg); }
        .footer-world-label { color:rgba(244,238,227,.32); font-size:8px; font-weight:800; letter-spacing:.22em; text-transform:uppercase; }
        .footer-world h3 { margin:27px 0 0; color:rgba(244,238,227,.9); font-family:Georgia,serif; font-size:19px; font-weight:400; letter-spacing:-.03em; }
        .footer-world p { max-width:210px; min-height:65px; margin:11px 0 0; color:rgba(244,238,227,.38); font-size:10px; line-height:1.7; }
        .footer-world-link { display:inline-flex; gap:8px; margin-top:15px; color:rgba(215,168,78,.82); font-size:8px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; transition:color 180ms ease,gap 180ms ease; }
        .footer-world-link:hover { color:#f0c979; gap:13px; }
        .footer-lower { display:grid; grid-template-columns:1.55fr .65fr .65fr; gap:70px; padding:70px 0 55px; }
        .footer-brand-link { display:inline-flex; align-items:center; gap:13px; }
        .footer-brand-mark { display:grid; width:43px; height:43px; place-items:center; border:1px solid rgba(215,168,78,.45); border-radius:50%; color:var(--footer-gold); font-family:Georgia,serif; font-size:22px; transition:transform 500ms cubic-bezier(.23,1,.32,1),background 220ms ease; }
        .footer-brand-link:hover .footer-brand-mark { background:rgba(215,168,78,.1); transform:rotate(12deg) scale(1.06); }
        .footer-brand-name { font-size:13px; font-weight:800; letter-spacing:.25em; }
        .footer-brand-tagline { margin-top:3px; color:rgba(244,238,227,.3); font-size:7px; letter-spacing:.25em; text-transform:uppercase; }
        .footer-brand-copy { max-width:430px; margin:23px 0 0; color:rgba(244,238,227,.35); font-size:11px; line-height:1.8; }
        .footer-brand-note { margin:17px 0 0; color:rgba(244,238,227,.2); font-family:Georgia,serif; font-size:14px; font-style:italic; }
        .footer-column-title { margin:0; color:rgba(244,238,227,.34); font-size:8px; font-weight:800; letter-spacing:.25em; text-transform:uppercase; }
        .footer-link-list { display:grid; gap:14px; margin:22px 0 0; padding:0; list-style:none; }
        .footer-link-list a { display:inline-flex; position:relative; width:max-content; color:rgba(244,238,227,.5); font-size:11px; transition:color 180ms ease,transform 180ms ease; }
        .footer-link-list a::after { position:absolute; right:0; bottom:-4px; left:0; height:1px; background:var(--footer-gold); content:""; transform:scaleX(0); transform-origin:right; transition:transform 220ms ease; }
        .footer-link-list a:hover { color:var(--footer-ink); transform:translateX(4px); }
        .footer-link-list a:hover::after { transform:scaleX(1); transform-origin:left; }
        .footer-bottom { display:flex; align-items:center; justify-content:space-between; gap:25px; border-top:1px solid rgba(244,238,227,.1); padding:23px 0 28px; color:rgba(244,238,227,.22); font-size:9px; }
        .footer-legal { display:flex; gap:22px; }
        .footer-legal a { transition:color 180ms ease; }
        .footer-legal a:hover { color:rgba(244,238,227,.72); }
        @media (max-width:900px) { .footer-opening { align-items:flex-start; flex-direction:column; } .footer-worlds { grid-template-columns:repeat(2,1fr); } .footer-world:nth-child(2) { border-right:0; } .footer-world:nth-child(3),.footer-world:nth-child(4) { border-top:1px solid rgba(244,238,227,.1); } .footer-world:nth-child(3) { padding-left:0; } .footer-world:nth-child(4) { border-right:0; } .footer-lower { grid-template-columns:1fr 1fr; } .footer-brand-block { grid-column:1/-1; } }
        @media (max-width:600px) { .footer-content { width:calc(100% - 32px); padding-top:130px; } .footer-curve { height:88px; } .footer-opening { padding-bottom:58px; } .footer-worlds { grid-template-columns:1fr; } .footer-world,.footer-world + .footer-world { min-height:auto; border-right:0; border-top:1px solid rgba(244,238,227,.1); padding:24px 0; } .footer-world:first-child { border-top:0; } .footer-world p { min-height:auto; } .footer-lower { grid-template-columns:1fr; gap:40px; padding:52px 0 40px; } .footer-bottom { align-items:flex-start; flex-direction:column; gap:13px; } }
        @media (prefers-reduced-motion:reduce) { .site-footer *, .site-footer *::before, .site-footer *::after { animation:none !important; transition-duration:.01ms !important; } }
      `}</style>

      <div className="footer-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path className="footer-curve-fill" d="M0 74C180 145 350 145 540 86C730 27 880 17 1050 66C1210 112 1320 126 1440 72V0H0Z" />
          <path className="footer-curve-line-soft" d="M0 74C180 145 350 145 540 86C730 27 880 17 1050 66C1210 112 1320 126 1440 72" />
          <path className="footer-curve-line" strokeWidth="1.5" d="M0 74C180 145 350 145 540 86C730 27 880 17 1050 66C1210 112 1320 126 1440 72" />
        </svg>
      </div>
      <div className="footer-atmosphere" aria-hidden="true" />
      <div className="footer-atmosphere-corner" aria-hidden="true" />

      <div className="footer-content">
        <section className="footer-opening">
          <div>
            <p className="footer-kicker">Tawakkul · A purposeful space</p>
            <h2 className="footer-title">Build a life<br /><em>with purpose.</em></h2>
            <p className="footer-description">Knowledge that transforms. Modesty that dignifies. Media that carries meaning. Technology that serves a purpose.</p>
          </div>
          <Link to="/contact" className="footer-contact-button">Start a conversation <span>↗</span></Link>
        </section>

        <section className="footer-worlds" aria-label="Tawakkul worlds">
          {worlds.map((world) => (
            <article className="footer-world" key={world.number}>
              <div className="footer-world-top"><span className="footer-world-number">{world.number}</span><span className="footer-world-label">{world.label}</span></div>
              <h3>{world.title}</h3>
              <p>{world.copy}</p>
              <Link to={world.link} className="footer-world-link">{world.action} <span>→</span></Link>
            </article>
          ))}
        </section>

        <section className="footer-lower">
          <div className="footer-brand-block">
            <Link to="/" className="footer-brand-link">
              <span className="footer-brand-mark">ت</span>
              <span><span className="footer-brand-name">TAWAKKUL</span><span className="footer-brand-tagline">Trust &amp; Tranquility</span></span>
            </Link>
            <p className="footer-brand-copy">A space where faith, knowledge, modesty, creativity and technology come together to create something meaningful.</p>
            <p className="footer-brand-note">Learn. Reflect. Build. Live with purpose.</p>
          </div>

          <div><h3 className="footer-column-title">Navigate</h3><ul className="footer-link-list">{quickLinks.map(([label, to]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul></div>
          <div><h3 className="footer-column-title">Connect</h3><ul className="footer-link-list">{socialLinks.map((label) => <li key={label}><a href="#">{label}</a></li>)}</ul></div>
        </section>

        <div className="footer-bottom"><span>© {new Date().getFullYear()} Tawakkul. All rights reserved.</span><div className="footer-legal"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div></div>
      </div>
    </footer>
  );
}
