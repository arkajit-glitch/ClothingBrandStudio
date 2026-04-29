import { motion } from "framer-motion";
import ButtonLink from "../components/ButtonLink";
import ImageCard from "../components/ImageCard";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import StaggerGrid from "../components/StaggerGrid";
import { collectionCards } from "../data/siteContent";

function CollectionsPage() {
  return (
    <PageTransition>
      <main>
        <section className="px-4 pb-18 pt-10 md:px-6 md:pb-24 md:pt-14">
          <div className="mx-auto max-w-[1240px] overflow-hidden border border-[color:var(--color-brand-border)] bg-white/35">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <motion.img
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&h=1180&q=80"
                alt="Collection banner with premium fashion styling"
                className="h-[22rem] w-full object-cover md:h-[36rem]"
              />
              <div className="flex items-center px-6 py-10 md:px-10">
                <div className="space-y-6">
                  <p className="font-heading text-[11px] font-bold uppercase tracking-[0.34em] text-brand-accent">
                    Collections
                  </p>
                  <h1 className="font-heading text-4xl font-bold leading-tight md:text-6xl">
                    Category-first presentation for a clearer clothing identity.
                  </h1>
                  <p className="max-w-xl text-lg leading-8 text-brand-muted">
                    Showcase each collection through mood, silhouette, and positioning rather than
                    through product listing behavior.
                  </p>
                  <ButtonLink to="/contact">Discuss Your Collection</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MotionSection className="px-4 py-18 md:px-6 md:py-24 md:pt-28">
          <div className="mx-auto max-w-[1240px] space-y-10">
            <SectionHeading
              eyebrow="Collection Categories"
              title="Structured showcase layouts with a stronger business story."
              description="Designed for labels that want better brand presentation without turning the site into a shopping app."
            />
            <StaggerGrid className="grid gap-6 md:grid-cols-3">
              {collectionCards.map((card) => (
                <ImageCard key={card.title} {...card} />
              ))}
            </StaggerGrid>
          </div>
        </MotionSection>
      </main>
    </PageTransition>
  );
}

export default CollectionsPage;
