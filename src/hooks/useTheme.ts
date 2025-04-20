// src/hooks/useTheme.ts
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // مسیر به ThemeContext.tsx

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        // این ارور رخ می دهد اگر useTheme خارج از ThemeProvider فراخوانی شود
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};