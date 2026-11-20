import Image from 'next/image';
import Link from 'next/link';

type AgentPortraitProps = {
  size?: number;
  className?: string;
  linked?: boolean;
};

export function AgentPortrait({ size = 44, className = '', linked = true }: AgentPortraitProps) {
  const image = (
    <Image
      src="/images/agents/dr-jan-duffy.jpg"
      alt="Dr. Jan Duffy — Lone Mountain Heights real estate expert"
      width={size}
      height={size}
      className={`rounded-full object-cover ring-2 ring-[var(--accent-color)] ${className}`}
      priority
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