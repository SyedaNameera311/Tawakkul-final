import { useEffect, useMemo, useRef, useState } from "react";
import card01Image from "../assets/card-01-everyday-abaya.png";
import card02Image from "../assets/card-02-classic-black-abaya.png";
import card03Image from "../assets/card-03-open-front-abaya.png";
import card04Image from "../assets/card-04-occasion-abaya.png";
import card05Image from "../assets/card-05-jilbab.png";
import card06Image from "../assets/card-06-everyday-khimar.png";
import card07Image from "../assets/card-07-long-khimar.png";
import card08Image from "../assets/card-08-essential-hijab.png";
import card09Image from "../assets/card-09-chiffon-hijab.png";
import card10Image from "../assets/card-10-jersey-hijab.png";
import card11Image from "../assets/card-11-modest-dress.png";
import card12Image from "../assets/card-12-flowing-maxi-dress.png";
import card13Image from "../assets/card-13-occasion-dress.png";
import card14Image from "../assets/card-14-modest-tunic.png";
import card15Image from "../assets/card-15-longline-shirt.png";
import card16Image from "../assets/card-16-wide-leg-trousers.jpg";
import card17Image from "../assets/card-17-modest-skirt.jpg";
import card18Image from "../assets/card-18-modest-coords.jpg";
import card19Image from "../assets/card-19-modest-outerwear.jpg";
import card20Image from "../assets/card-20-kaftan.jpg";
import card21Image from "../assets/card-21-prayer-wear.jpg";
import card22Image from "../assets/card-22-niqab.png";
import card23Image from "../assets/card-23-underscarves.jpg";
import card24Image from "../assets/card-24-accessories.jpg";

const modestCollections = [
  { id: 1, name: "The Everyday Abaya", category: "Abayas", description: "Simple, elegant abayas designed for everyday wear.", image: card01Image },
  { id: 2, name: "Classic Black Abaya", category: "Abayas", description: "A timeless black silhouette rooted in simplicity.", image: card02Image },
  { id: 3, name: "Open Front Abayas", category: "Abayas", description: "Layer-friendly abayas for effortless modest styling.", image: card03Image },
  { id: 4, name: "Occasion Abayas", category: "Abayas", description: "Graceful pieces for weddings and meaningful occasions.", image: card04Image },
  { id: 5, name: "The Jilbab Collection", category: "Jilbabs", description: "Flowing silhouettes designed around full coverage.", image: card05Image },
  { id: 6, name: "Everyday Khimar", category: "Khimars", description: "Comfortable khimars for daily modest dressing.", image: card06Image },
  { id: 7, name: "Long Khimars", category: "Khimars", description: "Long flowing coverage for a layered modest look.", image: card07Image },
  { id: 8, name: "Essential Hijabs", category: "Hijabs", description: "Everyday hijabs in versatile styles and textures.", image: card08Image },
  { id: 9, name: "Chiffon Hijabs", category: "Hijabs", description: "Lightweight hijabs for an elegant everyday finish.", image: card09Image },
  { id: 10, name: "Jersey Hijabs", category: "Hijabs", description: "Soft and practical hijabs designed for comfortable wear.", image: card10Image },
  { id: 11, name: "The Modest Dress", category: "Dresses", description: "Relaxed silhouettes balancing elegance and coverage.", image: card11Image },
  { id: 12, name: "Flowing Maxi Dresses", category: "Dresses", description: "Long flowing dresses for graceful everyday styling.", image: card12Image },
  { id: 13, name: "Modest Occasion Dresses", category: "Dresses", description: "Elegant silhouettes for meaningful occasions.", image: card13Image },
  { id: 14, name: "Modest Tunics", category: "Tops", description: "Longer silhouettes designed for versatile layering.", image: card14Image },
  { id: 15, name: "Longline Shirts", category: "Tops", description: "Relaxed longline pieces for everyday modest outfits.", image: card15Image },
  { id: 16, name: "Wide-Leg Trousers", category: "Bottoms", description: "Comfortable wide silhouettes designed for modest styling.", image: card16Image },
  { id: 17, name: "Modest Skirts", category: "Bottoms", description: "Flowing skirts that make layering effortless.", image: card17Image },
  { id: 18, name: "Modest Co-ords", category: "Co-ords", description: "Matching sets designed for simple polished dressing.", image: card18Image },
  { id: 19, name: "Modest Outerwear", category: "Outerwear", description: "Layering pieces that complete a modest wardrobe.", image: card19Image },
  { id: 20, name: "The Kaftan Edit", category: "Kaftans", description: "Relaxed flowing silhouettes inspired by timeless modest fashion.", image: card20Image },
  { id: 21, name: "Prayer Wear", category: "Prayer", description: "Comfortable pieces created for moments of worship.", image: card21Image },
  { id: 22, name: "Niqab Collection", category: "Niqab", description: "Simple coverage pieces designed for those who choose niqab.", image: card22Image },
  { id: 23, name: "Underscarves", category: "Accessories", description: "Practical essentials for comfortable hijab styling.", image: card23Image },
  { id: 24, name: "Modest Accessories", category: "Accessories", description: "Small details that complete an intentional modest wardrobe.", image: card24Image },
];

