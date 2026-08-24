import { useEffect, useRef, useState } from "react";

const mediaData = [
  { id: 1, title: "Peaceful Nasheed", artist: "Tawakkul Collection", category: "Nasheed", type: "Vocals Only", instruments: "No instruments", duration: "03:12", audio: "/audio/nasheed-01.mp3", description: "A calm vocals-only nasheed suitable for reminders, reflections and peaceful Islamic content." },
  { id: 2, title: "Path of Peace", artist: "Tawakkul Collection", category: "Nasheed", type: "Vocals Only", instruments: "No instruments", duration: "02:48", audio: "/audio/nasheed-02.mp3", description: "Soft vocal audio for educational videos, Islamic reminders and reflective content." },
  { id: 3, title: "Beautiful Reminder", artist: "Tawakkul Collection", category: "Background", type: "Vocals Only", instruments: "No instruments", duration: "03:35", audio: "/audio/nasheed-03.mp3", description: "A gentle background nasheed designed to complement meaningful spoken content." },
  { id: 4, title: "Light of Faith", artist: "Tawakkul Collection", category: "Nasheed", type: "Vocals + Daff", instruments: "Light daff percussion", duration: "03:05", audio: "/audio/nasheed-04.mp3", description: "A traditional-style nasheed with vocals and light percussion. Check the position you follow regarding instruments." },
  { id: 5, title: "Reflection", artist: "Tawakkul Collection", category: "Background", type: "Vocals Only", instruments: "No instruments", duration: "04:10", audio: "/audio/nasheed-05.mp3", description: "Slow and peaceful vocal audio for Qur'an reflections, reminders and educational content." },
  { id: 6, title: "Hope", artist: "Tawakkul Collection", category: "Nasheed", type: "Vocals Only", instruments: "No instruments", duration: "02:55", audio: "/audio/nasheed-06.mp3", description: "An uplifting vocals-only nasheed for positive and beneficial Islamic content." },
];

const categories = ["All", "Nasheed", "Background"];

