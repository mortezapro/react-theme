// src/ui/ThemeToggleButton.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
// مسیر صحیح بر اساس ساختار فایل
import { useTheme } from '../../context/ThemeContext'; // مسیر به‌روز شده

const ThemeToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-12 h-6 flex items-center rounded-full p-1 bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Theme"
        >
            <motion.div
                className={`absolute w-4 h-4 rounded-full bg-white shadow-md ${
                    theme === 'dark' ? 'right-1' : 'left-1'
                }`}
                layout // Enable layout animations
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            />
            <div className="flex w-full justify-between items-center relative z-10">
                <motion.div
                    initial={false}
                    animate={{ opacity: theme === 'light' ? 1 : 0.5 }}
                    transition={{ duration: 0.2 }}
                >
                    <Sun size={16} color={theme === 'light' ? '#000' : '#fff'} />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{ opacity: theme === 'dark' ? 1 : 0.5 }}
                    transition={{ duration: 0.2 }}
                >
                    <Moon size={16} color={theme === 'dark' ? '#000' : '#fff'} />
                </motion.div>
            </div>
        </button>
    );
};

export default ThemeToggleButton;