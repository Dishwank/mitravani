import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Milk, HeartPulse, Wheat, Stethoscope } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
export const metadata: Metadata = { title: "Dairy farming" };
const topics = [
  { icon: Milk, title: "Milk production", text: "Daily production, collection routines, storage and the realities of selling milk." },
  { icon: HeartPulse, title: "Animal care", text: "Cattle health, hygiene, comfort, breeding practices and everyday care needs." },
  { icon: Wheat, title: "Fodder and nutrition", text: "Fodder availability, feed costs, nutrition and seasonal challenges." },
  { icon: Stethoscope, title: "Veterinary access", text: "Access to veterinary services, timely advice and animal health support." },
];
export default function DairyPage() {
  return (
    <>
      <section className="page-hero page-hero-photo dairy-hero"><div className="container page-hero-content"><span className="eyebrow eyebrow-light">Dairy communities</span><h1>Understanding the<br /><em>work behind every drop.</em></h1><p>We want to learn from dairy farmers about animal care, farm management, milk production and the realities of running a dairy operation.</p><Link href="/join" className="button button-light">Connect as a dairy farmer <ArrowRight size={17}/></Link></div></section>
      <section className="section-pad"><div className="container"><SectionHeading eyebrow="Listening to dairy farmers" title="A closer look at dairy life" description="We are interested in conversations with small, medium and large dairy farmers, as well as people involved in allied services."/><div className="topic-grid">{topics.map(({icon:Icon,title,text})=><article className="topic-card" key={title}><Icon size={26}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="section-pad muted-section"><div className="container two-column"><div className="two-column-copy"><span className="eyebrow">A future area of exploration</span><h2>Learning today to make <em>informed decisions tomorrow.</em></h2><p>One of Mitravani’s long-term possibilities is to establish a dairy farm at scale. Before making such a commitment, we want to understand the sector from the people who work in it every day.</p><p>These interactions are for learning and relationship-building; they are not a promise of services, investment or procurement.</p><Link href="/our-approach" className="inline-link">Understand our approach <ArrowRight size={17}/></Link></div><div className="about-image">
<Image
  src="/images/Dairy%20images.jpeg"
  alt="Dairy cows on a farm"
  fill
  sizes="(max-width: 800px) 100vw, 50vw"
/>
</div></div></section>
    </>
  );
}
