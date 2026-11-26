import type { Metadata } from "next";
import { MessageCircle, Users, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title: "Join our network" };
export default function JoinPage() {
  return (
    <>
      <section className="page-hero page-hero-green"><div className="container page-hero-content"><span className="eyebrow eyebrow-light">Join the Mitravani network</span><h1>Your experience<br /><em>has a place here.</em></h1><p>Whether you grow crops, raise cattle, manage ponds or support farming communities, we would like to hear from you.</p></div></section>
      <section className="section-pad"><div className="container join-layout"><div className="join-aside"><span className="eyebrow">Let’s get to know one another</span><h2>Start with a few details.</h2><p>Share a little about yourself and your farming activity. We hope to use these details to begin a conversation and understand your local context.</p><div className="join-benefit"><MessageCircle/><div><h3>A conversation, not a commitment</h3><p>Registering your interest does not create an obligation to buy, sell or participate in a programme.</p></div></div><div className="join-benefit"><Users/><div><h3>All farming sectors welcome</h3><p>Crop farming, dairy, aquaculture, livestock, poultry and allied activities.</p></div></div><div className="join-benefit"><ShieldCheck/><div><h3>Respectful handling</h3><p>We will use the information you share to respond to your enquiry once our contact channel is configured.</p></div></div></div><ContactForm/></div></section>
    </>
  );
}
