import React from 'react';

const Checkbox = () => {
    return (
        <div>
            <div className="flex items-center me-4">
                <input id="inline-checkbox" type="checkbox" value=""
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"/>
                <label htmlFor="inline-checkbox" className="ms-2 text-sm font-medium text-gray-900">Inline 1</label>
            </div>
        </div>
    );
};

export default Checkbox;