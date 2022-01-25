import Link from 'next/link';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="w-full bg-white drop-shadow">
        <nav className="space-x-5 max-w-5xl mx-auto h-10 flex items-center">
          <Link href="/">
            <a className="text-gray-800 hover:text-blue-500">Home</a>
          </Link>
          <Link href="/posts">
            <a className="text-gray-800 hover:text-blue-500">Blog</a>
          </Link>
        </nav>
      </div>
      <div className="max-w-5xl mx-auto py-8">{children}</div>
      <div className="bg-gray-50">
        <footer className="max-w-5xl mx-auto text-center">Footer</footer>
      </div>
    </>
  );
};

export default Layout;
