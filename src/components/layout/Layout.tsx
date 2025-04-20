import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SettingsPanel from '../ui/SettingsPanel';
import useMediaQuery from '../../hooks/useMediaQuery';

type SidebarState = 'closed' | 'mini' | 'open';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const [sidebarState, setSidebarState] = useState<SidebarState>(
        isDesktop ? 'open' : 'closed'
    );

    useEffect(() => {
        if (isDesktop && sidebarState === 'closed') {
            setSidebarState('open');
        }
        if (!isDesktop && sidebarState === 'mini') {
            setSidebarState('closed');
        }
    }, [isDesktop, sidebarState]);

    const toggleSidebar = () => {
        setSidebarState((prevState) => {
            if (isDesktop) {
                return prevState === 'open' ? 'mini' : 'open';
            } else {
                return prevState === 'open' ? 'closed' : 'open';
            }
        });
    };

    const closeSidebar = () => {
        setSidebarState('closed');
    };

    const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
    const openSettings = () => setIsSettingsPanelOpen(true);
    const closeSettings = () => setIsSettingsPanelOpen(false);

    const mainContentMarginLeftClass = isDesktop
        ? sidebarState === 'open'
            ? 'ml-72'
            : sidebarState === 'mini'
                ? 'ml-20'
                : 'ml-0'
        : 'ml-0';

    const navbarPaddingLeftClass = isDesktop
        ? sidebarState === 'open'
            ? 'pl-72'
            : sidebarState === 'mini'
                ? 'pl-20'
                : 'pl-0'
        : 'pl-0';

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 dark:from-gray-900 dark:to-gray-800">
            <Sidebar sidebarState={sidebarState} onCloseSidebar={closeSidebar} />
            <Navbar
                sidebarState={sidebarState}
                onToggleSidebar={toggleSidebar}
                onOpenSettings={openSettings}
                paddingLeftClass={navbarPaddingLeftClass}
            />
            <main
                className={`overflow-y-auto pt-20 p-6 transition-all duration-300 ${mainContentMarginLeftClass} text-base h-[calc(100vh-5rem)] w-full box-border`}
            >
                {children}
            </main>
            <SettingsPanel isOpen={isSettingsPanelOpen} onClose={closeSettings} />
        </div>
    );
};

export default Layout;