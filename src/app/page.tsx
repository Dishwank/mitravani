import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Sprout, Milk, Waves, Handshake,
  MessageCircle, Users, HeartHandshake, Leaf, Quote, ChevronRight
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const sectors = [
  {
    title: "Agriculture",
    subtitle: "For crop growers",
    description: "Understanding crop choices, cultivation practices, irrigation, inputs, market access and the everyday realities of farming.",
    href: "/agriculture",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Dairy farming",
    subtitle: "For dairy communities",
    description: "Listening to dairy farmers about cattle care, fodder, veterinary access, milk collection and farm operations.",
    href: "/dairy",
    icon: Milk,
    image: "/images/Dairy%20images.jpeg"
  },
  {
    title: "Aquaculture",
    subtitle: "For fish and shrimp farmers",
    description: "Connecting with aquaculture farmers to learn about pond management, water quality, inputs, disease concerns and markets.",
    href: "/aquaculture",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1100&q=85",
  },
];

const steps = [
  { n: "01", title: "We listen", text: "We begin with conversations and take time to understand each farmer’s experience." },
  { n: "02", title: "We understand", text: "We learn about local crops, practices, challenges, priorities and requirements." },
  { n: "03", title: "We connect", text: "We build relationships and explore practical ways to respond to the needs we hear." },
  { n: "04", title: "We grow together", text: "We use these learnings to shape responsible, long-term agricultural initiatives." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="hero-kicker"><span /> A farmer-first initiative</span>
          <h1>Every farmer has a story.<br /><em>We’re here to listen.</em></h1>
          <p className="hero-lead">Mitravani brings farming communities closer through conversations, understanding and meaningful relationships — across agriculture, dairy and aquaculture.</p>
          <div className="hero-actions">
            <Link href="/join" className="button button-light">Connect with Mitravani <ArrowRight size={17} /></Link>
            <Link href="/our-approach" className="button button-outline-light">Discover our approach</Link>
          </div>
          <div className="hero-trust"><Users size={17} /><span>Rooted in people. Connected to the land.</span></div>
        </div>
        <div className="hero-stamp"><span>LISTEN</span><i>•</i><span>LEARN</span><i>•</i><span>GROW</span></div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <div className="intro-mark">
            <div className="intro-logo-wrap">
              <Image src="/images/mitravani-logo.jpeg" alt="Mitravani official emblem" width={330} height={330} />
            </div>
            <span className="intro-caption">మన రైతు • మన నేల • మన పశువు • మన ప్రకృతి</span>
          </div>
          <div className="intro-copy">
            <span className="eyebrow">A voice rooted in the community</span>
            <h2>Before we build farms,<br /><em>we build relationships.</em></h2>
            <p>Mitravani begins with a simple belief: meaningful agricultural progress starts by listening to the people who work closest to the land and water.</p>
            <p>We want to meet farmers, understand their day-to-day realities and learn what matters to them. These early conversations will guide how Mitravani develops its future initiatives.</p>
            <Link href="/about" className="inline-link">More about Mitravani <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="sector-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="One community, many fields" title="Every farming journey matters." description="From fields to dairy sheds and aquaculture ponds, we want to hear from farmers across different sectors." />
          <div className="sector-grid">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <article className="sector-card" key={sector.title}>
                  <div className="sector-photo" style={{ backgroundImage: `url("${sector.image}")` }}>
                    <span className="sector-icon"><Icon size={23} /></span>
                  </div>
                  <div className="sector-body">
                    <span className="sector-subtitle">{sector.subtitle}</span>
                    <h3>{sector.title}</h3>
                    <p>{sector.description}</p>
                    <Link href={sector.href} className="card-link">Explore this sector <ChevronRight size={17} /></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="approach-section section-pad">
        <div className="container approach-grid">
          <div className="approach-intro">
            <span className="eyebrow eyebrow-light">Our way of working</span>
            <h2>Real change begins<br />with a <em>conversation.</em></h2>
            <p>We are starting with direct, personal interactions. No complicated promises — just a genuine effort to listen, learn and build trust with farming communities.</p>
            <Link href="/our-approach" className="button button-light">How we work <ArrowRight size={17} /></Link>
          </div>
          <div className="steps-list">
            {steps.map((step) => (
              <div className="step-item" key={step.n}>
                <span className="step-number">{step.n}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="future-section section-pad">
        <div className="container future-grid">
          <div className="future-photo">
            <Image src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=85" alt="Open green farmland" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <div className="photo-label"><Leaf size={16} /> Growing with purpose</div>
          </div>
          <div className="future-copy">
            <span className="eyebrow">The road ahead</span>
            <h2>Today, conversations.<br /><em>Tomorrow, possibilities.</em></h2>
            <p>Our early interactions will help us understand the needs, opportunities and realities of farming communities. Over time, these insights can inform the development of a physical presence and larger farming ventures, including a dairy farm or other suitable agricultural enterprise.</p>
            <div className="future-points">
              <div><Handshake size={20} /><span>Trust before transactions</span></div>
              <div><HeartHandshake size={20} /><span>Community-informed decisions</span></div>
              <div><Sprout size={20} /><span>Responsible long-term growth</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container quote-inner">
          <Quote size={34} />
          <blockquote>“The people who work the land know its challenges best. Their voices deserve to shape what grows next.”</blockquote>
          <span>THE MITRAVANI BELIEF</span>
        </div>
      </section>

      <section className="join-banner">
        <div className="container join-banner-inner">
          <div><span className="eyebrow eyebrow-light">Your voice matters</span><h2>Let’s start with a conversation.</h2><p>Are you a farmer, producer or part of a farming community? We would be glad to hear from you.</p></div>
          <Link href="/join" className="button button-light">Share your story <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
