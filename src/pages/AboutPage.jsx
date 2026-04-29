import { motion } from "framer-motion";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import StaggerGrid from "../components/StaggerGrid";
import { fadeUp } from "../lib/motion";

const blocks = [
  {
    title: "Brand Story",
    text: "NOIR ATELIER exists to help clothing labels present themselves with more clarity, consistency, and premium visual structure.",
  },
  {
    title: "Mission",
    text: "Build digital fashion experiences that make brands easier to trust, understand, and remember.",
  },
  {
    title: "Vision",
    text: "Shape clothing websites that feel like modern brand platforms instead of standard product templates.",
  },
  {
    title: "Why Choose Us",
    text: "Because presentation matters. We combine clean design systems, fashion-led composition, and business-first web thinking.",
  },
  {
    title: "Founder Note",
    text: "Founder note placeholder for your story, creative motivation, and long-term direction for the label.",
  },
];

function AboutPage() {
  return (
    <PageTransition>
      <main className="px-4 pb-28 pt-10 md:px-6 md:pt-14">
        <MotionSection className="mx-auto max-w-[1240px] space-y-10">
          <SectionHeading
            eyebrow="About"
            title="A fashion business website should feel as considered as the collection itself."
            description="This page is structured to build trust through story, mission, values, and founder perspective."
          />

          <StaggerGrid className="grid gap-6 md:grid-cols-2">
            {blocks.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="space-y-4 border border-[color:var(--color-brand-border)] bg-white/50 p-7 shadow-[0_16px_34px_rgba(40,30,24,0.05)]"
              >
                <h2 className="font-heading text-3xl font-bold">{item.title}</h2>
                <p className="text-base leading-8 text-brand-muted">{item.text}</p>
              </motion.article>
            ))}
          </StaggerGrid>
        </MotionSection>
      </main>
    </PageTransition>
  );
}

export default AboutPage;
