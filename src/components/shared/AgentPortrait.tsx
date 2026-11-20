import Image from 'next/image';
import Link from 'next/link';

const PORTRAIT_SRC = '/images/agents/dr-jan-duffy.jpg';

type AgentPortraitProps = {
  size?: number;
  showCaption?: boolean;
  className?: string;
  onNavigate?: () => void;
};

export function AgentPortrait({
  size = 44,
  showCaption = false,
  className = '',
  onNavigate,
}: AgentPortraitProps) {
  return (
    <Link
      href="/about"
      className={`group flex items-center gap-3 ${className}`}
      aria-label="About Dr. Jan Duffy"
      onClick={onNavigate}
    >
      <span
        className="relative shrink-0 overflow-hidden rounded-full border-2 border-[var(--accent-color)] shadow-sm ring-2 ring-white"
        style={{ width: size, height: size }}
      >
        <Image
          src={PORTRAIT_SRC}
          alt=""
          width={size}
          height={size}
          className="object-cover"
          priority
        />
      </span>
      {showCaption && (
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="text-sm font-bold tracking-wide text-[var(--heading-color)] group-hover:text-[var(--accent-dark)]">
            DR. JAN DUFFY
          </span>
          <span className="text-[10px] font-medium text-[var(--text-light)]">
            LONE MOUNTAIN HEIGHTS EXPERT
          </span>
        </span>
      )}
    </Link>
  );
}

export const AGENT_PORTRAIT_URL = PORTRAIT_SRC;