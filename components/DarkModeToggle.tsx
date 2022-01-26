import { useTheme } from 'next-themes';
import LightIcon from './icons/LightIcon';
import DarkIcon from './icons/DarkIcon';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  function onSwitch() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <div>
      <button
        className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        onClick={onSwitch}
      >
        {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
