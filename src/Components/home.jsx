import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const startingPoints = [
  { number: "01", label: "WORLD 01 / START WITH ROOTS", title: "Knowledge & Faith", description: "Foundations, Quran, Arabic and learning for a life of considered faith.", route: "/course", count: "8 pathways", tone: "gold" },
  { number: "02", label: "WORLD 02 / WEAR WITH MEANING", title: "Modesty & Identity", description: "Thoughtful style and everyday practices for identity with ease and intention.", route: "/modesty", count: "24 collections", tone: "rose" },
  { number: "03", label: "WORLD 03 / CREATE WITH GOOD", title: "Meaningful Media", description: "Sound, story and creative resources for making work that leaves good behind.", route: "/media", count: "6 audio tracks", tone: "teal" },
  { number: "04", label: "WORLD 04 / BUILD WITH PURPOSE", title: "Ethical Digital Building", description: "Strategy, design and digital foundations for purposeful work that matters.", route: "/build", count: "3 pathways", tone: "sage" },
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} style={{ "--home-delay": `${delay}ms` }} className={`home-reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <main className="home-page">
      <style>{`
        .home-page { --home-ink:#18252b; --home-paper:#f4f0e7; --home-panel:#eee5d8; --home-muted:rgba(24,37,43,.58); --home-gold:#c39a48; --home-orange:#e86b43; min-height:100vh; overflow:hidden; background:var(--home-paper); color:var(--home-ink); font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
        .home-page *, .home-page *::before, .home-page *::after { box-sizing:border-box; }
        .home-page a { color:inherit; text-decoration:none; }
        .home-shell { width:min(1120px,calc(100% - 48px)); margin:0 auto; }
        .home-hero { position:relative; overflow:hidden; padding:57px 0 92px; background:radial-gradient(circle at 82% 18%,rgba(195,154,72,.12),transparent 25%),linear-gradient(135deg,#f4f0e7 0%,#f4f0e7 62%,#ead9cb 100%); }
        .home-hero::before { position:absolute; top:-210px; right:-160px; width:520px; height:520px; border:1px solid rgba(195,154,72,.25); border-radius:50%; content:""; box-shadow:0 0 0 42px rgba(195,154,72,.04),0 0 0 84px rgba(195,154,72,.025); animation:homeOrbit 24s linear infinite; }
        .home-hero::after { position:absolute; right:8%; bottom:-105px; width:360px; height:170px; border-radius:50%; background:rgba(232,107,67,.11); filter:blur(70px); content:""; }
        @keyframes homeOrbit { to { transform:rotate(360deg); } }
        .home-hero-grid { position:relative; z-index:1; display:grid; grid-template-columns:minmax(0,1fr) minmax(300px,.82fr); align-items:center; gap:78px; }
        .home-kicker,.home-label { color:var(--home-orange); font-size:9px; font-weight:800; letter-spacing:.29em; text-transform:uppercase; }
        .home-title { max-width:680px; margin:20px 0 0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(4rem,7.8vw,8rem); font-weight:400; letter-spacing:-.1em; line-height:.8; }
        .home-title em,.home-section-title em { color:var(--home-gold); font-style:italic; }
        .home-lede { max-width:455px; margin:28px 0 0; color:var(--home-muted); font-size:13px; line-height:1.9; }
        .home-actions { display:flex; align-items:center; flex-wrap:wrap; gap:20px; margin-top:31px; }
        .home-primary { display:inline-flex; align-items:center; gap:12px; border-radius:999px; padding:14px 18px 14px 21px; background:var(--home-ink); color:#fff; font-size:9px; font-weight:800; letter-spacing:.15em; text-transform:uppercase; transition:transform 180ms ease,background 180ms ease,box-shadow 180ms ease; }
        .home-primary span { display:grid; width:24px; height:24px; place-items:center; border:1px solid rgba(255,255,255,.33); border-radius:50%; }
        .home-primary:hover { background:var(--home-orange); box-shadow:0 13px 28px rgba(232,107,67,.18); transform:translateY(-3px); }
        .home-secondary { color:rgba(24,37,43,.5); font-size:9px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; transition:color 180ms ease; }
        .home-secondary:hover { color:var(--home-orange); }
        .home-hero-art { position:relative; max-width:430px; margin-left:auto; }
        .home-art-meta { display:flex; align-items:flex-start; justify-content:space-between; gap:20px; border-bottom:1px solid rgba(24,37,43,.14); padding-bottom:17px; }
        .home-art-meta p { max-width:240px; margin:0; color:rgba(24,37,43,.48); font-size:10px; line-height:1.75; }
        .home-art-count { text-align:right; }
        .home-art-count strong { display:block; font-family:Georgia,serif; font-size:34px; font-weight:400; line-height:.8; }
        .home-art-count span { display:block; margin-top:8px; color:rgba(24,37,43,.42); font-size:7px; font-weight:800; letter-spacing:.16em; line-height:1.35; text-transform:uppercase; }
        .home-image-frame { position:relative; overflow:hidden; margin-top:17px; border:7px solid rgba(255,250,244,.9); border-radius:22px; background:#c7b49e; box-shadow:0 25px 58px rgba(104,73,35,.15); transform:rotate(2deg); transition:transform 500ms cubic-bezier(.23,1,.32,1),box-shadow 500ms ease; }
        .home-hero-art:hover .home-image-frame { box-shadow:0 33px 70px rgba(104,73,35,.22); transform:rotate(0deg) translateY(-6px); }
        .home-image-frame img { display:block; width:100%; aspect-ratio:1.16; object-fit:cover; filter:saturate(.78) sepia(.08); transition:transform 800ms cubic-bezier(.23,1,.32,1),filter 400ms ease; }
        .home-hero-art:hover .home-image-frame img { filter:saturate(1) sepia(0); transform:scale(1.05); }
        .home-image-frame::after { position:absolute; inset:0; background:linear-gradient(180deg,rgba(24,37,43,.04),rgba(24,37,43,.58)); content:""; pointer-events:none; }
        .home-image-caption { position:absolute; right:22px; bottom:20px; left:22px; z-index:1; color:#fffaf4; }
        .home-image-caption span { color:rgba(255,250,244,.7); font-size:8px; font-weight:800; letter-spacing:.22em; text-transform:uppercase; }
        .home-image-caption h2 { max-width:250px; margin:8px 0 0; font-family:Georgia,serif; font-size:27px; font-weight:400; line-height:.94; }
        .home-worlds { position:relative; z-index:1; border-top:1px solid rgba(24,37,43,.13); padding:37px 0 100px; }
        .home-worlds-head { display:flex; align-items:flex-end; justify-content:space-between; gap:30px; margin-bottom:26px; }
        .home-section-title { margin:0; font-family:Georgia,serif; font-size:37px; font-weight:400; letter-spacing:-.06em; line-height:.93; }
        .home-worlds-note { max-width:310px; margin:0; color:var(--home-muted); font-size:10px; line-height:1.75; }
        .home-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:12px; }
        .home-card { position:relative; display:flex; min-height:220px; flex-direction:column; justify-content:space-between; overflow:hidden; border:1px solid rgba(24,37,43,.13); border-radius:16px; padding:20px; background:rgba(255,255,255,.4); transition:transform 250ms cubic-bezier(.23,1,.32,1),border-color 250ms ease,background 250ms ease,box-shadow 250ms ease; }
        .home-card:hover { border-color:rgba(24,37,43,.28); background:#fffdf8; box-shadow:0 20px 45px rgba(104,73,35,.11); transform:translateY(-6px); }
        .home-card::after { position:absolute; right:-50px; bottom:-60px; width:175px; height:175px; border:1px solid currentColor; border-radius:50%; opacity:.12; content:""; transition:transform 450ms ease; }
        .home-card:hover::after { transform:scale(1.2); }
        .home-card.gold { color:#b78e3d; background:linear-gradient(150deg,rgba(247,237,204,.72),rgba(255,255,255,.35)); }
        .home-card.rose { color:#b47972; background:linear-gradient(150deg,rgba(246,226,220,.82),rgba(255,255,255,.35)); }
        .home-card.teal { color:#5a928b; background:linear-gradient(150deg,rgba(221,240,235,.86),rgba(255,255,255,.35)); }
        .home-card.sage { color:#829271; background:linear-gradient(150deg,rgba(226,236,223,.85),rgba(255,255,255,.35)); }
        .home-card-top { display:flex; align-items:center; justify-content:space-between; color:currentColor; font-size:8px; font-weight:800; letter-spacing:.15em; }
        .home-card-number { font-family:Georgia,serif; font-size:14px; opacity:.66; }
        .home-card h3 { position:relative; z-index:1; margin:37px 0 0; color:var(--home-ink); font-family:Georgia,serif; font-size:28px; font-weight:400; letter-spacing:-.05em; line-height:.95; }
        .home-card p { position:relative; z-index:1; max-width:440px; margin:10px 0 0; color:var(--home-muted); font-size:10px; line-height:1.7; }
        .home-card-bottom { position:relative; z-index:1; display:flex; align-items:center; justify-content:space-between; border-top:1px solid rgba(24,37,43,.12); padding-top:12px; color:rgba(24,37,43,.46); font-size:8px; font-weight:800; letter-spacing:.13em; text-transform:uppercase; }
        .home-card-bottom span:last-child { color:currentColor; }
        .home-quiet { border-top:1px solid rgba(24,37,43,.13); border-bottom:1px solid rgba(24,37,43,.13); padding:40px 0; }
        .home-quiet-grid { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:60px; }
        .home-quiet h2 { margin:0; font-family:Georgia,serif; font-size:36px; font-weight:400; letter-spacing:-.06em; line-height:.94; }
        .home-quiet h2 em { color:var(--home-gold); }
        .home-quiet p { max-width:440px; margin:0; color:var(--home-muted); font-size:11px; line-height:1.85; }
        .home-reveal { opacity:0; transform:translateY(24px); transition:opacity 700ms ease var(--home-delay),transform 700ms cubic-bezier(.23,1,.32,1) var(--home-delay); }
        .home-reveal.is-visible { opacity:1; transform:translateY(0); }
        @media (max-width:820px) { .home-hero-grid { grid-template-columns:1fr; gap:48px; } .home-hero-art { margin:0 auto; } }
        @media (max-width:620px) { .home-shell { width:calc(100% - 32px); } .home-hero { padding:38px 0 72px; } .home-title { font-size:clamp(3.7rem,17vw,5.8rem); } .home-lede { font-size:12px; } .home-worlds { padding-bottom:70px; } .home-worlds-head { align-items:flex-start; flex-direction:column; gap:15px; } .home-grid { grid-template-columns:1fr; } .home-card { min-height:205px; } .home-quiet-grid { grid-template-columns:1fr; gap:20px; } }
        @media (prefers-reduced-motion:reduce) { .home-page *, .home-page *::before, .home-page *::after { animation:none !important; transition-duration:.01ms !important; } }
      `}</style>

      <section className="home-hero"><div className="home-shell"><div className="home-hero-grid"><div><Reveal><p className="home-kicker">A place for growth with intention</p></Reveal><Reveal delay={70}><h1 className="home-title">Begin with the<br />world that <em>feels</em><br /><em>like you.</em></h1></Reveal><Reveal delay={140}><p className="home-lede">Four considered paths for learning, identity, meaningful media and ethical digital building. Come for one; let the others meet you along the way.</p></Reveal><Reveal delay={215}><div className="home-actions"><Link to="/course" className="home-primary">Choose your path <span>→</span></Link><a href="#home-worlds" className="home-secondary">View learning paths ↓</a></div></Reveal></div><Reveal className="home-hero-art" delay={115}><div className="home-art-meta"><p>Less noise. More signal. A growing library for people who want their work and their life to mean something.</p><div className="home-art-count"><strong>04</strong><span>pathways<br />considered</span></div></div><div className="home-image-frame"><img src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1000&q=85" alt="Open Islamic book" /><div className="home-image-caption"><span>A field guide for</span><h2>The way forward.</h2></div></div></Reveal></div></div></section>

      <section id="home-worlds" className="home-worlds"><div className="home-shell"><div className="home-worlds-head"><Reveal><h2 className="home-section-title">Choose your<br /><em>starting point.</em></h2></Reveal><Reveal delay={80}><p className="home-worlds-note">You do not need a five-year plan. Start with the question that is closest to you today.</p></Reveal></div><div className="home-grid">{startingPoints.map((item, index) => <Reveal key={item.number} delay={index * 70}><Link to={item.route} className={`home-card ${item.tone}`}><div className="home-card-top"><span>{item.label}</span><span className="home-card-number">{item.number}</span></div><div><h3>{item.title}</h3><p>{item.description}</p></div><div className="home-card-bottom"><span>Open world <b aria-hidden="true">↗</b></span><span>{item.count}</span></div></Link></Reveal>)}</div></div></section>

      <section className="home-quiet"><div className="home-shell home-quiet-grid"><Reveal><h2>A quieter way to<br /><em>move forward.</em></h2></Reveal><Reveal delay={90}><p>Tawakkul is a value-led learning and creative platform for people who want to grow without losing their grounding. One lesson, one decision, one useful thing at a time.</p></Reveal></div></section>
    </main>
  );
}

export { startingPoints };
