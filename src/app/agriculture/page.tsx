import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sprout, Droplets, Tractor, Store } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
export const metadata: Metadata = { title: "Agriculture" };
const topics = [
  { icon: Sprout, title: "Crops and cultivation", text: "Crops grown, seasonal choices, cultivation methods and changing field conditions." },
  { icon: Droplets, title: "Water and irrigation", text: "Irrigation access, water availability, drainage and water-management practices." },
  { icon: Tractor, title: "Farm inputs and equipment", text: "Seeds, fertilisers, crop protection, machinery and access to dependable resources." },
  { icon: Store, title: "Markets and livelihoods", text: "Selling produce, transport, price discovery, storage and market-related experiences." },
];
export default function AgriculturePage() {
  return (
    <>
      <section className="page-hero page-hero-photo agriculture-hero"><div className="container page-hero-content"><span className="eyebrow eyebrow-light">Our farming communities</span><h1>For the people<br />who <em>grow our food.</em></h1><p>We want to understand the realities of crop farming — from preparing the field to bringing the harvest to market.</p><Link href="/join" className="button button-light">Share your farming experience <ArrowRight size={17} /></Link></div></section>
      <section className="section-pad"><div className="container"><SectionHeading eyebrow="What we want to learn" title="Every field has its own story." description="We welcome conversations with farmers working across crops, regions, farm sizes and cultivation practices." /><div className="topic-grid">{topics.map(({icon:Icon,title,text})=><article className="topic-card" key={title}><Icon size={26}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="section-pad muted-section"><div className="container two-column"><div className="two-column-copy"><span className="eyebrow">Your experience matters</span><h2>Tell us what farming looks like <em>where you are.</em></h2><p>Local knowledge helps us understand how farming differs from one place to another. We want to hear directly from farmers about the challenges they face and the changes they hope to see.</p><Link href="/join" className="button">Connect with Mitravani <ArrowRight size={17}/></Link></div><div className="about-image"><Image src="https://images.unsplash.com/photo-1592982537447-6f2a6a0a0c8c?auto=format&fit=crop&w=1200&q=85" alt="Farmer working among crops" fill sizes="(max-width: 800px) 100vw, 50vw"/></div></div></section>
    </>
  );
}
