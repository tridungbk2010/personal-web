import { useEffect, useState } from 'react';

type DarkMode = 'dark' | 'light';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggle(mode: DarkMode) {
    setIsDarkMode(!isDarkMode);
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // window.localStorage.theme = mode;
  }

  useEffect(() => {
    if (
      window.localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return {
    toggle,
    isDarkMode,
  };
}
