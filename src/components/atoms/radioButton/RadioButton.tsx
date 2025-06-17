import React from 'react';

const RadioButton = () => {
    return (
        <div>
            <div className="grid items-center me-4">
                <input id="inline-radio" type="radio" value="" name="inline-radio-group"
                       className="w-4 h-4 text-dark-khaki bg-gray-100 border-gray-300 focus:ring-dark-khaki"/>
            </div>
        </div>
    );
};

export default RadioButton;