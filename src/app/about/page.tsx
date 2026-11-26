import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Ear, Compass, Sprout } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-green">
        <div className="container page-hero-content">
          <span className="eyebrow eyebrow-light">About Mitravani</span>
          <h1>A trusted voice,<br /><em>rooted in the farmer.</em></h1>
          <p>We are setting out to build meaningful relationships with the people who grow, raise and produce — across farming communities.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container two-column">
          <div className="two-column-copy">
            <span className="eyebrow">Our beginning</span>
            <h2>We believe the first step is to <em>understand.</em></h2>
            <p>Mitravani is being developed as a farmer-first initiative. Our starting point is simple: meet farmers, listen to their experiences, understand their challenges and learn about the support they feel would make a difference.</p>
            <p>We want to engage with crop growers, dairy farmers, aquaculture producers and people involved in allied activities. These conversations will help us understand the diversity of farming across communities.</p>
            <p>As we learn, we aim to shape practical and responsible initiatives — beginning with relationships and growing towards a long-term presence in the agricultural sector.</p>
          </div>
          <div className="about-image"><Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85" alt="Green agricultural fields" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        </div>
      </section>
      <section className="values-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="What guides us" title="The values behind Mitravani" description="The relationships we build should reflect respect, openness and a genuine willingness to learn." centered />
          <div className="values-grid">
            <div className="value-card"><Ear /><h3>Listening</h3><p>Every interaction begins by giving farmers the space to share their experiences in their own words.</p></div>
            <div className="value-card"><HeartHandshake /><h3>Respect</h3><p>We value the knowledge, effort and decisions of people working across every farming sector.</p></div>
            <div className="value-card"><Compass /><h3>Understanding</h3><p>We learn about local realities before deciding what initiatives may be relevant or practical.</p></div>
            <div className="value-card"><Sprout /><h3>Responsible growth</h3><p>We want long-term progress to be thoughtful, community-informed and grounded in real needs.</p></div>
          </div>
        </div>
      </section>
      <section className="simple-cta"><div className="container simple-cta-inner"><div><h2>Be part of the conversation.</h2><p>Your experience can help shape what Mitravani learns next.</p></div><Link href="/join" className="button">Connect with us <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
