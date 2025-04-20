import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronsLeft, ChevronsRight } from 'lucide-react';

type SidebarState = 'closed' | 'mini' | 'open';

interface SidebarToggleButtonProps {
    sidebarState: SidebarState;
    onToggle: () => void;
}

const getIcon = (state: SidebarState) => {
    switch (state) {
        case 'closed':
            return <Menu key="menu" size={20} />;
        case 'mini':
            return <ChevronsRight key="right" size={20} />;
        case 'open':
            return <ChevronsLeft key="left" size={20} />;
    }
};

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({ sidebarState, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Sidebar"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={sidebarState} // Key changes based on state for AnimatePresence
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                >
                    {getIcon(sidebarState)}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};

export default SidebarToggleButton;