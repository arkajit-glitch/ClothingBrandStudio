import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionWrapper from "../components/SectionWrapper";
import StaggerGrid from "../components/StaggerGrid";
import ImageCard from "../components/ImageCard";
import ButtonLink from "../components/ButtonLink";
import Eyebrow from "../components/Eyebrow";
import Paragraph from "../components/Paragraph";
import { collectionCards, editorialShowcase } from "../data/siteContent";

function CollectionsPage() {
  return (
    <PageTransition>
      <main>
        <SectionWrapper className="pb-18 pt-10 md:pb-24 md:pt-14" containerClassName="">
          <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--color-brand-border)] bg-white/40">
            <div className="grid gap-10 md:grid-cols-[1.08fr_0.92fr]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&h=1180&q=80"
                alt="Editorial collections hero with premium fashion styling"
                className="h-[24rem] w-full object-cover md:h-[38rem]"
              />
              <div className="flex items-center px-6 py-10 md:px-10">
                <div className="space-y-6">
                  <Eyebrow line={false}>Collections</Eyebrow>
                  <h1 className="type-display max-w-[12ch] text-brand-text md:text-[clamp(46px,5vw,72px)]">
                    Category-first presentation with a stronger campaign point of view.
                  </h1>
                  <Paragraph max="max-w-xl">
                    The collections are framed as editorial directions so each category carries its own
                    mood, silhouette, and business identity.
                  </Paragraph>
                  <ButtonLink to="/contact">Discuss Your Collection</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="py-10 md:py-12" containerClassName="grid gap-6 md:grid-cols-2">
          {editorialShowcase.map((block) => (
            <MotionSection key={block.title} className="rounded-[1.25rem] border border-[color:var(--color-brand-border)] bg-white/56 p-8 shadow-[0_16px_34px_rgba(40,30,24,0.05)]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-9 bg-brand-accent/58" />
                  <span className="h-2 w-2 rotate-45 border border-brand-accent" />
                </div>
                <h2 className="type-subheading text-brand-text">{block.title}</h2>
                <Paragraph max="max-w-none">{block.text}</Paragraph>
              </div>
            </MotionSection>
          ))}
        </SectionWrapper>

        <SectionWrapper className="py-18 md:py-24" containerClassName="space-y-12">
          <SectionHeading
            eyebrow="Collection Categories"
            title="Three category worlds with clearer mood, sharper hierarchy, and stronger visual memory."
            description="Designed for labels that want cleaner campaign logic without drifting into retail clutter."
          />
          <StaggerGrid className="grid gap-6 md:grid-cols-3">
            {collectionCards.map((card) => (
              <ImageCard key={card.title} {...card} />
            ))}
          </StaggerGrid>
        </SectionWrapper>
      </main>
    </PageTransition>
  );
}

export default CollectionsPage;
