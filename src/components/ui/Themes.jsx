import React, { useState, useEffect } from 'react';

const SunIcon = ({ active }) => (
  <svg
    className={`w-6 h-6 ${active ? "text-yellow-400" : "text-gray-400"}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.414-1.414M6.464 6.464L5.05 5.05m12.02 0l-1.414 1.414M6.464 17.536l-1.414 1.414" />
  </svg>
);

const MoonIcon = ({ active }) => (
  <svg
    className={`w-6 h-6 ${active ? "text-blue-500" : "text-gray-400"}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
      fill={active ? "#3b82f6" : "none"}
    />
  </svg>
);

const Themes = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className='absolute bottom-25 ml-7 w-[213px] h-[48px] bg-base-300 rounded-[4px]'>
    <div className="flex items-center justify-center gap-3 " >
      <button
        className={`flex items-center justify-center w-[96px] h-[40px] rounded-[4px] mt-1 cursor-pointer  transition-colors duration-300 ${
          theme === 'light' ? 'bg-base-100' : 'bg-base-100'
        }`}
        onClick={() => setTheme('light')}
        aria-label="Light mode"
      >
        <SunIcon active={theme === 'light'} /> 
        <span className=''>light</span>
      </button>
      <button
        className={`flex items-center justify-center w-[96px] h-[40px] rounded-[4px] mt-1  cursor-pointer  transition-colors duration-300 ${
          theme === 'dark' ? 'bg-info-100' : ''
        }`}
        onClick={() => setTheme('dark')}
        aria-label="Dark mode"
      >
        <MoonIcon active={theme === 'dark'} />
        <span className=''>Dark</span>
      </button>
    </div>
    </div>

  );
};

export default Themes;