import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const girl = document.querySelector(".contact-girl");

      gsap.from(".contact-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(girl, {
        x: 180,
        opacity: 0,
        duration: 1.4,
        delay: 0.3,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative min-h-screen overflow-hidden bg-[#080604] px-5 py-16 text-white sm:px-8 lg:px-12"
    >
      {/* MAIN CONTENT */}
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        {/* HEADING */}
        <div className="contact-content relative z-10 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-400">
            Get in touch
          </p>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s start a
            <span className="block text-amber-400">meaningful conversation.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Have a question, suggestion, or simply want to connect with us?
            We&apos;d love to hear from you.
          </p>
        </div>

       <section className="relative w-full overflow-hidden bg-[#080706] text-white">
  {/* =========================
      CONTACT SECTION
  ========================== */}
  <div
    className="
      mx-auto
      flex
      min-h-[850px]
      w-full
      max-w-[1600px]
      flex-col
      px-5
      py-20
      sm:px-8
      lg:min-h-[780px]
      lg:flex-row
      lg:items-center
      lg:px-12
      xl:px-20
    "
  >

    {/* =====================================================
        GIRL AREA
        Desktop: LEFT 38%
        Mobile: TOP
    ====================================================== */}
    <div
      className="
        relative
        flex
        w-full
        shrink-0
        items-end
        justify-center
        pb-16
        sm:pb-20
        lg:h-[650px]
        lg:w-[40%]
        lg:items-end
        lg:justify-center
        lg:pb-0
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-20
          left-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          rounded-full
          bg-[#d6b47a]/10
          blur-[90px]
          lg:h-[350px]
          lg:w-[350px]
        "
      />

      {/* Girl */}
      <div
        className="
          relative
          z-10
          flex
          h-[430px]
          w-full
          max-w-[340px]
          items-end
          justify-center
          sm:h-[480px]
          sm:max-w-[380px]
          lg:h-[600px]
          lg:max-w-[420px]
        "
      >
        <div
          className="
            contact-girl-shell
            relative
            flex
            h-full
            w-full
            items-end
            justify-center
          "
        >
          <div
            className="
              contact-girl-sprite
              h-full
              w-full
              bg-contain
              bg-bottom
              bg-no-repeat
            "
          />
        </div>
      </div>
    </div>


    {/* =====================================================
        LARGE GAP
        This is what stops girl from touching contact
    ====================================================== */}
    <div
      className="
        hidden
        lg:block
        lg:w-[8%]
        xl:w-[10%]
      "
    />


    {/* =====================================================
        CONTACT CONTENT
        Desktop: RIGHT 52%
        Mobile: BELOW GIRL
    ====================================================== */}
    <div
      className="
        relative
        z-20
        flex
        w-full
        flex-1
        flex-col
        justify-center
        lg:w-[52%]
      "
    >
      {/* Small label */}
      <span
        className="
          mb-5
          inline-flex
          w-fit
          rounded-full
          border
          border-[#d6b47a]/30
          bg-[#d6b47a]/5
          px-4
          py-2
          text-[11px]
          uppercase
          tracking-[0.3em]
          text-[#d6b47a]
        "
      >
        Contact Us
      </span>

      {/* Heading */}
      <h2
        className="
          max-w-[700px]
          text-4xl
          font-light
          leading-[1.05]
          tracking-[-0.03em]
          sm:text-5xl
          md:text-6xl
          lg:text-6xl
          xl:text-7xl
        "
      >
        Let&apos;s start a
        <br />

        <span className="text-[#d6b47a]">
          meaningful conversation.
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mt-7
          max-w-[600px]
          text-sm
          leading-7
          text-white/60
          sm:text-base
        "
      >
        Have a question, suggestion, or simply want to connect?
        We&apos;d love to hear from you. Reach out and let&apos;s
        build something meaningful together.
      </p>


      {/* =====================================================
          CONTACT LINKS
      ====================================================== */}
      <div
        className="
          mt-10
          grid
          w-full
          max-w-[650px]
          grid-cols-1
          gap-4
          sm:grid-cols-2
        "
      >

        {/* Email */}
        <a
          href="mailto:hello@tawakkul.com"
          className="
            group
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#d6b47a]/40
            hover:bg-[#d6b47a]/5
          "
        >
          <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
            Email
          </span>

          <span className="break-all text-sm text-white/80 transition group-hover:text-[#d6b47a]">
            hello@tawakkul.com
          </span>
        </a>


        {/* WhatsApp */}
        <a
          href="#"
          className="
            group
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#d6b47a]/40
            hover:bg-[#d6b47a]/5
          "
        >
          <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
            WhatsApp
          </span>

          <span className="text-sm text-white/80 transition group-hover:text-[#d6b47a]">
            Chat with us
          </span>
        </a>


        {/* Instagram */}
        <a
          href="#"
          className="
            group
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#d6b47a]/40
            hover:bg-[#d6b47a]/5
          "
        >
          <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
            Instagram
          </span>

          <span className="text-sm text-white/80 transition group-hover:text-[#d6b47a]">
            Follow our journey
          </span>
        </a>


        {/* Location */}
        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-5
          "
        >
          <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
            Location
          </span>

          <span className="text-sm text-white/80">
            Online • Worldwide
          </span>
        </div>

      </div>
    </div>
  </div>
</section>
              <img
                src="/girl.png"
                alt="Elegant modest woman"
                className="
                  block
                  h-auto
                  w-[220px]
                  max-w-full
                  object-contain
                  sm:w-[270px]
                  md:w-[310px]
                  lg:w-[360px]
                  xl:w-[410px]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}