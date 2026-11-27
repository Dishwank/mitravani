
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Users } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact us" };

export default function ContactPage() {
  const wa = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        "Hello Mitravani, I would like to connect."
      )}`
    : "";

  return (
    <>
      <section className="page-hero page-hero-green">
        <div className="container page-hero-content">
          <span className="eyebrow eyebrow-light">Contact Mitravani</span>
          <h1>
            We’re ready<br />
            <em>to listen.</em>
          </h1>
          <p>
            Have a question, want to introduce your farming community or
            simply share your experience? Start a conversation with us.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <MessageCircle />
              <h2>Join our network</h2>
              <p>
                Share your name, farming sector and location so we can
                understand how best to connect.
              </p>
              <Link href="/join" className="inline-link">
                Share your details <ArrowRight size={17} />
              </Link>
            </div>

            {site.email && (
              <div className="contact-card">
                <Mail />
                <h2>Email us</h2>
                <p>
                  Write to the Mitravani team with your questions or
                  suggestions.
                </p>
                <a className="inline-link" href={`mailto:${site.email}`}>
                  {site.email} <ArrowRight size={17} />
                </a>
              </div>
            )}

            {wa && (
              <div className="contact-card">
                <MessageCircle />
                <h2>WhatsApp</h2>
                <p>
                  Send a message to begin a direct conversation with the team.
                </p>
                <a
                  className="inline-link"
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                >
                  Message Mitravani <ArrowRight size={17} />
                </a>
              </div>
            )}

            <div className="contact-card">
              <Users />
              <h2>Community outreach</h2>
              <p>
                We welcome introductions to farmer groups, local leaders
                and people working across agricultural sectors.
              </p>
              <Link href="/our-approach" className="inline-link">
                Our approach <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <p className="contact-footnote">
            Mitravani is in its early development stage. Official phone,
            email and office details will be published here once confirmed.
          </p>
        </div>
      </section>
    </>
  );
}

