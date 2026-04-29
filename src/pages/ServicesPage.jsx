import { Brush, Camera, LayoutGrid, Megaphone, Monitor } from "lucide-react";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import Paragraph from "../components/Paragraph";
import SectionHeading from "../components/SectionHeading";
import SectionWrapper from "../components/SectionWrapper";
import StaggerGrid from "../components/StaggerGrid";
import { services } from "../data/siteContent";

const icons = [Brush, LayoutGrid, Camera, Megaphone, Monitor];

function ServicesPage() {
  return (
    <PageTransition>
      <main>
        <SectionWrapper className="pb-12 pt-10 md:pb-18 md:pt-14" containerClassName="space-y-10">
          <SectionHeading
            eyebrow="Branding Solutions"
            title="Services that support clothing identity, campaign presence, and a more credible store-facing website."
            description="Every service is built to strengthen how the label looks, reads, and converts trust online."
          />
        </SectionWrapper>

        <SectionWrapper dark className="bg-brand-dark py-18 md:py-24" containerClassName="space-y-12">
          <SectionHeading
            eyebrow="Services"
            title="A business-first creative system for brands that need more than surface styling."
            description="Strategic presentation, editorial thinking, and cleaner storytelling across every touchpoint."
            dark
          />

          <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index];

              return (
                <MotionSection
                  key={service.title}
                  className="rounded-[1.3rem] border border-white/12 bg-white/6 p-7 shadow-[0_18px_38px_rgba(0,0,0,0.12)]"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <Icon size={22} className="text-brand-accent" />
                      <span className="h-2 w-2 rotate-45 border border-brand-accent" />
                    </div>
                    <h2 className="type-subheading text-white">{service.title}</h2>
                    <Paragraph dark max="max-w-none">{service.text}</Paragraph>
                  </div>
                </MotionSection>
              );
            })}
          </StaggerGrid>
        </SectionWrapper>
      </main>
    </PageTransition>
  );
}

export default ServicesPage;
