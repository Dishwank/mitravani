"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const sector = String(data.get("sector") || "").trim();
    const location = String(data.get("location") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !phone || !sector || !location) {
      setError("Please complete your name, phone, farming sector and location.");
      return;
    }

    const body = [
      "Mitravani farmer/community enquiry",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Sector: ${sector}`,
      `Location: ${location}`,
      `Message: ${message || "Not provided"}`,
    ].join("\n");

    if (site.whatsapp) {
      const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(body)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setSent(true);
      event.currentTarget.reset();
      return;
    }

    if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Mitravani farmer enquiry")}&body=${encodeURIComponent(body)}`;
      setSent(true);
      event.currentTarget.reset();
      return;
    }

    setError("The online submission channel is not configured yet. Please contact the Mitravani team directly to share your details.");
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {sent ? (
        <div className="form-success">
          <CheckCircle2 size={34} />
          <h3>Your message is ready!</h3>
          <p>Thank you for reaching out to Mitravani. Our team looks forward to connecting with you.</p>
          <button className="text-button" type="button" onClick={() => setSent(false)}>Send another message</button>
        </div>
      ) : (
        <>
          <div className="form-grid">
            <label>Your name <input name="name" placeholder="Enter your name" required /></label>
            <label>Mobile number <input name="phone" type="tel" placeholder="Enter mobile number" required /></label>
            <label>Farming sector
              <select name="sector" defaultValue="" required>
                <option value="" disabled>Select your sector</option>
                <option>Crop farming</option>
                <option>Dairy farming</option>
                <option>Aquaculture / Fish farming</option>
                <option>Livestock / Poultry</option>
                <option>Other / Allied activity</option>
              </select>
            </label>
            <label>Village / District <input name="location" placeholder="Your village and district" required /></label>
          </div>
          <label>What would you like to share? <textarea name="message" rows={4} placeholder="Tell us about your crops, work, challenges or requirements..." /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button" type="submit">Send your details <ArrowRight size={17} /></button>
          <p className="form-disclaimer">Your details will be used only to respond to your enquiry. Online delivery becomes active after Mitravani configures its contact channel.</p>
        </>
      )}
    </form>
  );
}
