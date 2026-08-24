import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import seerahImage from "../assets/course-01-seerah.jpg";
import aqeedahImage from "../assets/course-02-aqeedah.webp";
import arabicImage from "../assets/course-03-quranic-arabic.jpg";
import tafseerImage from "../assets/course-04-tafseer.jpg";
import historyImage from "../assets/course-05-history.jpg";
import tajweedImage from "../assets/course-06-tajweed.jpg";
import psychologyImage from "../assets/course-07-psychology.jpg";
import tawakkulImage from "../assets/course-08-tawakkul.png";

const courses = [
  { id: 1, name: "Seerah Essentials", slug: "seerah", description: "Journey through the life, character and legacy of Prophet Muhammad ﷺ, and discover lessons that remain deeply relevant today.", category: "SEERAH", duration: "8 weeks", level: "Beginner", image: seerahImage, visualNote: "Sacred spaces & prophetic history" },
  { id: 2, name: "Foundations of Faith", slug: "foundations-of-faith", description: "Build a stronger foundation in Islamic belief and understand the principles that shape a Muslim's relationship with Allah.", category: "AQEEDAH", duration: "6 weeks", level: "Beginner", image: aqeedahImage, visualNote: "A grounded beginning" },
  { id: 3, name: "Arabic for Quran", slug: "quranic-arabic", description: "Learn the vocabulary, roots and essential structures that help you understand the language of the Quran.", category: "QURAN", duration: "12 weeks", level: "Beginner", image: arabicImage, visualNote: "Arabic manuscript study" },
  { id: 4, name: "Tafseer Essentials", slug: "tafseer", description: "Go beyond recitation and explore the meanings, context, themes and guidance within the words of the Quran.", category: "TAFSEER", duration: "12 weeks", level: "Intermediate", image: tafseerImage, visualNote: "Reading meaning in context" },
  { id: 5, name: "Islamic History", slug: "islamic-history", description: "Explore the people, civilizations, scholars and defining moments that shaped the history of the Muslim world.", category: "HISTORY", duration: "6 weeks", level: "All levels", image: historyImage, visualNote: "Manuscripts & civilisation" },
  { id: 6, name: "Tajweed & Recitation", slug: "tajweed", description: "Improve your Quran recitation through correct pronunciation, articulation points and practical Tajweed principles.", category: "QURAN", duration: "8 weeks", level: "All levels", image: tajweedImage, visualNote: "Recitation & sacred text" },
  { id: 7, name: "Psychology & Islam", slug: "psychology-islam", description: "Reflect on the human self, emotions, spiritual wellbeing and inner strength through an Islamic perspective.", category: "ISLAM & LIFE", duration: "6 weeks", level: "All levels", image: psychologyImage, visualNote: "Reflection & inner wellbeing" },
  { id: 8, name: "Tawakkul & Inner Strength", slug: "tawakkul", description: "Understand trust in Allah and discover how Tawakkul can reshape the way you face uncertainty, difficulty and everyday life.", category: "SPIRITUAL GROWTH", duration: "4 weeks", level: "All levels", image: tawakkulImage, visualNote: "Stillness, prayer & trust" },
];

const filters = ["ALL", "QURAN", "FAITH", "HISTORY", "LIFE"];

