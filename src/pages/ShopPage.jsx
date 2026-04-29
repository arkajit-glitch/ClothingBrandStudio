import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";
import ImageReveal from "../components/ImageReveal";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import Eyebrow from "../components/Eyebrow";
import Paragraph from "../components/Paragraph";
import SectionHeading from "../components/SectionHeading";
import StaggerGrid from "../components/StaggerGrid";
import { cardHover, fadeUp, paragraphReveal, viewportOnce } from "../lib/motion";
import { shopProducts } from "../data/siteContent";

function ShopPage() {
  return (
    <PageTransition>
      <main className="px-4 pb-28 pt-10 md:px-6 md:pt-14">
        <section className="mx-auto max-w-[1240px] overflow-hidden border border-[color:var(--color-brand-border)] bg-white/44">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <ImageReveal
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&h=1180&q=80"
              alt="Premium showroom banner with curated fashion presentation"
              className="h-[22rem] md:h-[34rem]"
              imgClassName="h-[22rem] w-full object-cover md:h-[34rem]"
            />
            <div className="flex items-center px-6 py-10 md:px-10">
              <div className="space-y-6">
                <Eyebrow line={false}>Private Edit</Eyebrow>
                <AnimatedHeading
                  text="Curated pieces with premium detail, pricing, and clean product focus."
                  as="h1"
                  className="type-display max-w-[12ch] text-brand-text md:text-[clamp(46px,5vw,72px)]"
                />
                <motion.div variants={paragraphReveal} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                  <Paragraph max="max-w-xl">
                    Explore selected clothing pieces presented with a sharper business-facing layout,
                    clear price tags, and concise product details for easier browsing.
                  </Paragraph>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <MotionSection className="mx-auto mt-20 max-w-[1240px] space-y-10">
          <SectionHeading
            eyebrow="Showroom"
            title="A polished product listing page with premium presentation."
            description="Each item is framed with category, price, and essential product detail so the page feels clear, professional, and easy to explore."
          />

          <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {shopProducts.map((product) => (
              <motion.article
                key={product.name}
                variants={fadeUp}
                whileHover={cardHover}
                className="overflow-hidden border border-[color:var(--color-brand-border)] bg-white/70 shadow-[0_16px_36px_rgba(42,31,24,0.05)]"
              >
                <div className="relative overflow-hidden">
                  <ImageReveal
                    src={product.image}
                    alt={product.name}
                    className="h-[22rem]"
                    imgClassName="h-[22rem] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/8 to-transparent" />
                </div>

                <div className="space-y-4 p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="type-eyebrow text-brand-accent">
                        {product.category}
                      </p>
                      <h2 className="type-subheading text-brand-text">
                        {product.name}
                      </h2>
                    </div>
                    <div className="space-y-2 text-right">
                      <span className="inline-flex h-2.5 w-2.5 rotate-45 border border-brand-accent" />
                      <p className="text-sm font-semibold tracking-[0.08em] text-brand-text">
                        {product.price}
                      </p>
                    </div>
                  </div>

                  <Paragraph max="max-w-none" className="text-[15px] leading-7">{product.details}</Paragraph>
                </div>
              </motion.article>
            ))}
          </StaggerGrid>
        </MotionSection>
      </main>
    </PageTransition>
  );
}

export default ShopPage;
