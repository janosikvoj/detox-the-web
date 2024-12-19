import Hero from './_sections/Hero';
import Numbers from './_sections/Numbers';
import SectionHeading from './_sections/SectionHeading';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import ExternalLink from '@/components/ui/external-link';

import Benefits from './_sections/Benefits';
import Suggestions from './_sections/Suggestions';
import howSections from '@/data/sections/howSections';
import Comparison from './_sections/Comparison';

export default function Home() {
  return (
    <main>
      <Hero />
      <Numbers />

      {/* Section: WHAT? */}

      <SectionHeading
        id="what"
        order={1}
        title="WHAT?"
        description="The web is a landscape of design approaches. Websites can be stripped-down
            and efficient, focusing solely on delivering information. On the
            other hand, they can be bursting with interactive elements, aiming
            to create immersive experiences. This section will explore these two
            ends of the spectrum: minimalism and maximalism in web design."
      />

      <section className="bg-blue-100 py-16">
        <div className="container">
          <h2 className="mb-8 scroll-m-20 border-b border-slate-300 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            The extremes
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 mx-auto text-left">
            <Card>
              <a href="https://www.berkshirehathaway.com/">
                <div className="aspect-w-4 aspect-h-5 relative">
                  <Image
                    src="/img/screenshot_under-designed-website.png"
                    alt="Over-designed website"
                    width={800}
                    height={450}
                    className="object-cover rounded-t-lg"
                    style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                  />
                </div>
              </a>
              <CardHeader className="border-t border-slate-200">
                <CardTitle>Minimalist websites</CardTitle>
                <CardDescription>Not enough!</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Brutalist web design that use minimal styles, interactivity
                  and aim for fast performance. It’s aesthetics and
                  functionality is derived from web standards.
                </p>
              </CardContent>
              <CardFooter>
                <small className="block text-sm text-slate-400">
                  See more examples:
                  <br />
                  <ExternalLink href="https://news.ycombinator.com/">
                    Hacker News
                  </ExternalLink>
                  <ExternalLink href="https://motherfuckingwebsite.com/">
                    Mother fucking website
                  </ExternalLink>
                  <ExternalLink href="https://brutalist-web.design/">
                    Brutalist Web Design
                  </ExternalLink>
                </small>
              </CardFooter>
            </Card>
            <Card>
              <a href="https://www.virulentsoftware.com/" target="_blank">
                <div className="aspect-w-4 aspect-h-5 relative">
                  <Image
                    src="/img/screenshot_over-designed-website-3.png"
                    alt="Over-designed website"
                    width={800}
                    height={450}
                    className="object-cover rounded-t-lg"
                    style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                  />
                </div>
              </a>
              <CardHeader className="border-t border-slate-200">
                <CardTitle>Maximalist websites</CardTitle>
                <CardDescription>Too much!</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Overengineered sites which use interactive 3D objects, complex
                  animations, shader effects and other custom features like
                  scroll-jacking.
                </p>
              </CardContent>
              <CardFooter>
                <small className="block text-sm text-slate-400">
                  See more examples:
                  <br />
                  <ExternalLink href="https://aaa24.a24films.com/">
                    A24 Membership
                  </ExternalLink>
                  <ExternalLink href="https://dversostudio.io/">
                    dverso studio
                  </ExternalLink>
                  <ExternalLink href="https://maddshotstudio.com/">
                    Maddshots Studio
                  </ExternalLink>
                </small>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <Comparison />

      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Conclusion
          </h2>
          <div className="max-w-2xl mx-auto text-left">
            <p>
              The contrast between minimalist and maximalist design highlights
              the diverse possibilities within web design. While these extremes
              serve as useful points of reference, the reality is that most
              successful websites exist somewhere in between. Few businesses can
              truly benefit from the starkness of pure minimalism or the sensory
              overload of extreme maximalism. Nevertheless, the underlying
              philosophy of &quot;less is more&quot; remains relevant,
              encouraging us to prioritize clarity, efficiency, and user
              experience even when incorporating more complex elements.
            </p>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
              &quot;Balance is key, but less is often more.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section: WHY? */}

      <SectionHeading
        id="why"
        order={2}
        title="WHY?"
        description='In today&apos;s fast-paced world, creating a website that delivers a
            smooth and efficient user experience (UX) is more important than
            ever. While visually stunning websites can be captivating, they
            often come at a cost. This section will dive into the benefits of a
            minimalist approach, highlighting how "less is more" can
            lead to a more powerful online presence.'
      />

      <Benefits />

      {/* Section: HOW? */}

      <SectionHeading
        id="how"
        order={3}
        title="HOW?"
        description="
            Building a minimalist website isn't just about stripping things
            away. It's about intentional design choices that prioritize
            user experience and performance. This section will delve into the
            practical steps for crafting a streamlined website, from minimalist
            design principles to optimized media and efficient coding practices."
      />

      <Suggestions />

      {howSections.map((section) => (
        <section key={section.title} className="py-8">
          <div className="container">
            <h3
              className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6"
              id={section.href.substring(1)}
            >
              {section.title}
            </h3>
          </div>
          <div className="container bg-slate-200 h-96 flex justify-center items-center animate-pulse">
            Soon™
          </div>
        </section>
      ))}
    </main>
  );
}
