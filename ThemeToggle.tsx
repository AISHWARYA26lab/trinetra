import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../../lib/utils';

export const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // Default to dark for cyber theme

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none border border-border",
                theme === 'dark' ? 'bg-secondary' : 'bg-gray-200'
            )}
            aria-label="Toggle Theme"
        >
            <div
                className={cn(
                    "absolute top-0.5 left-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 shadow-sm",
                    theme === 'dark'
                        ? 'translate-x-6 bg-primary text-black'
                        : 'translate-x-0 bg-white text-yellow-500'
                )}
            >
                {theme === 'dark' ? <Moon size={12} /> : <Sun size={12} />}
            </div>
        </button>
    );
};
