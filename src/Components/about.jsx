import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const pillars = [
  { number: "01", title: "Knowledge & Faith", short: "Learn", description: "Islamic education designed to move from foundational knowledge towards deeper understanding, reflection and conscious living.", items: ["Quranic understanding", "Tafseer & Quranic Arabic", "Seerah & Islamic History", "Tajweed & Arabic", "Contemporary issues through the Quran"], route: "/course", tone: "gold" },
  { number: "02", title: "Modesty & Identity", short: "Live", description: "A space where modesty becomes more than clothing — an expression of faith, dignity, confidence and identity.", items: ["Modest fashion", "Islamic principles of dress", "Living with haya", "Confidence without compromising values", "Modesty in the modern world"], route: "/modesty", tone: "rose" },
  { number: "03", title: "Meaningful Media", short: "Create", description: "Creative alternatives for people who want to create beautiful content without allowing noise and distraction to define their digital world.", items: ["Islamic audio tracks", "Meaningful background sounds", "Creative content resources", "Alternatives for creators", "Content with purpose"], route: "/media", tone: "teal" },
  { number: "04", title: "Ethical Digital Building", short: "Build", description: "Helping people and businesses build digital experiences rooted in honesty, usefulness and values inspired by the Quran and Sunnah.", items: ["Website development", "Digital business presence", "Islamic brand identity", "Ethical digital experiences", "Values-driven businesses"], route: "/build", tone: "sage" },
];

