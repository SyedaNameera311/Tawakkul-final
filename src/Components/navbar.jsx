import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import { Link, useLocation } from "react-router-dom";


// ======================================================
// MAIN NAVIGATION
// ======================================================

const navigation = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Courses",
    href: "/course",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];


// ======================================================
// FOUR TAWAKKUL WORLDS
// ======================================================

const worlds = [
  {
    number: "01",
    title: "Knowledge & Faith",
    description: "Qur'an, Tafseer, Arabic & Islamic learning",
    href: "/course",
  },
  {
    number: "02",
    title: "Modesty & Identity",
    description: "Modest living, fashion & haya",
    href: "/modesty",
  },
  {
    number: "03",
    title: "Meaningful Media",
    description: "Purposeful audio & creative resources",
    href: "/media",
  },
  {
    number: "04",
    title: "Ethical Digital Building",
    description: "Build your digital presence with values",
    href: "/build",
  },
];


export default function Navbar() {

  const location = useLocation();


  const isActive = (href) => {
    if (href === "/home") {
      return location.pathname === "/" || location.pathname === "/home";
    }

    return location.pathname.startsWith(href);
  };


  return (

    <Disclosure
      as="nav"
      className="
        sticky top-0 z-50
        border-b border-white/[0.07]
        bg-[#070605]/80
        backdrop-blur-2xl
      "
    >

      {({ open }) => (

        <>

          {/* ==================================================
              DESKTOP / MAIN NAV
          =================================================== */}

          <div className="mx-auto max-w-7xl px-5 sm:px-8">

            <div className="relative flex h-[76px] items-center justify-between">


              {/* ==================================================
                  LOGO
              =================================================== */}

              <div className="flex items-center">

                {/* Mobile menu */}

                <div className="mr-3 lg:hidden">

                  <DisclosureButton
                    className="
                      inline-flex items-center justify-center
                      rounded-full
                      border border-white/10
                      bg-white/[0.03]
                      p-2.5
                      text-white/60
                      transition
                      hover:bg-white/[0.07]
                      hover:text-white
                    "
                  >

                    <span className="sr-only">
                      Open main menu
                    </span>

                    {open ? (
                      <XMarkIcon className="size-5" />
                    ) : (
                      <Bars3Icon className="size-5" />
                    )}

                  </DisclosureButton>

                </div>


                <Link
                  to="/home"
                  className="group flex items-center gap-3"
                >

                  {/* Logo mark */}

                  <div
                    className="
                      relative
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-amber-400/20
                      bg-gradient-to-br
                      from-amber-400/15
                      to-white/[0.02]
                      shadow-[0_0_30px_rgba(245,158,11,0.08)]
                    "
                  >

                    <span
                      className="
                        text-lg font-semibold
                        text-amber-400
                        transition-transform duration-500
                        group-hover:rotate-12
                      "
                    >
                      ت
                    </span>

                  </div>


                  {/* Brand */}

                  <div className="hidden sm:block">

                    <div className="text-sm font-semibold tracking-[0.22em] text-white">
                      TAWAKKUL
                    </div>

                    <div className="mt-0.5 text-[8px] uppercase tracking-[0.28em] text-white/30">
                      Trust & Tranquility
                    </div>

                  </div>

                </Link>

              </div>


              {/* ==================================================
                  DESKTOP LINKS
              =================================================== */}

              <div className="hidden lg:flex lg:items-center lg:gap-1">

                {navigation.map((item) => {

                  const active = isActive(item.href);

                  return (

                    <Link
                      key={item.name}
                      to={item.href}
                      className={`
                        relative
                        rounded-full
                        px-4 py-2.5
                        text-sm font-medium
                        transition-all duration-300

                        ${
                          active
                            ? "bg-white/[0.07] text-white"
                            : "text-white/45 hover:bg-white/[0.04] hover:text-white"
                        }
                      `}
                    >

                      {item.name}

                      {active && (

                        <span
                          className="
                            absolute
                            bottom-1
                            left-1/2
                            h-px
                            w-5
                            -translate-x-1/2
                            bg-amber-400
                          "
                        />

                      )}

                    </Link>

                  );

                })}


                {/* ==================================================
                    EXPLORE DROPDOWN
                =================================================== */}

                <Menu as="div" className="relative ml-1">

                  <MenuButton
                    className="
                      group
                      inline-flex items-center gap-1
                      rounded-full
                      px-4 py-2.5
                      text-sm font-medium
                      text-white/45
                      transition
                      hover:bg-white/[0.04]
                      hover:text-white
                    "
                  >

                    Explore

                    <ChevronDownIcon
                      className="
                        size-3.5
                        transition-transform
                        group-data-open:rotate-180
                      "
                    />

                  </MenuButton>


                  <MenuItems
                    transition
                    className="
                      absolute
                      right-0
                      mt-4
                      w-[360px]
                      origin-top-right
                      rounded-2xl
                      border border-white/10
                      bg-[#11100e]/95
                      p-2
                      shadow-2xl
                      backdrop-blur-2xl
                      outline-none

                      data-closed:scale-95
                      data-closed:opacity-0
                      data-enter:duration-200
                      data-enter:ease-out
                      data-leave:duration-150
                      data-leave:ease-in
                    "
                  >

                    <div className="px-4 pb-3 pt-3">

                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-400">
                        The Tawakkul World
                      </p>

                      <p className="mt-1 text-xs text-white/30">
                        Choose where you want to begin.
                      </p>

                    </div>


                    {worlds.map((world) => (

                      <MenuItem key={world.number}>

                        <Link
                          to={world.href}
                          className="
                            group
                            flex items-center gap-4
                            rounded-xl
                            p-3
                            transition
                            data-focus:bg-white/[0.05]
                          "
                        >

                          <div
                            className="
                              flex h-9 w-9 shrink-0
                              items-center justify-center
                              rounded-lg
                              border border-white/10
                              bg-white/[0.03]
                              text-[10px]
                              font-semibold
                              text-amber-400/70
                              transition
                              group-hover:border-amber-400/30
                              group-hover:text-amber-400
                            "
                          >
                            {world.number}
                          </div>


                          <div className="min-w-0 flex-1">

                            <p className="text-sm font-medium text-white/80">
                              {world.title}
                            </p>

                            <p className="mt-0.5 truncate text-[11px] text-white/30">
                              {world.description}
                            </p>

                          </div>


                          <ArrowRightIcon
                            className="
                              size-4
                              text-white/15
                              transition
                              group-hover:translate-x-1
                              group-hover:text-amber-400
                            "
                          />

                        </Link>

                      </MenuItem>

                    ))}

                  </MenuItems>

                </Menu>

              </div>


              {/* ==================================================
                  RIGHT SIDE
              =================================================== */}

              <div className="flex items-center gap-2">


                {/* About button */}

                <Link
                  to="/about"
                  className="
                    hidden
                    rounded-full
                    px-4 py-2.5
                    text-sm font-medium
                    text-white/40
                    transition
                    hover:text-white
                    md:block
                  "
                >
                  Our Story
                </Link>


                {/* CTA */}

                <Link
                  to="/course"
                  className="
                    group
                    inline-flex items-center gap-2
                    rounded-full
                    bg-amber-400
                    px-5 py-2.5
                    text-xs font-bold
                    text-black
                    shadow-[0_0_25px_rgba(245,158,11,0.08)]
                    transition-all duration-300
                    hover:scale-[1.03]
                    hover:bg-amber-300
                    hover:shadow-[0_0_35px_rgba(245,158,11,0.15)]
                  "
                >

                  Start Learning

                  <ArrowRightIcon
                    className="
                      size-3.5
                      transition-transform
                      group-hover:translate-x-0.5
                    "
                  />

                </Link>

              </div>

            </div>

          </div>


          {/* ==================================================
              MOBILE MENU
          =================================================== */}

          <DisclosurePanel
            className="
              border-t border-white/[0.07]
              bg-[#0b0a08]/95
              backdrop-blur-2xl
              lg:hidden
            "
          >

            <div className="space-y-1 px-5 pb-6 pt-4">


              {/* Main navigation */}

              {navigation.map((item) => {

                const active = isActive(item.href);

                return (

                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={`
                      block
                      rounded-xl
                      px-4 py-3
                      text-sm font-medium
                      transition

                      ${
                        active
                          ? "bg-white/[0.06] text-white"
                          : "text-white/50 hover:bg-white/[0.04] hover:text-white"
                      }
                    `}
                  >

                    <div className="flex items-center justify-between">

                      {item.name}

                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      )}

                    </div>

                  </DisclosureButton>

                );

              })}


              {/* Divider */}

              <div className="my-5 h-px bg-white/[0.07]" />


              {/* Four worlds */}

              <p className="px-4 pb-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-400">
                Explore Tawakkul
              </p>


              {worlds.map((world) => (

                <DisclosureButton
                  key={world.number}
                  as={Link}
                  to={world.href}
                  className="
                    group
                    flex w-full items-center gap-3
                    rounded-xl
                    px-4 py-3
                    text-left
                    transition
                    hover:bg-white/[0.04]
                  "
                >

                  <span className="text-[10px] font-semibold text-amber-400/60">
                    {world.number}
                  </span>

                  <span className="flex-1">

                    <span className="block text-sm text-white/70 group-hover:text-white">
                      {world.title}
                    </span>

                    <span className="mt-0.5 block text-[10px] text-white/25">
                      {world.description}
                    </span>

                  </span>

                  <ArrowRightIcon
                    className="
                      size-4
                      text-white/15
                      transition
                      group-hover:translate-x-1
                      group-hover:text-amber-400
                    "
                  />

                </DisclosureButton>

              ))}


              {/* Mobile CTA */}

              <div className="pt-4">

                <DisclosureButton
                  as={Link}
                  to="/course"
                  className="
                    flex w-full
                    items-center justify-center
                    rounded-full
                    bg-amber-400
                    px-5 py-3.5
                    text-sm font-bold
                    text-black
                    transition
                    hover:bg-amber-300
                  "
                >
                  Begin Your Journey
                </DisclosureButton>

              </div>

            </div>

          </DisclosurePanel>

        </>

      )}

    </Disclosure>
  );
}