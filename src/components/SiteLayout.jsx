import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { navLinks } from "../data/siteContent";
import BrandLockup from "./BrandLockup";
import ButtonLink from "./ButtonLink";
import Paragraph from "./Paragraph";

function SiteLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const shellRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 769px)");
    if (!mediaQuery.matches) return undefined;

    let frameId = 0;
    const updatePointer = (event) => {
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        const x = ((event.clientX / window.innerWidth) - 0.5) * 16;
        const y = ((event.clientY / window.innerHeight) - 0.5) * 16;
        shellRef.current?.style.setProperty("--ambient-pointer-x", `${x.toFixed(2)}px`);
        shellRef.current?.style.setProperty("--ambient-pointer-y", `${y.toFixed(2)}px`);
      });
    };

    const resetPointer = () => {
      shellRef.current?.style.setProperty("--ambient-pointer-x", "0px");
      shellRef.current?.style.setProperty("--ambient-pointer-y", "0px");
    };

    window.addEventListener("mousemove", updatePointer, { passive: true });
    window.addEventListener("mouseleave", resetPointer);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", updatePointer);
      window.removeEventListener("mouseleave", resetPointer);
    };
  }, []);

  return (
    <div
      ref={shellRef}
      style={{ "--ambient-pointer-x": "0px", "--ambient-pointer-y": "0px" }}
      className="relative min-h-screen bg-transparent text-brand-text"
    >
      <div className="site-ambient" aria-hidden="true" />
      <div className="site-ambient-mesh" aria-hidden="true" />
      <div className="site-ambient-diamond" aria-hidden="true" />
      <div className="site-grain" aria-hidden="true" />
      <header
        className={`sticky top-0 z-40 border-b transition duration-300 ${
          scrolled
            ? "border-[color:var(--color-brand-border)] bg-[rgba(247,241,232,0.78)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-4 py-5 md:px-6">
          <BrandLockup shared asLink className="relative z-[2]" />

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `relative type-eyebrow tracking-[0.24em] transition ${
                    isActive ? "text-brand-accent" : "text-brand-text hover:text-brand-accent"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ButtonLink to="/shop" className="px-5 py-3">Shop Now</ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-[color:var(--color-brand-border)] lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="border-t border-[color:var(--color-brand-border)] bg-brand-bg-soft/96 px-4 py-4 backdrop-blur-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-[1240px] flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className="type-eyebrow text-brand-text"
                  >
                    {link.label}
                  </NavLink>
                ))}
                <ButtonLink to="/shop" className="mt-2">Shop Now</ButtonLink>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <Outlet />

      <footer className="relative border-t border-[color:var(--color-brand-border)] bg-brand-bg-soft/92">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-6">
          <div className="space-y-5">
            <BrandLockup />
            <Paragraph max="max-w-md">
              Clothing that speaks before the logo does. Premium clothing branding studio for labels
              that want a clearer visual identity and stronger online presence.
            </Paragraph>
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-brand-accent/55" />
              <span className="h-2 w-2 rotate-45 border border-brand-accent" />
            </div>
          </div>

          <div className="space-y-4">
            <p className="type-eyebrow text-brand-text">Quick Links</p>
            <div className="grid gap-3 text-brand-muted">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href} className="hover:text-brand-accent">
                  {link.label}
                </Link>
              ))}
              <Link to="/testimonials" className="hover:text-brand-accent">
                Testimonials
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="type-eyebrow text-brand-text">Contact</p>
            <div className="space-y-2 text-brand-muted">
              <p>Studio Address Placeholder, Fashion District</p>
              <p>hello@noiratelier.com</p>
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[color:var(--color-brand-border)] px-4 py-4 text-center text-sm text-brand-muted md:px-6">
          © 2026 NOIR ATELIER. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
