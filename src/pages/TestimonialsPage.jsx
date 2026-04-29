import { motion } from "framer-motion";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import StatsRow from "../components/StatsRow";
import StaggerGrid from "../components/StaggerGrid";
import TestimonialCard from "../components/TestimonialCard";
import { fadeUp } from "../lib/motion";
import { stats, testimonials } from "../data/siteContent";

function TestimonialsPage() {
  return (
    <PageTransition>
      <main className="px-4 pb-28 pt-10 md:px-6 md:pt-14">
        <MotionSection className="mx-auto max-w-[1240px] space-y-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Business trust built through cleaner presentation and stronger brand structure."
            description="Reviews, performance signals, and placeholders for future press or featured mentions."
          />

          <StatsRow stats={stats} />

          <StaggerGrid className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </StaggerGrid>

          <StaggerGrid className="grid gap-4 border border-dashed border-[color:var(--color-brand-border)] bg-white/38 p-7 md:grid-cols-3">
            {["Featured Mention", "Studio Partner", "Retail Collaboration"].map((item) => (
              <motion.div key={item} variants={fadeUp} className="font-heading text-sm font-bold uppercase tracking-[0.24em] text-brand-muted">
                {item}
              </motion.div>
            ))}
          </StaggerGrid>
        </MotionSection>
      </main>
    </PageTransition>
  );
}

export default TestimonialsPage;
