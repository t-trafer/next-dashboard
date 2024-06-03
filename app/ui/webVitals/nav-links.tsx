'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon as DocIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/webVitals/home', icon: HomeIcon },
  { name: 'Collection', href: '/webVitals/collection', icon: DocIcon },
  { name: 'PDP', href: '/webVitals/pdp', icon: UserGroupIcon },
  { name: 'Search', href: '/webVitals/search', icon: MagnifyingGlassIcon },
];

const ICON_MAP = {
  home: HomeIcon,
  collection: DocIcon,
  pdp: UserGroupIcon,
  search: MagnifyingGlassIcon,
};

export default function NavLinks({ sources }: { sources: string[] }) {
  const pathname = usePathname();
  return (
    <>
      {sources.map((src) => {
        // @ts-ignore
        const LinkIcon = ICON_MAP[src] || XMarkIcon;
        const href = `/webVitals/${src}`;
        return (
          <Link
            key={src}
            href={href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              { 'bg-sky-100 text-blue-600': pathname === href },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{src}</p>
          </Link>
        );
      })}
    </>
  );
}
