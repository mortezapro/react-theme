import React from 'react';
import { Settings } from 'lucide-react';

interface SettingsButtonProps {
    onOpen: () => void;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ onOpen }) => {
    return (
        <button
            onClick={onOpen}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
            aria-label="Open Settings"
        >
            <Settings size={20} />
        </button>
    );
};

export default SettingsButton;