'use client';

import AnimatedScore from '@/components/ui/animated-score';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Brain,
  Eye,
  EyeClosed,
  Leaf,
  Rocket,
  ScanEye,
  SearchCheck,
  Users,
  Watch,
  Wrench,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const BenefitContent = ({
  children,
  isInitiallyOpen = false,
}: {
  children: React.ReactNode;
  isInitiallyOpen?: boolean;
}) => {
  const [open, setOpen] = useState(isInitiallyOpen);

  return (
    <div className="relative">
      <div className="visible sm:invisible">
        <p>{children}</p>
        <button className="hidden sm:block text-sm mt-2">Read more</button>
      </div>
      <motion.div
        className="hidden sm:block absolute top-0"
        style={{ height: 'fit-content' }}
        layout
      >
        <motion.p
          className={cn(!open && 'line-clamp-2')}
          key={Math.random()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          layout="position"
        >
          {children}
        </motion.p>
        <button
          className="group block text-sm font-medium text-slate-600 mt-2"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <EyeClosed
              className="mr-0.5 group-hover:mr-2 transition-all inline align-text-bottom"
              size={16}
            />
          ) : (
            <Eye
              className="mr-0.5 group-hover:mr-2 transition-all inline align-text-bottom"
              size={16}
            />
          )}
          {open ? 'Read less' : 'Read more'}
        </button>
      </motion.div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Benefits
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-4">
          <Card className="lg:col-span-6 bg-rose-50 lg:flex flex-row">
            <div className="flex pt-6 pl-6">
              <AnimatedScore
                radius={70}
                className="fill-rose-100 stroke-rose-400"
              />
            </div>
            <div>
              <CardHeader>
                <CardTitle className="flex flex-row gap-2 items-center">
                  <Rocket className="stroke-rose-600 min-w-6" />
                  Lightning-Fast Performance
                </CardTitle>
                <CardDescription>
                  Sub-second Load Times for a Seamless Experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BenefitContent isInitiallyOpen>
                  Minimalist design reduces HTTP requests, minimizes file sizes,
                  and optimizes code, resulting in dramatically faster page load
                  times. This means less waiting for your users and a smoother,
                  more engaging experience, especially on mobile.{' '}
                  <strong>Improves Core Web Vitals like LCP.</strong>
                </BenefitContent>
              </CardContent>
            </div>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex flex-row gap-2 items-center">
                <ScanEye className="min-w-6" />
                Laser-Focused User Experience
              </CardTitle>
              <CardDescription>
                Eliminate Distractions, Maximize Conversions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BenefitContent>
                By removing unnecessary elements, minimalist design creates a
                clear visual hierarchy, guiding users effortlessly to key
                information and calls to action. This focused approach improves
                user comprehension and <strong>boosts conversion rates.</strong>
              </BenefitContent>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3 bg-green-50">
            <CardHeader>
              <CardTitle className="flex flex-row gap-2 items-center">
                <Leaf className="stroke-green-600 min-w-6" />
                Eco-Friendly Digital Footprint
              </CardTitle>
              <CardDescription>
                Reduce Energy Consumption, Support Sustainability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BenefitContent>
                Smaller file sizes and reduced server load translate directly to
                lower energy consumption and a smaller carbon footprint.
                Choosing minimalism is a{' '}
                <strong>step towards a more sustainable web.</strong>
              </BenefitContent>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle className="flex flex-row gap-2 items-center">
                <SearchCheck className="min-w-6" />
                Supercharged SEO Performance
              </CardTitle>
              <CardDescription>
                Rank Higher, Attract More Organic Traffic
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BenefitContent>
                Search engines prioritize fast-loading, user-friendly websites.
                Minimalist design improves page speed, mobile-friendliness, and
                site structure, all of which are crucial ranking factors for{' '}
                <strong>higher search engine visibility.</strong>
              </BenefitContent>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex flex-row gap-2 items-center">
                <Watch className="min-w-6" />
                Future-Proof Design
              </CardTitle>
              <CardDescription>
                Adaptable to Evolving Technologies and Trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BenefitContent>
                A minimalist foundation is inherently flexible. It&apos;s easier
                and less costly to update, redesign, or integrate with new
                technologies as they emerge, ensuring your website remains{' '}
                <strong>modern and effective over time.</strong>
              </BenefitContent>
            </CardContent>
          </Card>

          <Card className="lg:col-span-5 bg-blue-50 lg:flex flex-row">
            <div className="flex pl-6 pt-6">
              <AnimatedScore
                radius={60}
                className="fill-blue-100 stroke-blue-400"
              />
            </div>
            <div>
              <CardHeader>
                <CardTitle className="flex flex-row gap-2 items-center">
                  <Wrench className="stroke-blue-600 min-w-6" />
                  Streamlined Maintenance & Cost Savings
                </CardTitle>
                <CardDescription>
                  Reduce Development and Upkeep Expenses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BenefitContent isInitiallyOpen>
                  Simpler codebases, fewer features, and less reliance on
                  complex plugins mean lower development costs, reduced
                  maintenance time, and fewer potential points of failure,
                  ultimately <strong>saving you time and money.</strong>
                </BenefitContent>
              </CardContent>
            </div>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex flex-row gap-2 items-center">
                <Brain className="min-w-6" />
                Unforgettable Brand Presence
              </CardTitle>
              <CardDescription>
                Make a Lasting Impression with Clarity and Focus
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BenefitContent>
                Minimalism puts the spotlight on your brand&apos;s core message
                and visual identity. By eliminating distractions, you create a
                more impactful and memorable experience that{' '}
                <strong>resonates with your audience.</strong>
              </BenefitContent>
            </CardContent>
          </Card>

          <Card className="lg:col-span-5 bg-yellow-50 lg:flex flex-row">
            <div className="flex pt-6 pl-6">
              <AnimatedScore
                radius={50}
                className="fill-yellow-100 stroke-yellow-400"
              />
            </div>
            <div>
              <CardHeader>
                <CardTitle className="flex flex-row gap-2 items-center">
                  <Users className="stroke-yellow-600 min-w-6" />
                  Enhanced Accessibility & Inclusivity
                </CardTitle>
                <CardDescription>
                  Design for Users of All Abilities and Backgrounds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BenefitContent isInitiallyOpen>
                  Clean layouts, clear typography, and intuitive navigation
                  benefit all users, especially those with disabilities.
                  Minimalism promotes <strong>better accessibility </strong>by
                  simplifying content and reducing cognitive load.
                </BenefitContent>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
