import AnimateIn from '@/components/ui/animate-in';
import ExternalLink from '@/components/ui/external-link';
import {
  ArrowDownLeft,
  ArrowDownRight,
  ArrowUpLeft,
  ArrowUpRight,
} from 'lucide-react';
import React from 'react';

const Numbers = () => {
  return (
    <section className="relative bg-slate-950 text-slate-50 stroke-slate-600">
      <AnimateIn>
        <ArrowDownRight
          strokeWidth={1.5}
          className="absolute m-3 top-0 left-0 stroke-inherit"
        />
        <ArrowDownLeft
          strokeWidth={1.5}
          className="absolute m-3 top-0 right-0 stroke-inherit"
        />
        <ArrowUpLeft
          strokeWidth={1.5}
          className="absolute m-3 bottom-0 right-0 stroke-inherit"
        />
        <ArrowUpRight
          strokeWidth={1.5}
          className="absolute m-3 bottom-0 left-0 stroke-inherit"
        />
        <h1 className="container text-center font-medium pt-8">
          Lets have a look on some numbers.
        </h1>
        <div className="container flex flex-col sm:grid grid-cols-3 gap-8 pt-24 pb-32">
          <div className="text-center">
            <p className="text-7xl font-black tracking-tighter">
              2.5 <span className="text-5xl font-medium">s</span>
            </p>
            <small className="block text-sm text-slate-200 mt-4">
              Average attention span of internet users.
              <br />
              <ExternalLink href="https://www.eye-square.com/en/media-attention-benchmark/">
                Read more
              </ExternalLink>
            </small>
          </div>
          <div className="text-center">
            <p className="text-7xl font-black tracking-tighter">
              553 <span className="text-5xl font-medium">kg</span>
            </p>
            <small className="block text-sm text-slate-200 mt-4">
              Amount of CO² generated per year by an average website with 10,000
              monthly page views.
              <br />
              <ExternalLink href="https://en.reset.org/whats-carbon-footprint-your-website/">
                Read more
              </ExternalLink>
            </small>
          </div>
          <div className="text-center">
            <p className="text-7xl font-black tracking-tighter">
              32 <span className="text-5xl font-medium">%</span>
            </p>
            <small className="block text-sm text-slate-200 mt-4">
              Bounce rate increase as page load time goes from 1 second to 3
              seconds.
              <br />
              <ExternalLink href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/page-load-time-statistics/">
                Read more
              </ExternalLink>
            </small>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
};

export default Numbers;
