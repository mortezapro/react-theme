import React from 'react';
import SidebarToggleButton from '../ui/SidebarToggleButton';
import ThemeToggleButton from '../ui/ThemeToggleButton';
import SettingsButton from '../ui/SettingsButton';
import { Search, Bell, User } from 'lucide-react';

type SidebarState = 'closed' | 'mini' | 'open';

interface NavbarProps {
    sidebarState: SidebarState;
    onToggleSidebar: () => void;
    onOpenSettings: () => void;
    paddingLeftClass: string;
}

const Navbar: React.FC<NavbarProps> = ({ sidebarState, onToggleSidebar, onOpenSettings, paddingLeftClass }) => {
    return (
        <header
            className={`fixed top-0 left-0 right-0 h-20 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-gray-800 dark:to-gray-700 shadow-lg flex items-center justify-between transition-padding duration-300 z-20 w-full ${paddingLeftClass}`}
        >
            <div className="flex items-center space-x-4">
                <div className="ml-4">
                    <SidebarToggleButton sidebarState={sidebarState} onToggle={onToggleSidebar} />
                </div>
                {sidebarState === 'open' && (
                    <span className="text-xl font-bold text-white transition-opacity duration-300">
                        My Admin Dashboard
                    </span>
                )}
            </div>
            <div className="flex items-center mr-4 space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <button className="p-2 rounded-full hover:bg-orange-400 dark:hover:bg-gray-700 transition-colors duration-200">
                    <Bell size={20} className="text-white" />
                </button>
                <button className="p-2 rounded-full hover:bg-orange-400 dark:hover:bg-gray-700 transition-colors duration-200">
                    <User size={20} className="text-white" />
                </button>
                <ThemeToggleButton />
                <SettingsButton onOpen={onOpenSettings} />
            </div>
        </header>
    );
};

export default Navbar;