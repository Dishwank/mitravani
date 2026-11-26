import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Waves, Droplets, Microscope, Truck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
export const metadata: Metadata = { title: "Aquaculture" };
const topics = [
  { icon: Waves, title: "Pond and farm management", text: "Pond preparation, stocking practices, day-to-day operations and farm infrastructure." },
  { icon: Droplets, title: "Water quality", text: "Water parameters, testing routines, aeration and water-management experiences." },
  { icon: Microscope, title: "Health and biosecurity", text: "Disease concerns, mortality events, preventive practices and access to technical guidance." },
  { icon: Truck, title: "Inputs and markets", text: "Seed, feed, logistics, harvesting, buyers and market-related challenges." },
];
export default function AquaculturePage() {
  return (
    <>
      <section className="page-hero page-hero-photo aqua-hero"><div className="container page-hero-content"><span className="eyebrow eyebrow-light">Aquaculture communities</span><h1>Listening to those<br />who <em>work with water.</em></h1><p>We want to connect with fish and shrimp farmers to understand their work, local conditions, challenges and aspirations.</p><Link href="/join" className="button button-light">Connect as an aquaculture farmer <ArrowRight size={17}/></Link></div></section>
      <section className="section-pad"><div className="container"><SectionHeading eyebrow="Fish and shrimp farming" title="Every pond has a different story." description="We welcome conversations with aquaculture farmers, pond owners, farm workers and people connected to the sector."/><div className="topic-grid">{topics.map(({icon:Icon,title,text})=><article className="topic-card" key={title}><Icon size={26}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="section-pad muted-section"><div className="container two-column"><div className="two-column-copy"><span className="eyebrow">A wider farming network</span><h2>Different sectors. Shared respect for <em>farmers’ knowledge.</em></h2><p>Aquaculture is an important part of many rural livelihoods. We want to understand its opportunities and challenges directly from the people involved, rather than making assumptions.</p><Link href="/join" className="button">Share your experience <ArrowRight size={17}/></Link></div><div className="about-image"><Image src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85" alt="Water surface representing aquaculture" fill sizes="(max-width: 800px) 100vw, 50vw"/></div></div></section>
    </>
  );
}
