import { ReactNode } from 'react';

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className="prose lg:prose-lg dark:prose-invert prose-a:text-blue-600 dark:prose-a:text-blue-50 prose-a:no-underline prose-pre:p-0 lg:prose-pre:p-0">
      {children}
    </div>
  );
};

export default Content;
