import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ReactNode } from 'react';
// import DarkModeToggle from './DarkModeToggle';

const DarkModeToggle = dynamic(() => import('./DarkModeToggle'), {
  ssr: false,
});

const links = [
  { id: 'home', href: '/', name: 'Home' },
  { id: 'blog', href: '/posts', name: 'Blog' },
  {
    id: 'github',
    href: 'https://github.com/tridungbk2010',
    name: 'Github',
    external: true,
  },
  {
    id: 'twitter',
    href: 'https://twitter.com/tridungbk2010',
    name: 'Twitter',
    external: true,
  },
];

const Layout = ({ children }: { children: ReactNode }) => {
  return <>
    <div className="max-w-screen-md mx-auto flex justify-between items-center">
      <nav className="space-x-5 h-16 flex items-center">
        {links.map((link) =>
          link.external ? (
            <a
              key={link.id}
              href={link.href}
              className="text-gray-800 dark:text-white hover:text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          ) : (
            (<Link
              href={link.href}
              key={link.id}
              className="text-gray-800 dark:text-white hover:text-blue-500">

              {link.name}

            </Link>)
          ),
        )}
      </nav>
      <DarkModeToggle />
    </div>
    <div className="max-w-screen-md mx-auto py-8">{children}</div>
  </>;
};

export default Layout;
