import React from 'react';

const DashboardTable: React.FC = () => {
    const data = [
        { id: 1, name: 'Product A', price: 29.99, stock: 100, status: 'In Stock', category: 'Electronics' },
        { id: 2, name: 'Product B', price: 49.99, stock: 20, status: 'Low Stock', category: 'Clothing' },
        { id: 3, name: 'Product C', price: 19.99, stock: 0, status: 'Out of Stock', category: 'Books' },
        { id: 4, name: 'Product D', price: 99.99, stock: 50, status: 'In Stock', category: 'Home' },
        { id: 5, name: 'Product E', price: 39.99, stock: 80, status: 'In Stock', category: 'Toys' },
    ];

    return (
        <div className="w-full h-full overflow-x-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-gray-800 dark:to-gray-700">
                <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white dark:text-gray-300 uppercase tracking-wider">
                        ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white dark:text-gray-300 uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white dark:text-gray-300 uppercase tracking-wider">
                        Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white dark:text-gray-300 uppercase tracking-wider">
                        Price
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white dark:text-gray-300 uppercase tracking-wider">
                        Stock
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white dark:text-gray-300 uppercase tracking-wider">
                        Status
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                            {item.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                            {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                            {item.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                            ${item.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                            {item.stock}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        item.status === 'In Stock'
                                            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                                            : item.status === 'Low Stock'
                                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                                                : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                                    }`}
                                >
                                    {item.status}
                                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardTable;