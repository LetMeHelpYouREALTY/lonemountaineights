import Image from 'next/image';
import Link from 'next/link';

type AgentPortraitProps = {
  size?: number;
  className?: string;
  linked?: boolean;
  /** Above-the-fold placements (nav) load immediately; preloading stays reserved for the hero image. */
  eager?: boolean;
};

export function AgentPortrait({ size = 44, className = '', linked = true, eager = false }: AgentPortraitProps) {
  const image = (
    <Image
      src="/images/agents/dr-jan-duffy-headshot.jpg"
      alt="Dr. Jan Duffy — Lone Mountain Heights real estate expert"
      width={size}
      height={size}
      className={`rounded-full object-cover ring-2 ring-[var(--accent-color)] ${className}`}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'low' : undefined}
    />
  );

  if (linked) {
    return (
      <Link href="/about" className="shrink-0" aria-label="About Dr. Jan Duffy">
        {image}
      </Link>
    );
  }

  return image;
}
