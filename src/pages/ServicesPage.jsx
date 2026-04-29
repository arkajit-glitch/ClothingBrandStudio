import { motion } from "framer-motion";
import { Brush, Camera, LayoutGrid, Megaphone, Monitor } from "lucide-react";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import StaggerGrid from "../components/StaggerGrid";
import { services } from "../data/siteContent";
import { fadeUp } from "../lib/motion";

const icons = [Brush, LayoutGrid, Camera, Megaphone, Monitor];

function ServicesPage() {
  return (
    <PageTransition>
      <main className="px-4 pb-28 pt-10 md:px-6 md:pt-14">
        <MotionSection className="mx-auto max-w-[1240px] space-y-10">
          <SectionHeading
            eyebrow="Branding Solutions"
            title="Services that support clothing identity, campaign presentation, and store trust."
            description="Focused on the visual and strategic layers that make a clothing business feel premium online."
          />

          <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index];
              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  className="space-y-5 border border-[color:var(--color-brand-border)] bg-white/50 p-7 shadow-[0_16px_34px_rgba(40,30,24,0.05)]"
                >
                  <Icon size={22} className="text-brand-accent" />
                  <h2 className="font-heading text-2xl font-bold">{service.title}</h2>
                  <p className="text-base leading-8 text-brand-muted">{service.text}</p>
                </motion.article>
              );
            })}
          </StaggerGrid>
        </MotionSection>
      </main>
    </PageTransition>
  );
}

export default ServicesPage;