const principles = [
  { number: "01", title: "Pause", text: "Before consuming, creating or building, there is value in stopping long enough to ask what actually matters." },
  { number: "02", title: "Understand", text: "Knowledge should not simply fill our minds. It should change how we see ourselves, our choices and the world around us." },
  { number: "03", title: "Create", text: "Technology can be used to create meaningful spaces, useful products and beautiful experiences without compromising our values." },
  { number: "04", title: "Build", text: "The goal is not to escape the modern world. It is to participate in it consciously, purposefully and responsibly." },
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") { setVisible(true); return undefined; }
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} style={{ "--about-delay": `${delay}ms` }} className={`about-reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

export default function About() {
  return (
    <main className="about-page">
      <style>{`
        .about-page { --about-ink:#191713; --about-paper:#f4eee4; --about-panel:#eee5d8; --about-orange:#f26432; --about-gold:#c79c43; --about-muted:rgba(25,23,19,.58); min-height:100vh; overflow:hidden; background:var(--about-paper); color:var(--about-ink); font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
        .about-page *, .about-page *::before, .about-page *::after { box-sizing:border-box; }
        .about-page a { color:inherit; text-decoration:none; }
        .about-shell { width:min(1120px,calc(100% - 48px)); margin:0 auto; }
        .about-hero { position:relative; overflow:hidden; padding:92px 0 108px; background:var(--about-paper); }
        .about-hero::before,.about-hero::after { display:none; }
        .about-hero-grid { position:relative; z-index:1; display:grid; grid-template-columns:minmax(0,1fr) minmax(300px,.65fr); align-items:end; gap:80px; }
        .about-kicker,.about-label { color:var(--about-orange); font-size:9px; font-weight:800; letter-spacing:.31em; text-transform:uppercase; }
        .about-title { max-width:760px; margin:23px 0 0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(4.1rem,8vw,8.3rem); font-weight:400; letter-spacing:-.105em; line-height:.79; }
        .about-title em,.about-section-title em { color:var(--about-gold); font-style:italic; }
        .about-hero-copy { max-width:475px; margin:31px 0 0; color:var(--about-muted); font-size:13px; line-height:1.9; }
        .about-hero-mark { position:relative; min-height:285px; border:1px solid rgba(25,23,19,.14); border-radius:18px; padding:23px; background:rgba(255,255,255,.42); }
        .about-hero-mark::before { display:none; }
        .about-hero-mark-top { display:flex; justify-content:space-between; gap:20px; color:rgba(25,23,19,.42); font-size:8px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; }
        .about-hero-mark-top span:first-child { color:var(--about-orange); }
        .about-hero-mark h2 { max-width:300px; margin:38px 0 0; font-family:Georgia,serif; font-size:31px; font-style:italic; font-weight:400; letter-spacing:-.06em; line-height:1.02; }
        .about-hero-mark p { max-width:250px; margin:21px 0 0; color:var(--about-muted); font-size:10px; line-height:1.8; }
        .about-hero-mark-count { position:absolute; right:23px; bottom:21px; color:rgba(25,23,19,.18); font-family:Georgia,serif; font-size:48px; letter-spacing:-.08em; }
        .about-intro { border-top:1px solid rgba(25,23,19,.13); border-bottom:1px solid rgba(25,23,19,.13); background:var(--about-panel); }
        .about-intro-inner { display:grid; grid-template-columns:.26fr 1fr; gap:42px; padding:22px 0; }
        .about-intro-number { font-family:Georgia,serif; font-size:39px; line-height:.8; }
        .about-intro-number span { display:block; margin-top:9px; color:rgba(25,23,19,.42); font-family:Inter,sans-serif; font-size:8px; font-weight:800; letter-spacing:.17em; text-transform:uppercase; }
        .about-intro p { max-width:650px; margin:0; color:var(--about-muted); font-size:11px; line-height:1.85; }
        .about-section { padding:112px 0; }
        .about-section-title { margin:17px 0 0; font-family:Georgia,serif; font-size:clamp(3rem,5.5vw,5.4rem); font-weight:400; letter-spacing:-.08em; line-height:.86; }
        .about-section-copy { max-width:500px; color:var(--about-muted); font-size:12px; line-height:1.85; }
        .about-pillars { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; margin-top:46px; }
        .about-pillar { position:relative; display:flex; min-height:375px; flex-direction:column; justify-content:space-between; overflow:hidden; border:1px solid rgba(25,23,19,.14); border-radius:19px; padding:23px; background:rgba(255,255,255,.38); transition:transform 240ms ease,box-shadow 240ms ease,border-color 240ms ease; }
        .about-pillar:hover { border-color:rgba(242,100,50,.48); box-shadow:0 25px 50px rgba(104,73,35,.12); transform:translateY(-5px); }
        .about-pillar::after { display:none; }
        .about-pillar.gold { color:#b98d3f; background:linear-gradient(145deg,rgba(248,235,194,.76),rgba(255,255,255,.34)); }
        .about-pillar.rose { color:#ae766b; background:linear-gradient(145deg,rgba(246,224,217,.84),rgba(255,255,255,.34)); }
        .about-pillar.teal { color:#5a938a; background:linear-gradient(145deg,rgba(220,239,234,.86),rgba(255,255,255,.34)); }
        .about-pillar.sage { color:#7f906d; background:linear-gradient(145deg,rgba(226,237,220,.86),rgba(255,255,255,.34)); }
        .about-pillar-top { position:relative; z-index:1; display:flex; justify-content:space-between; color:currentColor; font-size:8px; font-weight:800; letter-spacing:.17em; text-transform:uppercase; }
        .about-pillar-number { font-family:Georgia,serif; font-size:15px; opacity:.66; }
        .about-pillar h3 { position:relative; z-index:1; max-width:390px; margin:33px 0 0; color:var(--about-ink); font-family:Georgia,serif; font-size:31px; font-weight:400; letter-spacing:-.06em; line-height:.92; }
        .about-pillar-description { position:relative; z-index:1; max-width:450px; margin:14px 0 0; color:var(--about-muted); font-size:11px; line-height:1.75; }
        .about-pillar-list { position:relative; z-index:1; display:flex; flex-wrap:wrap; gap:7px; margin-top:20px; }
        .about-pillar-list span { border:1px solid currentColor; border-radius:999px; padding:7px 9px; color:rgba(25,23,19,.54); font-size:8px; }
        .about-pillar-footer { position:relative; z-index:1; display:flex; align-items:center; justify-content:space-between; border-top:1px solid rgba(25,23,19,.12); padding-top:13px; color:rgba(25,23,19,.44); font-size:8px; font-weight:800; letter-spacing:.13em; text-transform:uppercase; }
        .about-pillar-footer strong { color:var(--about-ink); transition:color 180ms ease; }
        .about-pillar:hover .about-pillar-footer strong { color:var(--about-orange); }
        .about-principles { background:var(--about-ink); color:var(--about-paper); }
        .about-principles .about-label { color:#e7bc68; }
        .about-principles-grid { display:grid; grid-template-columns:minmax(0,.62fr) minmax(0,1.38fr); gap:78px; align-items:start; }
        .about-principles-title { margin:17px 0 0; font-family:Georgia,serif; font-size:clamp(3rem,5.2vw,5.5rem); font-weight:400; letter-spacing:-.08em; line-height:.87; }
        .about-principles-title em { color:#e7bc68; font-style:italic; }
        .about-principles-list { border-top:1px solid rgba(244,238,228,.18); }
        .about-principle-row { display:grid; grid-template-columns:57px minmax(130px,.55fr) minmax(0,1.2fr); gap:20px; align-items:center; border-bottom:1px solid rgba(244,238,228,.18); padding:25px 0; transition:padding 220ms ease,background 220ms ease; }
        .about-principle-row:hover { padding-right:15px; padding-left:15px; background:rgba(255,255,255,.045); }
        .about-principle-number { color:#e7bc68; font-family:Georgia,serif; font-size:17px; }
        .about-principle-row h3 { margin:0; font-family:Georgia,serif; font-size:24px; font-weight:400; }
        .about-principle-row p { margin:0; color:rgba(244,238,228,.58); font-size:10px; line-height:1.75; }
        .about-quote-section { padding:128px 0; text-align:center; }
        .about-quote-mark { color:var(--about-orange); font-family:Georgia,serif; font-size:86px; line-height:.35; }
        .about-quote { max-width:820px; margin:29px auto 0; font-family:Georgia,serif; font-size:clamp(2.6rem,5.6vw,5.9rem); font-weight:400; letter-spacing:-.08em; line-height:.9; }
        .about-quote em { color:var(--about-gold); font-style:italic; }
        .about-quote-credit { margin-top:28px; color:rgba(25,23,19,.42); font-size:8px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; }
        .about-cta { position:relative; overflow:hidden; background:var(--about-ink); color:#fffaf4; padding:112px 0; text-align:center; }
        .about-cta::before { display:none; }
        .about-cta-inner { position:relative; z-index:1; }
        .about-cta .about-label { color:rgba(255,250,244,.72); }
        .about-cta-title { margin:18px 0 0; font-family:Georgia,serif; font-size:clamp(3.2rem,6vw,6.3rem); font-weight:400; letter-spacing:-.08em; line-height:.87; }
        .about-cta-title em { color:rgba(255,250,244,.62); font-style:italic; }
        .about-cta-copy { max-width:430px; margin:25px auto 0; color:rgba(255,250,244,.75); font-size:12px; line-height:1.85; }
        .about-cta-button { display:inline-flex; align-items:center; gap:12px; margin-top:30px; border-radius:999px; padding:15px 20px; background:#fffaf4; color:#9e4c2b; font-size:9px; font-weight:800; letter-spacing:.15em; text-transform:uppercase; transition:transform 180ms ease,box-shadow 180ms ease; }
        .about-cta-button:hover { box-shadow:0 15px 28px rgba(74,30,15,.2); transform:translateY(-3px); }
        .about-reveal { opacity:0; transform:translateY(26px); transition:opacity 700ms ease var(--about-delay),transform 700ms cubic-bezier(.23,1,.32,1) var(--about-delay); }
        .about-reveal.is-visible { opacity:1; transform:translateY(0); }
        @media (max-width:900px) { .about-hero-grid,.about-principles-grid { grid-template-columns:1fr; gap:45px; } .about-hero-mark { max-width:430px; } .about-pillars { grid-template-columns:1fr; } }
        @media (max-width:620px) { .about-shell { width:calc(100% - 32px); } .about-hero { padding:78px 0 82px; } .about-title { font-size:clamp(3.8rem,17vw,5.8rem); } .about-hero-copy { font-size:12px; } .about-intro-inner { grid-template-columns:1fr; gap:18px; } .about-section,.about-principles,.about-quote-section { padding:78px 0; } .about-pillar { min-height:330px; } .about-principle-row { grid-template-columns:43px 1fr; gap:14px; } .about-principle-row p { grid-column:2; } .about-cta { padding:88px 0; } }
        @media (prefers-reduced-motion:reduce) { .about-page *, .about-page *::before, .about-page *::after { animation:none !important; transition-duration:.01ms !important; } }
      `}</style>

      <section className="about-hero"><div className="about-shell about-hero-grid"><div><Reveal><p className="about-kicker">The Tawakkul field guide · 00</p></Reveal><Reveal delay={80}><h1 className="about-title">A place to<br /><em>return to.</em></h1></Reveal><Reveal delay={160}><p className="about-hero-copy">Tawakkul is a value-led space for learning, modest living, meaningful media and ethical digital work — made for people who want to grow without losing their grounding.</p></Reveal></div><Reveal className="about-hero-mark" delay={130}><div className="about-hero-mark-top"><span>About Tawakkul</span><span>04 worlds</span></div><h2>Knowledge is not only what we know. It is what we choose to carry.</h2><p>A slower way to learn, make decisions and create things that are useful to others.</p><span className="about-hero-mark-count">04</span></Reveal></div></section>

      <section className="about-intro"><div className="about-shell about-intro-inner"><div className="about-intro-number">04<span>connected worlds</span></div><p>Each world is different, but the intention is shared: make room for clarity, dignity, creativity and useful action. Come through the door that feels closest to you.</p></div></section>

      <section className="about-section"><div className="about-shell"><Reveal><p className="about-label">The four worlds</p><h2 className="about-section-title">Different paths.<br /><em>One intention.</em></h2></Reveal><div className="about-pillars">{pillars.map((pillar, index) => <Reveal key={pillar.number} delay={index * 70}><article className={`about-pillar ${pillar.tone}`}><div><div className="about-pillar-top"><span>{pillar.short}</span><span className="about-pillar-number">{pillar.number}</span></div><h3>{pillar.title}</h3><p className="about-pillar-description">{pillar.description}</p><div className="about-pillar-list">{pillar.items.map((item) => <span key={item}>{item}</span>)}</div></div><div className="about-pillar-footer"><span>Explore this world</span><Link to={pillar.route}><strong>Open →</strong></Link></div></article></Reveal>)}</div></div></section>

      <section className="about-section about-principles"><div className="about-shell about-principles-grid"><Reveal><p className="about-label">How we move</p><h2 className="about-principles-title">Pause.<br /><em>Understand.</em><br />Create.<br />Build.</h2></Reveal><div className="about-principles-list">{principles.map((principle, index) => <Reveal key={principle.number} delay={index * 75}><article className="about-principle-row"><span className="about-principle-number">{principle.number}</span><h3>{principle.title}</h3><p>{principle.text}</p></article></Reveal>)}</div></div></section>

      <section className="about-quote-section"><div className="about-shell"><Reveal><div className="about-quote-mark">“</div><blockquote className="about-quote">We are not here to add more noise. We are here to make <em>meaningful space.</em></blockquote><p className="about-quote-credit">A principle for every Tawakkul world</p></Reveal></div></section>

      <section className="about-cta"><div className="about-shell about-cta-inner"><Reveal><p className="about-label">Begin somewhere</p><h2 className="about-cta-title">Take the next<br /><em>useful step.</em></h2><p className="about-cta-copy">Choose a world, follow your curiosity and let the rest unfold with intention.</p><Link to="/start" className="about-cta-button">Return to the beginning <span>→</span></Link></Reveal></div></section>
    </main>
  );
}

export { pillars, principles };
