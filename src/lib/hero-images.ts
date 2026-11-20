import type { StaticImageData } from 'next/image';
import bhhsOffice from '@/assets/images/bhhs-nevada-summerlin-office.jpg';
import lonePeak from '@/assets/images/lone-mountain-peak.jpg';

export type HeroImage = {
  src: StaticImageData;
  alt: string;
  /** CSS object-position that keeps the subject in frame on wide, short hero crops. */
  position: string;
};

export const HERO_IMAGES = {
  loneMountain: {
    src: lonePeak,
    alt: 'Lone Mountain, the northwest Las Vegas peak Lone Mountain Heights is named for',
    position: 'center 45%',
  },
  bhhsOffice: {
    src: bhhsOffice,
    alt: 'Berkshire Hathaway HomeServices Nevada Properties office in Summerlin, Las Vegas',
    position: 'center 35%',
  },
} satisfies Record<string, HeroImage>;
