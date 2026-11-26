import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  light?: boolean;
};

export default function Logo({ compact = false, light = false }: LogoProps) {
  return (
    <Link href="/" className="brand-lockup" aria-label="Mitravani home">
      <Image
        src="/images/mitravani-logo.jpeg"
        alt="Mitravani — The Voice of Farmers"
        width={compact ? 58 : 68}
        height={compact ? 58 : 68}
        priority
        className="brand-logo"
      />
      {!compact && (
        <span className={`brand-copy ${light ? "brand-copy-light" : ""}`}>
          <strong>MITRAVANI</strong>
          <small>The Voice of Farmers</small>
        </span>
      )}
    </Link>
  );
}
