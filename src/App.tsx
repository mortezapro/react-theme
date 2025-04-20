import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { ThemeProvider } from './context/ThemeContext';
import DashboardTable from './pages/DashboardTable';

const HomePage = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Sales Overview</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Total Sales: $12,345</p>
            <p className="text-gray-600 dark:text-gray-300">This Month: $3,210</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">User Activity</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Active Users: 1,234</p>
            <p className="text-gray-600 dark:text-gray-300">New Users: 56</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Inventory Status</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">In Stock: 5,678</p>
            <p className="text-gray-600 dark:text-gray-300">Low Stock: 123</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Orders</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Order #1234 - $456</p>
            <p className="text-gray-600 dark:text-gray-300">Order #1235 - $789</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Notifications</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">New message from support</p>
            <p className="text-gray-600 dark:text-gray-300">System update available</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Analytics</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Page Views: 10,234</p>
            <p className="text-gray-600 dark:text-gray-300">Bounce Rate: 23%</p>
        </div>
    </div>
);

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/dashboard" element={<DashboardTable />} />
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;