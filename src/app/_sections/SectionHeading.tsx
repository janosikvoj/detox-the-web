import React from 'react';

interface SectionHeadingProps {
  order: number;
  title: string;
  description: string;
  id: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  order,
  title,
  description,
}) => {
  return (
    <section id={id} className="py-24">
      <hgroup className="container flex flex-row justify-between sm:justify-start items-center gap-8 pb-4 border-b-2 border-slate-200">
        <p className="font-semibold">
          <span className="bg-blue-600 text-slate-50 size-5 inline-flex items-center justify-center rounded-full mr-1.5 -ml-2">
            {order}
          </span>
          Section
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          {title}
        </h1>
      </hgroup>
      <div className="container pt-4">
        <p className="max-w-[60ch]">{description}</p>
      </div>
    </section>
  );
};

export default SectionHeading;
