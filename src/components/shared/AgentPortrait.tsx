import Image from 'next/image';
import Link from 'next/link';

type AgentPortraitProps = {
  size?: number;
  className?: string;
  linked?: boolean;
  /** Use when the name is already printed next to the photo. */
  decorative?: boolean;
  priority?: boolean;
};

export function AgentPortrait({
  size = 44,
  className = '',
  linked = true,
  decorative = false,
  priority = false,
}: AgentPortraitProps) {
  const image = (
    <Image
      src="/images/agents/dr-jan-duffy.jpg"
      alt={decorative ? '' : 'Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties'}
      width={size}
      height={size}
      sizes={`${size}px`}
      className={`shrink-0 rounded-full object-cover ring-2 ring-[var(--accent-color)] ${className}`}
      priority={priority}
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
