import { useRef } from "react";
import { ArrowDown, BadgeCheck, Brush, Camera, LayoutGrid, MoveRight, Store } from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";
import ButtonLink from "../components/ButtonLink";
import HeroSlider from "../components/HeroSlider";
import ImageReveal from "../components/ImageReveal";
import ImageCard from "../components/ImageCard";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionWrapper from "../components/SectionWrapper";
import StaggerGrid from "../components/StaggerGrid";
import StatsRow from "../components/StatsRow";
import TestimonialCard from "../components/TestimonialCard";
import Eyebrow from "../components/Eyebrow";
import Paragraph from "../components/Paragraph";
import { fadeUp, easeLuxury, paragraphReveal, sectionReveal, viewportOnce, cardHover } from "../lib/motion";
import {
  businessValues,
  collectionCards,
  heroSliderImages,
  identitySpotlight,
  lookbookPreview,
  stats,
  testimonials,
  trustPoints,
} from "../data/siteContent";

const valueIcons = [Brush, LayoutGrid, Camera, Store];
const brandStatementWords = ["Clothing", "that", "speaks", "before", "the", "logo", "does."];

function HomePage() {
  const manifestoRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 36, damping: 18, mass: 1.2 });
  const springY = useSpring(pointerY, { stiffness: 36, damping: 18, mass: 1.2 });
  const { scrollYProgress: manifestoProgress } = useScroll({
    target: manifestoRef,
    offset: ["start 85%", "end 20%"],
  });
  const manifestoContentY = useTransform(manifestoProgress, [0, 0.45, 1], [28, 0, -18]);
  const manifestoContentOpacity = useTransform(manifestoProgress, [0, 0.18, 0.82, 1], [0.72, 1, 1, 0.94]);
  const manifestoGlowY = useTransform(manifestoProgress, [0, 1], [24, -24]);
  const manifestoGlowOpacity = useTransform(manifestoProgress, [0, 0.35, 0.75, 1], [0.04, 0.09, 0.09, 0.05]);
  const manifestoBlobY = useTransform(manifestoProgress, [0, 1], [18, -28]);
  const manifestoBlobOpacity = useTransform(manifestoProgress, [0, 0.28, 0.8, 1], [0.05, 0.12, 0.12, 0.07]);

  const handleManifestoMove = (event) => {
    if (window.innerWidth < 769) return;
    const rect = manifestoRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
    pointerX.set(x);
    pointerY.set(y);
  };

  const resetManifestoMove = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <PageTransition>
      <main>
        <section className="relative px-4 pb-20 pt-8 md:px-6 md:pb-24 md:pt-10">
          <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="hero-radial-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="mx-auto grid max-w-[1320px] gap-12 md:min-h-[84vh] md:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] md:items-center md:gap-[5.6rem]">
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              animate="visible"
              className="order-2 max-w-[33rem] space-y-8 md:order-1"
            >
              <div className="space-y-4">
                <Eyebrow>Clothing Branding Studio</Eyebrow>

                <div className="max-w-[14ch]">
                  <AnimatedHeading
                    text="Build a style identity people remember."
                    as="h1"
                    className="type-display text-brand-text md:text-[clamp(56px,6vw,82px)]"
                  />
                </div>

                <motion.div variants={paragraphReveal} initial="hidden" animate="visible">
                  <Paragraph max="max-w-xl">
                    A premium brand presence shaped through curated visuals, refined storytelling, and
                    collection-first presentation.
                  </Paragraph>
                </motion.div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <ButtonLink to="/collections">Explore Collections</ButtonLink>
                <ButtonLink to="/lookbook" variant="secondary">
                  View Lookbook
                </ButtonLink>
              </div>

              <StaggerGrid className="grid gap-4 border-t border-[color:var(--color-brand-border)] pt-7 sm:grid-cols-3">
                {trustPoints.map((item) => (
                  <motion.div key={item} variants={fadeUp} className="flex items-start gap-3">
                    <BadgeCheck size={18} className="mt-1 text-brand-accent" />
                    <p className="type-body text-sm text-brand-muted">{item}</p>
                  </motion.div>
                ))}
              </StaggerGrid>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.7, ease: easeLuxury }}
                className="hidden items-center gap-3 pt-1 text-brand-muted md:flex"
              >
                <ArrowDown size={16} className="text-brand-accent" />
                <span className="type-eyebrow text-[10px]">
                  Scroll for the manifesto
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              initial="hidden"
              animate="visible"
              transition={{ ...sectionReveal.visible.transition, delay: 0.08 }}
              className="order-1 md:order-2 md:pl-2"
            >
              <HeroSlider items={heroSliderImages} />
            </motion.div>
          </div>
        </section>

        <SectionWrapper
          fullBleed
          dark
          className="min-h-[60vh] bg-[#241C17] py-[88px] md:py-[112px]"
        >
          <section
            ref={manifestoRef}
            onMouseMove={handleManifestoMove}
            onMouseLeave={resetManifestoMove}
            className="relative overflow-hidden px-4 md:px-6"
          >
            <div className="mx-auto flex min-h-[60vh] max-w-[1000px] flex-col items-center justify-center text-center">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,121,69,0.16),transparent_24%),linear-gradient(180deg,rgba(43,33,27,0.96),rgba(36,28,23,1))]" />
              <motion.div
                style={{ x: springX, y: useTransform([manifestoGlowY, springY], ([baseY, cursorY]) => baseY + cursorY * 0.7), opacity: manifestoGlowOpacity }}
                className="absolute right-[10%] top-[18%] h-56 w-56 rounded-full bg-[rgba(184,121,69,0.12)] blur-[118px]"
              />
              <motion.div
                style={{ x: useTransform(springX, (v) => v * -0.55), y: useTransform([manifestoBlobY, springY], ([baseY, cursorY]) => baseY + cursorY * -0.45), opacity: manifestoBlobOpacity }}
                className="absolute left-[14%] top-[16%] h-72 w-72 rounded-[38%] border border-[rgba(247,241,232,0.08)] bg-[linear-gradient(145deg,rgba(247,241,232,0.08),rgba(184,121,69,0.04))] blur-[108px]"
              />
              <motion.div
                style={{ x: useTransform(springX, (v) => v * 0.35), y: useTransform(springY, (v) => v * 0.3) }}
                className="absolute right-[19%] top-[26%] h-40 w-40 rotate-45 rounded-[24%] border border-[rgba(247,241,232,0.08)] bg-[radial-gradient(circle_at_32%_32%,rgba(247,241,232,0.12),transparent_44%),linear-gradient(145deg,rgba(184,121,69,0.08),rgba(247,241,232,0.02))] opacity-70 blur-[38px]"
              />
              <motion.div
                style={{ y: manifestoContentY, opacity: manifestoContentOpacity }}
                className="relative space-y-7"
              >
                <div className="mx-auto flex w-fit items-center gap-3">
                  <span className="h-[1px] w-10 bg-brand-accent/52" />
                  <span className="h-2 w-2 rotate-45 border border-brand-accent/85" />
                  <p className="type-eyebrow text-brand-accent">Brand Statement</p>
                </div>

                <AnimatedHeading
                  text="Clothing that speaks before the logo does."
                  as="h2"
                  className="brand-statement-line type-display mx-auto max-w-[900px] text-[clamp(42px,6vw,82px)] leading-[1.02] tracking-[-0.018em] text-[#FFF7EE]"
                  wordClassName="highlight-word"
                />

                <motion.p
                  variants={paragraphReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ ...paragraphReveal.visible.transition, delay: 0.12 }}
                  className="type-body mx-auto max-w-[600px] text-[rgba(247,241,232,0.74)]"
                >
                  We help your brand feel recognizable through strong visuals, refined presentation, and
                  collection-first storytelling.
                </motion.p>
              </motion.div>
            </div>
          </section>
        </SectionWrapper>

        <SectionWrapper className="py-24 md:py-28" containerClassName="grid items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <MotionSection className="order-2 md:order-1">
            <div className="space-y-5">
              <Eyebrow>{identitySpotlight.eyebrow}</Eyebrow>
              <h2 className="type-heading max-w-xl text-brand-text md:text-[clamp(34px,4vw,54px)]">
                {identitySpotlight.title}
              </h2>
              <Paragraph max="max-w-lg">
                {identitySpotlight.text}
              </Paragraph>
              <ButtonLink to="/about" variant="secondary">
                Discover the brand
              </ButtonLink>
            </div>
          </MotionSection>

          <MotionSection className="order-1 md:order-2">
            <motion.div whileHover={cardHover} className="relative ml-auto max-w-[34rem] overflow-hidden rounded-[1.75rem] border border-[color:var(--color-brand-border)] bg-white/40 p-3 shadow-[0_18px_38px_rgba(45,31,23,0.06)]">
              <div className="absolute left-8 top-8 z-[2] flex items-center gap-3">
                <span className="h-[1px] w-10 bg-brand-accent/58" />
                <span className="h-2 w-2 rotate-45 border border-brand-accent" />
              </div>
              <ImageReveal
                src={identitySpotlight.image}
                alt="Exclusive fashion portrait for NOIR ATELIER identity section"
                className="rounded-[1.2rem]"
                imgClassName="h-[30rem] w-full rounded-[1.2rem] object-cover md:h-[42rem]"
              />
            </motion.div>
          </MotionSection>
        </SectionWrapper>

        <SectionWrapper className="py-22 md:py-26" containerClassName="space-y-12">
          <SectionHeading
            eyebrow="Collections"
            title="Three collection directions shaped like campaign worlds, not product shelves."
            description="The collections are framed to communicate mood, positioning, and business clarity before anything else."
          />
          <StaggerGrid className="grid gap-6 md:grid-cols-3">
            {collectionCards.map((card) => (
              <ImageCard key={card.title} {...card} />
            ))}
          </StaggerGrid>
        </SectionWrapper>

        <SectionWrapper className="py-22 md:py-26" containerClassName="space-y-12">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <SectionHeading
              eyebrow="Lookbook"
              title="Modern silhouettes, styled with purpose."
              description="A refined visual story built around clean textures, wearable statements, and everyday confidence."
            />
            <div className="md:justify-self-end">
              <ButtonLink to="/lookbook" variant="secondary">
                Open Full Lookbook
              </ButtonLink>
            </div>
          </div>

          <StaggerGrid className="grid gap-6 md:grid-cols-3 md:grid-rows-[minmax(19rem,auto)_minmax(19rem,auto)]">
            {lookbookPreview.map((item) => (
              <motion.figure
                key={item.title}
                variants={fadeUp}
                whileHover={cardHover}
                className={`group relative overflow-hidden rounded-[1.2rem] border border-[color:var(--color-brand-border)] bg-white/52 shadow-[0_14px_32px_rgba(45,31,23,0.05)] ${item.className}`}
              >
                <div className="relative h-full min-h-[20rem] overflow-hidden">
                  <ImageReveal
                    src={item.image}
                    alt={item.title}
                    className="h-full min-h-[20rem]"
                    imgClassName="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-brand-dark/6 to-transparent transition duration-500 group-hover:from-brand-dark/58" />
                  <figcaption className="absolute inset-x-0 bottom-0 z-10 space-y-2 p-6 text-white">
                    <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-white/66">
                      {item.category}
                    </p>
                    <p className="type-subheading text-[1.5rem] text-white">{item.title}</p>
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </StaggerGrid>
        </SectionWrapper>

        <SectionWrapper dark className="bg-brand-dark py-22 md:py-26" containerClassName="space-y-12">
          <SectionHeading
            eyebrow="Business Value"
            title="More than clothing. A complete brand presence."
            description="The site is structured to help labels look sharper, launch more clearly, and convert more trust from first glance."
            dark
          />
          <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {businessValues.map((item, index) => {
              const Icon = valueIcons[index];

              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="space-y-5 rounded-[1.25rem] border border-white/12 bg-white/5 p-7 text-white shadow-[0_16px_32px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={22} className="text-brand-accent" />
                    <span className="h-2 w-2 rotate-45 border border-brand-accent" />
                  </div>
                  <h3 className="type-subheading text-white">{item.title}</h3>
                  <p className="type-body text-white/72">{item.text}</p>
                </motion.article>
              );
            })}
          </StaggerGrid>
        </SectionWrapper>

        <SectionWrapper className="py-22 md:py-26" containerClassName="space-y-12">
          <SectionHeading
            eyebrow="Social Proof"
            title="Creative credibility supported by cleaner presentation."
            description="Trust comes from the way the work is framed as much as the work itself."
          />
          <StatsRow stats={stats} />
          <StaggerGrid className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </StaggerGrid>
        </SectionWrapper>

        <SectionWrapper className="pb-28 pt-8 md:pb-32" containerClassName="">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--color-brand-border)] bg-brand-dark px-6 py-14 text-white md:px-12 md:py-18">
            <div className="cta-radial-glow pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-10 bg-brand-accent/58" />
                  <span className="h-2 w-2 rotate-45 border border-brand-accent" />
                  <p className="type-eyebrow text-brand-accent">Final CTA</p>
                </div>
                <h2 className="type-heading max-w-3xl text-white md:text-[clamp(36px,4.5vw,64px)]">
                  Ready to make your clothing brand look unforgettable?
                </h2>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <ButtonLink to="/contact">Contact Us</ButtonLink>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 border border-white/18 px-6 py-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.24em] text-white transition duration-300 hover:border-brand-accent/75 hover:text-brand-accent"
                >
                  <span className="h-2 w-2 rotate-45 border border-current" />
                  Follow on Instagram
                  <MoveRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
    </PageTransition>
  );
}

export default HomePage;
