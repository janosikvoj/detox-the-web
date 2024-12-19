'use client';

import React from 'react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import howSections from '@/data/sections/howSections';
import {
  ArrowDownLeft,
  ArrowDownRight,
  ArrowUpLeft,
  ArrowUpRight,
  MoveRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const Suggestions = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Suggestions
        </h2>
        <div className="">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
              skipSnaps: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {howSections.map((section) => (
                <CarouselItem
                  key={section.title}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <a href={section.href}>
                      <Card className="group overflow-hidden hover:scale-95 transition-all">
                        <div
                          className={cn(
                            'relative p-6 aspect-video flex justify-center items-center stroke-slate-800',
                            section.bg
                          )}
                        >
                          <div className="absolute inset-0 scale-50 bg-slate-50/20 blur-3xl rounded-full" />
                          <ArrowDownRight
                            strokeWidth={1.5}
                            className="absolute m-3 group-hover:m-6 transition-all top-0 left-0 stroke-inherit"
                          />
                          <ArrowDownLeft
                            strokeWidth={1.5}
                            className="absolute m-3 group-hover:m-6 transition-all top-0 right-0 stroke-inherit"
                          />
                          <ArrowUpLeft
                            strokeWidth={1.5}
                            className="absolute m-3 group-hover:m-6 transition-all bottom-0 right-0 stroke-inherit"
                          />
                          <ArrowUpRight
                            strokeWidth={1.5}
                            className="absolute m-3 group-hover:m-6 transition-all bottom-0 left-0 stroke-inherit"
                          />
                          <section.icon
                            size={48}
                            className="absolute stroke-slate-50 group-hover:scale-125 transition-all blur-lg"
                          />
                          <section.icon
                            size={48}
                            strokeWidth={1}
                            className="absolute stroke-inherit group-hover:scale-125 transition-all"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{section.title}</CardTitle>
                          <div className="flex flex-row flex-wrap gap-1">
                            {section.badges &&
                              section.badges.length > 0 &&
                              section.badges.map((badge) => (
                                <Badge key={badge} variant={badge as 'easy'}>
                                  {badge.toUpperCase()}
                                </Badge>
                              ))}
                            <Badge variant="outline">LESS</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>{section.description}</CardContent>
                        <CardFooter>
                          <small className="block text-sm font-medium text-slate-400">
                            Explore
                            <MoveRight
                              className="ml-0.5 group-hover:ml-2 transition-all inline align-text-bottom mt-2"
                              size={16}
                            />
                          </small>
                        </CardFooter>
                      </Card>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between mt-2 mx-8">
              <CarouselPrevious className="relative translate-y-0 left-0" />
              <small className="block text-sm text-slate-400">
                {current}/{count}
              </small>
              <CarouselNext className="relative translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Suggestions;
