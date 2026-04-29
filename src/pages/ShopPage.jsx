import { motion } from "framer-motion";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import StaggerGrid from "../components/StaggerGrid";
import { fadeUp } from "../lib/motion";
import { shopProducts } from "../data/siteContent";

function ShopPage() {
  return (
    <PageTransition>
      <main className="px-4 pb-28 pt-10 md:px-6 md:pt-14">
        <section className="mx-auto max-w-[1240px] overflow-hidden border border-[color:var(--color-brand-border)] bg-white/44">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&h=1180&q=80"
              alt="Premium showroom banner with curated fashion presentation"
              className="h-[22rem] w-full object-cover md:h-[34rem]"
            />
            <div className="flex items-center px-6 py-10 md:px-10">
              <div className="space-y-6">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.34em] text-brand-accent">
                  Private Edit
                </p>
                <h1 className="font-heading text-4xl font-bold leading-tight md:text-6xl">
                  A quiet showroom for curated pieces and signature direction.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-brand-muted">
                  A clothing presentation surface built to show mood, category, and silhouette
                  rather than imitate a crowded shopping flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MotionSection className="mx-auto mt-20 max-w-[1240px] space-y-10">
          <SectionHeading
            eyebrow="Showroom"
            title="A polished clothing edit built for discovery, not distraction."
            description="Each piece is framed through category, tone, and concise product detail without turning the experience into a checkout-driven storefront."
          />

          <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {shopProducts.map((product) => (
              <motion.article
                key={product.name}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.26, ease: [0.25, 0.9, 0.3, 1] }}
                className="overflow-hidden border border-[color:var(--color-brand-border)] bg-white/70 shadow-[0_16px_36px_rgba(42,31,24,0.05)]"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="h-[22rem] w-full object-cover"
                    whileHover={{ scale: 1.035, filter: "brightness(1.02)" }}
                    transition={{ duration: 0.28, ease: [0.25, 0.9, 0.3, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/8 to-transparent" />
                </div>

                <div className="space-y-4 p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-heading text-[11px] font-bold uppercase tracking-[0.24em] text-brand-accent">
                        {product.category}
                      </p>
                      <h2 className="font-heading text-[1.6rem] font-bold leading-tight text-brand-text">
                        {product.name}
                      </h2>
                    </div>
                    <span className="h-2.5 w-2.5 rotate-45 border border-brand-accent" />
                  </div>

                  <p className="text-base leading-7 text-brand-muted">{product.details}</p>
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
