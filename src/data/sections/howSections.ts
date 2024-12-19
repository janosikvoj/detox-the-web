import {
  Binary,
  Image,
  LayoutTemplate,
  LetterText,
  LucideIcon,
  Sprout,
} from 'lucide-react';

const howSections: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  bg: string;
  badges?: string[];
}[] = [
  {
    title: 'Optimized Media',
    href: '#how_media',
    description: 'The easiest and fastest way to improve performance.',
    icon: Image,
    bg: 'bg-blue-200',
    badges: ['easy'],
  },
  {
    title: 'Minimalist Design',
    href: '#how_min',
    description: 'Prioritize essential elements and use ample white space.',
    icon: LayoutTemplate,
    bg: 'bg-slate-200',
  },
  {
    title: 'Green Hosting',
    href: '#how_green',
    description: 'Choose a reliable, fast, and green hosting provider.',
    icon: Sprout,
    bg: 'bg-green-400',
    badges: ['easy'],
  },
  {
    title: 'Concise Content',
    href: '#how_cont',
    description:
      'Write clear and concise copy, avoiding unnecessary jargon and fluff.',
    icon: LetterText,
    bg: 'bg-slate-300',
  },
  {
    title: 'Efficient Code',
    href: '#how_eff',
    description: 'Write clean and efficient code to minimize resource usage.',
    icon: Binary,
    bg: 'bg-slate-400',
  },
];

export default howSections;
