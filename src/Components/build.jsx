import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  { number: "01", category: "STRATEGY", title: "Digital Foundations", description: "A thoughtful digital foundation designed around your business, audience and long-term goals." },
  { number: "02", category: "DESIGN", title: "Offer to Interface", description: "Turn your services and ideas into a clear, memorable and easy-to-use digital experience." },
  { number: "03", category: "CONCEPT", title: "The Build Sprint", description: "A focused development process that transforms your approved concept into a working website." },
];

const process = [
  { number: "01", title: "You Share Your Idea", text: "Tell us about your business, goals, audience and what you want your website to achieve." },
  { number: "02", title: "We Plan & Design", text: "We turn your requirements into a clear digital experience with the right structure and visual direction." },
  { number: "03", title: "We Build", text: "The design becomes a responsive, functional and professional website built around your needs." },
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

  return <div ref={ref} style={{ "--build-delay": `${delay}ms` }} className={`build-reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

export default function Build() {
  return (
    <main className="build-page">
      <style>{`
        .build-page { --build-ink:#191713; --build-paper:#f4eee4; --build-panel:#eee5d8; --build-orange:#f26432; --build-orange-soft:#f9ddd0; --build-line:rgba(25,23,19,.14); --build-muted:rgba(25,23,19,.58); min-height:100vh; overflow:hidden; background:var(--build-paper); color:var(--build-ink); font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
        .build-page *, .build-page *::before, .build-page *::after { box-sizing:border-box; }
        .build-page a { color:inherit; text-decoration:none; }
        .build-page button { font:inherit; }
        .build-container { width:min(1020px,calc(100% - 48px)); margin:0 auto; }
        .build-hero { position:relative; overflow:hidden; padding:112px 0 108px; background-color:var(--build-paper); background-image:radial-gradient(circle at 82% 18%,rgba(242,100,50,.21) 0 1px,transparent 1.5px),radial-gradient(circle at 8% 80%,rgba(25,23,19,.11) 0 1px,transparent 1.5px),repeating-linear-gradient(115deg,rgba(255,255,255,.28) 0 1px,transparent 1px 16px),linear-gradient(135deg,#efe3d5 0%,#f4eee4 56%,#e8cbb5 100%); background-size:180px 180px,230px 230px,18px 18px,100% 100%; }
        .build-hero::before { position:absolute; top:-210px; right:-140px; width:540px; height:540px; border:1px solid rgba(242,100,50,.28); border-radius:50%; content:""; box-shadow:0 0 0 42px rgba(242,100,50,.045),0 0 0 84px rgba(242,100,50,.025); animation:buildOrbit 24s linear infinite; }
        .build-hero::after { position:absolute; bottom:-110px; left:13%; width:400px; height:190px; border-radius:50%; background:rgba(242,100,50,.12); filter:blur(75px); content:""; }
        @keyframes buildOrbit { to { transform:rotate(360deg); } }
        .build-hero-grid { position:relative; z-index:1; display:grid; grid-template-columns:minmax(0,1fr) minmax(300px,.78fr); align-items:center; gap:75px; }
        .build-kicker,.build-label { color:var(--build-orange); font-size:9px; font-weight:800; letter-spacing:.3em; text-transform:uppercase; }
        .build-title { max-width:610px; margin:22px 0 0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(4rem,7.3vw,7.3rem); font-weight:400; letter-spacing:-.095em; line-height:.81; }
        .build-title em,.build-section-title em { color:var(--build-orange); font-style:italic; }
        .build-description { max-width:445px; margin:29px 0 0; color:var(--build-muted); font-size:13px; line-height:1.9; }
        .build-actions { display:flex; flex-wrap:wrap; gap:10px; margin-top:32px; }
        .build-button { display:inline-flex; align-items:center; gap:12px; border-radius:999px; padding:14px 20px; font-size:9px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; transition:transform 180ms ease,background 180ms ease,box-shadow 180ms ease; }
        .build-button:hover { transform:translateY(-3px); }
        .build-button-primary { background:var(--build-orange); color:#fff; box-shadow:0 12px 26px rgba(242,100,50,.14); }
        .build-button-primary:hover { background:#d94e22; box-shadow:0 17px 34px rgba(242,100,50,.2); }
        .build-button-secondary { border:1px solid var(--build-line); background:rgba(255,255,255,.25); }
        .build-button-secondary:hover { background:#fffaf5; }
        .build-hero-art { position:relative; max-width:390px; margin-left:auto; }
        .build-hero-art::before { position:absolute; top:12%; left:50%; width:265px; height:265px; border:1px solid rgba(242,100,50,.3); border-radius:50%; content:""; transform:translate(-50%,-50%); box-shadow:0 0 0 32px rgba(242,100,50,.05),0 0 0 65px rgba(242,100,50,.025); }
        .build-hero-card { position:relative; overflow:hidden; border:7px solid rgba(255,250,244,.9); border-radius:24px; background:#c9aa8e; box-shadow:0 28px 60px rgba(104,73,35,.16); transform:rotate(2.5deg); transition:transform 500ms cubic-bezier(.23,1,.32,1),box-shadow 500ms ease; }
        .build-hero-art:hover .build-hero-card { box-shadow:0 35px 75px rgba(104,73,35,.22); transform:rotate(0deg) translateY(-6px); }
        .build-hero-card img { display:block; width:100%; aspect-ratio:1.12; object-fit:cover; filter:saturate(.78) sepia(.08); transition:transform 800ms cubic-bezier(.23,1,.32,1),filter 400ms ease; }
        .build-hero-art:hover .build-hero-card img { filter:saturate(1) sepia(0); transform:scale(1.06); }
        .build-hero-card::after { position:absolute; inset:0; background:linear-gradient(0deg,rgba(25,23,19,.47),transparent 60%); content:""; }
        .build-hero-stamp { position:absolute; top:18px; right:20px; z-index:1; color:rgba(255,255,255,.65); font-family:Georgia,serif; font-size:25px; }
        .build-hero-card-copy { position:absolute; right:22px; bottom:20px; left:22px; z-index:1; color:#fffaf4; }
        .build-hero-card-copy span { color:rgba(255,250,244,.68); font-size:8px; font-weight:800; letter-spacing:.24em; text-transform:uppercase; }
        .build-hero-card-copy h2 { max-width:240px; margin:8px 0 0; font-family:Georgia,serif; font-size:25px; font-weight:400; line-height:.96; }
        .build-strip { border-top:1px solid rgba(242,100,50,.28); border-bottom:1px solid rgba(242,100,50,.28); background:var(--build-orange-soft); }
        .build-strip-inner { display:flex; align-items:center; justify-content:space-between; gap:25px; padding:16px 0; color:rgba(25,23,19,.68); font-size:10px; line-height:1.6; }
        .build-strip-inner strong { color:var(--build-ink); }
        .build-strip-list { display:flex; gap:22px; color:rgba(25,23,19,.43); font-size:8px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; }
        .build-section { padding:112px 0; }
        .build-two-col { display:grid; grid-template-columns:minmax(0,.45fr) minmax(0,1fr); gap:75px; }
        .build-section-title { margin:17px 0 0; font-family:Georgia,serif; font-size:clamp(3rem,5.2vw,5rem); font-weight:400; letter-spacing:-.075em; line-height:.88; }
        .build-copy { max-width:540px; color:var(--build-muted); font-size:12px; line-height:1.9; }
        .build-copy p { margin:0; }
        .build-copy p + p { margin-top:18px; }
        .build-service-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-top:28px; }
        .build-service { min-height:230px; border:1px solid rgba(242,100,50,.28); border-radius:17px; padding:20px; background:rgba(249,221,208,.35); transition:transform 220ms ease,background 220ms ease,box-shadow 220ms ease; }
        .build-service:hover { background:var(--build-orange-soft); box-shadow:0 18px 38px rgba(104,73,35,.1); transform:translateY(-5px); }
        .build-service-top { display:flex; align-items:center; justify-content:space-between; color:var(--build-orange); font-size:8px; font-weight:800; letter-spacing:.17em; }
        .build-service-number { color:rgba(25,23,19,.25); font-family:Georgia,serif; font-size:14px; }
        .build-service h3 { margin:31px 0 0; font-family:Georgia,serif; font-size:20px; font-weight:400; line-height:1; }
        .build-service p { margin:12px 0 0; color:var(--build-muted); font-size:10px; line-height:1.7; }
        .build-service-footer { display:flex; align-items:center; justify-content:space-between; margin-top:18px; border-top:1px solid rgba(25,23,19,.12); padding-top:12px; color:rgba(25,23,19,.42); font-size:8px; }
        .build-service-footer strong { color:var(--build-ink); transition:color 180ms ease; }
        .build-service:hover .build-service-footer strong { color:var(--build-orange); }
        .build-why { border-top:1px solid rgba(242,100,50,.25); }
        .build-quote { margin:27px 0 0; border-left:2px solid var(--build-orange); padding-left:18px; color:var(--build-ink); font-family:Georgia,serif; font-size:18px; font-style:italic; line-height:1.45; }
        .build-process { background:var(--build-panel); }
        .build-process-list { margin-top:48px; border-top:1px solid var(--build-line); }
        .build-process-row { display:grid; grid-template-columns:70px minmax(180px,.8fr) minmax(0,1.3fr); gap:25px; align-items:center; border-bottom:1px solid var(--build-line); padding:28px 0; transition:padding 220ms ease,background 220ms ease; }
        .build-process-row:hover { padding-right:15px; padding-left:15px; background:rgba(255,255,255,.25); }
        .build-process-number { color:var(--build-orange); font-family:Georgia,serif; font-size:18px; }
        .build-process-row h3 { margin:0; font-family:Georgia,serif; font-size:21px; font-weight:400; }
        .build-process-row p { margin:0; color:var(--build-muted); font-size:10px; line-height:1.7; }
        .build-global { padding:125px 0; text-align:center; }
        .build-global-copy { max-width:500px; margin:24px auto 0; color:var(--build-muted); font-size:12px; line-height:1.85; }
        .build-cta { border-top:1px solid var(--build-line); padding:125px 0; text-align:center; }
        .build-cta-title { margin:18px 0 0; font-family:Georgia,serif; font-size:clamp(3rem,5.8vw,5.8rem); font-weight:400; letter-spacing:-.08em; line-height:.87; }
        .build-cta-title em { color:var(--build-orange); font-style:italic; }
        .build-cta-copy { max-width:450px; margin:24px auto 0; color:var(--build-muted); font-size:12px; line-height:1.85; }
        .build-reveal { opacity:0; transform:translateY(25px); transition:opacity 700ms ease var(--build-delay),transform 700ms cubic-bezier(.23,1,.32,1) var(--build-delay); }
        .build-reveal.is-visible { opacity:1; transform:translateY(0); }
        @media (max-width:900px) { .build-hero-grid,.build-two-col { grid-template-columns:1fr; gap:40px; } .build-hero-art { margin:0 auto; } .build-service-grid { grid-template-columns:1fr; } }
        @media (max-width:620px) { .build-container { width:calc(100% - 32px); } .build-hero { padding:80px 0 72px; } .build-hero-art { width:min(100%,350px); } .build-strip-list { display:none; } .build-section,.build-why { padding:78px 0; } .build-process-row { grid-template-columns:45px 1fr; gap:15px; } .build-process-row p { grid-column:2; } .build-global,.build-cta { padding:86px 0; } }
        @media (prefers-reduced-motion:reduce) { .build-page *, .build-page *::before, .build-page *::after { animation:none !important; transition-duration:.01ms !important; } }
      `}</style>

      <section className="build-hero"><div className="build-container build-hero-grid"><div><Reveal><p className="build-kicker">World 04 · Turn ideas into systems</p></Reveal><Reveal delay={70}><h1 className="build-title">Ethical Digital<br /><em>Building.</em></h1></Reveal><Reveal delay={140}><p className="build-description">Build something useful. Keep it honest.<br />A practical workspace for turning a mission, organisation or business idea into a digital experience that earns trust.</p></Reveal><Reveal delay={210}><div className="build-actions"><Link to="/contact" className="build-button build-button-primary">Explore our pathway <span>→</span></Link><a href="#process" className="build-button build-button-secondary">Ask how it works</a></div></Reveal></div><Reveal className="build-hero-art" delay={120}><div className="build-hero-card"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85" alt="Modern digital workspace" /><span className="build-hero-stamp">04</span><div className="build-hero-card-copy"><span>Make it useful</span><h2>Ideas deserve a clear place to live.</h2></div></div></Reveal></div></section>

      <section className="build-strip"><div className="build-container build-strip-inner"><span><strong>No dark patterns.</strong> We simply help ideas become useful, honest digital experiences.</span><div className="build-strip-list"><span>Clarity</span><span>Trust</span><span>Purpose</span></div></div></section>

      <section className="build-section"><div className="build-container build-two-col"><Reveal><p className="build-label">A considered pathway</p><h2 className="build-section-title">Turn the idea<br />into <em>something real.</em></h2></Reveal><Reveal delay={100}><div><div className="build-copy"><p>Choose a first step, make the idea clear and build from a structure that makes sense. Every pathway is designed to be useful at its own pace.</p></div><div className="build-service-grid">{services.map((service, index) => <Reveal key={service.number} delay={index * 80}><article className="build-service"><div className="build-service-top"><span>{service.category}</span><span className="build-service-number">{service.number}</span></div><h3>{service.title}</h3><p>{service.description}</p><div className="build-service-footer"><span>Digital pathway</span><strong>Explore →</strong></div></article></Reveal>)}</div></div></Reveal></div></section>

      <section className="build-section build-why"><div className="build-container build-two-col"><Reveal><p className="build-label">Why this world matters</p><h2 className="build-section-title">Good digital work<br /><em>earns trust.</em></h2></Reveal><Reveal delay={100}><div className="build-copy"><p>A digital presence is where people discover, compare, understand and decide. It should make those moments easier, not louder.</p><p>We build around clarity, usefulness and accountability so your website can represent what you actually value.</p><blockquote className="build-quote">“Good digital work is not louder. It is more legible, more useful and more accountable.”</blockquote></div></Reveal></div></section>

      <section id="process" className="build-section build-process"><div className="build-container"><Reveal><p className="build-label">The route</p><h2 className="build-section-title">From thought<br />to <em>something real.</em></h2></Reveal><div className="build-process-list">{process.map((item, index) => <Reveal key={item.number} delay={index * 70}><article className="build-process-row"><span className="build-process-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>)}</div></div></section>

      <section className="build-global"><div className="build-container"><Reveal><p className="build-label">Beyond the border</p><h2 className="build-section-title">Start local.<br /><em>Reach global.</em></h2><p className="build-global-copy">A strong digital presence should not be limited by geography. Build something people can discover, understand and trust from anywhere.</p></Reveal></div></section>

      <section className="build-cta"><div className="build-container"><Reveal><p className="build-label">Let&apos;s build</p><h2 className="build-cta-title">Have a business idea?<br /><em>Let&apos;s put it online.</em></h2><p className="build-cta-copy">Whether you need a simple business website or a complete digital platform, let&apos;s create something that works for you.</p><Link to="/contact" className="build-button build-button-primary" style={{ marginTop: "29px" }}>Start a conversation <span>→</span></Link></Reveal></div></section>
    </main>
  );
}

export { services, process };
