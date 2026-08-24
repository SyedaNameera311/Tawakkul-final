import { useEffect, useRef, useState } from "react";
import girlSprite from "../assets/girl.png";

const channels = [
  ["WhatsApp", "0330 2726254", "https://wa.me/923302726254", "Start a chat"],
  ["Email", "hello@tawakkul.com", "mailto:hello@tawakkul.com", "Send an email"],
  ["Instagram", "@tawakkul_trust_tranquility", "https://www.instagram.com/tawakkul_trust_tranquility", "Follow us"],
  ["LinkedIn", "Syeda Namira", "https://www.linkedin.com/in/syeda-namira-14b81b38b", "Connect"],
];

const PULL_THRESHOLD = 72;
const MAX_PULL = 132;
const WALK_TIME = 1650;

export default function Contact() {
  const timerRef = useRef(null);
  const pullStartRef = useRef(0);
  const pullRef = useRef(0);
  const [opened, setOpened] = useState(false);
  const [moving, setMoving] = useState(false);
  const [pulling, setPulling] = useState(false);
  const [pull, setPull] = useState(0);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const reveal = (nextOpened) => {
    window.clearTimeout(timerRef.current);
    setOpened(nextOpened);
    setMoving(true);
    timerRef.current = window.setTimeout(() => setMoving(false), WALK_TIME);
  };

  const beginPull = (event) => {
    if (moving) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    pullStartRef.current = event.clientY;
    pullRef.current = 0;
    setPull(0);
    setPulling(true);
  };

  const movePull = (event) => {
    if (!pulling || moving) return;
    const distance = Math.max(0, Math.min(MAX_PULL, event.clientY - pullStartRef.current));
    pullRef.current = distance;
    setPull(distance);
  };

  const finishPull = () => {
    if (!pulling || moving) return;
    const complete = pullRef.current >= PULL_THRESHOLD;
    setPulling(false);
    setPull(0);
    pullRef.current = 0;
    if (complete) reveal(!opened);
  };

  const keyPull = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    if (!moving) reveal(!opened);
  };

  return (
    <section className={`tawakkul-contact ${opened ? "is-open" : ""}`} aria-labelledby="contact-heading">
      <style>{`
        /* Contact hero requested by user: copy on left, real girl in reserved right stage, cards never overlap. */
        .tawakkul-contact{--ink:#080604;--gold:#d8a63a;--goldLight:#f4d78f;min-height:100vh;overflow:hidden;background:#080604;color:#fff;font-family:Inter,ui-sans-serif,system-ui,sans-serif}.tawakkul-contact *{box-sizing:border-box}.tawakkul-contact a{color:inherit;text-decoration:none}.tawakkul-contact button{font:inherit}
        .tc-wrap{position:relative;display:grid;grid-template-columns:minmax(0,.9fr) minmax(430px,1.1fr);align-items:center;gap:clamp(48px,7vw,116px);width:min(1280px,calc(100% - 96px));min-height:100vh;margin:auto;padding:72px 0}.tc-wrap:before{position:absolute;top:50%;right:2%;z-index:0;width:520px;height:520px;border-radius:50%;background:rgba(245,159,10,.11);content:"";filter:blur(120px);transform:translateY(-50%)}
        .tc-copy{position:relative;z-index:2;max-width:560px}.tc-chip{display:inline-block;margin:0 0 22px;border:1px solid rgba(255,255,255,.13);border-radius:999px;padding:10px 15px;background:rgba(255,255,255,.05);color:rgba(255,255,255,.7);font-size:9px;font-weight:800;letter-spacing:.25em;text-transform:uppercase}.tc-copy h1{margin:0;font-family:Georgia,"Times New Roman",serif;font-size:clamp(3.8rem,5.7vw,7.2rem);font-weight:500;letter-spacing:-.065em;line-height:.84}.tc-copy h1 em{color:var(--goldLight);font-weight:400}.tc-copy p{max-width:470px;margin:30px 0 0;color:rgba(255,255,255,.58);font-size:14px;line-height:1.85}.tc-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px}.tc-main,.tc-learn{display:inline-flex;min-height:46px;align-items:center;justify-content:center;border-radius:999px;padding:0 23px;font-size:10px;font-weight:800;letter-spacing:.08em;transition:transform .25s ease,background .25s ease,border-color .25s ease}.tc-main{gap:19px;border:1px solid #fff;background:#fff;color:var(--ink);cursor:pointer}.tc-main:hover{border-color:var(--goldLight);background:var(--goldLight);transform:translateY(-3px)}.tc-main b{font-size:15px}.tc-learn{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.04);color:rgba(255,255,255,.84)}.tc-learn:hover{border-color:rgba(255,255,255,.46);background:rgba(255,255,255,.09)}
        .tc-stage{position:relative;z-index:1;min-height:510px;overflow:hidden;border:1px solid rgba(255,255,255,.13);background:linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,.012));box-shadow:0 26px 90px rgba(0,0,0,.28)}.tc-stage:before{position:absolute;inset:12px;border:1px solid rgba(226,191,112,.18);background:linear-gradient(90deg,rgba(226,191,112,.05),transparent 10%,transparent 90%,rgba(226,191,112,.05));content:"";pointer-events:none}.tc-glow{position:absolute;bottom:36px;left:32%;width:250px;height:250px;border-radius:50%;background:rgba(251,191,36,.13);filter:blur(85px)}.tc-meta,.tc-bottom{position:absolute;right:28px;left:28px;z-index:40;display:flex;justify-content:space-between;gap:20px;color:rgba(255,255,255,.42);font-size:8px;font-weight:800;letter-spacing:.18em;text-transform:uppercase}.tc-meta{top:26px}.tc-bottom{bottom:24px}
        .tc-reveal{position:absolute;inset:68px 38px 58px;z-index:20;display:grid;grid-template-columns:minmax(145px,.62fr) minmax(0,1.38fr);gap:20px;opacity:0;pointer-events:none;transform:translateY(16px);transition:opacity .42s ease .22s,transform .6s cubic-bezier(.23,1,.32,1) .22s}.tawakkul-contact.is-open .tc-reveal{opacity:1;pointer-events:auto;transform:translateY(0);transition-delay:.35s}
        .tc-girl{position:relative;display:flex;min-width:0;align-items:flex-end;justify-content:center;overflow:hidden;opacity:0;transform:translateX(-90%);transition:opacity .28s ease .42s,transform 1.2s cubic-bezier(.23,1,.32,1) .42s}.tawakkul-contact.is-open .tc-girl{opacity:1;transform:translateX(0);transition-delay:.56s}.tc-girl:before{position:absolute;right:4%;bottom:8px;left:4%;height:74px;border-radius:50%;background:rgba(195,154,72,.14);content:"";filter:blur(24px)}.tc-quote{position:absolute;top:34px;left:50%;z-index:2;width:156px;margin:0;color:rgba(226,191,112,.7);font-family:Georgia,"Times New Roman",serif;font-size:1rem;font-style:italic;line-height:1.02;text-align:center;transform:translateX(-50%) rotate(-4deg)}.tc-cue{position:absolute;right:0;bottom:76px;z-index:3;color:var(--goldLight);font-size:7px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}.tc-girl-shell{position:relative;z-index:2;width:144px;height:405px;transform-origin:bottom center}.tc-girl-shell:after{position:absolute;right:8px;bottom:-7px;left:8px;height:10px;border-radius:50%;background:rgba(0,0,0,.45);content:"";filter:blur(5px);transform:translateY(50%)}.tc-girl-sprite{width:100%;height:100%;background-position:0 0;background-repeat:no-repeat;background-size:auto 100%;filter:drop-shadow(0 18px 20px rgba(0,0,0,.38)) drop-shadow(0 0 7px rgba(226,191,112,.38))}.tc-girl-shell.is-moving{animation:tcBounce .55s ease-in-out infinite alternate}.tc-girl-shell.is-moving .tc-girl-sprite{animation:tcWalk .84s steps(1,end) infinite}.tawakkul-contact.is-open .tc-girl-shell:not(.is-moving) .tc-girl-sprite{background-position:75% 0}
        .tc-options{display:flex;min-width:0;flex-direction:column;justify-content:center;opacity:0;transform:translateX(28px);transition:opacity .48s ease .62s,transform .7s cubic-bezier(.23,1,.32,1) .62s}.tawakkul-contact.is-open .tc-options{opacity:1;transform:translateX(0);transition-delay:.77s}.tc-options>p{margin:0 0 12px;color:rgba(255,255,255,.42);font-size:8px;font-weight:800;letter-spacing:.18em;text-transform:uppercase}.tc-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.tc-card{display:flex;min-height:132px;min-width:0;flex-direction:column;justify-content:space-between;border:1px solid rgba(255,255,255,.16);padding:16px;background:rgba(255,255,255,.045);transition:transform .2s ease,border-color .2s ease,background .2s ease}.tc-card:hover{border-color:var(--goldLight);background:rgba(195,154,72,.15);transform:translateY(-3px)}.tc-card>span{color:var(--goldLight);font-size:7px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.tc-card strong{color:#fff;font-family:Georgia,"Times New Roman",serif;font-size:clamp(.95rem,1.6vw,1.24rem);font-weight:500;line-height:1.08;overflow-wrap:anywhere}.tc-card small{color:rgba(255,255,255,.58);font-size:7px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
        .tc-rope{position:absolute;top:0;left:50%;z-index:30;width:90px;height:300px;pointer-events:none;transform:translateX(-50%) translateY(var(--pull-distance,0px));transition:transform .22s cubic-bezier(.23,1,.32,1),opacity .3s ease}.tc-rope.is-pulling{transition:none}.tawakkul-contact.is-open .tc-rope{z-index:5;opacity:.2}.tc-line{position:absolute;top:0;left:50%;width:3px;height:238px;border-radius:999px;background:repeating-linear-gradient(165deg,#806039 0,#806039 3px,#d9bd7b 3px,#d9bd7b 6px,#a07e4d 6px,#a07e4d 9px);box-shadow:0 0 16px rgba(195,154,72,.3);transform:translateX(-50%)}.tc-handle{position:absolute;top:226px;left:50%;width:58px;height:58px;border:1px solid var(--goldLight);border-radius:50%;background:radial-gradient(circle at 32% 25%,#f2d790 0,var(--gold) 50%,#86602d 100%);box-shadow:0 11px 28px rgba(0,0,0,.42),0 0 0 8px rgba(195,154,72,.09);transform:translateX(-50%)}.tc-handle:after{position:absolute;top:22px;left:22px;width:12px;height:12px;border:1px solid rgba(23,35,42,.55);border-radius:50%;content:""}.tc-rope-button{position:absolute;top:219px;left:50%;z-index:50;width:74px;height:74px;border:0;border-radius:50%;background:transparent;cursor:ns-resize;touch-action:none;transform:translateX(-50%)}.tc-rope-button:focus-visible{outline:2px solid var(--goldLight);outline-offset:7px}.tc-rope-button:disabled{cursor:wait}.tc-instruction{position:absolute;top:303px;left:50%;z-index:51;width:max-content;color:rgba(255,255,255,.55);font-size:8px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;transform:translateX(-50%)}
        @keyframes tcWalk{0%,19%{background-position:0 0}20%,39%{background-position:25% 0}40%,59%{background-position:50% 0}60%,79%{background-position:25% 0}80%,100%{background-position:0 0}}@keyframes tcBounce{from{margin-bottom:0}to{margin-bottom:4px}}
        @media(max-width:980px){.tc-wrap{grid-template-columns:minmax(0,.8fr) minmax(375px,1.2fr);gap:34px;width:min(100% - 48px,980px)}.tc-copy h1{font-size:clamp(3.5rem,6vw,5.6rem)}.tc-reveal{inset:68px 26px 58px;gap:12px}.tc-girl-shell{width:122px;height:344px}.tc-cue{right:-6px;font-size:6px}.tc-card{min-height:120px;padding:13px}.tc-card strong{font-size:1rem}}
        @media(max-width:760px){.tc-wrap{grid-template-columns:1fr;width:min(100% - 32px,620px);min-height:auto;padding:72px 0 0;gap:42px}.tc-copy h1{font-size:clamp(3.7rem,14.8vw,6.1rem)}.tc-stage{min-height:525px}.tc-meta,.tc-bottom{right:18px;left:18px}.tawakkul-contact.is-open .tc-stage{min-height:0}.tawakkul-contact.is-open .tc-reveal{position:relative;inset:auto;display:flex;flex-direction:column;gap:24px;padding:70px 16px 58px}.tc-girl{order:1;width:100%;height:330px;min-height:330px}.tc-options{order:2;width:100%}.tc-girl-shell{width:118px;height:330px}.tc-quote{top:9px}.tc-cue{right:10px;bottom:54px}.tc-card{min-height:126px;padding:17px}}
        @media(max-width:420px){.tc-wrap{width:min(100% - 30px,420px);padding-top:58px}.tc-copy h1{font-size:clamp(3.5rem,15.5vw,4.8rem)}.tc-copy p{margin-top:23px;font-size:13px}.tc-stage{min-height:510px}.tc-actions{gap:11px;margin-top:28px}.tc-main,.tc-learn{min-height:43px;padding:0 18px;font-size:9px}.tawakkul-contact.is-open .tc-reveal{padding:64px 12px 54px}.tc-girl{height:312px;min-height:312px}.tc-girl-shell{width:111px;height:312px}.tc-cards{grid-template-columns:1fr}.tc-card{min-height:114px}.tc-meta,.tc-bottom{font-size:7px;letter-spacing:.13em}.tc-instruction{font-size:7px}}
        @media(prefers-reduced-motion:reduce){.tawakkul-contact *{animation:none!important;transition-duration:.01ms!important}}
      `}</style>

      <div className="tc-wrap">
        <div className="tc-copy">
          <span className="tc-chip">Tawakkul</span>
          <h1 id="contact-heading">A thoughtful hello<br />can <em>open a door.</em></h1>
          <p>Connect with us and begin your journey with Tawakkul. Knowledge, faith and purpose — brought together in one place.</p>
          <div className="tc-actions">
            <button className="tc-main" type="button" onClick={() => !moving && reveal(!opened)}>{opened ? "Close the door" : "Contact us"}<b>→</b></button>
            <a className="tc-learn" href="/home">Learn more</a>
          </div>
        </div>

        <div className="tc-stage">
          <div className="tc-glow" aria-hidden="true" />
          <div className="tc-meta"><span>{opened ? "Contact / open" : "Pull the thread"}</span><span>{opened ? "Choose your way in" : "A thoughtful door awaits"}</span></div>
          <div id="contact-options" className="tc-reveal" aria-hidden={!opened}>
            <div className="tc-girl" role="img" aria-label="Girl walking in from the side and pointing at the contact cards">
              <p className="tc-quote">A thoughtful hello<br />can open a door.</p><span className="tc-cue">Your way in →</span>
              <div className={`tc-girl-shell ${moving ? "is-moving" : ""}`}><div className="tc-girl-sprite" style={{ backgroundImage: `url(${girlSprite})` }} /></div>
            </div>
            <div className="tc-options"><p>Choose your way in</p><div className="tc-cards">
              {channels.map(([label, value, href, action]) => <a key={label} href={href} className="tc-card" tabIndex={opened ? 0 : -1} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><span>{label}</span><strong>{value}</strong><small>{action} →</small></a>)}
            </div></div>
          </div>
          <div className={`tc-rope ${pulling ? "is-pulling" : ""}`} style={{ "--pull-distance": `${pull}px` }} aria-hidden="true"><span className="tc-line" /><span className="tc-handle" /></div>
          <button className="tc-rope-button" type="button" aria-expanded={opened} aria-controls="contact-options" aria-label={opened ? "Pull the rope down to hide contact options" : "Pull the rope down to reveal contact options"} onPointerDown={beginPull} onPointerMove={movePull} onPointerUp={finishPull} onPointerCancel={finishPull} onKeyDown={keyPull} disabled={moving} />
          <span className="tc-instruction" aria-hidden="true">{pulling ? "Keep pulling" : opened ? "Pull again to reset" : "Drag downward to reveal"}</span>
          <div className="tc-bottom"><span>Side view / graceful motion</span><span>{Math.min(100, Math.round((pull / PULL_THRESHOLD) * 100))}%</span></div>
        </div>
      </div>
    </section>
  );
}
