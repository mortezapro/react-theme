import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Type, Palette, Bell, Film } from 'lucide-react';

interface SettingsPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
    const [fontSize, setFontSize] = useState<string>('medium');
    const [colorPalette, setColorPalette] = useState<string>('default');
    const [notifications, setNotifications] = useState<boolean>(true);
    const [animations, setAnimations] = useState<boolean>(true);

    useEffect(() => {
        const savedSettings = localStorage.getItem('settings');
        if (savedSettings) {
            const parsed = JSON.parse(savedSettings);
            setFontSize(parsed.fontSize || 'medium');
            setColorPalette(parsed.colorPalette || 'default');
            setNotifications(parsed.notifications ?? true);
            setAnimations(parsed.animations ?? true);
        }
    }, []);

    useEffect(() => {
        const settings = { fontSize, colorPalette, notifications, animations };
        localStorage.setItem('settings', JSON.stringify(settings));
        document.documentElement.style.fontSize = fontSize === 'small' ? '14px' : fontSize === 'large' ? '18px' : '16px';

        // Apply color palette (you can expand this in tailwind.config.js)
        document.documentElement.setAttribute('data-palette', colorPalette);
    }, [fontSize, colorPalette, notifications, animations]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-30 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
                    <motion.div
                        className="fixed top-0 right-0 h-screen bg-white dark:bg-gray-800 shadow-2xl p-8 overflow-y-auto w-full md:w-96 rounded-l-lg"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                                aria-label="Close Settings"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                                    <Type size={20} />
                                    <span>Font Size</span>
                                </label>
                                <select
                                    value={fontSize}
                                    onChange={(e) => setFontSize(e.target.value)}
                                    className="mt-2 w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                >
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </div>
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                                    <Palette size={20} />
                                    <span>Color Palette</span>
                                </label>
                                <select
                                    value={colorPalette}
                                    onChange={(e) => setColorPalette(e.target.value)}
                                    className="mt-2 w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                >
                                    <option value="default">Default</option>
                                    <option value="blue">Blue</option>
                                    <option value="green">Green</option>
                                </select>
                            </div>
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                                    <Bell size={20} />
                                    <span>Notifications</span>
                                </label>
                                <input
                                    type="checkbox"
                                    checked={notifications}
                                    onChange={(e) => setNotifications(e.target.checked)}
                                    className="mt-2 h-5 w-5 text-blue-600"
                                />
                            </div>
                            <div>
                                <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                                    <Film size={20} />
                                    <span>Animations</span>
                                </label>
                                <input
                                    type="checkbox"
                                    checked={animations}
                                    onChange={(e) => setAnimations(e.target.checked)}
                                    className="mt-2 h-5 w-5 text-blue-600"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SettingsPanel;