import { BadgeCheck, Brush, Camera, LayoutGrid, Store } from "lucide-react";
import { motion } from "framer-motion";
import ButtonLink from "../components/ButtonLink";
import HeroSlider from "../components/HeroSlider";
import ImageCard from "../components/ImageCard";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import StaggerGrid from "../components/StaggerGrid";
import TestimonialCard from "../components/TestimonialCard";
import { fadeUp } from "../lib/motion";
import {
  businessValues,
  collectionCards,
  heroSliderImages,
  lookbookPreview,
  testimonials,
  trustPoints,
} from "../data/siteContent";

const valueIcons = [Brush, LayoutGrid, Camera, Store];
const brandStatementWords = "Clothing that speaks before the logo does.".split(" ");
const manifestoContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.16,
    },
  },
};
const manifestoWord = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function HomePage() {
  return (
    <PageTransition>
      <main>
        <section className="px-4 pb-18 pt-8 md:px-6 md:pb-20 md:pt-10">
          <div className="mx-auto grid max-w-[1320px] gap-10 md:min-h-[80vh] md:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] md:items-center md:gap-[4.8rem]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 max-w-[33rem] space-y-8 md:order-1"
            >
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.34em] text-brand-accent">
                CLOTHING BRANDING STUDIO
              </p>
              <div className="space-y-5">
                <h1 className="font-heading text-[3rem] font-bold leading-[0.92] tracking-[-0.035em] text-brand-text md:text-[4.4rem]">
                  Build a style identity{" "}
                  <span className="font-serif italic font-semibold text-brand-text/92">people remember.</span>
                </h1>
                <p className="max-w-lg text-[1.02rem] leading-8 text-brand-muted">
                  A professional clothing brand presence built around curated collections, visual
                  storytelling, and a strong business identity.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <ButtonLink to="/collections">Explore Collections</ButtonLink>
                <ButtonLink to="/lookbook" variant="secondary">
                  View Lookbook
                </ButtonLink>
              </div>

              <StaggerGrid className="grid gap-4 border-t border-[color:var(--color-brand-border)] pt-8 sm:grid-cols-3">
                {trustPoints.map((item) => (
                  <motion.div key={item} variants={fadeUp} className="flex items-start gap-3">
                    <BadgeCheck size={18} className="mt-1 text-brand-accent" />
                    <p className="text-sm leading-6 text-brand-muted">{item}</p>
                  </motion.div>
                ))}
              </StaggerGrid>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 md:order-2 md:pl-2"
            >
              <HeroSlider items={heroSliderImages} />
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#241C17] px-4 py-[72px] text-[#F7F1E8] md:px-6 md:py-[100px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,121,69,0.18),transparent_28%),linear-gradient(180deg,rgba(43,33,27,0.94),rgba(36,28,23,1))]" />
          <div className="absolute right-[8%] top-[18%] h-56 w-56 rounded-full bg-[rgba(184,121,69,0.08)] blur-3xl" />
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 font-heading text-[16rem] font-bold leading-none text-white/[0.035] md:block">
            "
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={manifestoContainer}
            className="relative mx-auto flex min-h-[60vh] max-w-[1000px] flex-col items-center justify-center text-center"
          >
            <motion.div variants={manifestoWord} className="mb-7 flex flex-col items-center gap-4">
              <span className="h-px w-20 bg-brand-accent/80" />
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-brand-accent">
                Brand Statement
              </p>
            </motion.div>

            <motion.h2
              variants={manifestoContainer}
              className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center text-[clamp(42px,7vw,96px)] font-semibold italic leading-[0.95] tracking-[-0.025em] text-[#FFF7EE] [font-family:'Cormorant_Garamond',serif]"
            >
              {brandStatementWords.map((word) => (
                <motion.span key={word} variants={manifestoWord} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              variants={manifestoWord}
              className="mx-auto mt-8 max-w-[600px] text-[15px] leading-[1.7] text-[rgba(247,241,232,0.76)] md:text-[17px]"
            >
              We help your brand feel recognizable through strong visuals, refined presentation, and
              collection-first storytelling.
            </motion.p>
          </motion.div>
        </section>

        <MotionSection className="px-4 py-24 md:px-6">
          <div className="mx-auto max-w-[1240px] space-y-10">
            <SectionHeading
              eyebrow="Collection Preview"
              title="Three showcase directions built for clear fashion positioning."
              description="Each collection frame is designed to make the brand easier to understand, remember, and trust."
            />
            <StaggerGrid className="grid gap-6 md:grid-cols-3">
              {collectionCards.map((card) => (
                <ImageCard key={card.title} {...card} />
              ))}
            </StaggerGrid>
          </div>
        </MotionSection>

        <MotionSection className="px-4 py-24 md:px-6">
          <div className="mx-auto max-w-[1240px] space-y-10">
            <SectionHeading
              eyebrow="Lookbook Preview"
              title="Modern silhouettes, styled with purpose."
              description="A refined visual story built around clean textures, wearable statements, and everyday confidence."
            />
            <StaggerGrid className="grid gap-6 md:grid-cols-3 md:grid-rows-[minmax(19rem,auto)_minmax(19rem,auto)]">
              {lookbookPreview.map((item) => (
                <motion.figure
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`group overflow-hidden border border-[color:var(--color-brand-border)] bg-white/52 shadow-[0_14px_32px_rgba(45,31,23,0.05)] ${item.className}`}
                >
                  <div className="relative h-full min-h-[20rem] overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05, filter: "brightness(1.04)" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-brand-dark/8 transition duration-300 group-hover:bg-brand-dark/28" />
                  </div>
                </motion.figure>
              ))}
            </StaggerGrid>
          </div>
        </MotionSection>

        <MotionSection className="bg-brand-dark px-4 py-24 md:px-6">
          <div className="mx-auto max-w-[1240px] space-y-10">
            <SectionHeading
              eyebrow="Business Value"
              title="More than clothing. A complete brand presence."
              description="Every section supports recognition, trust, and stronger store conversion."
              dark
            />
            <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {businessValues.map((item, index) => {
                const Icon = valueIcons[index];
                return (
                  <motion.article key={item.title} variants={fadeUp} className="space-y-5 border border-white/12 bg-white/6 p-7 text-white">
                    <Icon size={22} className="text-brand-accent" />
                    <h3 className="font-heading text-2xl font-bold">{item.title}</h3>
                    <p className="text-base leading-8 text-white/72">{item.text}</p>
                  </motion.article>
                );
              })}
            </StaggerGrid>
          </div>
        </MotionSection>

        <MotionSection className="px-4 py-24 md:px-6">
          <div className="mx-auto max-w-[1240px] space-y-10">
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by labels that needed stronger presentation."
              description="Professional, realistic feedback from founders, studios, and image-led clothing brands."
            />
            <StaggerGrid className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <TestimonialCard key={item.name} {...item} />
              ))}
            </StaggerGrid>
          </div>
        </MotionSection>

        <MotionSection className="px-4 pb-28 pt-6 md:px-6">
          <div className="mx-auto max-w-[1240px] border border-[color:var(--color-brand-border)] bg-brand-dark px-6 py-14 text-white md:px-12 md:py-18">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div className="space-y-5">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.34em] text-brand-accent">
                  Final CTA
                </p>
                <h2 className="font-heading text-3xl font-bold leading-tight md:text-5xl">
                  Ready to make your clothing brand look premium?
                </h2>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <ButtonLink to="/contact">Contact Us</ButtonLink>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-white/18 px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:border-white"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </MotionSection>
      </main>
    </PageTransition>
  );
}

export default HomePage;
