import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, ClipboardList, Users, Sprout } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Our approach" };
const stages = [
  { icon: MessageCircle, n: "01", title: "Start a conversation", text: "We reach out to farmers and community members, introduce Mitravani and invite them to share their experiences." },
  { icon: ClipboardList, n: "02", title: "Understand the ground reality", text: "We learn about crops, livestock, ponds, seasonal patterns, everyday difficulties and the requirements farmers identify." },
  { icon: Users, n: "03", title: "Build relationships", text: "We stay connected, learn from different perspectives and identify common themes across farming communities." },
  { icon: Sprout, n: "04", title: "Explore practical possibilities", text: "We use what we learn to guide future initiatives and assess opportunities for a responsible, long-term agricultural presence." },
];
export default function ApproachPage() {
  return (
    <>
      <section className="page-hero page-hero-green">
        <div className="container page-hero-content"><span className="eyebrow eyebrow-light">Our approach</span><h1>Listen first.<br /><em>Grow with purpose.</em></h1><p>Our approach starts with people, not assumptions. We want to understand farming communities through direct and respectful interaction.</p></div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="A simple, people-first process" title="From a first hello to a lasting relationship" description="We are beginning with verbal interactions and personal outreach. As Mitravani develops, our engagement can become more structured and locally accessible." />
          <div className="timeline">
            {stages.map(({ icon: Icon, n, title, text }) => <div className="timeline-item" key={n}><div className="timeline-icon"><Icon size={23} /></div><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </div>
      </section>
      <section className="approach-note section-pad"><div className="container approach-note-inner"><span className="eyebrow eyebrow-light">An important promise</span><h2>We will be clear about what we can do — and what we are still learning.</h2><p>Mitravani is at an early stage. Conversations and information gathering are our first activities; services, support programmes and farming operations will be introduced only when they are established and ready.</p><Link href="/join" className="button button-light">Start a conversation <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