function matchesFilter(course, filter) {
  if (filter === "ALL") return true;
  if (filter === "QURAN") return course.category === "QURAN" || course.category === "TAFSEER";
  if (filter === "FAITH") return course.category === "AQEEDAH" || course.category === "SEERAH" || course.category === "SPIRITUAL GROWTH";
  if (filter === "HISTORY") return course.category === "HISTORY";
  return course.category === "ISLAM & LIFE";
}

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

  return <div ref={ref} style={{ "--course-delay": `${delay}ms` }} className={`course-reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

export default function Course() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const visibleCourses = useMemo(() => courses.filter((course) => matchesFilter(course, activeFilter)), [activeFilter]);

  return (
    <main className="course-page">
      <style>{`
        .course-page { --course-ink:#191713; --course-deep:#211810; --course-paper:#f4eee3; --course-cream:#eee3d3; --course-sand:#d7c3a1; --course-gold:#b56b2c; --course-orange:#ca8b4d; --course-muted:rgba(25,23,19,.56); min-height:100vh; overflow:hidden; background:var(--course-paper); color:var(--course-ink); font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
        .course-page *, .course-page *::before, .course-page *::after { box-sizing:border-box; }
        .course-page a { color:inherit; text-decoration:none; }
        .course-page button { font:inherit; }
        .course-container { width:min(1140px,calc(100% - 48px)); margin:0 auto; }
        .course-hero { position:relative; overflow:hidden; background-color:#f4eee3; background-image:radial-gradient(circle at 76% 18%,rgba(184,121,60,.28) 0 1px,transparent 1.5px),radial-gradient(circle at 12% 74%,rgba(184,121,60,.12) 0 1px,transparent 1.5px),repeating-linear-gradient(115deg,rgba(255,255,255,.18) 0 1px,transparent 1px 15px),linear-gradient(135deg,#eadfce 0%,#f4eee3 55%,#ddc6a7 100%); background-size:190px 190px,230px 230px,18px 18px,100% 100%; padding:120px 0 100px; }
        .course-hero::before { position:absolute; top:-180px; right:-120px; width:530px; height:530px; border:1px solid rgba(184,121,60,.25); border-radius:50%; content:""; box-shadow:0 0 0 45px rgba(184,121,60,.045),0 0 0 90px rgba(184,121,60,.025); animation:courseHeroOrbit 22s linear infinite; }
        .course-hero::after { position:absolute; right:10%; bottom:-120px; width:380px; height:230px; border-radius:50%; background:rgba(184,121,60,.12); filter:blur(85px); content:""; }
        .course-hero-texture { position:absolute; inset:0; opacity:.28; background:linear-gradient(90deg,transparent 0 48%,rgba(184,121,60,.08) 48.1%,transparent 48.3%),linear-gradient(0deg,transparent 0 68%,rgba(184,121,60,.08) 68.1%,transparent 68.3%); mask-image:linear-gradient(90deg,black,transparent 78%); pointer-events:none; }
        .course-hero-grid { position:relative; z-index:1; display:grid; grid-template-columns:minmax(0,1fr) minmax(300px,.62fr); align-items:end; gap:70px; min-height:470px; }
        .course-kicker, .course-label { color:var(--course-gold); font-size:9px; font-weight:800; letter-spacing:.32em; text-transform:uppercase; }
        .course-title { max-width:780px; margin:22px 0 0; font-family:Georgia,"Times New Roman",serif; font-size:clamp(4rem,8vw,8.4rem); font-weight:400; letter-spacing:-.095em; line-height:.8; }
        .course-title em, .course-section-title em { color:var(--course-gold); font-style:italic; }
        .course-hero-description { max-width:460px; margin:29px 0 0; color:var(--course-muted); font-size:14px; line-height:1.9; }
        .course-hero-note { position:relative; align-self:end; display:flex; min-height:340px; flex-direction:column; justify-content:space-between; overflow:hidden; border:1px solid rgba(184,121,60,.28); border-radius:22px; padding:22px; background:rgba(255,250,242,.36); box-shadow:0 24px 60px rgba(104,73,35,.08); color:rgba(22,19,15,.53); font-size:10px; line-height:1.9; backdrop-filter:blur(10px); }
        .course-hero-note::before { position:absolute; right:-80px; bottom:-105px; width:310px; height:310px; border:1px solid rgba(184,121,60,.24); border-radius:50%; content:""; box-shadow:0 0 0 25px rgba(184,121,60,.04),0 0 0 52px rgba(184,121,60,.025); animation:courseOrbit 12s linear infinite; }
        .course-hero-note::after { position:absolute; top:0; right:0; bottom:0; left:0; background:linear-gradient(135deg,rgba(255,255,255,.2),transparent 42%,rgba(184,121,60,.08)); content:""; pointer-events:none; }
        @keyframes courseHeroOrbit { to { transform:rotate(360deg); } }
        .course-hero-visual { position:relative; align-self:end; min-height:430px; overflow:hidden; border:1px solid rgba(184,121,60,.38); border-radius:24px; background:#c9aa82; box-shadow:0 24px 60px rgba(104,73,35,.13); }
        .course-hero-visual img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter:sepia(.12) saturate(.82) contrast(1.04); opacity:.88; transition:transform 900ms cubic-bezier(.23,1,.32,1),filter 500ms ease; }
        .course-hero-visual:hover img { filter:sepia(0) saturate(1) contrast(1.04); transform:scale(1.06); }
        .course-hero-visual::before { position:absolute; inset:15px; z-index:1; border:1px solid rgba(255,255,255,.62); border-radius:17px; content:""; pointer-events:none; }
        .course-hero-visual::after { position:absolute; inset:0; z-index:1; background:linear-gradient(180deg,rgba(25,23,19,.06),rgba(25,23,19,.05) 42%,rgba(25,23,19,.72)),linear-gradient(90deg,rgba(25,23,19,.34),transparent 65%); content:""; pointer-events:none; }
        .course-hero-visual-top,.course-hero-visual-caption,.course-hero-visual-stamp { position:absolute; z-index:2; }
        .course-hero-visual-top { top:29px; right:30px; left:30px; display:flex; align-items:center; justify-content:space-between; color:rgba(255,250,241,.85); font-size:8px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; }
        .course-hero-visual-top span:first-child { color:var(--course-gold); }
        .course-hero-visual-caption { right:30px; bottom:30px; left:30px; display:flex; align-items:flex-end; gap:14px; }
        .course-hero-visual-caption strong { color:#f0c979; font-family:Georgia,serif; font-size:58px; font-weight:400; letter-spacing:-.08em; line-height:.7; }
        .course-hero-visual-caption p { max-width:190px; margin:0; color:rgba(255,248,235,.76); font-family:Georgia,serif; font-size:19px; font-style:italic; line-height:1.05; }
        .course-hero-visual-caption small { display:block; margin-top:9px; color:rgba(255,248,235,.48); font-family:Inter,sans-serif; font-size:8px; font-style:normal; font-weight:800; letter-spacing:.14em; text-transform:uppercase; }
        .course-hero-visual-stamp { top:50%; left:50%; display:grid; width:92px; height:92px; place-items:center; border:1px solid rgba(215,170,90,.7); border-radius:50%; color:rgba(255,248,235,.86); font-family:Georgia,serif; font-size:42px; transform:translate(-50%,-50%) rotate(-11deg); animation:courseStampFloat 5s ease-in-out infinite; }
        @keyframes courseStampFloat { 0%,100% { margin-top:0; } 50% { margin-top:-9px; } }
        .course-hero-actions { display:flex; align-items:center; flex-wrap:wrap; gap:20px; margin-top:32px; }
        .course-hero-link { display:inline-flex; align-items:center; gap:13px; border-radius:999px; padding:14px 18px 14px 20px; background:var(--course-gold); color:#17100a; font-size:9px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; transition:transform 180ms ease,background 180ms ease,box-shadow 180ms ease; }
        .course-hero-link span { display:grid; width:25px; height:25px; place-items:center; border:1px solid rgba(255,255,255,.3); border-radius:50%; }
        .course-hero-link:hover { background:#edc779; box-shadow:0 12px 28px rgba(215,170,90,.2); transform:translateY(-3px); }
        .course-hero-actions > span { color:rgba(25,23,19,.46); font-size:8px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
        .course-intro { border-top:1px solid rgba(25,23,19,.12); border-bottom:1px solid rgba(25,23,19,.12); background:var(--course-cream); }
        .course-intro-inner { display:grid; grid-template-columns:.28fr 1fr; gap:40px; padding:23px 0; }
        .course-stat { font-family:Georgia,serif; font-size:38px; line-height:.8; }
        .course-stat span { display:block; margin-top:8px; font-family:Inter,sans-serif; color:rgba(25,23,19,.43); font-size:8px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; }
        .course-intro-copy { max-width:560px; margin:0; color:var(--course-muted); font-size:11px; line-height:1.8; }
        .course-library { background:var(--course-paper); padding:105px 0 120px; }
        .course-library-head { display:flex; align-items:flex-end; justify-content:space-between; gap:35px; border-bottom:1px solid rgba(25,23,19,.16); padding-bottom:36px; }
        .course-section-title { margin:17px 0 0; font-family:Georgia,serif; font-size:clamp(3rem,6vw,5.7rem); font-weight:400; letter-spacing:-.08em; line-height:.86; }
        .course-library-summary { max-width:335px; margin:0; color:var(--course-muted); font-size:11px; line-height:1.8; }
        .course-filter-row { display:flex; flex-wrap:wrap; gap:8px; margin:29px 0 0; }
        .course-filter { border:1px solid rgba(25,23,19,.17); border-radius:999px; padding:9px 13px; background:transparent; color:rgba(25,23,19,.55); cursor:pointer; font-size:8px; font-weight:800; letter-spacing:.15em; text-transform:uppercase; transition:all 180ms ease; }
        .course-filter:hover, .course-filter.is-active { border-color:var(--course-gold); background:var(--course-gold); color:#fff8ed; }
        .course-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; margin-top:45px; }
        .course-card { position:relative; display:grid; grid-template-columns:minmax(145px,.7fr) minmax(0,1fr); min-height:275px; overflow:hidden; border:1px solid rgba(184,121,60,.26); border-radius:19px; background:#f8f1e5; box-shadow:0 13px 30px rgba(104,73,35,.055); transition:transform 240ms ease,box-shadow 240ms ease,border-color 240ms ease; }
        .course-card:hover { border-color:rgba(184,121,60,.6); box-shadow:0 24px 48px rgba(104,73,35,.12); transform:translateY(-5px); }
        .course-card-image-wrap { position:relative; min-height:275px; overflow:hidden; background:#cfb896; }
        .course-card-image { display:block; width:100%; height:100%; min-height:275px; object-fit:cover; filter:saturate(.7) sepia(.08); transition:transform 650ms cubic-bezier(.23,1,.32,1),filter 400ms ease; }
        .course-card:hover .course-card-image { filter:saturate(1) sepia(0); transform:scale(1.07); }
        .course-card-image-wrap::after { position:absolute; inset:0; background:linear-gradient(90deg,transparent 45%,rgba(248,241,229,.22)); content:""; pointer-events:none; }
        .course-card-category { position:absolute; top:14px; left:14px; border:1px solid rgba(255,255,255,.55); border-radius:999px; padding:7px 9px; background:rgba(22,19,15,.36); color:#fff; font-size:7px; font-weight:800; letter-spacing:.15em; backdrop-filter:blur(8px); }
        .course-card-copy { display:flex; flex-direction:column; justify-content:space-between; min-width:0; padding:22px; background:#f8f1e5; }
        .course-card-meta { display:flex; align-items:center; justify-content:space-between; gap:10px; color:rgba(25,23,19,.42); font-size:8px; }
        .course-card-number { color:var(--course-gold); font-family:Georgia,serif; font-size:14px; }
        .course-card h3 { margin:28px 0 0; font-family:Georgia,serif; font-size:25px; font-weight:400; letter-spacing:-.055em; line-height:.94; }
        .course-card-description { margin:14px 0 0; color:rgba(25,23,19,.56); font-size:10px; line-height:1.7; }
        .course-card-bottom { border-top:1px solid rgba(25,23,19,.12); padding-top:13px; }
        .course-card-bottom span { color:rgba(25,23,19,.43); font-size:8px; letter-spacing:.08em; text-transform:uppercase; }
        .course-card-link { display:flex; align-items:center; justify-content:space-between; margin-top:14px; color:var(--course-ink); font-size:8px; font-weight:800; letter-spacing:.15em; text-transform:uppercase; transition:color 180ms ease; }
        .course-card-link span { display:grid; width:26px; height:26px; place-items:center; border:1px solid rgba(184,121,60,.4); border-radius:50%; color:var(--course-gold); font-size:13px; transition:transform 220ms ease,background 220ms ease; }
        .course-card:hover .course-card-link { color:var(--course-gold); }
        .course-card:hover .course-card-link span { background:var(--course-gold); color:#fff; transform:translateX(3px); }
        .course-why { background:var(--course-cream); color:var(--course-ink); padding:110px 0; }
        .course-why-grid { display:grid; grid-template-columns:minmax(0,.65fr) minmax(0,1.35fr); align-items:center; gap:70px; }
        .course-why-title { margin:17px 0 0; font-family:Georgia,serif; font-size:clamp(3rem,5.5vw,5.3rem); font-weight:400; letter-spacing:-.08em; line-height:.87; }
        .course-why-title em { color:var(--course-gold); font-style:italic; }
        .course-why-copy { color:rgba(25,23,19,.58); font-size:13px; line-height:1.9; }
        .course-why-copy p { max-width:580px; margin:0; }
        .course-why-copy p + p { margin-top:20px; }
        .course-quote { margin:31px 0 0; border-left:2px solid var(--course-orange); padding-left:18px; color:rgba(25,23,19,.82); font-family:Georgia,serif; font-size:19px; font-style:italic; line-height:1.45; }
        .course-practice { background:var(--course-paper); padding:110px 0; }
        .course-practice-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:13px; margin-top:40px; }
        .course-practice-card { min-height:195px; border:1px solid rgba(184,121,60,.25); border-radius:17px; padding:22px; background:rgba(255,255,255,.38); transition:background 200ms ease,transform 200ms ease; }
        .course-practice-card:hover { background:#fffaf2; transform:translateY(-4px); }
        .course-practice-card span { color:var(--course-gold); font-family:Georgia,serif; font-size:27px; }
        .course-practice-card h3 { margin:31px 0 0; font-family:Georgia,serif; font-size:20px; font-weight:400; }
        .course-practice-card p { margin:10px 0 0; color:rgba(25,23,19,.5); font-size:10px; line-height:1.7; }
        .course-cta { position:relative; overflow:hidden; background:#c68a52; color:#fffaf1; padding:125px 0; text-align:center; }
        .course-cta::before { position:absolute; top:50%; left:50%; width:470px; height:470px; border:1px solid rgba(255,250,241,.28); border-radius:50%; content:""; transform:translate(-50%,-50%); box-shadow:0 0 0 48px rgba(255,250,241,.06),0 0 0 96px rgba(255,250,241,.04); }
        .course-cta-inner { position:relative; z-index:1; }
        .course-cta-title { margin:19px 0 0; font-family:Georgia,serif; font-size:clamp(3rem,6vw,6rem); font-weight:400; letter-spacing:-.08em; line-height:.88; }
        .course-cta-title em { color:rgba(255,250,241,.52); font-style:italic; }
        .course-cta-copy { max-width:430px; margin:25px auto 0; color:rgba(255,250,241,.72); font-size:12px; line-height:1.8; }
        .course-cta-button { display:inline-flex; align-items:center; gap:13px; margin-top:29px; border-radius:999px; padding:14px 21px; background:#fffaf1; color:#8e5228; font-size:9px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; transition:transform 180ms ease,box-shadow 180ms ease; }
        .course-cta-button:hover { box-shadow:0 12px 28px rgba(45,25,10,.18); transform:translateY(-4px); }
        .course-reveal { opacity:0; transform:translateY(25px); transition:opacity 700ms ease var(--course-delay),transform 700ms cubic-bezier(.23,1,.32,1) var(--course-delay); }
        .course-reveal.is-visible { opacity:1; transform:translateY(0); }
        @media (max-width:900px) { .course-hero-grid,.course-why-grid { grid-template-columns:1fr; gap:35px; } .course-library-head { align-items:flex-start; flex-direction:column; } .course-grid { grid-template-columns:1fr; } }
        @media (max-width:620px) { .course-container { width:calc(100% - 32px); } .course-hero { padding:80px 0 72px; } .course-intro-inner { grid-template-columns:1fr; gap:18px; } .course-library,.course-why,.course-practice { padding:76px 0; } .course-card { grid-template-columns:1fr; } .course-card-image-wrap,.course-card-image { min-height:260px; height:260px; } .course-card-copy { min-height:270px; } .course-practice-grid { grid-template-columns:1fr; } }
        @media (prefers-reduced-motion:reduce) { .course-page *, .course-page *::before, .course-page *::after { animation:none !important; transition-duration:.01ms !important; } }
      `}</style>

      <section className="course-hero"><div className="course-hero-texture" aria-hidden="true" /><div className="course-container course-hero-grid"><div><Reveal><p className="course-kicker">The learning place · 01—08</p></Reveal><Reveal delay={80}><h1 className="course-title">Learn at the<br /><em>right pace.</em></h1></Reveal><Reveal delay={160}><p className="course-hero-description">A thoughtful collection of Islamic learning for people who want more than information — they want understanding, reflection and meaningful growth.</p></Reveal><Reveal delay={230}><div className="course-hero-actions"><a className="course-hero-link" href="#course-library">Browse pathways <span>↘</span></a><span>Learn · Reflect · Practice</span></div></Reveal></div><Reveal className="course-hero-visual" delay={130}><img src={arabicImage} alt="Open Arabic manuscript for Quranic study" /><div className="course-hero-visual-top"><span>Quranic study</span><span>03 / 08</span></div><div className="course-hero-visual-stamp">ت</div><div className="course-hero-visual-caption"><strong>03</strong><p>Read with meaning.<small>Arabic · Tafseer · Tajweed</small></p></div></Reveal></div></section>
      <section className="course-intro"><div className="course-container course-intro-inner"><div className="course-stat">08<span>learning pathways</span></div><p className="course-intro-copy">Each pathway is designed to help knowledge become something you can actually live — with patience, attention and room to return.</p></div></section>

      <section id="course-library" className="course-library"><div className="course-container"><div className="course-library-head"><Reveal><p className="course-label">Curated learning</p><h2 className="course-section-title">Choose your<br /><em>first step.</em></h2></Reveal><Reveal delay={80}><p className="course-library-summary">Start with the question that is alive in you now. The right course is not the loudest one; it is the one you are ready to carry.</p></Reveal></div><div className="course-filter-row" role="tablist" aria-label="Filter courses">{filters.map((filter) => <button key={filter} type="button" role="tab" aria-selected={activeFilter === filter} className={`course-filter ${activeFilter === filter ? "is-active" : ""}`} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="course-grid">{visibleCourses.map((course, index) => <Reveal key={course.id} delay={(index % 2) * 80}><Link to={`/course/${course.slug}`} className="course-card"><div className="course-card-image-wrap"><img src={course.image} alt={`${course.name} — ${course.visualNote}`} className="course-card-image" loading="lazy" /><span className="course-card-category">{course.category}</span></div><div className="course-card-copy"><div><div className="course-card-meta"><span className="course-card-number">0{course.id}</span><span>{course.duration}</span></div><h3>{course.name}</h3><p className="course-card-description">{course.description}</p></div><div className="course-card-bottom"><span>{course.level} · {course.visualNote}</span><span className="course-card-link">Explore course <span>↗</span></span></div></div></Link></Reveal>)}</div></div></section>

      <section className="course-why"><div className="course-container course-why-grid"><Reveal><p className="course-label">Why this learning matters</p><h2 className="course-why-title">Information is easy.<br /><em>Understanding takes time.</em></h2></Reveal><Reveal delay={100}><div className="course-why-copy"><p>We live surrounded by content. A question can be answered within seconds, but meaningful knowledge asks something different from us: attention, patience and reflection.</p><p>Islamic learning is not simply about collecting information. It is about allowing knowledge to shape the way we think, worship, speak, make decisions and understand the world around us.</p><blockquote className="course-quote">“The point is not to collect more information. It is to see more clearly.”</blockquote></div></Reveal></div></section>

      <section className="course-practice"><div className="course-container"><Reveal><p className="course-label">The feeling of the place</p><h2 className="course-section-title">Designed to give you <em>more signal.</em></h2></Reveal><div className="course-practice-grid"><Reveal delay={0}><article className="course-practice-card"><span>01</span><h3>Slow down.</h3><p>Learn without rushing. Give important ideas enough space to become understanding.</p></article></Reveal><Reveal delay={80}><article className="course-practice-card"><span>02</span><h3>Return to it.</h3><p>Revisit lessons, reflect on them and allow knowledge to grow with your own experience.</p></article></Reveal><Reveal delay={160}><article className="course-practice-card"><span>03</span><h3>Carry it forward.</h3><p>The real measure of learning is what changes in the way we live, think and respond.</p></article></Reveal></div></div></section>

      <section className="course-cta"><div className="course-container course-cta-inner"><Reveal><p className="course-label" style={{ color: "#fffaf1" }}>Tawakkul learning</p><h2 className="course-cta-title">Begin with one<br /><em>honest question.</em></h2><p className="course-cta-copy">Choose a pathway, make space for reflection and let knowledge become part of how you live.</p><Link to="/contact" className="course-cta-button">Ask a question <span>↗</span></Link></Reveal></div></section>
    </main>
  );
}

export { courses, filters };