const pathways = [
  { number: "01", category: "NASHEED", title: "Story with Sound", description: "Meaningful vocals for peaceful, reflective and beneficial content." },
  { number: "02", category: "VISUAL", title: "Visual Meaning", description: "Thoughtful audio choices that work naturally with your visual storytelling." },
  { number: "03", category: "RESOURCE", title: "Creator Sound Kit", description: "A small collection of useful sounds for reminders, education and reflection." },
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

  return <div ref={ref} style={{ "--reveal-delay": `${delay}ms` }} className={`media-reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

function MediaCard({ item, index }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) audioRef.current.play();
    else audioRef.current.pause();
  };

  return (
    <article className="media-card">
      <div className="media-card-topline"><span>Track {String(index + 1).padStart(2, "0")}</span><span>{item.category}</span></div>
      <div className="media-card-heading"><div><h3>{item.title}</h3><p>{item.artist}</p></div><span className="media-card-orbit" aria-hidden="true">{String(item.id).padStart(2, "0")}</span></div>
      <p className="media-card-description">{item.description}</p>
      <div className="media-player">
        <button type="button" className="media-play-button" onClick={togglePlayback} aria-label={isPlaying ? `Pause ${item.title}` : `Play ${item.title}`}>
          <span className="media-play-button-icon" aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
          <span className="media-play-button-label">{isPlaying ? "Pause" : "Play"}</span>
        </button>
        <div className="media-wave" aria-hidden="true">{Array.from({ length: 18 }, (_, bar) => <span key={bar} style={{ "--bar-height": `${24 + ((bar * 17) % 55)}%` }} />)}</div>
        <span className="media-duration">{item.duration}</span>
        <audio ref={audioRef} preload="metadata" aria-label={`${item.title} audio preview`} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)}><source src={item.audio} type="audio/mpeg" />Your browser does not support the audio player.</audio>
      </div>
      <div className="media-card-facts"><div><span>Audio type</span><strong>{item.type}</strong></div><div><span>Instruments</span><strong>{item.instruments}</strong></div></div>
      <a href={item.audio} download className="media-download"><span className="media-download-label">Download track</span><span className="media-download-format">MP3 <b aria-hidden="true">↓</b></span></a>
    </article>
  );
}

export default function Media() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredMedia = activeCategory === "All" ? mediaData : mediaData.filter((item) => item.category === activeCategory);

  return (
    <main className="media-page">
      <style>{`
        .media-page { --media-ink:#123d39; --media-deep:#0b2d2b; --media-mint:#8fc9bd; --media-teal:#52aa9e; --media-paper:#f4f0e7; --media-pale:#e3eee8; --media-line:rgba(18,61,57,.16); --media-muted:rgba(18,61,57,.57); min-height:100vh; overflow:hidden; background:var(--media-paper); color:var(--media-ink); font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
        .media-page *, .media-page *::before, .media-page *::after { box-sizing:border-box; }
        .media-page a { color:inherit; text-decoration:none; }
        .media-page button, .media-page input, .media-page select, .media-page textarea { font:inherit; }
        .media-container { width:min(1100px,calc(100% - 48px)); margin:0 auto; }
        .media-hero { display:grid; grid-template-columns:minmax(0,1fr) minmax(300px,.78fr); align-items:center; gap:72px; padding:76px 0 94px; }
        .media-kicker, .media-label { color:var(--media-teal); font-size:9px; font-weight:800; letter-spacing:.3em; text-transform:uppercase; }
        .media-title { margin:21px 0 0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(4rem,8vw,7.4rem); font-weight:400; letter-spacing:-.09em; line-height:.82; }
        .media-title em { color:var(--media-teal); font-style:italic; }
        .media-description { max-width:460px; margin:29px 0 0; color:var(--media-muted); font-size:14px; line-height:1.9; }
        .media-actions { display:flex; flex-wrap:wrap; gap:10px; margin-top:31px; }
        .media-button { display:inline-flex; align-items:center; gap:10px; border-radius:999px; padding:14px 21px; font-size:9px; font-weight:800; letter-spacing:.13em; text-transform:uppercase; transition:transform 180ms ease,background 180ms ease; }
        .media-button:hover { transform:translateY(-3px); }
        .media-button-primary { background:var(--media-ink); color:#fff; }
        .media-button-primary:hover { background:var(--media-teal); }
        .media-button-secondary { border:1px solid var(--media-line); background:rgba(255,255,255,.28); color:var(--media-ink); }
        .media-button-secondary:hover { background:#fff; }
        .media-hero-art { position:relative; max-width:400px; margin-left:auto; }
        .media-hero-art::before { position:absolute; top:18%; left:50%; width:285px; height:285px; border:1px solid rgba(82,170,158,.35); border-radius:50%; content:""; transform:translate(-50%,-50%); box-shadow:0 0 0 35px rgba(82,170,158,.05),0 0 0 70px rgba(82,170,158,.03); }
        .media-hero-card { position:relative; overflow:hidden; border-radius:28px; background:#cddfd8; box-shadow:0 24px 60px rgba(18,61,57,.13); transform:rotate(2.5deg); }
        .media-hero-card img { display:block; width:100%; aspect-ratio:.85; object-fit:cover; filter:saturate(.68) sepia(.08); }
        .media-hero-card::after { position:absolute; inset:0; background:linear-gradient(0deg,rgba(18,61,57,.68),transparent 60%); content:""; }
        .media-hero-card-copy { position:absolute; right:24px; bottom:25px; left:24px; z-index:1; color:#fff; }
        .media-hero-card-copy span { color:rgba(255,255,255,.65); font-size:8px; font-weight:800; letter-spacing:.25em; text-transform:uppercase; }
        .media-hero-card-copy h2 { max-width:220px; margin:9px 0 0; font-family:Georgia,serif; font-size:26px; font-weight:400; letter-spacing:-.04em; line-height:.95; }
        .media-hero-number { position:absolute; top:18px; right:20px; z-index:1; color:rgba(255,255,255,.58); font-family:Georgia,serif; font-size:25px; }
        .media-strip { border-top:1px solid rgba(18,61,57,.12); border-bottom:1px solid rgba(18,61,57,.12); background:var(--media-pale); }
        .media-strip-inner { display:flex; justify-content:space-between; gap:30px; padding:16px 0; color:rgba(18,61,57,.55); font-size:10px; line-height:1.6; }
        .media-strip-inner strong { color:var(--media-ink); }
        .media-strip-list { display:flex; gap:25px; color:rgba(18,61,57,.38); font-size:9px; text-transform:uppercase; letter-spacing:.13em; }
        .media-section { padding:112px 0; }
        .media-two-col { display:grid; grid-template-columns:minmax(0,.45fr) minmax(0,1fr); gap:70px; }
        .media-section-title { margin:16px 0 0; font-family:Georgia,serif; font-size:clamp(2.7rem,5vw,4.6rem); font-weight:400; letter-spacing:-.075em; line-height:.89; }
        .media-section-title em { color:var(--media-teal); font-style:italic; }
        .media-pathways { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
        .media-pathway { min-height:220px; border:1px solid var(--media-line); border-radius:20px; padding:20px; background:rgba(255,255,255,.4); transition:transform 220ms ease,background 220ms ease,box-shadow 220ms ease; }
        .media-pathway:hover { background:#fff; box-shadow:0 18px 40px rgba(18,61,57,.08); transform:translateY(-5px); }
        .media-pathway-number { color:var(--media-teal); font-family:Georgia,serif; font-size:28px; }
        .media-pathway-label { display:block; margin-top:34px; color:rgba(18,61,57,.43); font-size:8px; font-weight:800; letter-spacing:.18em; }
        .media-pathway h3 { margin:9px 0 0; font-family:Georgia,serif; font-size:20px; font-weight:400; }
        .media-pathway p { margin:12px 0 0; color:var(--media-muted); font-size:10px; line-height:1.7; }
        .media-quote-section { background:var(--media-deep); color:var(--media-paper); padding:105px 0; }
        .media-quote-layout { display:grid; grid-template-columns:.65fr 1.35fr; gap:60px; align-items:center; }
        .media-quote-mark { color:var(--media-teal); font-family:Georgia,serif; font-size:84px; line-height:.5; }
        .media-quote { max-width:770px; margin:0; font-family:Georgia,serif; font-size:clamp(2.4rem,5vw,5.4rem); font-weight:400; letter-spacing:-.075em; line-height:.92; }
        .media-quote em { color:var(--media-mint); font-style:italic; }
        .media-quote-source { margin:26px 0 0; color:rgba(244,240,231,.42); font-size:8px; font-weight:800; letter-spacing:.24em; text-transform:uppercase; }
        .media-library { position:relative; overflow:hidden; background:var(--media-pale); }
        .media-library::after { position:absolute; right:-130px; top:80px; width:340px; height:340px; border:1px solid rgba(82,170,158,.28); border-radius:50%; content:""; box-shadow:0 0 0 45px rgba(82,170,158,.045),0 0 0 90px rgba(82,170,158,.025); }
        .media-library-inner { position:relative; z-index:1; }
        .media-library-heading { display:grid; grid-template-columns:minmax(0,.45fr) minmax(0,1fr); gap:70px; }
        .media-library-copy { max-width:540px; color:var(--media-muted); font-size:12px; line-height:1.85; }
        .media-filter-row { display:flex; align-items:center; flex-wrap:wrap; gap:8px; margin:28px 0 0; }
        .media-filter-label { margin-right:4px; color:rgba(18,61,57,.38); font-size:8px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
        .media-filter { border:1px solid rgba(18,61,57,.17); border-radius:999px; padding:9px 13px; background:rgba(255,255,255,.23); color:rgba(18,61,57,.55); cursor:pointer; font-size:9px; letter-spacing:.1em; text-transform:uppercase; transition:all 180ms ease; }
        .media-filter:hover, .media-filter.is-active { border-color:var(--media-teal); background:var(--media-teal); color:#fff; }
        .media-card-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; margin-top:45px; }
        .media-card { position:relative; overflow:hidden; border:1px solid rgba(18,61,57,.13); border-radius:22px; padding:23px; background:rgba(255,255,255,.55); box-shadow:0 12px 35px rgba(18,61,57,.035); transition:transform 220ms ease,box-shadow 220ms ease; }
        .media-card:hover { box-shadow:0 22px 50px rgba(18,61,57,.1); transform:translateY(-5px); }
        .media-card-topline { display:flex; justify-content:space-between; color:rgba(18,61,57,.4); font-size:8px; font-weight:800; letter-spacing:.17em; text-transform:uppercase; }
        .media-card-heading { display:flex; align-items:start; justify-content:space-between; gap:15px; margin-top:20px; }
        .media-card-heading h3 { margin:0; color:var(--media-ink); font-family:Georgia,serif; font-size:25px; font-weight:400; letter-spacing:-.04em; line-height:.95; }
        .media-card-heading p { margin:8px 0 0; color:rgba(18,61,57,.4); font-size:9px; }
        .media-card-orbit { display:grid; width:35px; height:35px; flex:none; place-items:center; border:1px solid rgba(82,170,158,.42); border-radius:50%; color:var(--media-teal); font-family:Georgia,serif; font-size:12px; }
        .media-card-description { min-height:52px; margin:18px 0 0; color:var(--media-muted); font-size:10px; line-height:1.7; }
        .media-player { position:relative; display:flex; align-items:center; gap:12px; margin-top:19px; border-top:1px solid rgba(18,61,57,.11); padding-top:17px; }
        .media-play-button { display:inline-flex; width:auto; min-width:92px; height:36px; align-items:center; justify-content:center; gap:8px; flex:none; border:0; border-radius:999px; padding:0 13px; background:var(--media-ink); color:#fff; cursor:pointer; font-size:9px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; transition:background 180ms ease,transform 180ms ease,box-shadow 180ms ease; }
        .media-play-button:hover { background:var(--media-teal); box-shadow:0 8px 18px rgba(18,61,57,.16); transform:translateY(-2px); }
        .media-play-button-icon { display:grid; width:19px; height:19px; place-items:center; border:1px solid rgba(255,255,255,.34); border-radius:50%; font-size:9px; line-height:1; }
        .media-play-button-label { line-height:1; }
        .media-wave { display:flex; align-items:center; justify-content:space-between; width:100%; height:30px; gap:2px; }
        .media-wave span { width:3px; height:var(--bar-height); min-height:5px; border-radius:99px; background:rgba(82,170,158,.52); }
        .media-duration { color:rgba(18,61,57,.44); font-size:9px; font-variant-numeric:tabular-nums; }
        .media-player audio { position:absolute; width:1px; height:1px; opacity:0; pointer-events:none; }
        .media-card-facts { display:grid; grid-template-columns:repeat(2,1fr); gap:8px; margin-top:16px; }
        .media-card-facts div { border:1px solid rgba(18,61,57,.1); border-radius:12px; padding:11px; background:rgba(255,255,255,.38); }
        .media-card-facts span { display:block; color:rgba(18,61,57,.38); font-size:7px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; }
        .media-card-facts strong { display:block; margin-top:6px; color:rgba(18,61,57,.7); font-size:9px; font-weight:500; }
        .media-download { display:flex; align-items:center; justify-content:space-between; margin-top:14px; border-top:1px solid rgba(18,61,57,.1); padding-top:13px; color:rgba(18,61,57,.57); font-size:8px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; transition:color 180ms ease; }
        .media-download:hover { color:var(--media-teal); }
        .media-download-label { color:rgba(18,61,57,.64); }
        .media-download-format { display:inline-flex; align-items:center; gap:9px; color:rgba(18,61,57,.4); font-size:8px; letter-spacing:.13em; }
        .media-download-format b { color:var(--media-teal); font-size:16px; font-weight:400; line-height:1; transition:transform 180ms ease; }
        .media-download:hover .media-download-format b { transform:translateY(3px); }
        .media-note { border-top:1px solid var(--media-line); padding-top:28px; }
        .media-note p { max-width:530px; margin:0; color:var(--media-muted); font-size:11px; line-height:1.8; }
        .media-note p + p { margin-top:15px; }
        .media-creator { background:#edf5f1; }
        .media-creator-copy { max-width:530px; color:var(--media-muted); font-size:11px; line-height:1.8; }
        .media-creator-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-top:26px; }
        .media-creator-card { min-height:150px; border:1px solid rgba(18,61,57,.12); border-radius:18px; padding:18px; background:rgba(255,255,255,.42); }
        .media-creator-card span { color:var(--media-teal); font-family:Georgia,serif; font-size:20px; }
        .media-creator-card p { margin:26px 0 0; color:var(--media-muted); font-size:9px; line-height:1.6; }
        .media-cta { position:relative; overflow:hidden; padding:130px 0; text-align:center; }
        .media-cta::before { position:absolute; top:50%; left:50%; width:480px; height:480px; border:1px solid rgba(82,170,158,.23); border-radius:50%; content:""; transform:translate(-50%,-50%); box-shadow:0 0 0 50px rgba(82,170,158,.04),0 0 0 100px rgba(82,170,158,.025); }
        .media-cta-inner { position:relative; z-index:1; }
        .media-cta-title { margin:19px 0 0; font-family:Georgia,serif; font-size:clamp(3rem,6vw,6.4rem); font-weight:400; letter-spacing:-.08em; line-height:.87; }
        .media-cta-title em { color:var(--media-teal); font-style:italic; }
        .media-cta-copy { max-width:430px; margin:25px auto 0; color:var(--media-muted); font-size:12px; line-height:1.8; }
        .media-footer { display:flex; justify-content:space-between; gap:24px; border-top:1px solid var(--media-line); padding:28px 0; color:rgba(18,61,57,.43); font-size:8px; font-weight:800; letter-spacing:.17em; text-transform:uppercase; }
        .media-footer-brand { color:var(--media-ink); }
        .media-reveal { opacity:0; transform:translateY(26px); transition:opacity 700ms ease var(--reveal-delay),transform 700ms cubic-bezier(.23,1,.32,1) var(--reveal-delay); }
        .media-reveal.is-visible { opacity:1; transform:translateY(0); }
        @media (max-width:900px) { .media-hero,.media-two-col,.media-library-heading,.media-quote-layout { grid-template-columns:1fr; gap:35px; } .media-hero-art { margin:0 auto; } .media-card-grid { grid-template-columns:1fr; } .media-pathways { grid-template-columns:repeat(3,1fr); } }
        @media (max-width:620px) { .media-container { width:calc(100% - 32px); } .media-hero { padding:65px 0 75px; } .media-hero-art { width:min(100%,340px); } .media-strip-list { display:none; } .media-section,.media-quote-section { padding:76px 0; } .media-pathways,.media-creator-cards { grid-template-columns:1fr; } .media-card-facts { grid-template-columns:1fr; } .media-footer { align-items:flex-start; flex-direction:column; gap:10px; } }
        @media (prefers-reduced-motion:reduce) { .media-page *, .media-page *::before, .media-page *::after { animation:none !important; transition-duration:.01ms !important; } }
      `}</style>

      <section className="media-hero media-container">
        <div><Reveal><p className="media-kicker">World 03 · Make space for good</p></Reveal><Reveal delay={80}><h1 className="media-title">Meaningful<br /><em>Media.</em></h1></Reveal><Reveal delay={160}><p className="media-description">Create without losing meaning.<br />A slower space for sound, reflection and creative work that leaves something good behind.</p></Reveal><Reveal delay={230}><div className="media-actions"><a className="media-button media-button-primary" href="#library">Explore the library <span>→</span></a><a className="media-button media-button-secondary" href="#pathways">Why meaningful media?</a></div></Reveal></div>
        <Reveal className="media-hero-art" delay={120}><div className="media-hero-card"><img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1000&q=85" alt="Meaningful media workspace" /><div className="media-hero-card-copy"><span>Pause</span><h2>Let the message breathe.</h2></div><span className="media-hero-number">03</span></div></Reveal>
      </section>

      <section className="media-strip"><div className="media-container media-strip-inner"><span><strong>A slower studio</strong> for people who want atmosphere without losing purpose.</span><div className="media-strip-list"><span>Pathways</span><span>Reflection</span><span>Audio</span></div></div></section>

      <section id="pathways" className="media-section"><div className="media-container"><div className="media-two-col"><Reveal><p className="media-label">Curated pathways</p><h2 className="media-section-title">Learn at the <em>right pace.</em></h2><p className="media-description" style={{ fontSize: "11px", marginTop: "22px" }}>Choose a first step, listen to what sparks something and return when the moment is right.</p></Reveal><div className="media-pathways">{pathways.map((pathway, index) => <Reveal key={pathway.number} delay={index * 70}><article className="media-pathway"><span className="media-pathway-number">{pathway.number}</span><span className="media-pathway-label">{pathway.category}</span><h3>{pathway.title}</h3><p>{pathway.description}</p></article></Reveal>)}</div></div></div></section>

      <section className="media-quote-section"><div className="media-container media-quote-layout"><Reveal><span className="media-quote-mark">“</span></Reveal><Reveal delay={100}><div><blockquote className="media-quote">The best content does not ask for attention. It <em>earns a place in the heart.</em></blockquote><p className="media-quote-source">A principle for meaningful making</p></div></Reveal></div></section>

      <section id="library" className="media-section media-library"><div className="media-container media-library-inner"><div className="media-library-heading"><Reveal><p className="media-label">Audio library</p><h2 className="media-section-title">Listen &amp; <em>discover.</em></h2><p className="media-description" style={{ fontSize: "11px", marginTop: "22px" }}>Explore peaceful Islamic audio and choose what fits your content and convictions.</p></Reveal><Reveal delay={100}><div><p className="media-library-copy">A small collection of vocal and reflective audio for reminders, educational work and content created with care.</p><div className="media-filter-row" role="tablist" aria-label="Filter audio categories"><span className="media-filter-label">Show</span>{categories.map((category) => <button key={category} type="button" role="tab" aria-selected={activeCategory === category} className={`media-filter ${activeCategory === category ? "is-active" : ""}`} onClick={() => setActiveCategory(category)}>{category}</button>)}</div></div></Reveal></div><div className="media-card-grid">{filteredMedia.map((item, index) => <Reveal key={item.id} delay={(index % 2) * 80}><MediaCard item={item} index={index} /></Reveal>)}</div></div></section>

      <section className="media-section"><div className="media-container"><Reveal className="media-note"><div className="media-two-col"><div><p className="media-label">Choose consciously</p><h2 className="media-section-title">Know the <em>audio.</em></h2></div><div><p>Islamic scholars have differing views regarding musical instruments and their permissible use. Tawakkul does not issue religious rulings.</p><p> If you prefer an instrument-free approach, choose tracks labelled <strong>“Vocals Only”</strong> and <strong>“No instruments.”</strong></p><p>Tracks containing daff or other percussion are labelled clearly so you can make your own informed choice.</p></div></div></Reveal></div></section>

      <section id="creator" className="media-section media-creator"><div className="media-container"><div className="media-two-col"><Reveal><p className="media-label">For creators</p><h2 className="media-section-title">Make space for something <em>meaningful.</em></h2></Reveal><Reveal delay={90}><div className="media-creator-copy"><p>Whether you&apos;re creating an Islamic reminder, educational video, podcast, reel or reflective post, choose audio intentionally.</p><div className="media-creator-cards"><div className="media-creator-card"><span>01</span><p>Listen directly on Tawakkul.</p></div><div className="media-creator-card"><span>02</span><p>Download available tracks.</p></div><div className="media-creator-card"><span>03</span><p>Check audio details first.</p></div></div></div></Reveal></div></div></section>

      <section className="media-cta"><div className="media-container media-cta-inner"><Reveal><p className="media-label">Tawakkul</p><h2 className="media-cta-title">Let your content<br /><em>carry something good.</em></h2><p className="media-cta-copy">Choose audio carefully. Create with purpose. Leave something beneficial behind.</p><a href="/" className="media-button media-button-primary" style={{ marginTop: "30px" }}>Back to Tawakkul <span>→</span></a></Reveal></div></section>

      <footer className="media-footer media-container"><span className="media-footer-brand">TAWAKKUL.</span><span>Meaningful media for meaningful work.</span><span>© 2026</span></footer>
    </main>
  );
}

export { mediaData, categories, pathways };
