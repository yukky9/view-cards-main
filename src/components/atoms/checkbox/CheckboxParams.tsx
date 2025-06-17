import React from 'react';

const CheckboxParams = () => {
    const options = ['Inline 1', 'Inline 2', 'Inline 3', 'Inline 4', 'Inline 5', 'Inline 6', 'Inline 7', 'Inline 7', 'Inline 7', 'Inline 7', 'Inline 7', 'Inline 7'];

    return (
        <div className="max-h-80 overflow-y-auto rounded-md">
            {options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                    <input
                        id={`checkbox-${index}`}
                        type="checkbox"
                        value={option}
                        className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                    />
                    <label htmlFor={`checkbox-${index}`} className="ms-2 text-lg font-medium text-gray-900">
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxParams;
