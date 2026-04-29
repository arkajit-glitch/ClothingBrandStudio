import { Instagram, MapPinned, MessageCircle, Phone } from "lucide-react";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionWrapper from "../components/SectionWrapper";

function ContactPage() {
  return (
    <PageTransition>
      <main>
        <SectionWrapper className="pb-12 pt-10 md:pb-18 md:pt-14" containerClassName="space-y-10">
          <SectionHeading
            eyebrow="Contact"
            title="Start a conversation about your clothing brand presentation."
            description="Use the form, reach out through WhatsApp, or connect on Instagram to discuss your next collection, campaign, or studio website."
          />

          <div className="grid gap-8 md:grid-cols-[1fr_0.88fr]">
            <MotionSection className="space-y-5 rounded-[1.35rem] border border-[color:var(--color-brand-border)] bg-white/52 p-7 shadow-[0_18px_38px_rgba(43,31,22,0.05)] md:p-9">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="font-heading text-[11px] font-bold uppercase tracking-[0.24em] text-brand-muted">
                    Name
                  </span>
                  <input className="w-full border border-[color:var(--color-brand-border)] bg-brand-bg-soft px-4 py-3.5 outline-none transition focus:border-brand-accent" />
                </label>
                <label className="space-y-2">
                  <span className="font-heading text-[11px] font-bold uppercase tracking-[0.24em] text-brand-muted">
                    Email
                  </span>
                  <input className="w-full border border-[color:var(--color-brand-border)] bg-brand-bg-soft px-4 py-3.5 outline-none transition focus:border-brand-accent" />
                </label>
              </div>
              <label className="space-y-2">
                <span className="font-heading text-[11px] font-bold uppercase tracking-[0.24em] text-brand-muted">
                  Brand / Studio
                </span>
                <input className="w-full border border-[color:var(--color-brand-border)] bg-brand-bg-soft px-4 py-3.5 outline-none transition focus:border-brand-accent" />
              </label>
              <label className="space-y-2">
                <span className="font-heading text-[11px] font-bold uppercase tracking-[0.24em] text-brand-muted">
                  Message
                </span>
                <textarea
                  rows="6"
                  className="w-full border border-[color:var(--color-brand-border)] bg-brand-bg-soft px-4 py-3.5 outline-none transition focus:border-brand-accent"
                />
              </label>
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-3 bg-brand-text px-6 py-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.24em] text-white transition hover:bg-brand-dark"
              >
                <span className="h-2.5 w-2.5 rotate-45 border border-current" />
                Send Inquiry
              </button>
            </MotionSection>

            <MotionSection className="space-y-6">
              <div className="space-y-5 rounded-[1.35rem] border border-[color:var(--color-brand-border)] bg-white/52 p-7 shadow-[0_18px_38px_rgba(43,31,22,0.05)]">
                <div className="flex items-start gap-4">
                  <Phone size={18} className="mt-1 text-brand-accent" />
                  <div>
                    <p className="font-heading text-sm font-bold uppercase tracking-[0.22em]">Phone</p>
                    <p className="mt-2 text-brand-muted">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram size={18} className="mt-1 text-brand-accent" />
                  <div>
                    <p className="font-heading text-sm font-bold uppercase tracking-[0.22em]">Instagram</p>
                    <p className="mt-2 text-brand-muted">@noiratelierstudio</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle size={18} className="mt-1 text-brand-accent" />
                  <div>
                    <p className="font-heading text-sm font-bold uppercase tracking-[0.22em]">WhatsApp</p>
                    <p className="mt-2 text-brand-muted">Message for quick store and brand inquiries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPinned size={18} className="mt-1 text-brand-accent" />
                  <div>
                    <p className="font-heading text-sm font-bold uppercase tracking-[0.22em]">Store Address</p>
                    <p className="mt-2 text-brand-muted">Fashion District Placeholder, City, Country</p>
                  </div>
                </div>
              </div>

              <div className="flex min-h-72 items-center justify-center rounded-[1.35rem] border border-[color:var(--color-brand-border)] bg-brand-dark/95 p-7 text-center text-white/70">
                Google Map Placeholder
              </div>
            </MotionSection>
          </div>
        </SectionWrapper>
      </main>
    </PageTransition>
  );
}

export default ContactPage;
