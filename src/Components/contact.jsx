import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const girl = container.current.querySelector(".contact-girl");

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
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#080604]
        px-5
        py-16
        text-white
        sm:px-8
        lg:px-12
      "
    >
      {/* =====================================================
          MAIN CONTACT WRAPPER
      ====================================================== */}
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1500px]
          flex-col
          lg:min-h-[850px]
          lg:flex-row
          lg:items-center
        "
      >
        {/* =====================================================
            GIRL SIDE
        ====================================================== */}
        <div
          className="
            relative
            flex
            min-h-[500px]
            w-full
            shrink-0
            items-end
            justify-center
            lg:min-h-[750px]
            lg:w-[42%]
            lg:justify-center
            xl:w-[40%]
          "
        >
          {/* Glow behind girl */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-16
              left-1/2
              h-[260px]
              w-[260px]
              -translate-x-1/2
              rounded-full
              bg-amber-400/10
              blur-[90px]
              sm:h-[330px]
              sm:w-[330px]
              lg:h-[400px]
              lg:w-[400px]
            "
          />

          {/* Girl wrapper */}
          <div
            className="
              relative
              z-10
              flex
              h-[460px]
              w-full
              items-end
              justify-center
              sm:h-[520px]
              lg:h-[650px]
              xl:h-[700px]
            "
          >
            <img
              src="/girl.png"
              alt="Elegant modest woman"
              className="
                contact-girl
                block
                h-auto
                w-[250px]
                max-w-full
                object-contain
                object-bottom
                sm:w-[300px]
                md:w-[340px]
                lg:w-[400px]
                xl:w-[450px]
              "
            />
          </div>
        </div>

        {/* =====================================================
            BIG SPACE BETWEEN GIRL & CONTACT
        ====================================================== */}

        <div
          className="
            hidden
            lg:block
            lg:w-[90px]
            xl:w-[130px]
            2xl:w-[160px]
            shrink-0
          "
        />

        {/* =====================================================
            CONTACT CONTENT
        ====================================================== */}
        <div
          className="
            contact-content
            relative
            z-20
            w-full
            flex-1
            pt-10
            lg:pt-0
            lg:pr-4
            xl:pr-10
          "
        >
          {/* Label */}
          <p
            className="
              mb-4
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-amber-400
              sm:text-sm
            "
          >
            Get in touch
          </p>

          {/* Heading */}
          <h1
            className="
              max-w-[750px]
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-tight
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
            "
          >
            Let&apos;s start a

            <span
              className="
                block
                text-amber-400
              "
            >
              meaningful conversation.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-[620px]
              text-sm
              leading-7
              text-white/60
              sm:text-base
              lg:text-lg
            "
          >
            Have a question, suggestion, or simply want to connect with us?
            We&apos;d love to hear from you. Reach out and let&apos;s build
            something meaningful together.
          </p>

          {/* =====================================================
              CONTACT CARDS
          ====================================================== */}
          <div
            className="
              mt-10
              grid
              w-full
              max-w-[700px]
              grid-cols-1
              gap-4
              sm:grid-cols-2
            "
          >
            {/* EMAIL */}
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
                hover:border-amber-400/40
                hover:bg-amber-400/5
              "
            >
              <span
                className="
                  mb-3
                  block
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                Email
              </span>

              <span
                className="
                  block
                  break-all
                  text-sm
                  text-white/80
                  transition
                  group-hover:text-amber-400
                "
              >
                hello@tawakkul.com
              </span>
            </a>

            {/* WHATSAPP */}
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
                hover:border-amber-400/40
                hover:bg-amber-400/5
              "
            >
              <span
                className="
                  mb-3
                  block
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                WhatsApp
              </span>

              <span
                className="
                  block
                  text-sm
                  text-white/80
                  transition
                  group-hover:text-amber-400
                "
              >
                Chat with us
              </span>
            </a>

            {/* INSTAGRAM */}
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
                hover:border-amber-400/40
                hover:bg-amber-400/5
              "
            >
              <span
                className="
                  mb-3
                  block
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                Instagram
              </span>

              <span
                className="
                  block
                  text-sm
                  text-white/80
                  transition
                  group-hover:text-amber-400
                "
              >
                Follow our journey
              </span>
            </a>

            {/* LOCATION */}
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
              "
            >
              <span
                className="
                  mb-3
                  block
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                Location
              </span>

              <span className="block text-sm text-white/80">
                Online • Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}