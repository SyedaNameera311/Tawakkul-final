import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  const enterHome = () => {
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(() => navigate("/home"), 720);
  };

  useEffect(() => {
    const timer = window.setTimeout(enterHome, 6200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className={`verse-entry ${leaving ? "is-leaving" : ""}`}>
      <style>{`
        .verse-entry { position:relative; display:grid; min-height:100svh; place-items:center; overflow:hidden; isolation:isolate; background:#172b26; color:#f4eee3; font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
        .verse-entry::before { position:absolute; top:-19vw; right:-11vw; z-index:-2; width:70vw; height:70vw; min-width:520px; min-height:520px; border:1px solid rgba(220,183,103,.22); border-radius:50%; content:""; box-shadow:0 0 0 34px rgba(220,183,103,.035),0 0 0 72px rgba(220,183,103,.02); animation:verse-orbit 27s linear infinite; }
        .verse-entry::after { position:absolute; right:13%; bottom:-18%; z-index:-2; width:430px; height:260px; border-radius:50%; background:rgba(213,159,78,.16); filter:blur(90px); content:""; }
        @keyframes verse-orbit { to { transform:rotate(360deg); } }
        .verse-grid { position:absolute; inset:0; z-index:-1; opacity:.16; background-image:linear-gradient(rgba(244,238,227,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(244,238,227,.1) 1px,transparent 1px); background-size:64px 64px; mask-image:radial-gradient(circle at center,black 0%,transparent 76%); }
        .verse-noise { position:absolute; inset:0; z-index:-1; opacity:.045; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E"); pointer-events:none; }
        .verse-content { width:min(980px,calc(100% - 44px)); padding:38px 0 76px; text-align:center; }
        .verse-kicker { margin:0; color:#dcb767; font-size:9px; font-weight:800; letter-spacing:.35em; text-transform:uppercase; animation:verse-rise 1000ms .2s both cubic-bezier(.23,1,.32,1); }
        .verse-rule { display:flex; align-items:center; justify-content:center; gap:17px; margin:28px auto 25px; animation:verse-rise 1000ms .35s both cubic-bezier(.23,1,.32,1); }
        .verse-rule::before,.verse-rule::after { width:min(145px,18vw); height:1px; background:linear-gradient(90deg,transparent,rgba(220,183,103,.6)); content:""; }
        .verse-rule::after { background:linear-gradient(90deg,rgba(220,183,103,.6),transparent); }
        .verse-dot { width:8px; height:8px; border:1px solid #dcb767; border-radius:50%; box-shadow:0 0 0 8px rgba(220,183,103,.075); }
        .verse-heading { max-width:950px; margin:0 auto; font-family:Georgia,"Times New Roman",serif; font-size:clamp(2.45rem,6vw,6.35rem); font-weight:400; letter-spacing:-.075em; line-height:.93; animation:verse-rise 1200ms .5s both cubic-bezier(.23,1,.32,1); }
        .verse-heading em { color:#dcb767; font-style:italic; }
        .verse-credit { display:block; margin-top:31px; color:rgba(244,238,227,.57); font-size:9px; font-style:normal; font-weight:800; letter-spacing:.24em; text-transform:uppercase; animation:verse-rise 1000ms .75s both cubic-bezier(.23,1,.32,1); }
        .verse-credit strong { color:#f4eee3; }
        .verse-enter { display:inline-flex; align-items:center; gap:11px; margin-top:38px; border:1px solid rgba(220,183,103,.52); border-radius:999px; padding:12px 17px 12px 20px; background:rgba(244,238,227,.035); color:#f4eee3; cursor:pointer; font-size:8px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; animation:verse-rise 1000ms 1s both cubic-bezier(.23,1,.32,1); transition:background 180ms ease,border-color 180ms ease,transform 180ms ease; }
        .verse-enter span { display:grid; width:22px; height:22px; place-items:center; border:1px solid rgba(220,183,103,.62); border-radius:50%; }
        .verse-enter:hover { border-color:#dcb767; background:rgba(220,183,103,.16); transform:translateY(-3px); }
        .verse-meta { position:absolute; right:25px; bottom:22px; left:25px; display:flex; justify-content:space-between; color:rgba(244,238,227,.34); font-size:7px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; animation:verse-rise 1000ms 1.15s both cubic-bezier(.23,1,.32,1); }
        .verse-entry.is-leaving { animation:verse-leave 760ms both cubic-bezier(.76,0,.24,1); }
        @keyframes verse-rise { from { opacity:0; transform:translateY(23px); } to { opacity:1; transform:translateY(0); } }
        @keyframes verse-leave { to { opacity:0; transform:scale(1.025); filter:blur(4px); } }
        @media (max-width:620px) { .verse-content { width:calc(100% - 32px); padding-bottom:74px; } .verse-heading { font-size:clamp(2.35rem,11vw,4rem); } .verse-kicker { font-size:7px; letter-spacing:.26em; } .verse-meta { right:16px; bottom:17px; left:16px; font-size:6px; letter-spacing:.13em; } }
        @media (prefers-reduced-motion:reduce) { .verse-entry *, .verse-entry::before { animation:none !important; transition-duration:.01ms !important; } }
      `}</style>
      <div className="verse-grid" aria-hidden="true" />
      <div className="verse-noise" aria-hidden="true" />
      <section className="verse-content" aria-label="Opening modesty reflection"><p className="verse-kicker">A reflection on modesty</p><div className="verse-rule" aria-hidden="true"><span className="verse-dot" /></div><blockquote className="verse-heading">“Modesty is a quiet form of strength — carried with <em>dignity</em>, lived with intention.”</blockquote><cite className="verse-credit">— <strong>Syeda Nameera</strong></cite><button type="button" className="verse-enter" onClick={enterHome}>Enter home <span>→</span></button></section>
      <div className="verse-meta"><span>Tawakkul · 00</span><span>Begin with intention</span></div>
    </main>
  );
}
