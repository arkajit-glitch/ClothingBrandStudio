import { Instagram, MapPinned, MessageCircle, Phone } from "lucide-react";
import MotionSection from "../components/MotionSection";
import PageTransition from "../components/PageTransition";
import Paragraph from "../components/Paragraph";
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
                  <span className="type-eyebrow text-brand-muted">
                    Name
                  </span>
                  <input className="w-full border border-[color:var(--color-brand-border)] bg-brand-bg-soft px-4 py-3.5 outline-none transition focus:border-brand-accent" />
                </label>
                <label className="space-y-2">
                  <span className="type-eyebrow text-brand-muted">
                    Email
                  </span>
                  <input className="w-full border border-[color:var(--color-brand-border)] bg-brand-bg-soft px-4 py-3.5 outline-none transition focus:border-brand-accent" />
                </label>
              </div>
              <label className="space-y-2">
                <span className="type-eyebrow text-brand-muted">
                  Brand / Studio
                </span>
                <input className="w-full border border-[color:var(--color-brand-border)] bg-brand-bg-soft px-4 py-3.5 outline-none transition focus:border-brand-accent" />
              </label>
              <label className="space-y-2">
                <span className="type-eyebrow text-brand-muted">
                  Message
                </span>
                <textarea
                  rows="6"
                  className="w-full border border-[color:var(--color-brand-border)] bg-brand-bg-soft px-4 py-3.5 outline-none transition focus:border-brand-accent"
                />
              </label>
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-3 bg-brand-text px-6 py-3.5 type-eyebrow text-white transition hover:bg-brand-dark"
              >
                <span className="h-2 w-2 rotate-45 border border-current" />
                Send Inquiry
              </button>
            </MotionSection>

            <MotionSection className="space-y-6">
              <div className="space-y-5 rounded-[1.35rem] border border-[color:var(--color-brand-border)] bg-white/52 p-7 shadow-[0_18px_38px_rgba(43,31,22,0.05)]">
                <div className="flex items-start gap-4">
                  <Phone size={18} className="mt-1 text-brand-accent" />
                  <div>
                    <p className="type-eyebrow text-brand-text">Phone</p>
                    <Paragraph className="mt-2" max="max-w-none">+91 98765 43210</Paragraph>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram size={18} className="mt-1 text-brand-accent" />
                  <div>
                    <p className="type-eyebrow text-brand-text">Instagram</p>
                    <Paragraph className="mt-2" max="max-w-none">@noiratelierstudio</Paragraph>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle size={18} className="mt-1 text-brand-accent" />
                  <div>
                    <p className="type-eyebrow text-brand-text">WhatsApp</p>
                    <Paragraph className="mt-2" max="max-w-none">Message for quick store and brand inquiries.</Paragraph>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPinned size={18} className="mt-1 text-brand-accent" />
                  <div>
                    <p className="type-eyebrow text-brand-text">Store Address</p>
                    <Paragraph className="mt-2" max="max-w-none">Fashion District Placeholder, City, Country</Paragraph>
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
