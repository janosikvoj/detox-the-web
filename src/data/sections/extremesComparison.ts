type Implication = 'positive' | 'negative' | 'neutral' | 'subjective';

const extremesComparisonData: {
  title: string;
  minimal: {
    content: string;
    implication: Implication;
  };
  maximal: {
    content: string;
    implication: Implication;
  };
}[] = [
  // Core Performance & User Experience
  {
    title: 'Load Times',
    minimal: { content: 'Fast', implication: 'positive' },
    maximal: { content: 'Slow', implication: 'negative' },
  },
  {
    title: 'Performance',
    minimal: { content: 'High', implication: 'positive' },
    maximal: { content: 'Lower', implication: 'negative' },
  },
  {
    title: 'Mobile Experience',
    minimal: { content: 'Optimized', implication: 'positive' },
    maximal: { content: 'Potentially poor', implication: 'negative' },
  },
  {
    title: 'Accessibility',
    minimal: { content: 'Good', implication: 'positive' },
    maximal: { content: 'Challenging', implication: 'negative' },
  },
  {
    title: 'User Experience',
    minimal: { content: 'Streamlined', implication: 'positive' },
    maximal: { content: 'Rich', implication: 'subjective' },
  },
  {
    title: 'Cognitive Load',
    minimal: { content: 'Low', implication: 'positive' },
    maximal: { content: 'High', implication: 'negative' },
  },

  // Development & Maintenance
  {
    title: 'Development',
    minimal: { content: 'Simple', implication: 'positive' },
    maximal: { content: 'Complex', implication: 'negative' },
  },
  {
    title: 'Maintenance',
    minimal: { content: 'Low cost', implication: 'positive' },
    maximal: { content: 'High cost', implication: 'negative' },
  },

  // Branding & Marketing
  {
    title: 'Brand Differentiation',
    minimal: { content: 'Less', implication: 'negative' },
    maximal: { content: 'High', implication: 'positive' },
  },
  {
    title: 'Memorability',
    minimal: { content: 'Subtle', implication: 'neutral' },
    maximal: { content: 'Bold', implication: 'positive' },
  },
  {
    title: 'Emotional Impact',
    minimal: { content: 'Minimal', implication: 'neutral' },
    maximal: { content: 'Strong', implication: 'positive' },
  },
  {
    title: 'User Engagement',
    minimal: { content: 'Functional', implication: 'neutral' },
    maximal: { content: 'Interactive', implication: 'positive' },
  },
  {
    title: 'Appeal',
    minimal: { content: 'Timeless', implication: 'positive' },
    maximal: { content: 'Trendy', implication: 'subjective' },
  },

  // Design & Aesthetics
  {
    title: 'Focus',
    minimal: { content: 'Clear', implication: 'positive' },
    maximal: { content: 'Distracting', implication: 'negative' },
  },
  {
    title: 'Aesthetics',
    minimal: { content: 'Simple', implication: 'neutral' },
    maximal: { content: 'Complex', implication: 'subjective' },
  },
  {
    title: 'Creativity',
    minimal: { content: 'Restrained', implication: 'neutral' },
    maximal: { content: 'Expressive', implication: 'positive' },
  },
  {
    title: 'Storytelling',
    minimal: { content: 'Direct', implication: 'neutral' },
    maximal: { content: 'Immersive', implication: 'positive' },
  },
  {
    title: 'Blandness Risk',
    minimal: { content: 'Possible', implication: 'negative' },
    maximal: { content: 'Unlikely', implication: 'positive' },
  },
  {
    title: 'Flexibility',
    minimal: { content: 'Limited', implication: 'negative' },
    maximal: { content: 'Extensive', implication: 'positive' },
  },

  // Other
  {
    title: 'Carbon Footprint',
    minimal: { content: 'Low', implication: 'positive' },
    maximal: { content: 'High', implication: 'negative' },
  },
  {
    title: 'SEO',
    minimal: { content: 'Favorable', implication: 'positive' },
    maximal: { content: 'Potentially hindered', implication: 'negative' },
  },
];

export default extremesComparisonData;
