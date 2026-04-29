import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import Paragraph from "../components/Paragraph";
import SectionWrapper from "../components/SectionWrapper";
import StaggerGrid from "../components/StaggerGrid";
import { aboutBlocks, identitySpotlight } from "../data/siteContent";

function AboutPage() {
  return (
    <PageTransition>
      <main>
        <SectionWrapper className="pb-12 pt-10 md:pb-18 md:pt-14" containerClassName="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <MotionSection>
            <SectionHeading
              eyebrow="About"
              title="A fashion business website should feel as considered as the collection itself."
              description="This page is structured to build trust through story, mission, vision, and founder perspective without losing the emotional tone of the brand."
            />
          </MotionSection>

          <MotionSection>
            <div className="relative ml-auto max-w-[36rem] overflow-hidden rounded-[1.6rem] border border-[color:var(--color-brand-border)] bg-white/40 p-3">
              <img
                src={identitySpotlight.image}
                alt="Editorial brand portrait for NOIR ATELIER about section"
                className="h-[26rem] w-full rounded-[1.2rem] object-cover md:h-[38rem]"
              />
            </div>
          </MotionSection>
        </SectionWrapper>

        <SectionWrapper className="py-18 md:py-24" containerClassName="space-y-12">
          <StaggerGrid className="grid gap-6 md:grid-cols-2">
            {aboutBlocks.map((item) => (
              <MotionSection
                key={item.title}
                className="rounded-[1.25rem] border border-[color:var(--color-brand-border)] bg-white/52 p-7 shadow-[0_16px_34px_rgba(40,30,24,0.05)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="h-[1px] w-9 bg-brand-accent/58" />
                    <span className="h-2 w-2 rotate-45 border border-brand-accent" />
                  </div>
                  <h2 className="type-subheading text-brand-text">{item.title}</h2>
                  <Paragraph max="max-w-none">{item.text}</Paragraph>
                </div>
              </MotionSection>
            ))}
          </StaggerGrid>
        </SectionWrapper>
      </main>
    </PageTransition>
  );
}

export default AboutPage;