const filters = ["All", "Abayas", "Jilbabs", "Khimars", "Hijabs", "Dresses", "Tops", "Bottoms", "Accessories"];

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

  return <div ref={ref} style={{ "--reveal-delay": `${delay}ms` }} className={`modesty-reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

export default function Modesty() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredCollections = useMemo(() => activeFilter === "All" ? modestCollections : modestCollections.filter((item) => item.category === activeFilter), [activeFilter]);

  return (
    <main className="modesty-page">
      <style>{`
        .modesty-page { --m-ink:#0b0b0a; --m-cream:#efe8df; --m-paper:#f8f4ed; --m-plum:#2c2027; --m-tan:#c7a78a; --m-gold:#d9a84e; --m-muted:rgba(239,232,223,.6); min-height:100vh; overflow:hidden; background:var(--m-ink); color:var(--m-paper); font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
        .modesty-page *, .modesty-page *::before, .modesty-page *::after { box-sizing:border-box; }
        .modesty-page a { color:inherit; text-decoration:none; }
        .modesty-container { width:min(1180px,calc(100% - 48px)); margin:0 auto; }
                .modesty-hero { position:relative; min-height:100vh; display:flex; align-items:flex-end; overflow:hidden; }
        .modesty-hero-video { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:.68; filter:saturate(.72) contrast(1.05); }
        .modesty-hero-overlay { position:absolute; inset:0; background:linear-gradient(105deg,rgba(0,0,0,.72),rgba(0,0,0,.24) 55%,rgba(0,0,0,.56)),linear-gradient(0deg,var(--m-ink),transparent 46%); }
        .modesty-hero-glow { position:absolute; top:13%; right:11%; width:270px; height:270px; border:1px solid rgba(217,168,78,.24); border-radius:50%; box-shadow:0 0 0 35px rgba(217,168,78,.025),0 0 0 70px rgba(217,168,78,.02); }
        .modesty-hero-content { position:relative; z-index:2; width:100%; padding:130px 0 78px; }
        .modesty-kicker, .modesty-label { color:var(--m-gold); font-size:9px; font-weight:800; letter-spacing:.34em; text-transform:uppercase; }
        .modesty-hero-title { max-width:850px; margin:25px 0 0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(4.6rem,10vw,9.2rem); font-weight:400; letter-spacing:-.09em; line-height:.8; }
        .modesty-hero-title em { color:#f0c979; font-style:italic; }
        .modesty-hero-description { max-width:445px; margin:31px 0 0; color:rgba(239,232,223,.72); font-size:14px; line-height:1.9; }
        .modesty-actions { display:flex; flex-wrap:wrap; gap:10px; margin-top:34px; }
        .modesty-button { display:inline-flex; align-items:center; gap:10px; border-radius:999px; padding:14px 22px; font-size:10px; font-weight:800; letter-spacing:.15em; text-transform:uppercase; transition:transform 180ms ease,background 180ms ease,border-color 180ms ease; }
        .modesty-button:hover { transform:translateY(-3px); }
        .modesty-button-primary { background:var(--m-gold); color:#16110a; }
        .modesty-button-primary:hover { background:#f0c979; }
        .modesty-button-secondary { border:1px solid rgba(255,255,255,.25); background:rgba(255,255,255,.06); color:var(--m-paper); backdrop-filter:blur(12px); }
        .modesty-button-secondary:hover { border-color:rgba(255,255,255,.6); }
        .modesty-scroll-note { position:absolute; right:0; bottom:78px; display:flex; align-items:center; gap:11px; color:rgba(239,232,223,.45); font-size:8px; font-weight:700; letter-spacing:.25em; text-transform:uppercase; writing-mode:vertical-rl; }
        .modesty-scroll-note::before { width:1px; height:48px; background:var(--m-gold); content:""; opacity:.7; }
        .modesty-strip { border-top:1px solid rgba(44,32,39,.16); border-bottom:1px solid rgba(44,32,39,.16); background:var(--m-cream); color:var(--m-plum); }
        .modesty-strip-inner { display:flex; align-items:center; justify-content:space-between; gap:20px; padding:17px 0; }
        .modesty-strip p { margin:0; font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; }
        .modesty-strip p span { margin-left:13px; color:rgba(44,32,39,.5); font-weight:400; letter-spacing:0; text-transform:none; }
        .modesty-philosophy { background:var(--m-cream); color:var(--m-plum); padding:115px 0 128px; }
        .modesty-two-col { display:grid; grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr); gap:70px; }
        .modesty-philosophy-title, .modesty-section-title { margin:17px 0 0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(3rem,6vw,5.8rem); font-weight:400; letter-spacing:-.075em; line-height:.9; }
        .modesty-philosophy-title em, .modesty-section-title em { color:#b8794e; font-style:italic; }
        .modesty-philosophy-copy { max-width:540px; padding-top:35px; color:rgba(44,32,39,.65); font-size:16px; line-height:1.95; }
        .modesty-philosophy-copy p { margin:0; }
        .modesty-philosophy-copy p + p { margin-top:20px; color:rgba(44,32,39,.48); font-size:14px; }
        .modesty-principles { display:grid; grid-template-columns:repeat(3,1fr); gap:26px; margin-top:83px; }
        .modesty-principle { border-top:1px solid rgba(44,32,39,.18); padding-top:22px; }
        .modesty-principle-number { color:#b8794e; font-family:Georgia,serif; font-size:35px; }
        .modesty-principle h3 { margin:19px 0 0; font-size:15px; }
        .modesty-principle p { max-width:220px; margin:12px 0 0; color:rgba(44,32,39,.5); font-size:12px; line-height:1.8; }
        .modesty-precollection { border-top:1px solid rgba(255,255,255,.1); border-bottom:1px solid rgba(255,255,255,.1); background:var(--m-plum); color:var(--m-paper); padding:34px 0; }
        .modesty-precollection-inner { display:flex; align-items:center; justify-content:space-between; gap:28px; }
        .modesty-precollection-copy { margin:0; color:rgba(239,232,223,.58); font-size:12px; line-height:1.7; }
        .modesty-precollection-copy strong { display:block; margin-bottom:3px; color:var(--m-paper); font-family:Georgia,serif; font-size:22px; font-weight:400; letter-spacing:-.03em; }
        .modesty-collection { background:var(--m-ink); padding:118px 0 130px; }
        .modesty-collection-head { display:grid; grid-template-columns:minmax(0,1fr) minmax(260px,.72fr); align-items:end; gap:60px; border-bottom:1px solid rgba(255,255,255,.13); padding-bottom:42px; }
        .modesty-collection-title { margin:18px 0 0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(3.2rem,6vw,6rem); font-weight:400; letter-spacing:-.075em; line-height:.88; }
        .modesty-collection-title em { color:rgba(239,232,223,.28); font-style:italic; }
        .modesty-collection-intro { max-width:390px; margin:0; color:rgba(239,232,223,.45); font-size:13px; line-height:1.9; }
        .modesty-filter-row { display:flex; flex-wrap:wrap; gap:8px; margin:34px 0 0; }
        .modesty-filter { border:1px solid rgba(255,255,255,.16); border-radius:999px; padding:9px 13px; background:transparent; color:rgba(239,232,223,.5); cursor:pointer; font-size:9px; letter-spacing:.12em; text-transform:uppercase; transition:all 180ms ease; }
        .modesty-filter:hover, .modesty-filter.is-active { border-color:var(--m-gold); background:var(--m-gold); color:#16110a; }
        .modesty-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:46px 18px; margin-top:54px; }
        .modesty-card-image-wrap { position:relative; overflow:hidden; border-radius:20px; background:#161411; }
        .modesty-card-image { display:block; width:100%; aspect-ratio:4/5; object-fit:cover; opacity:.73; transition:transform 700ms cubic-bezier(.23,1,.32,1),opacity 500ms ease; }
        .modesty-card:hover .modesty-card-image { transform:scale(1.08); opacity:1; }
        .modesty-card-overlay { position:absolute; inset:0; background:linear-gradient(0deg,rgba(0,0,0,.72),transparent 54%); }
        .modesty-card-number { position:absolute; top:13px; left:13px; display:grid; width:30px; height:30px; place-items:center; border:1px solid rgba(255,255,255,.22); border-radius:50%; background:rgba(0,0,0,.2); color:rgba(255,255,255,.8); font-size:8px; backdrop-filter:blur(10px); }
        .modesty-card-category { position:absolute; bottom:15px; left:15px; border:1px solid rgba(255,255,255,.2); border-radius:999px; padding:7px 10px; background:rgba(0,0,0,.24); color:rgba(255,255,255,.72); font-size:8px; letter-spacing:.17em; text-transform:uppercase; backdrop-filter:blur(10px); }
        .modesty-card-arrow { position:absolute; right:15px; bottom:15px; display:grid; width:31px; height:31px; place-items:center; border:1px solid rgba(255,255,255,.25); border-radius:50%; background:rgba(255,255,255,.08); color:var(--m-paper); opacity:0; transform:translateY(8px); transition:all 220ms ease; }
        .modesty-card:hover .modesty-card-arrow { opacity:1; transform:translateY(0); }
        .modesty-card-meta { margin-top:16px; }
        .modesty-card-meta p { margin:0; color:rgba(217,168,78,.78); font-size:8px; letter-spacing:.2em; text-transform:uppercase; }
        .modesty-card-meta h3 { margin:7px 0 0; color:rgba(239,232,223,.9); font-size:15px; font-weight:600; }
        .modesty-card-meta .description { margin:8px 0 0; color:rgba(239,232,223,.35); font-size:11px; line-height:1.65; }
        .modesty-card-meta .explore { display:inline-flex; gap:8px; margin-top:13px; color:rgba(239,232,223,.5); font-size:8px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; transition:color 180ms ease; }
        .modesty-card:hover .explore { color:var(--m-gold); }
        .modesty-statement { background:var(--m-cream); color:var(--m-plum); padding:125px 0; }
        .modesty-statement-copy { max-width:510px; padding-top:34px; color:rgba(44,32,39,.55); font-size:14px; line-height:2; }
        .modesty-cta { position:relative; overflow:hidden; padding:146px 0; background:radial-gradient(circle at 50% 50%,rgba(217,168,78,.14),transparent 34%),var(--m-ink); text-align:center; }
        .modesty-cta::before { position:absolute; top:50%; left:50%; width:560px; height:560px; border:1px solid rgba(217,168,78,.15); border-radius:50%; content:""; transform:translate(-50%,-50%); box-shadow:0 0 0 55px rgba(217,168,78,.025),0 0 0 110px rgba(217,168,78,.018); }
        .modesty-cta-inner { position:relative; z-index:1; }
        .modesty-cta-title { margin:23px 0 0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(3.4rem,7vw,7rem); font-weight:400; letter-spacing:-.08em; line-height:.86; }
        .modesty-cta-title em { color:rgba(239,232,223,.27); font-style:italic; }
        .modesty-cta-copy { max-width:430px; margin:28px auto 0; color:rgba(239,232,223,.43); font-size:13px; line-height:1.9; }
        .modesty-footer { display:flex; justify-content:space-between; gap:24px; padding:28px 0; color:rgba(239,232,223,.4); font-size:8px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; }
        .modesty-footer-brand { color:var(--m-gold); }
        .modesty-reveal { opacity:0; transform:translateY(28px); transition:opacity 700ms ease var(--reveal-delay),transform 700ms cubic-bezier(.23,1,.32,1) var(--reveal-delay); }
        .modesty-reveal.is-visible { opacity:1; transform:translateY(0); }
        @media (max-width:900px) { .modesty-grid { grid-template-columns:repeat(2,1fr); } .modesty-two-col,.modesty-collection-head { grid-template-columns:1fr; gap:30px; } .modesty-scroll-note { display:none; } }
        @media (max-width:620px) { .modesty-container { width:calc(100% - 32px); } .modesty-hero { min-height:780px; } .modesty-hero-content { padding:100px 0 58px; } .modesty-strip p span { display:block; margin:6px 0 0; } .modesty-philosophy,.modesty-collection,.modesty-statement { padding:80px 0; } .modesty-principles { grid-template-columns:1fr; gap:30px; margin-top:55px; } .modesty-grid { grid-template-columns:1fr; gap:34px; } .modesty-precollection-inner { align-items:flex-start; flex-direction:column; gap:18px; } .modesty-footer { align-items:flex-start; flex-direction:column; gap:10px; } .modesty-footer-copy { text-align:left; } }
        @media (prefers-reduced-motion:reduce) { .modesty-page *, .modesty-page *::before, .modesty-page *::after { animation:none !important; transition-duration:.01ms !important; } }
      `}</style>

      <section className="modesty-hero">
        <video className="modesty-hero-video" src="/modesty.mp4" autoPlay muted loop playsInline preload="metadata" />
        <div className="modesty-hero-overlay" />
        <div className="modesty-hero-glow" aria-hidden="true" />
        <div className="modesty-container modesty-hero-content">
          <Reveal><p className="modesty-kicker">World 02 · Wear your values</p></Reveal>
          <Reveal delay={80}><h1 className="modesty-hero-title">Modesty<br /><em>&amp; Identity.</em></h1></Reveal>
          <Reveal delay={160}><p className="modesty-hero-description">Dress with dignity. Move with confidence.<br />A considered space for modest style, self-definition, and the quiet power of choosing what reflects your values.</p></Reveal>
          <Reveal delay={230}><div className="modesty-actions"><a className="modesty-button modesty-button-primary" href="#collection">Explore pathways <span>→</span></a><a className="modesty-button modesty-button-secondary" href="#philosophy">Why modesty?</a></div></Reveal>
        </div>
        <div className="modesty-scroll-note"><span>Scroll to explore</span></div>
      </section>

      <section className="modesty-strip"><div className="modesty-container modesty-strip-inner"><p>Less trend-chasing.<span>More clarity about what feels like you.</span></p><span className="modesty-label" style={{ color: "rgba(44,32,39,.42)" }}>Tawakkul · Modesty</span></div></section>

      <section id="philosophy" className="modesty-philosophy"><div className="modesty-container"><div className="modesty-two-col"><Reveal><p className="modesty-label" style={{ color: "#b8794e" }}>Our philosophy</p><h2 className="modesty-philosophy-title">Learn the <em>right</em> way.</h2></Reveal><Reveal delay={90}><div className="modesty-philosophy-copy"><p>Fashion changes constantly. Your values do not have to. Modesty can be beautiful, contemporary, comfortable and deeply intentional.</p><p>We believe clothing should not define your worth. It should simply reflect the principles you have chosen to live by.</p></div></Reveal></div><div className="modesty-principles"><Reveal delay={0}><div className="modesty-principle"><span className="modesty-principle-number">01</span><h3>Dignity</h3><p>Clothing can be an expression of self-respect, confidence and dignity.</p></div></Reveal><Reveal delay={80}><div className="modesty-principle"><span className="modesty-principle-number">02</span><h3>Identity</h3><p>Modesty can become part of how you express who you are and what you value.</p></div></Reveal><Reveal delay={160}><div className="modesty-principle"><span className="modesty-principle-number">03</span><h3>Intention</h3><p>Every choice becomes more meaningful when it is made intentionally.</p></div></Reveal></div></div></section>

      <section className="modesty-precollection"><div className="modesty-container modesty-precollection-inner"><p className="modesty-precollection-copy"><strong>Begin with intention.</strong>Explore the pieces that make modest dressing feel like you.</p><a className="modesty-button modesty-button-primary" href="#collection">Explore the collection <span>→</span></a></div></section>

      <section id="collection" className="modesty-collection"><div className="modesty-container"><div className="modesty-collection-head"><Reveal><p className="modesty-label">The Tawakkul collection</p><h2 className="modesty-collection-title">Modest pieces.<br /><em>Intentional choices.</em></h2></Reveal><Reveal delay={80}><p className="modesty-collection-intro">Explore a considered collection of abayas, jilbabs, khimars, hijabs, dresses and other modest wardrobe essentials.</p></Reveal></div><div className="modesty-filter-row" role="tablist" aria-label="Filter collection categories">{filters.map((filter) => <button key={filter} type="button" role="tab" aria-selected={activeFilter === filter} className={`modesty-filter ${activeFilter === filter ? "is-active" : ""}`} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="modesty-grid">{filteredCollections.map((item, index) => <Reveal key={item.id} delay={(index % 4) * 60}><article className="modesty-card"><a href={`/modesty-details/${item.id}`}><div className="modesty-card-image-wrap"><img className="modesty-card-image" src={item.image} alt={item.name} loading="lazy" /><div className="modesty-card-overlay" /><span className="modesty-card-number">{String(item.id).padStart(2, "0")}</span><span className="modesty-card-category">{item.category}</span><span className="modesty-card-arrow" aria-hidden="true">↗</span></div><div className="modesty-card-meta"><p>{item.category}</p><h3>{item.name}</h3><p className="description">{item.description}</p><span className="explore">Explore <span>→</span></span></div></a></article></Reveal>)}</div></div></section>

      <section id="statement" className="modesty-statement"><div className="modesty-container"><Reveal><p className="modesty-label" style={{ color: "#b8794e" }}>A different approach</p><div className="modesty-two-col"><h2 className="modesty-section-title">Wear what reflects<br /><em>what you believe.</em></h2><p className="modesty-statement-copy">Modesty is not about disappearing. It is about choosing with intention. It can be an expression of dignity, identity, faith and quiet confidence.</p></div></Reveal></div></section>

      <section className="modesty-cta"><div className="modesty-container modesty-cta-inner"><Reveal><p className="modesty-label">Tawakkul · Modesty &amp; Identity</p><h2 className="modesty-cta-title">Your values.<br /><em>Your choice.</em></h2><p className="modesty-cta-copy">Build a wardrobe that feels intentional, graceful and true to what you believe.</p></Reveal></div></section>

      <footer className="modesty-footer modesty-container"><span className="modesty-footer-brand">TAWAKKUL.</span><span className="modesty-footer-copy">Faith · Knowledge · Modesty · Meaning</span><span>© 2026</span></footer>
    </main>
  );
}

export { modestCollections, filters };
