import { useEffect, useState } from 'react';
import LightIcon from './icons/LightIcon';
import DarkIcon from './icons/DarkIcon';

function isDarkModeSystem(): boolean {
  return (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(isDarkModeSystem);

  function toggle() {
    setIsDarkMode(!isDarkMode);
    window.localStorage.theme = isDarkMode ? 'light' : 'dark';
  }
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div>
      <button
        className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        onClick={toggle}
      >
        {isDarkMode ? <LightIcon /> : <DarkIcon />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
