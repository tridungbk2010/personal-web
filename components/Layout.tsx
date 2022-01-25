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
  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <nav className="space-x-5 h-16 flex items-center">
          {links.map((link) =>
            link.external ? (
              <a
                href={link.href}
                className="text-gray-800 dark:text-white hover:text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </a>
            ) : (
              <Link href={link.href} key={link.id}>
                <a className="text-gray-800 dark:text-white hover:text-blue-500">
                  {link.name}
                </a>
              </Link>
            ),
          )}
        </nav>
        <DarkModeToggle />
      </div>
      <div className="max-w-5xl mx-auto py-8">{children}</div>
    </div>
  );
};

export default Layout;
