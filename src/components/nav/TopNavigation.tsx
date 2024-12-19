import React from 'react';
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
// import whySections from '@/data/sections/whySections';
import {
  // ArrowRight,
  Flower,
} from 'lucide-react';
// import howSections from '@/data/sections/howSections';

const ListItem = React.forwardRef<
  React.ComponentRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-blue-800 focus:bg-blue-100 focus:text-blue-800',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const TopNavigation = () => {
  return (
    <div className="fixed top-4 w-fit px-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="mr-4">
            <NavigationMenuLink
              href="/"
              className={cn(
                'group/logo',
                navigationMenuTriggerStyle(),
                'bg-blue-600 text-slate-50 hover:bg-blue-800 hover:text-slate-50'
              )}
            >
              <Flower
                size={20}
                strokeWidth={1.75}
                className="group-hover/logo:rotate-[80deg] transition-transform ease-out-back duration-500"
              />
              <span className="ml-2 font-bold hidden sm:inline">
                Detox the Web
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#what"
              className={cn(
                navigationMenuTriggerStyle(),
                'hover:bg-blue-100 hover:text-blue-800 focus:bg-blue-100 focus:text-blue-800'
              )}
            >
              <span className="bg-slate-600 text-slate-50 size-5 hidden sm:flex items-center justify-center rounded-full mr-1.5 -ml-2">
                1
              </span>
              What?
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#why"
              className={cn(
                navigationMenuTriggerStyle(),
                'hover:bg-blue-100 hover:text-blue-800 focus:bg-blue-100 focus:text-blue-800'
              )}
            >
              <span className="bg-slate-600 text-slate-50 size-5 hidden sm:flex items-center justify-center rounded-full mr-1.5 -ml-2">
                2
              </span>
              Why?
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#how"
              className={cn(
                navigationMenuTriggerStyle(),
                'hover:bg-blue-100 hover:text-blue-800 focus:bg-blue-100 focus:text-blue-800'
              )}
            >
              <span className="bg-slate-600 text-slate-50 size-5 hidden sm:flex items-center justify-center rounded-full mr-1.5 -ml-2">
                3
              </span>
              How?
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-blue-100 hover:text-blue-800 focus:bg-blue-100 focus:text-blue-800">
              <span className="bg-blue-600 text-slate-50 size-5 hidden sm:flex items-center justify-center rounded-full mr-1.5 -ml-2">
                2
              </span>
              Why?
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[300px] md:grid-cols-[0.5fr_1fr] sm:w-[500px] lg:w-[600px]">
                <li className="row-span-5 group/gradient">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-br from-blue-50 to-blue-200 p-6 no-underline outline-none"
                      href="#why"
                    >
                      <div className="mb-2 text-xl font-bold leading-tight group-hover/gradient:underline underline-offset-4">
                        WHY?
                        <ArrowRight
                          size={20}
                          className="inline align-middle mb-1 animate-pulse"
                        />
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>

                {whySections.map((section) => (
                  <ListItem
                    key={section.title}
                    title={section.title}
                    href={section.href}
                  >
                    {section.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-blue-100 hover:text-blue-800 focus:bg-blue-100 focus:text-blue-800">
              <span className="bg-slate-600 text-slate-50 size-5 hidden sm:flex items-center justify-center rounded-full mr-1.5 -ml-2">
                3
              </span>
              How?
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[300px] md:grid-cols-[0.5fr_1fr] sm:w-[500px] lg:w-[600px]">
                <li className="row-span-5 group/gradient">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-start rounded-md bg-blue-600 text-slate-50 p-6 no-underline outline-none"
                      href="#how"
                    >
                      <div className="mb-2 text-xl font-bold leading-tight group-hover/gradient:underline underline-offset-4">
                        HOW?
                        <ArrowRight
                          size={20}
                          className="inline align-middle mb-1 animate-pulse"
                        />
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>

                {howSections.map((section) => (
                  <li key={section.title}>
                    <NavigationMenuLink asChild>
                      <a
                        href={section.href}
                        className={cn(
                          'flex flex-row gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-blue-800 focus:bg-blue-100 focus:text-blue-800'
                        )}
                      >
                        <div className="flex items-center rounded p-3 self-start bg-blue-50 stroke-slate-600">
                          <section.icon strokeWidth={1.75} />
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-medium leading-none">
                            {section.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                            {section.description}
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default TopNavigation;
