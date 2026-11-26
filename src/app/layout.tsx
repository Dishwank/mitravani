import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mitravani | The Voice of Farmers",
    template: "%s | Mitravani",
  },
  description:
    "Mitravani connects with crop growers, dairy farmers and aquaculture communities to listen, understand local needs and grow together.",
  icons: { icon: "/images/mitravani-logo.jpeg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
