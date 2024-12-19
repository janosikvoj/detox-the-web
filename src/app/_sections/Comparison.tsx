'use client';
import React, { useState } from 'react';

import extremesComparisonData from '@/data/sections/extremesComparison';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { Eye, EyeClosed } from 'lucide-react';

const Comparison = () => {
  const [open, setOpen] = useState(false);
  console.log('Rerendered!');

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Comparison
        </h2>
        <div className="max-w-4xl mx-auto text-left">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Minimalism</TableHead>
                <TableHead>Maximalism</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {extremesComparisonData.map(({ minimal, maximal, title }, i) => {
                if (!open && i > 6) {
                  return;
                }

                return (
                  <TableRow key={title}>
                    <TableCell className="font-semibold">{title}</TableCell>
                    <TableCell
                      className={cn(
                        minimal.implication === 'positive' &&
                          'text-emerald-600',
                        minimal.implication === 'negative' && 'text-rose-600',
                        'font-medium'
                      )}
                    >
                      {minimal.content}
                    </TableCell>
                    <TableCell
                      className={cn(
                        maximal.implication === 'positive' &&
                          'text-emerald-600',
                        maximal.implication === 'negative' && 'text-rose-600',
                        'font-medium'
                      )}
                    >
                      {maximal.content}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableCaption>
              <button
                className="group block text-sm font-medium text-slate-600 mt-2"
                onClick={() => {
                  console.log('Button clicked.');
                  setOpen(!open);
                }}
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
              <div className="h-px bg-slate-200 w-1/3 my-2" />A list of
              important website aspects.
            </TableCaption>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
