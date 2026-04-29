import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionWrapper from "../components/SectionWrapper";
import StatsRow from "../components/StatsRow";
import StaggerGrid from "../components/StaggerGrid";
import TestimonialCard from "../components/TestimonialCard";
import { featuredMentions, stats, testimonials } from "../data/siteContent";

function TestimonialsPage() {
  return (
    <PageTransition>
      <main>
        <SectionWrapper className="pb-14 pt-10 md:pb-18 md:pt-14" containerClassName="space-y-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Creative credibility built through clearer presentation and stronger visual discipline."
            description="Reviews, trust signals, and placeholder mention space for the brands and partners that shape the studio’s reputation."
          />
          <StatsRow stats={stats} />
        </SectionWrapper>

        <SectionWrapper className="py-10 md:py-12" containerClassName="space-y-12">
          <StaggerGrid className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </StaggerGrid>

          <StaggerGrid className="grid gap-4 rounded-[1.25rem] border border-dashed border-[color:var(--color-brand-border)] bg-white/36 p-7 md:grid-cols-3">
            {featuredMentions.map((item) => (
              <MotionSection key={item} className="type-eyebrow text-brand-muted">
                {item}
              </MotionSection>
            ))}
          </StaggerGrid>
        </SectionWrapper>
      </main>
    </PageTransition>
  );
}

export default TestimonialsPage;
