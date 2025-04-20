import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, BarChart2, Settings, User, LogOut, Bell, Package, FileText, ChevronDown } from 'lucide-react';
import SidebarNavItem from './SidebarNavItem';
import useMediaQuery from '../../hooks/useMediaQuery';

type SidebarState = 'closed' | 'mini' | 'open';

interface SidebarProps {
    sidebarState: SidebarState;
    onCloseSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarState, onCloseSidebar }) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const isMini = sidebarState === 'mini';
    const isOpen = sidebarState === 'open';
    const shouldRenderSidebar = isDesktop || isOpen;

    const baseClasses = 'fixed top-16 h-[calc(100vh-4rem)] overflow-y-auto z-20 bg-gradient-to-b from-gray-600 to-gray-500 dark:from-gray-800 dark:to-gray-700 shadow-xl rounded-r-lg';
    let responsiveClasses = '';

    if (isDesktop) {
        responsiveClasses = `left-0 ${isOpen ? 'w-72' : 'w-20'}`;
    } else {
        responsiveClasses = isOpen ? 'left-0 w-72' : '-left-full w-72';
    }

    const transitionClasses = 'transition-all duration-500 ease-in-out';
    const overlayClasses = 'fixed inset-0 bg-black bg-opacity-60 z-10 md:hidden';

    return (
        <>
            <AnimatePresence>
                {!isDesktop && isOpen && (
                    <motion.div
                        key="sidebar-overlay-mobile"
                        className={overlayClasses}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onCloseSidebar}
                    />
                )}
            </AnimatePresence>

            {shouldRenderSidebar && (
                <motion.aside
                    className={`${baseClasses} ${responsiveClasses} ${transitionClasses}`}
                    initial={{ x: isDesktop ? 0 : '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: isDesktop ? 0 : '-100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <nav className="flex flex-col p-6 space-y-3">
                        <div className="mb-4 flex items-center space-x-2">
                            <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center ${isMini ? 'block' : 'hidden'}`}>
                                <span className="text-gray-600 font-bold">AP</span>
                            </div>
                            <h2 className={`text-xl font-bold text-white ${isMini ? 'hidden' : 'block'}`}>
                                Admin Panel
                            </h2>
                        </div>
                        <SidebarNavItem to="/" icon={<Home size={22} />} text="Dashboard" isMini={isMini} isActive={true} onCloseSidebar={onCloseSidebar} />
                        <SidebarNavItem to="/products" icon={<Package size={22} />} text="Products" isMini={isMini} isActive={false} onCloseSidebar={onCloseSidebar} />
                        <SidebarNavItem to="/orders" icon={<FileText size={22} />} text="Orders" isMini={isMini} isActive={false} onCloseSidebar={onCloseSidebar} />
                        <SidebarNavItem to="/users" icon={<User size={22} />} text="Users" isMini={isMini} isActive={false} onCloseSidebar={onCloseSidebar} />
                        <SidebarNavItem to="/notifications" icon={<Bell size={22} />} text="Notifications" isMini={isMini} isActive={false} onCloseSidebar={onCloseSidebar} />
                        <SidebarNavItem to="/analytics" icon={<BarChart2 size={22} />} text="Analytics" isMini={isMini} isActive={false} onCloseSidebar={onCloseSidebar} />
                        <SidebarNavItem to="/settings" icon={<Settings size={22} />} text="Settings" isMini={isMini} isActive={false} onCloseSidebar={onCloseSidebar} />

                        <div className={`mt-4 pt-4 border-t border-gray-400 dark:border-gray-600 ${isMini ? 'hidden' : 'block'}`}>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-white">More Options</span>
                                <ChevronDown size={18} className="text-white" />
                            </div>
                            <div className="mt-2 space-y-2 pl-4">
                                <SidebarNavItem to="/reports" icon={<FileText size={20} />} text="Reports" isMini={isMini} isActive={false} onCloseSidebar={onCloseSidebar} />
                                <SidebarNavItem to="/profile" icon={<User size={20} />} text="Profile" isMini={isMini} isActive={false} onCloseSidebar={onCloseSidebar} />
                                <SidebarNavItem to="/logout" icon={<LogOut size={20} />} text="Logout" isMini={isMini} isActive={false} onCloseSidebar={onCloseSidebar} />
                            </div>
                        </div>
                    </nav>
                </motion.aside>
            )}
        </>
    );
};

export default Sidebar;