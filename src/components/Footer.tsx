import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Leaf, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export default function Footer() {
  const whatsappUrl = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Mitravani, I would like to connect.")}`
    : "";
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Logo light />
          <p>Listening to farmers. Learning from the land. Growing together.</p>
          <span className="footer-note"><Leaf size={15} /> Farmer-first, community-led.</span>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/about">About Mitravani</Link>
          <Link href="/our-approach">Our approach</Link>
          <Link href="/agriculture">Agriculture</Link>
          <Link href="/dairy">Dairy farming</Link>
          <Link href="/aquaculture">Aquaculture</Link>
        </div>
        <div>
          <h3>Get involved</h3>
          <Link href="/join">Join our farmer network</Link>
          <Link href="/contact">Contact us</Link>
          {site.email && <a href={`mailto:${site.email}`}>Email Mitravani</a>}
          {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us</a>}
        </div>
        <div className="footer-contact">
          <h3>Let’s connect</h3>
          <p><MapPin size={16} /> Building connections with farming communities.</p>
          <p><Phone size={16} /> Contact details will be shared here.</p>
          <Link className="footer-link" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Mitravani. All rights reserved.</span>
        <span>Rooted in relationships. Growing with farmers.</span>
      </div>
    </footer>
  );
}
