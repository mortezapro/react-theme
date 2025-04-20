import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarNavItemProps {
    to: string;
    icon: React.ReactNode;
    text: string;
    isMini: boolean;
    isActive?: boolean;
    onCloseSidebar?: () => void;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ to, icon, text, isMini, isActive, onCloseSidebar }) => {
    return (
        <Link
            to={to}
            className={`flex items-center py-3 px-4 rounded-lg transition-all duration-300 relative group ${
                isActive
                    ? 'bg-white text-orange-600 shadow-lg'
                    : 'text-white hover:bg-gray-400 hover:shadow-md'
            }`}
            onClick={(e) => {
                if (isActive) {
                    e.preventDefault();
                }
                onCloseSidebar?.();
            }}
            aria-current={isActive ? 'page' : undefined}
        >
            <div className="flex-shrink-0">
                {icon}
            </div>
            <AnimatePresence initial={false}>
                {!isMini && (
                    <motion.span
                        key="item-text"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 whitespace-nowrap font-semibold"
                    >
                        {text}
                    </motion.span>
                )}
            </AnimatePresence>
            {isMini && (
                <motion.div
                    key="item-tooltip"
                    className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white text-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-40 shadow-lg"
                >
                    {text}
                </motion.div>
            )}
        </Link>
    );
};

export default SidebarNavItem;